import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { HouseModule } from './house/house.module';

@Module({
  imports: [AuthModule, PrismaModule, HouseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
