import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class RegisterDto {
    @IsNotEmpty()
    @IsString()
    fullname: string

    @IsEmail()
    email: string

    @IsNotEmpty()
    password: string

    @IsNotEmpty()
    phoneNumber: string
}