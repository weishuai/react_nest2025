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
import { QuotationCommentsService } from '../myservices/QuotationCommentsService';
import {
  QuotationCommentsSearchVo,
  QuotationCommentsVo,
} from '../myvo/QuotationCommentsVo';

@Controller('/quotationComments')
export class QuotationCommentsController {
  private quotationCommentsService = new QuotationCommentsService();

  @Post('/createQuotationComments')
  async createQuotationComments(
    @Body() quotationCommentsVo: QuotationCommentsVo,
  ) {
    return this.quotationCommentsService.createQuotationComments(
      quotationCommentsVo,
    );
  }

  @Put('/updateQuotationComments/:Id')
  async updateaQuotationComments(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() QuotationCommentsVo: QuotationCommentsVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.quotationCommentsService.updateaQuotationComments(
      Id,
      userId,
      QuotationCommentsVo,
    );
  }

  @Get('/removeQuotationComments/:Id')
  async removeQuotationComments(@Param('Id') Id: string) {
    return this.quotationCommentsService.removeQuotationComments([Id]);
  }

  @Get('/getQuotationCommentsById/:Id')
  async getQuotationCommentsById(@Param('Id') Id: string) {
    return this.quotationCommentsService.getQuotationCommentsById(Id);
  }

  @Get('/getQuotationComments')
  async getQuotationComments(@Query() search: QuotationCommentsSearchVo) {
    return this.quotationCommentsService.getQuotationComments(search);
  }

  @Get('/getQuotationCommentsAll')
  async getQuotationCommentsAll(@Query() search: QuotationCommentsSearchVo) {
    return this.quotationCommentsService.getQuotationCommentsAll(search);
  }

  @Get('/getQuotationCommentsAllView')
  async getQuotationCommentsAllView() {
    return this.quotationCommentsService.getQuotationCommentsAllView();
  }
}
