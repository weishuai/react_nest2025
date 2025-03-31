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
import { TermsMemberService } from '../myservices/TermsMemberService';
import { TermsMemberSearchVo, TermsMemberVo } from '../myvo/TermsMemberVo';

@Controller('/termsmember')
export class TermsMemberController {
  private termsMemberService = new TermsMemberService();

  @Post('/createTermsMember')
  async createTermsMember(@Body() termsMemberVo: TermsMemberVo) {
    return this.termsMemberService.createTermsMember(termsMemberVo);
  }

  @Put('/updateTermsMember/:Id')
  async updateaTermsMember(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() TermsMemberVo: TermsMemberVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.termsMemberService.updateaTermsMember(
      Id,
      userId,
      TermsMemberVo,
    );
  }

  @Get('/removeTermsMember/:Id')
  async removeTermsMember(@Param('Id') Id: string) {
    return this.termsMemberService.removeTermsMember([Id]);
  }

  @Get('/getTermsMemberById/:Id')
  async getTermsMemberById(@Param('Id') Id: string) {
    return this.termsMemberService.getTermsMemberById(Id);
  }

  @Get('/getTermsMember')
  async getTermsMember(@Query() search: TermsMemberSearchVo) {
    return this.termsMemberService.getTermsMember(search);
  }

  @Get('/getTermsMemberAll')
  async getTermsMemberAll(@Query() search: TermsMemberSearchVo) {
    return this.termsMemberService.getTermsMemberAll(search);
  }

  @Get('/getTermsMemberAllView')
  async getTermsMemberAllView() {
    return this.termsMemberService.getTermsMemberAllView();
  }
}
