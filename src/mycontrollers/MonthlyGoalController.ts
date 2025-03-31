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
import { MonthlyGoalService } from '../myservices/MonthlyGoalService';
import { MonthlyGoalSearchVo, MonthlyGoalVo } from '../myvo/MonthlyGoalVo';

@Controller('/monthlyGoal')
export class MonthlyGoalController {
  private monthlyGoalService = new MonthlyGoalService();
  @Post('/createMonthlyGoal')
  async createMonthlyGoal(@Body() MonthlyGoalVo: MonthlyGoalVo) {
    return this.monthlyGoalService.createMonthlyGoal(MonthlyGoalVo);
  }

  @Put('/updateMonthlyGoal/:Id')
  async updateaMonthlyGoal(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() MonthlyGoalVo: MonthlyGoalVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.monthlyGoalService.updateaMonthlyGoal(
      Id,
      userId,
      MonthlyGoalVo,
    );
  }

  @Get('/removeMonthlyGoal/:Id')
  async removeMonthlyGoal(@Param('Id') Id: string) {
    return this.monthlyGoalService.removeMonthlyGoal([Id]);
  }

  @Get('/getMonthlyGoalById/:Id')
  async getMonthlyGoalById(@Param('Id') Id: string) {
    return this.monthlyGoalService.getMonthlyGoalById(Id);
  }

  @Get('/getMonthlyGoal')
  async getMonthlyGoal(@Query() search: MonthlyGoalSearchVo) {
    return this.monthlyGoalService.getMonthlyGoal(search);
  }

  @Get('/getMonthlyGoalAll')
  async getMonthlyGoalAll(@Query() search: MonthlyGoalSearchVo) {
    return this.monthlyGoalService.getMonthlyGoalAll(search);
  }
}
