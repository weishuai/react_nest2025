import {
  Controller,
  UseInterceptors,
  Get,
  Post,
  Render,
  Body,
  UploadedFiles,
} from '@nestjs/common';
import { createWriteStream } from 'fs';
import { FilesInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
@Controller('/uploadmany')
export class UploadmanyController {
  @Post('/doAdd')
  //注意此处是FileFieldsInterceptor代表多文件的name不同的拦截器
  // @UseInterceptors(FileFieldsInterceptor([
  //     { name: 'pic1', maxCount: 1 },
  //     { name: 'pic2', maxCount: 1 }
  // ]))

  //注意此处是FilesInterceptor而上面是FileFieldsInterceptor
  @UseInterceptors(FilesInterceptor('pic')) //多个文件name属性相同的情况下
  doAdd(@Body() body, @UploadedFiles() files) {
    for (const file of files) {
      const cws = createWriteStream(
        join(
          __dirname,
          '../../public/upload/',
          `${Date.now()}---${file.originalname}`,
        ),
      );
      cws.write(file.buffer);
    }
    return '上传多个文件成功';
  }
}
