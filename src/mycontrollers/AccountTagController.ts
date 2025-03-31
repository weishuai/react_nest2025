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
import { CurrentUserToken } from '../myutils/current.user.token';
import _ from 'lodash';
import { AccountTagService } from '../myservices/account.tag.service';
import { AccountTagSearchVo, AccountTagVo } from '../myvo/account.tgvo';

@Controller('/accountTag')
export class AccountTagController {
  private accountTagService = new AccountTagService();

  @Post('/createAccountTag')
  async createAccountTag(@Body() AccountTagVo: AccountTagVo) {
    return this.accountTagService.createAccountTag(AccountTagVo);
  }

  @Put('/updateAccountTag/:Id')
  async updateaAccountTag(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() AccountTagVo: AccountTagVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.accountTagService.updateaAccountTag(Id, userId, AccountTagVo);
  }

  @Get('/removeAccountTag/:Id')
  async removeAccountTag(@Param('Id') Id: string) {
    return this.accountTagService.removeAccountTag(Id);
  }

  @Get('/getAccountTagById/:Id')
  async getAccountTagById(@Param('Id') Id: string) {
    return this.accountTagService.getAccountTagById(Id);
  }

  @Get('/getAccountTag')
  async getAccountTag(@Query() search: AccountTagSearchVo) {
    return this.accountTagService.getAccountTagList(search);
  }

  @Get('/getAccountTagAll')
  async getAccountTagAll(@Query() search: AccountTagSearchVo) {
    return this.accountTagService.getAccountTagAll(search);
  }

  @Get('/getAccountTagAllView')
  async getAccountTagAllViewOK() {
    return this.accountTagService.getAccountTagAllView();
  }
}
