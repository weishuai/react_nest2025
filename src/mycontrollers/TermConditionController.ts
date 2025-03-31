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
import { TermConditionService } from '../myservices/TermConditionService';
import {
  TermConditionSearchVo,
  TermConditionVo,
} from '../myvo/TermConditionVo';

@Controller('/termCondition')
export class TermConditionController {
  private termConditionService = new TermConditionService();

  @Post('/createTermCondition')
  async createTermCondition(@Body() TermConditionVo: TermConditionVo) {
    return this.termConditionService.createTermCondition(TermConditionVo);
  }

  @Put('/updateTermCondition/:Id')
  async updateaTermCondition(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() TermConditionVo: TermConditionVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.termConditionService.updateaTermCondition(
      Id,
      userId,
      TermConditionVo,
    );
  }

  @Get('/removeTermCondition/:Id')
  async removeTermCondition(@Param('Id') Id: string) {
    return this.termConditionService.removeTermCondition([Id]);
  }

  @Get('/getTermConditionById/:Id')
  async getTermConditionById(@Param('Id') Id: string) {
    return this.termConditionService.getTermConditionById(Id);
  }

  @Get('/getTermCondition')
  async getTermCondition(@Query() search: TermConditionSearchVo) {
    return this.termConditionService.getTermCondition(search);
  }

  @Get('/getTermConditionAll')
  async getTermConditionAll(@Query() search: TermConditionSearchVo) {
    return this.termConditionService.getTermConditionAll(search);
  }

  @Get('/getTermConditionAllView')
  async getTermConditionAllView() {
    return this.termConditionService.getTermConditionAllView();
  }
}
