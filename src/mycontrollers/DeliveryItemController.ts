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
import { DeliveryItemService } from '../myservices/DeliveryItemService';
import { DeliveryItemSearchVo, DeliveryItemVo } from '../myvo/DeliveryItemVo';

@Controller('/deliveryItem')
export class DeliveryItemController {
  private deliveryItemService = new DeliveryItemService();

  @Post('/createDeliveryItem')
  async createDeliveryItem(@Body() DeliveryItemVo: DeliveryItemVo) {
    return this.deliveryItemService.createDeliveryItem(DeliveryItemVo);
  }

  @Put('/updateDeliveryItem/:Id')
  async updateaDeliveryItem(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() DeliveryItemVo: DeliveryItemVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.deliveryItemService.updateaDeliveryItem(
      Id,
      userId,
      DeliveryItemVo,
    );
  }

  @Get('/removeDeliveryItem/:Id')
  async removeDeliveryItem(@Param('Id') Id: string) {
    return this.deliveryItemService.removeDeliveryItem([Id]);
  }

  @Get('/getDeliveryItemById/:Id')
  async getDeliveryItemById(@Param('Id') Id: string) {
    return this.deliveryItemService.getDeliveryItemById(Id);
  }

  @Get('/getDeliveryItem')
  async getDeliveryItem(@Query() search: DeliveryItemSearchVo) {
    return this.deliveryItemService.getDeliveryItem(search);
  }

  @Get('/getDeliveryItemAll')
  async getDeliveryItemAll(@Query() search: DeliveryItemSearchVo) {
    return this.deliveryItemService.getDeliveryItemAll(search);
  }

  @Get('/getDeliveryItemAllView')
  async getDeliveryItemAllView() {
    return this.deliveryItemService.getDeliveryItemAllView();
  }
}
