import { ForbiddenException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, RegisterDto } from './dto';
import * as argon from 'argon2'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  
    constructor(private prismaService: PrismaService, private jwtService: JwtService) {}

    async login(dto: LoginDto) {
        const user = await this.prismaService.user.findUnique({
            where: {
                email: dto.email
            }
        })

        if(!user)
            throw new HttpException('User not found!', HttpStatus.BAD_REQUEST)

        const isPasswordMatches = await argon.verify(user.password, dto.password)
        if(!isPasswordMatches) {
            throw new ForbiddenException('Email or password is wrong!')
        }
       
        const token = await this.generateToken(user.id, user.role)
        // create refresh token
        return {
            id: user.id,
            email: user.email,
            fullname: user.fullname,
            token: token
        }
    }

    async register(dto: RegisterDto) {
        const hash = await argon.hash(dto.password) 
        const user = await this.prismaService.user.create({
            data: {
                email: dto.email,
                fullname: dto.fullname,
                phoneNumber: dto.fullname,
                password: hash
            }, 
            select: {
                id: true,
                fullname: true,
                email: true,
                role: true
            }
        })
        const token = await this.generateToken(user.id, user.role)
        return {...user, token}
    }


    async generateToken(userId: number, role: string) {
       const token = await this.jwtService.signAsync({
            sub: userId,
            role: role
        }, {
            secret: 'mysupersecretkey', 
            expiresIn: '15m'
        })

        return token

    }
}
