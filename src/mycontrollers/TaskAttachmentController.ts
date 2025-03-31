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
import { TaskAttachmentService } from '../myservices/TaskAttachmentService';
import {
  TaskAttachmentSearchVo,
  TaskAttachmentVo,
} from '../myvo/TaskAttachmentVo';

@Controller('/taskAttachment')
export class TaskAttachmentController {
  private taskAttachmentService = new TaskAttachmentService();

  @Post('/createTaskAttachment')
  async createTaskAttachment(@Body() TaskAttachmentVo: TaskAttachmentVo) {
    return this.taskAttachmentService.createTaskAttachment(TaskAttachmentVo);
  }

  @Put('/updateTaskAttachment/:Id')
  async updateaTaskAttachment(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() TaskAttachmentVo: TaskAttachmentVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.taskAttachmentService.updateaTaskAttachment(
      Id,
      userId,
      TaskAttachmentVo,
    );
  }

  @Get('/removeTaskAttachment/:Id')
  async removeTaskAttachment(@Param('Id') Id: string) {
    return this.taskAttachmentService.removeTaskAttachment([Id]);
  }

  @Get('/getTaskAttachmentById/:Id')
  async getTaskAttachmentById(@Param('Id') Id: string) {
    return this.taskAttachmentService.getTaskAttachmentById(Id);
  }

  @Get('/getTaskAttachment')
  async getTaskAttachment(@Query() search: TaskAttachmentSearchVo) {
    return this.taskAttachmentService.getTaskAttachment(search);
  }

  @Get('/getTaskAttachmentAll')
  async getTaskAttachmentAll(@Query() search: TaskAttachmentSearchVo) {
    return this.taskAttachmentService.getTaskAttachmentAll(search);
  }

  @Get('/getTaskAttachmentAllView')
  async getTaskAttachmentAllView() {
    return this.taskAttachmentService.getTaskAttachmentAllView();
  }
}
