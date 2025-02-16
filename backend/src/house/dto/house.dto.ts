import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class HouseDto {
    @IsNotEmpty()
    @IsString()
    title: string

    @IsNotEmpty()
    @IsNumber()
    price: number

    @IsNotEmpty()
    @IsString()
    type: string

    @IsNotEmpty()
    @IsString()
    location: string

    @IsNotEmpty()
    @IsNumber()
    roomCount: number

    @IsNotEmpty()
    @IsNumber()
    bathCount: number

    @IsNotEmpty()
    @IsNumber()
    totalArea: number

    image: String

    @IsNotEmpty()
    ownerId: number
}