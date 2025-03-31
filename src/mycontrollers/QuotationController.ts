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
import { QuotationService } from '../myservices/QuotationService';
import {
  FHQuotationSearchVo,
  QuotationSearchVo,
  QuotationVo,
} from '../myvo/QuotationVo';

@Controller('/quotation')
export class QuotationController {
  private quotationService = new QuotationService();

  @Post('/createQuotation')
  async createQuotation(@Body() QuotationVo: QuotationVo) {
    return this.quotationService.createQuotation(QuotationVo);
  }

  @Put('/updateQuotation/:Id')
  async updateaQuotation(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() QuotationVo: QuotationVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.quotationService.updateaQuotation(Id, userId, QuotationVo);
  }

  @Get('/removeQuotation/:Id')
  async removeQuotation(@Param('Id') Id: string) {
    return this.quotationService.removeQuotation([Id]);
  }

  @Get('/getQuotationById/:Id')
  async getQuotationById(@Param('Id') Id: string) {
    return this.quotationService.getQuotationById(Id);
  }

  @Get('/getQuotation')
  async getQuotation(
    @Headers('userToken') userToken: string,
    @Query() search: QuotationSearchVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }

    return this.quotationService.getQuotation(userId, search);
  }

  @Get('/getQuotationSQL')
  async getQuotationSQL(
    @Headers('userToken') userToken: string,
    @Query() search: FHQuotationSearchVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }

    return this.quotationService.getQuotationSQL(userId, search);
  }

  @Get('/getquotationSQLList')
  async getquotationSQLList(
    @Headers('userToken') userToken: string,
    @Query() search: QuotationSearchVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }

    return this.quotationService.getquotationSQLList(userId, search);
  }

  @Get('/getQuotationAll')
  async getQuotationAll(@Query() search: QuotationSearchVo) {
    return this.quotationService.getQuotationAll(search);
  }

  @Get('/getQuotationAllView')
  async getQuotationAllView() {
    return this.quotationService.getQuotationAllView();
  }
}
