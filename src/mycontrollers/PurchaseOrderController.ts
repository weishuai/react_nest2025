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
import { PurchaseOrderService } from '../myservices/PurchaseOrderService';
import {
  PurchaseOrderSearchVo,
  PurchaseOrderVo,
} from '../myvo/PurchaseOrderVo';

@Controller('/purchaseOrder')
export class PurchaseOrderController {
  private purchaseOrderService = new PurchaseOrderService();

  @Post('/createPurchaseOrder')
  async createPurchaseOrder(@Body() PurchaseOrderVo: PurchaseOrderVo) {
    return this.purchaseOrderService.createPurchaseOrder(PurchaseOrderVo);
  }

  @Put('/updatePurchaseOrder/:Id')
  async updateaPurchaseOrder(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() PurchaseOrderVo: PurchaseOrderVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.purchaseOrderService.updateaPurchaseOrder(
      Id,
      userId,
      PurchaseOrderVo,
    );
  }

  @Get('/removePurchaseOrder/:Id')
  async removePurchaseOrder(@Param('Id') Id: string) {
    return this.purchaseOrderService.removePurchaseOrder([Id]);
  }

  @Get('/getPurchaseOrderById/:Id')
  async getPurchaseOrderById(@Param('Id') Id: string) {
    return this.purchaseOrderService.getPurchaseOrderById(Id);
  }

  @Get('/getPurchaseOrder')
  async getPurchaseOrder(
    @Headers('userToken') userToken: string,
    @Query() search: PurchaseOrderSearchVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }

    return this.purchaseOrderService.getPurchaseOrder(userId, search);
  }

  @Get('/getPurchaseOrderAll')
  async getPurchaseOrderAll(@Query() search: PurchaseOrderSearchVo) {
    return this.purchaseOrderService.getPurchaseOrderAll(search);
  }

  @Get('/getPurchaseOrderAllView')
  async getPurchaseOrderAllView() {
    return this.purchaseOrderService.getPurchaseOrderAllView();
  }
}
