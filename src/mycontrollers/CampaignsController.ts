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
import { CampaignService } from '../myservices/CampaignService';
import { CampaignSearchVo, CampaignVo } from '../myvo/CampaignVo';
@Controller('/campaign')
export class CampaignsController {
  private campaignService = new CampaignService();

  @Post('/createCampaign')
  async createCampaign(@Body() CampaignVo: CampaignVo) {
    return this.campaignService.createCampaign(CampaignVo);
  }

  @Put('/updateCampaign/:Id')
  async updateaCampaign(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() CampaignVo: CampaignVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.campaignService.updateaCampaign(Id, userId, CampaignVo);
  }

  @Get('/removeCampaign/:Id')
  async removeCampaign(@Param('Id') Id: string) {
    return this.campaignService.removeCampaign([Id]);
  }

  @Get('/getCampaignById/:Id')
  async getCampaignById(@Param('Id') Id: string) {
    return this.campaignService.getCampaignById(Id);
  }

  @Get('/getCampaign')
  async getCampaign(@Query() search: CampaignSearchVo) {
    return this.campaignService.getCampaign(search);
  }

  @Get('/getCampaignAll')
  async getCampaignsAll(@Query() search: CampaignSearchVo) {
    return this.campaignService.getCampaignsAll(search);
  }

  @Get('/getCampaignAllView')
  async getCampaignsAllView() {
    return this.campaignService.getCampaignsAllView();
  }
}
