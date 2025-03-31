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
import { OpportunityCommentsService } from '../myservices/OpportunityCommentsService';
import {
  OpportunityCommentsSearchVo,
  OpportunityCommentsVo,
} from '../myvo/OpportunityCommentsVo';

@Controller('/opportunityComments')
export class OpportunityCommentsController {
  private opportunityCommentsService = new OpportunityCommentsService();

  @Post('/createOpportunityComments')
  async createOpportunityComments(
    @Body() OpportunityCommentsVo: OpportunityCommentsVo,
  ) {
    return this.opportunityCommentsService.createOpportunityComments(
      OpportunityCommentsVo,
    );
  }

  @Put('/updateOpportunityComments/:Id')
  async updateaOpportunityComments(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() OpportunityCommentsVo: OpportunityCommentsVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.opportunityCommentsService.updateaOpportunityComments(
      Id,
      userId,
      OpportunityCommentsVo,
    );
  }

  @Get('/removeOpportunityComments/:Id')
  async removeOpportunityComments(@Param('Id') Id: string) {
    return this.opportunityCommentsService.removeOpportunityComments([Id]);
  }

  @Get('/getOpportunityCommentsById/:Id')
  async getOpportunityCommentsById(@Param('Id') Id: string) {
    return this.opportunityCommentsService.getOpportunityCommentsById(Id);
  }

  @Get('/getOpportunityComments')
  async getOpportunityComments(@Query() search: OpportunityCommentsSearchVo) {
    return this.opportunityCommentsService.getOpportunityComments(search);
  }

  @Get('/getOpportunityCommentsAll')
  async getOpportunityCommentsAll(@Query() search: OpportunityCommentsSearchVo) {
    return this.opportunityCommentsService.getOpportunityCommentsAll(search);
  }
}
