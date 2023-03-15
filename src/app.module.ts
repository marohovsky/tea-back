import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { FileModule } from './file/file.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    FileModule,
    ItemsModule,
  ],
})
export class AppModule {}
