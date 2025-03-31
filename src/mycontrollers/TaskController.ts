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
import { TaskService } from '../myservices/TaskService';
import { TaskSearchVo, TaskVo } from '../myvo/TaskVo';

@Controller('/task')
export class TaskController {
  private taskService = new TaskService();

  @Post('/createTask')
  async createTask(@Body() TaskVo: TaskVo) {
    return this.taskService.createTask(TaskVo);
  }

  @Put('/updateTask/:Id')
  async updateaTask(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() taskVo: TaskVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.taskService.updateaTask(Id, userId, taskVo);
  }

  @Put('/updateTaskStatus/:Id')
  async updateaTaskStatus(@Param('Id') Id: string) {
    return this.taskService.updateaTaskStatus(Id);
  }

  @Get('/removeTask/:Id')
  async removeTask(@Param('Id') Id: string) {
    return this.taskService.removeTask([Id]);
  }

  @Get('/getTaskById/:Id')
  async getTaskById(@Param('Id') Id: string) {
    return this.taskService.getTaskById(Id);
  }

  @Get('/getTask')
  async getTask(@Query() search: TaskSearchVo) {
    return this.taskService.getTask(search);
  }

  @Get('/getTaskAll')
  async getTaskAll(@Query() search: TaskSearchVo) {
    return this.taskService.getTaskAll(search);
  }

  @Get('/getTaskAllView')
  async getTaskAllView() {
    return this.taskService.getTaskAllView();
  }
}
