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
import { DeliveryOrderService } from '../myservices/DeliveryOrderService';
import {
  DeliveryOrderSearchVo,
  DeliveryOrderVo,
} from '../myvo/DeliveryOrderVo';

@Controller('/deliveryOrder')
export class DeliveryOrderController {
  private deliveryOrderService = new DeliveryOrderService();

  @Post('/createDeliveryOrder')
  async createDeliveryOrder(@Body() DeliveryOrderVo: DeliveryOrderVo) {
    return this.deliveryOrderService.createDeliveryOrder(DeliveryOrderVo);
  }

  @Put('/updateDeliveryOrder/:Id')
  async updateaDeliveryOrder(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() DeliveryOrderVo: DeliveryOrderVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.deliveryOrderService.updateaDeliveryOrder(
      Id,
      userId,
      DeliveryOrderVo,
    );
  }

  @Get('/removeDeliveryOrder/:Id')
  async removeDeliveryOrder(@Param('Id') Id: string) {
    return this.deliveryOrderService.removeDeliveryOrder([Id]);
  }

  @Get('/getDeliveryOrderById/:Id')
  async getDeliveryOrderById(@Param('Id') Id: string) {
    return this.deliveryOrderService.getDeliveryOrderById(Id);
  }

  @Get('/getDeliveryOrder')
  async getDeliveryOrder(
    @Headers('userToken') userToken: string,
    @Query() search: DeliveryOrderSearchVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.deliveryOrderService.getDeliveryOrder(userId, search);
  }

  @Get('/getDeliveryOrderAll')
  async getDeliveryOrderAll(@Query() search: DeliveryOrderSearchVo) {
    return this.deliveryOrderService.getDeliveryOrderAll(search);
  }

  @Get('/getDeliveryOrderAllView')
  async getDeliveryOrderAllView() {
    return this.deliveryOrderService.getDeliveryOrderAllView();
  }
}
