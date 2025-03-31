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
import { WorkService } from '../myservices/WorkService';
import { WorkSearchVo, WorkVo } from '../myvo/WorkVo';

@Controller('/work')
export class WorkController {
  private workService = new WorkService();

  @Post('/createWork')
  async createWork(@Body() WorkVo: WorkVo) {
    return this.workService.createWork(WorkVo);
  }

  @Put('/updateWork/:Id')
  async updateaWork(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() WorkVo: WorkVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }

    console.log('90002:'+JSON.stringify(WorkVo));
    return this.workService.updateaWork(Id, userId, WorkVo);
  }

  @Get('/removeWork/:Id')
  async removeWork(@Param('Id') Id: string) {
    return this.workService.removeWork([Id]);
  }

  @Get('/getWorkById/:Id')
  async getWorkById(@Param('Id') Id: string) {
    return this.workService.getWorkById(Id);
  }

  @Get('/getWorkOrderBySqlStartDate/:SqlStartDate')
  async getWorkOrderBySqlStartDate(
    @Param('SqlStartDate') SqlStartDate: string,
  ) {
    return this.workService.getWorkOrderBySqlStartDate(SqlStartDate);
  }

  @Get('/getWork')
  async getWork(
    @Headers('userToken') userToken: string,
    @Query() search: WorkSearchVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.workService.getWork(userId, search);
  }

  @Get('/getWorkAPP')
  async getWorkAPP(
    @Headers('userToken') userToken: string,
    @Query() search: WorkSearchVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.workService.getWorkAPP(userId, search);
  }

  @Get('/getWorkAll')
  async getWorkAll(@Query() search: WorkSearchVo) {
    return this.workService.getWorkAll(search);
  }

  @Get('/getWorkAllView')
  async getWorkAllView() {
    return this.workService.getWorkAllView();
  }
}
