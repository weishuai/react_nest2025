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
import { StageService } from '../myservices/StageService';
import { StageSearchVo, StageVo } from '../myvo/StageVo';

@Controller('/stage')
export class StageController {
  private stageService = new StageService();

  @Post('/createStage')
  async createStage(@Body() StageVo: StageVo) {
    return this.stageService.createStage(StageVo);
  }

  @Put('/updateStage/:Id')
  async updateaStage(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() StageVo: StageVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.stageService.updateaStage(Id, userId, StageVo);
  }

  @Get('/removeStage/:Id')
  async removeStage(@Param('Id') Id: string) {
    return this.stageService.removeStage([Id]);
  }

  @Get('/getStageById/:Id')
  async getStageById(@Param('Id') Id: string) {
    return this.stageService.getStageById(Id);
  }

  @Get('/getStage')
  async getStage(@Query() search: StageSearchVo) {
    return this.stageService.getStage(search);
  }

  @Get('/getStageAll')
  async getStageAll(@Query() search: StageSearchVo) {
    return this.stageService.getStageAll(search);
  }

  @Get('/getStageAllView')
  async getStageAllView() {
    return this.stageService.getStageAllView();
  }
}
