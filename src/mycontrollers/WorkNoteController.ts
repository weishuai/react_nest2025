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
import { WorkNoteService } from '../myservices/WorkNoteService';
import { WorkNoteSearchVo, WorkNoteVo } from '../myvo/WorkNoteVo';

@Controller('/workNote')
export class WorkNoteController {
  private workNoteService = new WorkNoteService();

  @Post('/createWorkNote')
  async createWorkNote(@Body() WorkNoteVo: WorkNoteVo) {
    return this.workNoteService.createWorkNote(WorkNoteVo);
  }

  @Put('/updateWorkNote/:Id')
  async updateaWorkNote(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() WorkNoteVo: WorkNoteVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.workNoteService.updateaWorkNote(Id, userId, WorkNoteVo);
  }

  @Get('/removeWorkNote/:Id')
  async removeWorkNote(@Param('Id') Id: string) {
    return this.workNoteService.removeWorkNote([Id]);
  }

  @Get('/getWorkNoteById/:Id')
  async getWorkNoteById(@Param('Id') Id: string) {
    return this.workNoteService.getWorkNoteById(Id);
  }

  @Get('/getWorkNote')
  async getWorkNote(@Query() search: WorkNoteSearchVo) {
    return this.workNoteService.getWorkNote(search);
  }

  @Get('/getWorkNoteAll')
  async getWorkNoteAll(@Query() search: WorkNoteSearchVo) {
    return this.workNoteService.getWorkNoteAll(search);
  }

  @Get('/getWorkNoteAllView')
  async getWorkNoteAllView() {
    return this.workNoteService.getWorkNoteAllView();
  }
}
