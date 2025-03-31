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
import { ExchangeRateService } from '../myservices/ExchangeRateService';
import { ExchangeRateSearchVo, ExchangeRateVo } from '../myvo/ExchangeRateVo';

@Controller('/exchangeRate')
export class ExchangeRateController {
  private exchangeRateService = new ExchangeRateService();

  @Post('/createExchangeRate')
  async createExchangeRate(@Body() ExchangeRateVo: ExchangeRateVo) {
    return this.exchangeRateService.createExchangeRate(ExchangeRateVo);
  }

  @Put('/updateExchangeRate/:Id')
  async updateaExchangeRate(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() ExchangeRateVo: ExchangeRateVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.exchangeRateService.updateaExchangeRate(
      Id,
      userId,
      ExchangeRateVo,
    );
  }

  @Get('/removeExchangeRate/:Id')
  async removeExchangeRate(@Param('Id') Id: string) {
    return this.exchangeRateService.removeExchangeRate([Id]);
  }

  @Get('/getExchangeRateById/:Id')
  async getExchangeRateById(@Param('Id') Id: string) {
    return this.exchangeRateService.getExchangeRateById(Id);
  }

  @Get('/getExchangeRate')
  async getExchangeRate(@Query() search: ExchangeRateSearchVo) {
    return this.exchangeRateService.getExchangeRate(search);
  }

  @Get('/getExchangeRateAll')
  async getExchangeRateAll(@Query() search: ExchangeRateSearchVo) {
    return this.exchangeRateService.getExchangeRateAll(search);
  }

  @Get('/getExchangeRateAllView')
  async getExchangeRateAllView() {
    return this.exchangeRateService.getExchangeRateAllView();
  }
}
