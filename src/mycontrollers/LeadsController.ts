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
import { LeadsService } from '../myservices/LeadsService';
import { LeadsSearchVo, LeadsVo } from '../myvo/LeadsVo';

@Controller('/leads')
export class LeadsController {
  private leadsService = new LeadsService();
  @Post('/createLeads')
  async createLeads(@Body() LeadsVo: LeadsVo) {
    return this.leadsService.createLeads(LeadsVo);
  }

  @Put('/updateLeads/:Id')
  async updateaLeads(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() leadsVo: LeadsVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.leadsService.updateaLeads(Id, userId, leadsVo);
  }

  @Get('/removeLeads/:Id')
  async removeLeads(@Param('Id') Id: string) {
    return this.leadsService.removeLeads([Id]);
  }

  @Get('/getLeadsById/:Id')
  async getLeadsById(@Param('Id') Id: string) {
    return this.leadsService.getLeadsById(Id);
  }

  @Get('/getLeads')
  async getLeads(
    @Headers('userToken') userToken: string,
    @Query() search: LeadsSearchVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.leadsService.getLeads(userId, search);
  }

  @Get('/getLeadsAll')
  async getLeadsAll( @Query() search: LeadsSearchVo) {
    return this.leadsService.getLeadsAll(search);
  }

  @Get('/getLeadsAllView')
  async getLeadsAllView() {
    return this.leadsService.getLeadsAllView();
  }
}
