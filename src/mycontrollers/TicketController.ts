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
import { TicketService } from '../myservices/TicketService';
import { TicketSearchVo, TicketVo } from '../myvo/TicketVo';

@Controller('/ticket')
export class TicketController {
  private ticketService = new TicketService();

  @Post('/createTicket')
  async createTicket(@Body() TicketVo: TicketVo) {
    return this.ticketService.createTicket(TicketVo);
  }

  @Put('/updateTicket/:Id')
  async updateaTicket(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() TicketVo: TicketVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.ticketService.updateaTicket(Id, userId, TicketVo);
  }

  @Get('/removeTicket/:Id')
  async removeTicket(@Param('Id') Id: string) {
    return this.ticketService.removeTicket([Id]);
  }

  @Get('/getTicketById/:Id')
  async getTicketById(@Param('Id') Id: string) {
    return this.ticketService.getTicketById(Id);
  }

  @Get('/getTicket')
  async getTicket(@Query() search: TicketSearchVo) {
    return this.ticketService.getTicket(search);
  }

  @Get('/getTicketAll')
  async getTicketAll(@Query() search: TicketSearchVo) {
    return this.ticketService.getTicketAll(search);
  }

  @Get('/getTicketAllView')
  async getTicketAllView() {
    return this.ticketService.getTicketAllView();
  }
}
