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
import { AccountingVoucherListService } from '../myservices/accounting_voucher_list_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AccountingVoucherListSearchVo, AccountingVoucherListVo } from '../myvo/accounting_voucher_list_vo';
@Controller('/accountingVoucherList')
export class AccountingVoucherListController {
  private accountingVoucherListService = new AccountingVoucherListService();
  @Post('/createAccountingVoucherList')
  async createAccountingVoucherList(@Body() accountingVoucherListVo: AccountingVoucherListVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', accountingVoucherListVo);
    return await this.accountingVoucherListService.createAccountingVoucherList(accountingVoucherListVo);
  }
  @Put('/updateAccountingVoucherList/:Id')
  async updateaAccountingVoucherList(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() accountingVoucherListVo: AccountingVoucherListVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('AccountingVoucherListVo: ', accountingVoucherListVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.accountingVoucherListService.updateaAccountingVoucherList(
      Id,
      userId,
      accountingVoucherListVo,
    );
  }
  @Get('/removeAccountingVoucherList/:Id')
  async removeAccountingVoucherList(@Param('Id') Id: string) {
    return await this.accountingVoucherListService.removeAccountingVoucherList(Id);
  }
  @Get('/getAccountingVoucherListById/:Id')
  async getAccountingVoucherListById(@Param('Id') Id: string) {
    return await this.accountingVoucherListService.getAccountingVoucherListById(Id);
  }

  @Get('/getAccountingVoucherList')
  async getAccountingVoucherListList(@Query() query) {
    //核心代码测试
    //accountingVoucherList/getAccountingVoucherList?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new AccountingVoucherListSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.accountingVoucherListService.getAccountingVoucherListList(search);
  }
  @Get('/getAccountingVoucherListAll')
  async getAccountingVoucherListAll() {
    return await this.accountingVoucherListService.getAccountingVoucherListAll();
  }
  @Get('/getAccountingVoucherListAllView')
  async getAccountingVoucherListAllView() {
    return await this.accountingVoucherListService.getAccountingVoucherListAllView();
  }
}
