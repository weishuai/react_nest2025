import {
  Controller,
  Get,
  Render,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
  Param,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { createWriteStream } from 'fs';
import { join } from 'path';
@Controller('/upload')
export class uploadController {
  @Post('/doAdd/:fhname')
  @UseInterceptors(FileInterceptor('pic')) //pic对应 <input type="file" name="pic" id="">
  doAdd(@Param('fhname') fhname: string, @UploadedFile() file) {
     ///console.log(fhname);
     let originalname=file.originalname;
     console.log("originalname"+originalname);
     fhname=fhname+"."+originalname.split(".")[1];
     console.log("fhname:"+fhname);
     //`${Date.now()}---${file.originalname}`,
    const cws = createWriteStream(
      join(
        __dirname,
        '../../public/upload/',
        `${fhname}`,
      ),
    );
    cws.write(file.buffer);
    return '上传图片成功';
  }
}
