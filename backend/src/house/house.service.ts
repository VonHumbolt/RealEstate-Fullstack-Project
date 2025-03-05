import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HouseDto } from './dto/house.dto';

@Injectable()
export class HouseService {

    constructor(private prismaService: PrismaService) { }

    async getallHouse() {
        return await this.prismaService.house.findMany({
            select: {
                id: true,
                title: true,
                price: true,
                location: true,
                roomCount: true,
                bathCount: true,
                totalArea: true,
                type: true,
                image: true,
                ownerId: true,
                owner: {
                    select: {
                        id: true,
                        fullname: true,
                        email: true,
                        phoneNumber: true
                    }
                }
            }
        }
        )
    }

    async getByIdHouse(id: number) {
        return await this.prismaService.house.findUnique({
            where: {
                id: Number(id)
            },
            select: {
                id: true,
                title: true,
                price: true,
                location: true,
                roomCount: true,
                bathCount: true,
                totalArea: true,
                type: true,
                image: true,
                ownerId: true,
                owner: {
                    select: {
                        id: true,
                        fullname: true,
                        email: true,
                        phoneNumber: true
                    }
                }
            }
        })
    }

    async searchHouse(input: string) {
        return await this.prismaService.house.findMany({
            where: {
                title: {
                    search: input
                },
                location: {
                    search: input
                }
            },
            select: {
                title: true,
                price: true,
                location: true,
                roomCount: true,
                bathCount: true,
                totalArea: true,
                type: true,
                image: true,
                ownerId: true,
                owner: {
                    select: {
                        id: true,
                        fullname: true,
                        email: true,
                        phoneNumber: true
                    }
                }
            }
        })
    }

    async addHouse(dto: HouseDto) {
        return await this.prismaService.house.create({
            data: {
                title: dto.title,
                price: dto.price,
                image: [dto.image],
                location: dto.location,
                bathCount: dto.bathCount,
                roomCount: dto.roomCount,
                totalArea: dto.totalArea,
                ownerId: dto.ownerId,
            },
        })
    }

}
