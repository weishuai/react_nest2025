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
import { FHRoleService } from '../myservices/FHRoleService';
import { FHRoleSearchVo, FHRoleVo } from '../myvo/FHRoleVo';

@Controller('/fhrole')
export class FHRoleController {
  private fhroleService = new FHRoleService();
  @Post('/createFHRole')
  async createFHRole(@Body() FHRoleVo: FHRoleVo) {
    return this.fhroleService.createFHRole(FHRoleVo);
  }

  @Put('/updateFHRole/:Id')
  async updateaFHRole(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() FHRoleVo: FHRoleVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.fhroleService.updateaFHRole(Id, userId, FHRoleVo);
  }

  @Get('/removeFHRole/:Id')
  async removeFHRole(@Param('Id') Id: string) {
    return this.fhroleService.removeFHRole([Id]);
  }

  @Get('/getFHRoleById/:Id')
  async getFHRoleById(@Param('Id') Id: string) {
    return this.fhroleService.getFHRoleById(Id);
  }

  @Get('/getFHRole')
  async getFHRole(@Query() search: FHRoleSearchVo) {
    return this.fhroleService.getFHRole(search);
  }

  @Get('/getFHRoleAll')
  async getFHRoleAll(@Query() search: FHRoleSearchVo) {
    return this.fhroleService.getFHRoleAll(search);
  }

  @Get('/getFHRoleAllView')
  async getFHRoleAllView() {
    return this.fhroleService.getFHRoleAllView();
  }
}
