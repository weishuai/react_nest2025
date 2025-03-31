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
import { WarrantyService } from '../myservices/WarrantyService';
import { WarrantySearchVo, WarrantyVo } from '../myvo/WarrantyVo';

@Controller('/warranty')
export class WarrantyController {
  private warrantyService = new WarrantyService();

  @Post('/createWarranty')
  async createWarranty(@Body() WarrantyVo: WarrantyVo) {
    return this.warrantyService.createWarranty(WarrantyVo);
  }

  @Put('/updateWarranty/:Id')
  async updateaWarranty(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() WarrantyVo: WarrantyVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.warrantyService.updateaWarranty(Id, userId, WarrantyVo);
  }

  @Get('/removeWarranty/:Id')
  async removeWarranty(@Param('Id') Id: string) {
    return this.warrantyService.removeWarranty([Id]);
  }

  @Get('/getWarrantyById/:Id')
  async getWarrantyById(@Param('Id') Id: string) {
    return this.warrantyService.getWarrantyById(Id);
  }

  @Get('/getWarranty')
  async getWarranty(@Query() search: WarrantySearchVo) {
    return this.warrantyService.getWarranty(search);
  }

  @Get('/getWarrantyAll')
  async getWarrantyAll(@Query() search: WarrantySearchVo) {
    return this.warrantyService.getWarrantyAll(search);
  }

  @Get('/getWarrantyAllView')
  async getWarrantyAllView() {
    return this.warrantyService.getWarrantyAllView();
  }
}
