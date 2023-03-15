import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ObjectId } from 'mongoose';

@Controller('api/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'mainImg', maxCount: 1 },
      { name: 'images' },
    ]),
  )
  create(@Body() createItemDto: CreateItemDto, @UploadedFiles() files) {
    const { mainImg, images } = files;
    return this.itemsService.create(createItemDto, mainImg[0], images);
  }

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    return this.itemsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.update(+id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemsService.remove(+id);
  }
}
