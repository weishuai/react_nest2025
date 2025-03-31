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
import { QuotationItemService } from '../myservices/QuotationItemService';
import {
  QuotationItemSearchVo,
  QuotationItemVo,
} from '../myvo/QuotationItemVo';

@Controller('/quotationItem')
export class QuotationItemController {
  private quotationItemService = new QuotationItemService();

  @Post('/createQuotationItem')
  async createQuotationItem(@Body() QuotationItemVo: QuotationItemVo) {
    return this.quotationItemService.createQuotationItem(QuotationItemVo);
  }

  @Put('/updateQuotationItem/:Id')
  async updateaQuotationItem(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() QuotationItemVo: QuotationItemVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.quotationItemService.updateaQuotationItem(
      Id,
      userId,
      QuotationItemVo,
    );
  }

  @Get('/removeQuotationItem/:Id')
  async removeQuotationItem(@Param('Id') Id: string) {
    return this.quotationItemService.removeQuotationItem([Id]);
  }

  @Get('/getQuotationItemById/:Id')
  async getQuotationItemById(@Param('Id') Id: string) {
    return this.quotationItemService.getQuotationItemById(Id);
  }

  @Get('/getQuotationItemsAllByMid/:mid')
  async getQuotationItemsAllByMid(@Param('mid') mid: string) {
    return this.quotationItemService.getQuotationItemsAllByMid(mid);
  }

  @Get('/getQuotationItem')
  async getQuotationItem(@Query() search: QuotationItemSearchVo) {
    return this.quotationItemService.getQuotationItem(search);
  }

  @Get('/getQuotationItemAll')
  async getQuotationItemAll(@Query() search: QuotationItemSearchVo) {
    return this.quotationItemService.getQuotationItemAll(search);
  }

  @Get('/getQuotationItemAllView')
  async getQuotationItemAllView() {
    return this.quotationItemService.getQuotationItemAllView();
  }
}
