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
import { CurrentUserToken } from '../myutils/current.user.token';
import _ from 'lodash';
import { ActivityService } from '../myservices/ActivityService';
import {
  ActivitySearchVo,
  ActivityVo,
  FHActivitySearchVo,
} from '../myvo/ActivityVo';

@Controller('/activity')
export class ActivityController {
  private activityService = new ActivityService();

  @Post('/createActivity')
  async createActivity(@Body() ActivityVo: ActivityVo) {
    return this.activityService.createActivity(ActivityVo);
  }

  @Put('/updateActivity/:Id')
  async updateaActivity(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() ActivityVo: ActivityVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.activityService.updateaActivity(Id, userId, ActivityVo);
  }

  @Get('/removeActivity/:Id')
  async removeActivity(@Param('Id') Id: string) {
    return this.activityService.removeActivity([Id]);
  }

  @Get('/getActivityById/:Id')
  async getActivityById(@Param('Id') Id: string) {
    return this.activityService.getActivityById(Id);
  }

  @Get('/getActivitSQL')
  async getActivitSQL(
    @Headers('userToken') userToken: string,
    @Query() search: FHActivitySearchVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.activityService.getActivitSQL(userId, search);
  }

  @Get('/getActivity')
  async getActivity(
    @Headers('userToken') userToken: string,
    @Query() search: ActivitySearchVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.activityService.getActivity(userId, search);
  }

  @Get('/getActivityTask')
  async getActivityTask(
    @Headers('userToken') userToken: string,
    @Query() search: ActivitySearchVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }

    return this.activityService.getActivityTask(userId, search);
  }

  @Get('/getActivityNote')
  async getActivityNote(
    @Headers('userToken') userToken: string,
    @Query() search: ActivitySearchVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.activityService.getActivityNote(userId, search);
  }

  @Get('/getActivityAll')
  async getActivityAll(@Query() search: ActivitySearchVo) {
    return this.activityService.getActivityAll(search);
  }

  @Get('/getActivityAllView')
  async getActivityAllView() {
    return this.activityService.getActivityAllView();
  }

  @Get('/getActivityEventsAll')
  async getActivityEventsAll() {
    return this.activityService.getActivityEventsAll();
  }
}
