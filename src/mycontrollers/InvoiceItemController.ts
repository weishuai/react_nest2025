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
import { InvoiceItemService } from '../myservices/InvoiceItemService';
import { InvoiceItemSearchVo, InvoiceItemVo } from '../myvo/InvoiceItemVo';

@Controller('/invoiceItem')
export class InvoiceItemController {
  private invoiceItemService = new InvoiceItemService();

  @Post('/createInvoiceItem')
  async createInvoiceItem(@Body() InvoiceItemVo: InvoiceItemVo) {
    return this.invoiceItemService.createInvoiceItem(InvoiceItemVo);
  }

  @Put('/updateInvoiceItem/:Id')
  async updateaInvoiceItem(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() InvoiceItemVo: InvoiceItemVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.invoiceItemService.updateaInvoiceItem(
      Id,
      userId,
      InvoiceItemVo,
    );
  }

  @Get('/removeInvoiceItem/:Id')
  async removeInvoiceItem(@Param('Id') Id: string) {
    return this.invoiceItemService.removeInvoiceItem([Id]);
  }

  @Get('/removeToInvoiceItem/:Id')
  async removeToInvoiceItem(@Param('Id') Id: string) {
    return this.invoiceItemService.removeToInvoiceItem(Id);
  }

  @Get('/getInvoiceItemById/:Id')
  async getInvoiceItemById(@Param('Id') Id: string) {
    return this.invoiceItemService.getInvoiceItemById(Id);
  }

  @Get('/getInvoiceItem')
  async getInvoiceItem(@Query() search: InvoiceItemSearchVo) {
    return this.invoiceItemService.getInvoiceItem(search);
  }

  @Get('/getInvoiceItemAll')
  async getInvoiceItemAll(@Query() search: InvoiceItemSearchVo) {
    return this.invoiceItemService.getInvoiceItemAll(search);
  }

  @Get('/getInvoiceItemAllView')
  async getInvoiceItemAllView() {
    return this.invoiceItemService.getInvoiceItemAllView();
  }
}
