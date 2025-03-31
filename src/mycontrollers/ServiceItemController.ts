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
import { ServiceItemService } from '../myservices/ServiceItemService';
import { ServiceItemSearchVo, ServiceItemVo } from '../myvo/ServiceItemVo';

@Controller('/serviceItem')
export class ServiceItemController {
  private serviceItemService = new ServiceItemService();

  @Post('/createServiceItem')
  async createServiceItem(@Body() ServiceItemVo: ServiceItemVo) {
    return this.serviceItemService.createServiceItem(ServiceItemVo);
  }

  @Put('/updateServiceItem/:Id')
  async updateaServiceItem(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() ServiceItemVo: ServiceItemVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.serviceItemService.updateaServiceItem(
      Id,
      userId,
      ServiceItemVo,
    );
  }

  @Get('/removeServiceItem/:Id')
  async removeServiceItem(@Param('Id') Id: string) {
    return this.serviceItemService.removeServiceItem([Id]);
  }

  @Get('/getServiceItemById/:Id')
  async getServiceItemById(@Param('Id') Id: string) {
    return this.serviceItemService.getServiceItemById(Id);
  }

  @Get('/getServiceItem')
  async getServiceItem(@Query() search: ServiceItemSearchVo) {
    return this.serviceItemService.getServiceItem(search);
  }

  @Get('/getServiceItemAll')
  async getServiceItemAll(@Query() search: ServiceItemSearchVo) {
    return this.serviceItemService.getServiceItemAll(search);
  }

  @Get('/getServiceItemAllView')
  async getServiceItemAllView() {
    return this.serviceItemService.getServiceItemAllView();
  }
}
