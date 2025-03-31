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
import { MessageService } from '../myservices/MessageService';

@Controller('/message')
export class MessageController {
  private messageService = new MessageService();

  //sendMailUser(userId: string, refNumber: string, temp: string)
  @Get('/getMessageById/:userId/:refNumber/:temp')
  async getMessageById(
    @Param('userId') userId: string,
    @Param('refNumber') refNumber: string,
    @Param('temp') temp: string,
  ) {
    return this.messageService.sendMailUser(userId, refNumber, temp);
  }
}
