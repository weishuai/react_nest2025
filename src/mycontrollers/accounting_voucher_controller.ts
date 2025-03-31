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
import { AccountingVoucherService } from '../myservices/accounting_voucher_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AccountingVoucherSearchVo, AccountingVoucherVo } from '../myvo/accounting_voucher_vo';
@Controller('/accountingVoucher')
export class AccountingVoucherController {
  private accountingVoucherService = new AccountingVoucherService();
  @Post('/createAccountingVoucher')
  async createAccountingVoucher(@Body() accountingVoucherVo: AccountingVoucherVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', accountingVoucherVo);
    return await this.accountingVoucherService.createAccountingVoucher(accountingVoucherVo);
  }
  @Put('/updateAccountingVoucher/:Id')
  async updateaAccountingVoucher(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() accountingVoucherVo: AccountingVoucherVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('AccountingVoucherVo: ', accountingVoucherVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.accountingVoucherService.updateaAccountingVoucher(
      Id,
      userId,
      accountingVoucherVo,
    );
  }
  @Get('/removeAccountingVoucher/:Id')
  async removeAccountingVoucher(@Param('Id') Id: string) {
    return await this.accountingVoucherService.removeAccountingVoucher(Id);
  }
  @Get('/getAccountingVoucherById/:Id')
  async getAccountingVoucherById(@Param('Id') Id: string) {
    return await this.accountingVoucherService.getAccountingVoucherById(Id);
  }

  @Get('/getAccountingVoucher')
  async getAccountingVoucherList(@Query() query) {
    //核心代码测试
    //accountingVoucher/getAccountingVoucher?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new AccountingVoucherSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.accountingVoucherService.getAccountingVoucherList(search);
  }
  @Get('/getAccountingVoucherAll')
  async getAccountingVoucherAll() {
    return await this.accountingVoucherService.getAccountingVoucherAll();
  }
  @Get('/getAccountingVoucherAllView')
  async getAccountingVoucherAllView() {
    return await this.accountingVoucherService.getAccountingVoucherAllView();
  }
}
