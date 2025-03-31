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
import { SkillService } from '../myservices/SkillService';
import { SkillSearchVo, SkillVo } from '../myvo/SkillVo';

@Controller('/skill')
export class SkillController {
  private skillService = new SkillService();

  @Post('/createSkill')
  async createSkill(@Body() SkillVo: SkillVo) {
    return this.skillService.createSkill(SkillVo);
  }

  @Put('/updateSkill/:Id')
  async updateaSkill(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() SkillVo: SkillVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.skillService.updateaSkill(Id, userId, SkillVo);
  }

  @Get('/removeSkill/:Id')
  async removeSkill(@Param('Id') Id: string) {
    return this.skillService.removeSkill([Id]);
  }

  @Get('/getSkillById/:Id')
  async getSkillById(@Param('Id') Id: string) {
    return this.skillService.getSkillById(Id);
  }

  @Get('/getSkill')
  async getSkill(@Query() search: SkillSearchVo) {
    return this.skillService.getSkill(search);
  }

  @Get('/getSkillAll')
  async getSkillAll(@Query() search: SkillSearchVo) {
    return this.skillService.getSkillAll(search);
  }

  @Get('/getSkillAllView')
  async getSkillAllView() {
    return this.skillService.getSkillAllView();
  }
}
