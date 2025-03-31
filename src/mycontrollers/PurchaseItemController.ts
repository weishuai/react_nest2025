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
import { PurchaseItemService } from '../myservices/PurchaseItemService';
import { PurchaseItemSearchVo, PurchaseItemVo } from '../myvo/PurchaseItemVo';

@Controller('/purchaseItem')
export class PurchaseItemController {
  private purchaseItemService = new PurchaseItemService();

  @Post('/createPurchaseItem')
  async createPurchaseItem(@Body() PurchaseItemVo: PurchaseItemVo) {
    return this.purchaseItemService.createPurchaseItem(PurchaseItemVo);
  }

  @Put('/updatePurchaseItem/:Id')
  async updateaPurchaseItem(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() PurchaseItemVo: PurchaseItemVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.purchaseItemService.updateaPurchaseItem(
      Id,
      userId,
      PurchaseItemVo,
    );
  }

  @Get('/removePurchaseItem/:Id')
  async removePurchaseItem(@Param('Id') Id: string) {
    return this.purchaseItemService.removePurchaseItem([Id]);
  }

  @Get('/getPurchaseItemById/:Id')
  async getPurchaseItemById(@Param('Id') Id: string) {
    return this.purchaseItemService.getPurchaseItemById(Id);
  }

  @Get('/getPurchaseItem')
  async getPurchaseItem(@Query() search: PurchaseItemSearchVo) {
    return this.purchaseItemService.getPurchaseItem(search);
  }

  @Get('/getPurchaseItemAll')
  async getPurchaseItemAll(@Query() search: PurchaseItemSearchVo) {
    return this.purchaseItemService.getPurchaseItemAll(search);
  }

  @Get('/getPurchaseItemAllView')
  async getPurchaseItemAllView() {
    return this.purchaseItemService.getPurchaseItemAllView();
  }
}
