import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Query,
  Headers,
} from '@nestjs/common';
import _ from 'lodash';
import { TranslateService } from '../myservices/TranslateService';
import { TranslateSearchVo, TranslateVo } from '../myvo/TranslateVo';

@Controller('/translate')
export class TranslateController {
  private translateService = new TranslateService();

  @Post('/createTranslate')
  async createTranslate(@Body() TranslateVo: TranslateVo) {
    return this.translateService.createTranslate(TranslateVo);
  }

  @Put('/updateTranslate/:Id')
  async updateaTranslate(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() TranslateVo: TranslateVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.translateService.updateaTranslate(Id, userId, TranslateVo);
  }

  @Get('/removeTranslate/:Id')
  async removeTranslate(@Param('Id') Id: string) {
    return this.translateService.removeTranslate([Id]);
  }

  @Get('/getTranslateById/:Id')
  async getTranslateById(@Param('Id') Id: string) {
    return this.translateService.getTranslateById(Id);
  }

  @Get('/getTranslate')
  async getTranslate(@Query() search: TranslateSearchVo) {
    return this.translateService.getTranslate(search);
  }

  @Get('/getTranslateAll')
  async getTranslateAll(@Query() search: TranslateSearchVo) {
    return this.translateService.getTranslateAll(search);
  }

  @Get('/getTranslateAllView')
  async getTranslateAllView() {
    return this.translateService.getTranslateAllView();
  }
}
