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
import { StaffListService } from '../myservices/StaffListService';
import { StaffListSearchVo, StaffListVo } from '../myvo/StaffListVo';

@Controller('/staffList')
export class StaffListController {
  private staffListService = new StaffListService();

  @Post('/createStaffList')
  async createStaffList(@Body() StaffListVo: StaffListVo) {
    return this.staffListService.createStaffList(StaffListVo);
  }

  @Put('/updateStaffList/:Id')
  async updateaStaffList(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() StaffListVo: StaffListVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.staffListService.updateaStaffList(Id, userId, StaffListVo);
  }

  @Get('/removeStaffList/:Id')
  async removeStaffList(@Param('Id') Id: string) {
    return this.staffListService.removeStaffList([Id]);
  }

  @Get('/getStaffListById/:Id')
  async getStaffListById(@Param('Id') Id: string) {
    return this.staffListService.getStaffListById(Id);
  }

  @Get('/getStaffList')
  async getStaffList(@Query() search: StaffListSearchVo) {
    return this.staffListService.getStaffList(search);
  }

  @Get('/getStaffListAll')
  async getStaffListAll(@Query() search: StaffListSearchVo) {
    return this.staffListService.getStaffListAll(search);
  }

  @Get('/getStaffListAllView')
  async getStaffListAllView() {
    return this.staffListService.getStaffListAllView();
  }
}
