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
import { UnitService } from '../myservices/UnitService';
import { UnitSearchVo, UnitVo } from '../myvo/UnitVo';

@Controller('/unit')
export class UnitController {
  private unitService = new UnitService();

  @Post('/createUnit')
  async createUnit(@Body() UnitVo: UnitVo) {
    return this.unitService.createUnit(UnitVo);
  }

  @Put('/updateUnit/:Id')
  async updateaUnit(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() UnitVo: UnitVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.unitService.updateaUnit(Id, userId, UnitVo);
  }

  @Get('/removeUnit/:Id')
  async removeUnit(@Param('Id') Id: string) {
    return this.unitService.removeUnit([Id]);
  }

  @Get('/getUnitById/:Id')
  async getUnitById(@Param('Id') Id: string) {
    return this.unitService.getUnitById(Id);
  }

  @Get('/getUnit')
  async getUnit(@Query() search: UnitSearchVo) {
    return this.unitService.getUnit(search);
  }

  @Get('/getUnitAll')
  async getUnitAll(@Query() search: UnitSearchVo) {
    return this.unitService.getUnitAll(search);
  }

  @Get('/getUnitAllView')
  async getUnitAllView() {
    return this.unitService.getUnitAllView();
  }
}
