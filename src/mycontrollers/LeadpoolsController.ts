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
import { LeadpoolsService } from '../myservices/LeadpoolsService';
import { LeadpoolsSearchVo, LeadpoolsVo } from '../myvo/LeadpoolsVo';

@Controller('/leadpools')
export class LeadpoolsController {
  private leadpoolsService = new LeadpoolsService();

  @Post('/createLeadPools')
  async createLeadPools(@Body() LeadpoolsVo: LeadpoolsVo) {
    return this.leadpoolsService.createLeadpools(LeadpoolsVo);
  }

  @Put('/updateLeadpools/:Id')
  async updateaLeadpools(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() LeadpoolsVo: LeadpoolsVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.leadpoolsService.updateaLeadpools(Id, userId, LeadpoolsVo);
  }

  @Get('/removeLeadPools/:Id')
  async removeLeadPools(@Param('Id') Id: string) {
    return this.leadpoolsService.removeLeadpools([Id]);
  }

  @Get('/getLeadpoolsById/:Id')
  async getLeadpoolsById(@Param('Id') Id: string) {
    return this.leadpoolsService.getLeadpoolsById(Id);
  }

  @Get('/getLeadpools')
  async getLeadpools(@Query() search: LeadpoolsSearchVo) {
    return this.leadpoolsService.getLeadpools(search);
  }

  @Get('/getLeadpoolsAll')
  async getLeadpoolsAll(@Query() search: LeadpoolsSearchVo) {
    return this.leadpoolsService.getLeadpoolsAll(search);
  }

  @Get('/getLeadpoolsAllView')
  async getLeadpoolsAllView() {
    return this.leadpoolsService.getLeadpoolsAllView();
  }
}
