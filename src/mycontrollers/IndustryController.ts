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
import { IndustryService } from '../myservices/IndustryService';
import { IndustrySearchVo, IndustryVo } from '../myvo/IndustryVo';

@Controller('/industry')
export class IndustryController {
  private industryService = new IndustryService();

  @Post('/createIndustry')
  async createIndustry(@Body() IndustryVo: IndustryVo) {
    return this.industryService.createIndustry(IndustryVo);
  }

  @Put('/updateIndustry/:Id')
  async updateaIndustry(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() IndustryVo: IndustryVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.industryService.updateaIndustry(Id, userId, IndustryVo);
  }

  @Get('/removeIndustry/:Id')
  async removeIndustry(@Param('Id') Id: string) {
    return this.industryService.removeIndustry([Id]);
  }

  @Get('/getIndustryById/:Id')
  async getIndustryById(@Param('Id') Id: string) {
    return this.industryService.getIndustryById(Id);
  }

  @Get('/getIndustry')
  async getIndustry(@Query() search: IndustrySearchVo) {
    return this.industryService.getIndustry(search);
  }

  @Get('/getIndustryAll')
  async getIndustryAll(@Query() search: IndustrySearchVo) {
    return this.industryService.getIndustryAll(search);
  }

  @Get('/getIndustryAllView')
  async getIndustryAllView() {
    return this.industryService.getIndustryAllView();
  }
}
