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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AccountTagSearchVo, AccountTagVo } from '../myvo/account.tgvo';
@Controller('/accountTag')
export class AccountTagController {
  private accountTagService = new AccountTagService();
  @Post('/createAccountTag')
  async createAccountTag(@Body() AccountTagVo: AccountTagVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', AccountTagVo);
    return await this.accountTagService.createAccountTag(AccountTagVo);
  }
  @Put('/updateAccountTag/:Id')
  async updateaAccountTag(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() AccountTagVo: AccountTagVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('AccountTagVo: ', AccountTagVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.accountTagService.updateaAccountTag(
      Id,
      userId,
      AccountTagVo,
    );
  }
  @Get('/removeAccountTag/:Id')
  async removeAccountTag(@Param('Id') Id: string) {
    return await this.accountTagService.removeAccountTag(Id);
  }
  @Get('/getAccountTagById/:Id')
  async getAccountTagById(@Param('Id') Id: string) {
    return await this.accountTagService.getAccountTagById(Id);
  }

  @Get('/getAccountTag')
  async getAccountTagList(@Query() query) {
    //核心代码测试
    //accountTag/getAccountTag?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new AccountTagSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.accountTagService.getAccountTagList(search);
  }
  @Get('/getAccountTagAll')
  async getAccountTagAll(@Query() search: AccountTagSearchVo) {
    return await this.accountTagService.getAccountTagAll(search);
  }
  @Get('/getAccountTagAllView')
  async getAccountTagAllView() {
    return await this.accountTagService.getAccountTagAllView();
  }
}
