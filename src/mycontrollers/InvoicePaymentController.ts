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
import { InvoicePaymentService } from '../myservices/InvoicePaymentService';
import {
  InvoicePaymentSearchVo,
  InvoicePaymentVo,
} from '../myvo/InvoicePaymentVo';

@Controller('/invoicePayment')
export class InvoicePaymentController {
  private invoicePaymentService = new InvoicePaymentService();

  @Post('/createInvoicePayment')
  async createInvoicePayment(@Body() InvoicePaymentVo: InvoicePaymentVo) {
    return this.invoicePaymentService.createInvoicePayment(InvoicePaymentVo);
  }

  @Put('/updateInvoicePayment/:Id')
  async updateaInvoicePayment(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() InvoicePaymentVo: InvoicePaymentVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.invoicePaymentService.updateaInvoicePayment(
      Id,
      userId,
      InvoicePaymentVo,
    );
  }

  @Get('/removeInvoicePayment/:Id')
  async removeInvoicePayment(@Param('Id') Id: string) {
    return this.invoicePaymentService.removeInvoicePayment([Id]);
  }

  @Get('/getInvoicePaymentById/:Id')
  async getInvoicePaymentById(@Param('Id') Id: string) {
    return this.invoicePaymentService.getInvoicePaymentById(Id);
  }

  @Get('/getInvoicePayment')
  async getInvoicePayment(@Query() search: InvoicePaymentSearchVo) {
    return this.invoicePaymentService.getInvoicePayment(search);
  }

  @Get('/getInvoicePaymentAll')
  async getInvoicePaymentAll(@Query() search: InvoicePaymentSearchVo) {
    return this.invoicePaymentService.getInvoicePaymentAll(search);
  }

  @Get('/getInvoicePaymentAllView')
  async getInvoicePaymentAllView() {
    return this.invoicePaymentService.getInvoicePaymentAllView();
  }
}
