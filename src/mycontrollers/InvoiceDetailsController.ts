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
import { InvoiceDetailsService } from '../myservices/InvoiceDetailsService';
import {
  InvoiceDetailsSearchVo,
  InvoiceDetailsVo,
} from '../myvo/InvoiceDetailsVo';

@Controller('/invoiceDetails')
export class InvoiceDetailsController {
  private invoiceDetailsService = new InvoiceDetailsService();

  @Post('/createInvoiceDetails')
  async createInvoiceDetails(@Body() InvoiceDetailsVo: InvoiceDetailsVo) {
    return this.invoiceDetailsService.createInvoiceDetails(InvoiceDetailsVo);
  }

  @Put('/updateInvoiceDetails/:Id')
  async updateaInvoiceDetails(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() InvoiceDetailsVo: InvoiceDetailsVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.invoiceDetailsService.updateaInvoiceDetails(
      Id,
      userId,
      InvoiceDetailsVo,
    );
  }

  @Get('/removeInvoiceDetails/:Id')
  async removeInvoiceDetails(@Param('Id') Id: string) {
    return this.invoiceDetailsService.removeInvoiceDetails([Id]);
  }

  @Get('/getInvoiceDetailsById/:Id')
  async getInvoiceDetailsById(@Param('Id') Id: string) {
    return this.invoiceDetailsService.getInvoiceDetailsById(Id);
  }

  @Get('/getInvoiceDetails')
  async getInvoiceDetails(
    @Headers('userToken') userToken: string,
    @Query() search: InvoiceDetailsSearchVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.invoiceDetailsService.getInvoiceDetails(userId, search);
  }

  @Get('/getInvoiceDetailsAll')
  async getInvoiceDetailsAll( @Query() search: InvoiceDetailsSearchVo) {
    return this.invoiceDetailsService.getInvoiceDetailsAll(search);
  }

  @Get('/getInvoiceDetailsAllView')
  async getInvoiceDetailsAllView() {
    return this.invoiceDetailsService.getInvoiceDetailsAllView();
  }
}
