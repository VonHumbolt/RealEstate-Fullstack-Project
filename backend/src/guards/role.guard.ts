import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { ROLE_KEY } from "src/auth/decorators/role";

@Injectable()
export class RoleGuard implements CanActivate {

    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        
        const requiredRole = this.reflector.getAllAndOverride(ROLE_KEY, [
            context.getHandler(),
            context.getClass()
        ]) as string[]
        
        if(!requiredRole)
            return true
        
        const {user} = context.switchToHttp().getRequest()
        console.log(requiredRole.some(role => role === user.role))
        return requiredRole.some(role => role === user.role)
    }

}