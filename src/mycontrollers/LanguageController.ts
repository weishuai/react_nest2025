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
import { LanguageService } from '../myservices/LanguageService';
import { LanguageSearchVo, LanguageVo } from '../myvo/LanguageVo';

@Controller('/language')
export class LanguageController {
  private languageService = new LanguageService();

  @Post('/createLanguage')
  async createLanguage(@Body() LanguageVo: LanguageVo) {
    return this.languageService.createLanguage(LanguageVo);
  }

  @Put('/updateLanguage/:Id')
  async updateaLanguage(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() LanguageVo: LanguageVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.languageService.updateaLanguage(Id, userId, LanguageVo);
  }

  @Get('/removeLanguage/:Id')
  async removeLanguage(@Param('Id') Id: string) {
    return this.languageService.removeLanguage([Id]);
  }

  @Get('/getLanguageById/:Id')
  async getLanguageById(@Param('Id') Id: string) {
    return this.languageService.getLanguageById(Id);
  }

  @Get('/getLanguage')
  async getLanguage(@Query() search: LanguageSearchVo) {
    return this.languageService.getLanguage(search);
  }

  @Get('/getLanguageAll')
  async getLanguageAll(@Query() search: LanguageSearchVo) {
    return this.languageService.getLanguageAll(search);
  }

  @Get('/getLanguageAllView')
  async getLanguageAllView() {
    return this.languageService.getLanguageAllView();
  }
}
