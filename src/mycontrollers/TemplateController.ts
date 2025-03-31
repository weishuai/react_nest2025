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
import { TemplateService } from '../myservices/TemplateService';
import { TemplateSearchVo, TemplateVo } from '../myvo/TemplateVo';

@Controller('/template')
export class TemplateController {
  private TemplateService = new TemplateService();

  @Post('/createTemplate')
  async createTemplate(@Body() TemplateVo: TemplateVo) {
    return this.TemplateService.createTemplate(TemplateVo);
  }

  @Put('/updateTemplate/:Id')
  async updateaTemplate(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() TemplateVo: TemplateVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.TemplateService.updateaTemplate(Id, userId, TemplateVo);
  }

  @Get('/removeTemplate/:Id')
  async removeTemplate(@Param('Id') Id: string) {
    return this.TemplateService.removeTemplate([Id]);
  }

  @Get('/getTemplateById/:Id')
  async getTemplateById(@Param('Id') Id: string) {
    return this.TemplateService.getTemplateById(Id);
  }

  @Get('/getTemplate')
  async getTemplate(@Query() search: TemplateSearchVo) {
    return this.TemplateService.getTemplate(search);
  }

  @Get('/getTemplateAll')
  async getTemplateAll(@Query() search: TemplateSearchVo) {
    return this.TemplateService.getTemplateAll(search);
  }

  @Get('/getTemplateAllView')
  async getTemplateAllView() {
    return this.TemplateService.getTemplateAllView();
  }
}
