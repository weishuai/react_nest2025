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
import { OpportunityService } from '../myservices/OpportunityService';
import {
  FHOpportunitySearchVo,
  OpportunitySearchVo,
  OpportunityVo,
} from '../myvo/OpportunityVo';

@Controller('/opportunity')
export class OpportunityController {
  private opportunityService = new OpportunityService();

  @Post('/createOpportunity')
  async createOpportunity(@Body() OpportunityVo: OpportunityVo) {
    return this.opportunityService.createOpportunity(OpportunityVo);
  }

  @Put('/updateOpportunity/:Id')
  async updateaOpportunity(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() OpportunityVo: OpportunityVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.opportunityService.updateaOpportunity(
      Id,
      userId,
      OpportunityVo,
    );
  }

  @Get('/removeOpportunity/:Id')
  async removeOpportunity(@Param('Id') Id: string) {
    return this.opportunityService.removeOpportunity([Id]);
  }

  @Get('/getOpportunityById/:Id')
  async getOpportunityById(@Param('Id') Id: string) {
    return this.opportunityService.getOpportunityById(Id);
  }

  @Get('/getOpportunitysCountBystageName/:stageName')
  async getOpportunitysCountBystageName(@Param('stageName') stageName: string) {
    /*
    const Qualification = await this.opportunityService.getOpportunitysCountBystageName('Qualification');
    const Analysis = await this.opportunityService.getOpportunitysCountBystageName('Analysis');
    const Proposal = await this.opportunityService.getOpportunitysCountBystageName('Proposal');
    const Negotiation = await this.opportunityService.getOpportunitysCountBystageName('Negotiation');
    const ClosedWon = await this.opportunityService.getOpportunitysCountBystageName('ClosedWon');
    const ClosedLost = await this.opportunityService.getOpportunitysCountBystageName('ClosedLost');
    const items = [{ label: 'Qualification(' + Qualification + ')' }, { label: 'Analysis(' + Analysis + ')' }, { label: 'Proposal(' + Proposal + ')' }, { label: 'Negotiation(' + Negotiation + ')' }, { label: 'Closed Won(' + ClosedWon + ')' }, { label: 'Closed Lost(' + ClosedLost + ')' }];
    return items;
    */
  }

  @Get('/getOpportunity')
  async getOpportunity(
    @Headers('userToken') userToken: string,
    @Query() search: OpportunitySearchVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }

    return this.opportunityService.getOpportunity(userId, search);
  }

  @Get('/getOpportunitySQL')
  async getOpportunitySQL(
    @Headers('userToken') userToken: string,
    @Query() search: FHOpportunitySearchVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }

    return this.opportunityService.getOpportunitySQL(userId, search);
  }

  @Get('/getOpportunityAll')
  async getOpportunityAll(@Query() search: OpportunitySearchVo) {
    return this.opportunityService.getOpportunityAll(search);
  }

  @Get('/getOpportunityAllView')
  async getOpportunityAllView() {
    return this.opportunityService.getOpportunityAllView();
  }
}
