import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { HouseService } from './house.service';
import { HouseDto } from './dto/house.dto';
import { Role } from 'src/auth/decorators/role';
import { AuthorizationGuard } from 'src/guards/authorization.guard';
import { RoleGuard } from 'src/guards/role.guard';

@Controller('house')
export class HouseController {

  constructor(private readonly houseService: HouseService) { }

  @Get('getall')
  getallHouse() {
    return this.houseService.getallHouse()
  }

  @Get('getById/:id')
  getByIdHouse(@Param('id') id: number) {
    return this.houseService.getByIdHouse(id)
  }

  @Get('search')
  searchHouse(@Query('text') input: string) {
    return this.houseService.searchHouse(input)
  }

  @Role('USER', 'ADMIN')
  @UseGuards(AuthorizationGuard, RoleGuard)
  @Post('add')
  addHouse(@Body() dto: HouseDto) {
    return this.houseService.addHouse(dto)
  }
}