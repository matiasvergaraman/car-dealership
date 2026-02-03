import { Body, Controller, Get, Param, ParseIntPipe, Post, Patch, Delete, ParseUUIDPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import path from 'path';


@Controller('cars')
export class CarsController {

    constructor(private readonly carsService: CarsService) { }

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }
    @Get(':id')
    getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
        return this.carsService.findeOneById(id);
    }
    @Post()
    createCar(@Body() createCarDto: CreateCarDto) {
        return createCarDto;
    }
    @Patch(':id')
    updateCar(@Param('id') id: string, @Body() body: any) {
        return body;
    }

    @Delete(':id')
    deleteCar(@Param('id') id: string) {
        return { method: 'deleteCar', id };
    }
}

