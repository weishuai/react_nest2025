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
import { NoteService } from '../myservices/NoteService';
import { NoteSearchVo, NoteVo } from '../myvo/NoteVo';

@Controller('/note')
export class NoteController {
  private noteService = new NoteService();
  @Post('/createNote')
  async createNote(@Body() NoteVo: NoteVo) {
    return this.noteService.createNote(NoteVo);
  }

  @Put('/updateNote/:Id')
  async updateaNote(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() NoteVo: NoteVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.noteService.updateaNote(Id, userId, NoteVo);
  }

  @Get('/removeNote/:Id')
  async removeNote(@Param('Id') Id: string) {
    return this.noteService.removeNote([Id]);
  }

  @Get('/getNoteById/:Id')
  async getNoteById(@Param('Id') Id: string) {
    return this.noteService.getNoteById(Id);
  }

  @Get('/getNote')
  async getNote(@Query() search: NoteSearchVo) {
    return this.noteService.getNote(search);
  }

  @Get('/getNoteAll')
  async getNoteAll(@Query() search: NoteSearchVo) {
    return this.noteService.getNoteAll(search);
  }
}
