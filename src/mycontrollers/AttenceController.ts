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
import { AttenceService } from '../myservices/AttenceService';
import { AttenceSearchVo, AttenceVo } from '../myvo/AttenceVo';

@Controller('/attence')
export class AttenceController {
  private attenceService = new AttenceService();

  @Post('/createAttence')
  async createAttence(@Body() AttenceVo: AttenceVo) {
    return this.attenceService.createAttence(AttenceVo);
  }

  @Put('/updateAttence/:Id')
  async updateaAttence(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() AttenceVo: AttenceVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.attenceService.updateaAttence(Id, userId, AttenceVo);
  }

  @Get('/removeAttence/:Id')
  async removeAttence(@Param('Id') Id: string) {
    return this.attenceService.removeAttence([Id]);
  }

  @Get('/getAttenceById/:Id')
  async getAttenceById(@Param('Id') Id: string) {
    return this.attenceService.getAttenceById(Id);
  }

  @Get('/getAttence')
  async getAttence(@Query() search: AttenceSearchVo) {
    return this.attenceService.getAttence(search);
  }

  @Get('/getAttenceAll')
  async getAttenceAll(@Query() search: AttenceSearchVo) {
    return this.attenceService.getAttenceAll(search);
  }

  @Get('/getAttenceAllView')
  async getAttenceAllView() {
    return this.attenceService.getAttenceAllView();
  }
}
