import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Item, ItemDocument } from './shemas/item.shema';
import { FileService, FileType } from 'src/file/file.service';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Item.name) private itemModel: Model<ItemDocument>,
    private fileService: FileService,
  ) {}

  async create(createItemDto: CreateItemDto, mainImg, images) {
    const mainImgPath = this.fileService.createFile(FileType.IMAGE, mainImg);
    let imagesPath = [];
    if (images) {
      imagesPath = this.fileService.createFiles(FileType.IMAGE, images);
    }
    const item = await this.itemModel.create({
      ...createItemDto,
      mainImg: mainImgPath,
      images: imagesPath,
    });
    return item;
  }

  async findAll() {
    const items = await this.itemModel.find();
    return items;
  }

  async findOne(id: ObjectId) {
    const item = await this.itemModel.findOne({ _id: id });
    return item;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
