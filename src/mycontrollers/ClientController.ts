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
import { ClientService } from '../myservices/ClientService';
import { ClientSearchVo, ClientVo, FHClientSearchVo } from '../myvo/ClientVo';

@Controller('/client')
export class ClientController {
  private clientService = new ClientService();

  @Post('/createClient')
  async createClient(@Body() ClientVo: ClientVo) {
    return this.clientService.createClient(ClientVo);
  }

  @Put('/updateClient/:Id')
  async updateaClient(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() ClientVo: ClientVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    console.info("后台接收:1");
    console.info(JSON.stringify(ClientVo));
    return this.clientService.updateaClient(Id, userId, ClientVo);
  }

  @Get('/removeClient/:Id')
  async removeClient(@Param('Id') Id: string) {
    return this.clientService.removeClient([Id]);
  }

  @Get('/getClientById/:Id')
  async getClientById(@Param('Id') Id: string) {
    return this.clientService.getClientById(Id);
  }

  @Get('/getClient')
  async getClient(
    @Headers('userToken') userToken: string,
    @Query() search: ClientSearchVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.clientService.getClient(userId, search);
  }

  @Get('/getClientv2')
  async getClientv2(
    @Headers('userToken') userToken: string,
    @Query() search: ClientSearchVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.clientService.getClient(userId, search);
  }

  @Get('/getClientv2SQL')
  async getClientv2SQL(
    @Headers('userToken') userToken: string,
    @Query() search: FHClientSearchVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.clientService.getClientSQL(userId, search);
  }

  @Get('/getClientAll')
  async getClientAll(@Query() search: ClientSearchVo) {
    return this.clientService.getClientAll(search);
  }

  @Get('/getClientAllView')
  async getClientAllView() {
    return this.clientService.getClientAllView();
  }
}
