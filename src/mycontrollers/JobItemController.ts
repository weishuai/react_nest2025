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
import { JobItemService } from '../myservices/JobItemService';
import { JobItemSearchVo, JobItemVo } from '../myvo/JobItemVo';

@Controller('/jobItem')
export class JobItemController {
  private jobItemService = new JobItemService();

  @Post('/createJobItem')
  async createJobItem(@Body() JobItemVo: JobItemVo) {
    return this.jobItemService.createJobItem(JobItemVo);
  }

  @Get('/updateJobItemVoByMid/:mid/:Id')
  async updateJobItemVoByMid(
    @Param('mid') mid: string,
    @Param('Id') Id: string,
  ) {
    return this.jobItemService.updateJobItemVoByMid(mid, Id);
    //return '000';
  }

  @Put('/updateJobItem/:Id')
  async updateaJobItem(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() JobItemVo: JobItemVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.jobItemService.updateaJobItem(Id, userId, JobItemVo);
  }

  @Get('/removeJobItem/:Id')
  async removeJobItem(@Param('Id') Id: string) {
    return this.jobItemService.removeJobItem([Id]);
  }

  @Get('/getJobItemById/:Id')
  async getJobItemById(@Param('Id') Id: string) {
    return this.jobItemService.getJobItemById(Id);
  }

  @Get('/getJobItem')
  async getJobItem(@Query() search: JobItemSearchVo) {
    return this.jobItemService.getJobItem(search);
  }

  @Get('/getJobItemAPP')
  async getJobItemAPP(@Query() search: JobItemSearchVo) {
    return this.jobItemService.getJobItemAPP(search);
  }

  @Get('/getJobItemAll')
  async getJobItemAll(@Query() search: JobItemSearchVo) {
    return this.jobItemService.getJobItemAll(search);
  }

  @Get('/getJobItemAllView')
  async getJobItemAllView() {
    return this.jobItemService.getJobItemAllView();
  }
}
