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
import { TaxesService } from '../myservices/TaxesService';
import { TaxesSearchVo, TaxesVo } from '../myvo/TaxesVo';

@Controller('/taxes')
export class TaxesController {
  private taxesService = new TaxesService();

  @Post('/createTaxes')
  async createTaxes(@Body() TaxesVo: TaxesVo) {
    return this.taxesService.createTaxes(TaxesVo);
  }

  @Put('/updateTaxes/:Id')
  async updateaTaxes(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() TaxesVo: TaxesVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.taxesService.updateaTaxes(Id, userId, TaxesVo);
  }

  @Get('/removeTaxes/:Id')
  async removeTaxes(@Param('Id') Id: string) {
    return this.taxesService.removeTaxes([Id]);
  }

  @Get('/getTaxesById/:Id')
  async getTaxesById(@Param('Id') Id: string) {
    return this.taxesService.getTaxesById(Id);
  }

  @Get('/getTaxes')
  async getTaxes(@Query() search: TaxesSearchVo) {
    return this.taxesService.getTaxes(search);
  }

  @Get('/getTaxesAll')
  async getTaxesAll(@Query() search: TaxesSearchVo) {
    return this.taxesService.getTaxesAll(search);
  }

  @Get('/getTaxesAllView')
  async getTaxesAllView() {
    return this.taxesService.getTaxesAllView();
  }
}
