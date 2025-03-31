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
import { CurrencyService } from '../myservices/CurrencyService';
import { CurrencySearchVo, CurrencyVo } from '../myvo/CurrencyVo';

@Controller('/currency')
export class CurrencyController {
  private currencyService = new CurrencyService();

  @Post('/createCurrency')
  async createCurrency(@Body() CurrencyVo: CurrencyVo) {
    return this.currencyService.createCurrency(CurrencyVo);
  }

  @Put('/updateCurrency/:Id')
  async updateaCurrency(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() CurrencyVo: CurrencyVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.currencyService.updateaCurrency(Id, userId, CurrencyVo);
  }

  @Get('/removeCurrency/:Id')
  async removeCurrency(@Param('Id') Id: string) {
    return this.currencyService.removeCurrency([Id]);
  }

  @Get('/getCurrencyById/:Id')
  async getCurrencyById(@Param('Id') Id: string) {
    return this.currencyService.getCurrencyById(Id);
  }

  @Get('/getCurrency')
  async getCurrency(@Query() search: CurrencySearchVo) {
    return this.currencyService.getCurrency(search);
  }

  @Get('/getCurrencyAll')
  async getCurrencyAll(@Query() search: CurrencySearchVo) {
    return this.currencyService.getCurrencyAll(search);
  }

  @Get('/getCurrencyAllView')
  async getCurrencyAllView() {
    return this.currencyService.getCurrencyAllView();
  }
}
