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
import { TaskCommentsService } from '../myservices/TaskCommentsService';
import { TaskCommentsSearchVo, TaskCommentsVo } from '../myvo/TaskCommentsVo';

@Controller('/taskComments')
export class TaskCommentsController {
  private taskCommentsService = new TaskCommentsService();

  @Post('/createTaskComments')
  async createTaskComments(@Body() TaskCommentsVo: TaskCommentsVo) {
    return this.taskCommentsService.createTaskComments(TaskCommentsVo);
  }

  @Put('/updateTaskComments/:Id')
  async updateaTaskComments(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() TaskCommentsVo: TaskCommentsVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.taskCommentsService.updateaTaskComments(
      Id,
      userId,
      TaskCommentsVo,
    );
  }

  @Get('/removeTaskComments/:Id')
  async removeTaskComments(@Param('Id') Id: string) {
    return this.taskCommentsService.removeTaskComments([Id]);
  }

  @Get('/getTaskCommentsById/:Id')
  async getTaskCommentsById(@Param('Id') Id: string) {
    return this.taskCommentsService.getTaskCommentsById(Id);
  }

  @Get('/getTaskComments')
  async getTaskComments(@Query() search: TaskCommentsSearchVo) {
    return this.taskCommentsService.getTaskComments(search);
  }

  @Get('/getTaskCommentsAll')
  async getTaskCommentsAll(@Query() search: TaskCommentsSearchVo) {
    return this.taskCommentsService.getTaskCommentseAll(search);
  }

  @Get('/getTaskCommentsAllView')
  async getTaskCommentsAllView() {
    return this.taskCommentsService.getTaskCommentseAllView();
  }
}
