import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HouseDto } from './dto/house.dto';

@Injectable()
export class HouseService {

    constructor(private prismaService: PrismaService) {}

    async getallHouse() {
        return await this.prismaService.house.findMany({})
    }

    async getByIdHouse(id: number) {
        return await this.prismaService.house.findUnique({
            where: {
                id: Number(id)
            }
        }) 
    }

    // hem title hem de location icerisinde ara!
    async searchHouse(input: string) {
        return await this.prismaService.house.findMany({
            where: {
                title: input
            }
        })
    }

    async addHouse(dto: HouseDto) {
        return await this.prismaService.house.create({
            data: {
                title: dto.title,
                price: dto.price,
                location: dto.location,
                bathCount: dto.bathCount,
                roomCount: dto.roomCount,
                totalArea: dto.totalArea,
                ownerId: dto.ownerId
            }
        })
     }

}
