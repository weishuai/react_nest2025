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
import { ParameterService } from '../myservices/ParameterService';
import { ParameterSearchVo, ParameterVo } from '../myvo/ParameterVo';

@Controller('/parameter')
export class ParameterController {
  private parameterService = new ParameterService();

  @Post('/createParameter')
  async createParameter(@Body() ParameterVo: ParameterVo) {
    return this.parameterService.createParameter(ParameterVo);
  }

  @Put('/updateParameter/:Id')
  async updateaParameter(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() ParameterVo: ParameterVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.parameterService.updateaParameter(Id, userId, ParameterVo);
  }

  @Get('/removeParameter/:Id')
  async removeParameter(@Param('Id') Id: string) {
    return this.parameterService.removeParameter([Id]);
  }

  @Get('/getParameterById/:Id')
  async getParameterById(@Param('Id') Id: string) {
    return this.parameterService.getParameterById(Id);
  }

  @Get('/getParameter')
  async getParameter(@Query() search: ParameterSearchVo) {
    return this.parameterService.getParameter(search);
  }

  @Get('/getParameterAll')
  async getParameterAll(@Query() search: ParameterSearchVo) {
    return await this.parameterService.getParameterAll(search);
  }

  @Get('/getParameterAllView')
  async getParameterAllView() {
    return this.parameterService.getParameterAllView();
  }
}
