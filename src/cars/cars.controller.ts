import { Body, Controller, Get, Param, ParseIntPipe, Post, Patch, } from '@nestjs/common';
import { CarsService } from './cars.service';
import path from 'path';


@Controller('cars')
export class CarsController {

    constructor(private readonly carsService: CarsService) { }

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }
    @Get(':id')
    getCarById(@Param('id', ParseIntPipe) id: number) {
        return this.carsService.findeOneById(id);
    }
    @Post()
    createCar(@Body() body: any) {
        return body;
    }
    @Patch(':id')
    updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
        return body;
    }

    @Patch(':id')
    deleteCar(@Param('id', ParseIntPipe) id: number) {
        return { method: 'deleteCar', id };
    }
}

