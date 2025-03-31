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
import { TermsService } from '../myservices/TermsService';
import { TermsSearchVo, TermsVo } from '../myvo/TermsVo';

@Controller('/terms')
export class TermsController {
  private termsService = new TermsService();

  @Post('/createTerms')
  async createTerms(@Body() TermsVo: TermsVo) {
    return this.termsService.createTerms(TermsVo);
  }

  @Put('/updateTerms/:Id')
  async updateaTerms(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() TermsVo: TermsVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.termsService.updateaTerms(Id, userId, TermsVo);
  }

  @Get('/removeTerms/:Id')
  async removeTerms(@Param('Id') Id: string) {
    return this.termsService.removeTerms([Id]);
  }

  @Get('/getTermsById/:Id')
  async getTermsById(@Param('Id') Id: string) {
    return this.termsService.getTermsById(Id);
  }

  @Get('/getTerms')
  async getTerms(@Query() search: TermsSearchVo) {
    return this.termsService.getTerms(search);
  }

  @Get('/getTermsAll')
  async getTermsAll(@Query() search: TermsSearchVo) {
    return this.termsService.getTermsAll(search);
  }

  @Get('/getTermsAllView')
  async getTermsAllView() {
    return this.termsService.getTermsAllView();
  }
}
