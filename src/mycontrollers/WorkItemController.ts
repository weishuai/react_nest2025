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
import { WorkItemService } from '../myservices/WorkItemService';
import { WorkItemSearchVo, WorkItemVo } from '../myvo/WorkItemVo';

@Controller('/WorkItem')
export class WorkItemController {
  private workItemService = new WorkItemService();

  @Post('/createWorkItem')
  async createWorkItem(@Body() WorkItemVo: WorkItemVo) {
    return this.workItemService.createWorkItem(WorkItemVo);
  }

  @Get('/removeToWorkItem/:mid')
  async removeToToWorkItem(@Param('mid') mid: string) {
    return this.workItemService.removeToWorkItem(mid);
  }

  @Put('/WorkItemUpdateMid/:mid/:MID')
  async WorkItemUpdateMid(
    @Param('mid') mid: string,
    @Param('MID') MID: string,
  ) {
    return this.workItemService.WorkItemUpdateMid(mid, MID);
  }

  @Put('/updateWorkItem/:Id')
  async updateaWorkItem(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() WorkItemVo: WorkItemVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.workItemService.updateaWorkItem(Id, userId, WorkItemVo);
  }

  @Get('/removeWorkItem/:Id')
  async removeWorkItem(@Param('Id') Id: string) {
    return this.workItemService.removeWorkItem([Id]);
  }

  @Get('/getWorkItemById/:Id')
  async getWorkItemById(@Param('Id') Id: string) {
    return this.workItemService.getWorkItemById(Id);
  }

  @Get('/getWorkItem')
  async getWorkItem(@Query() search: WorkItemSearchVo) {
    return this.workItemService.getWorkItem(search);
  }

  @Get('/getWorkItemAll')
  async getWorkItemAll(@Query() search: WorkItemSearchVo) {
    return this.workItemService.getWorkItemAll(search);
  }

  @Get('/getWorkItemAllView')
  async getWorkItemAllView() {
    return this.workItemService.getWorkItemAllView();
  }
}
