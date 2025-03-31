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
import { ContacPersonService } from '../myservices/ContacPersonService';
import { ContacPersonSearchVo, ContacPersonVo } from '../myvo/ContacPersonVo';

@Controller('/contacPerson')
export class ContacPersonController {
  private contacPersonService = new ContacPersonService();

  @Post('/createContacPerson')
  async createContacPerson(@Body() contacPersonVo: ContacPersonVo) {
    return this.contacPersonService.createContacPerson(contacPersonVo);
  }

  @Put('/updateContacPerson/:Id')
  async updateaContacPerson(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() ContacPersonVo: ContacPersonVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.contacPersonService.updateaContacPerson(
      Id,
      userId,
      ContacPersonVo,
    );
  }

  @Get('/removeContacPerson/:Id')
  async removeContacPerson(@Param('Id') Id: string) {
    return this.contacPersonService.removeContacPerson([Id]);
  }

  @Get('/getContacPersonById/:Id')
  async getContacPersonById(@Param('Id') Id: string) {
    return this.contacPersonService.getContacPersonById(Id);
  }

  @Get('/getContacPerson')
  async getContacPerson(
    @Headers() userToken: string,
    @Query() search: ContacPersonSearchVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.contacPersonService.getContacPerson(userId, search);
  }

  @Get('/getContacPersonAll')
  async getContacPersonAll(@Query() search: ContacPersonSearchVo) {
    return this.contacPersonService.getContacPersonAll(search);
  }

  @Get('/getContacPersonAllView')
  async getContacPersonAllView() {
    return this.contacPersonService.getContacPersonAllView();
  }
}
