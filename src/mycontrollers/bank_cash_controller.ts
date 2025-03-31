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
import { BankCashService } from '../myservices/bank_cash_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BankCashSearchVo, BankCashVo } from '../myvo/bank_cash_vo';
@Controller('/bankCash')
export class BankCashController {
  private bankCashService = new BankCashService();
  @Post('/createBankCash')
  async createBankCash(@Body() bankCashVo: BankCashVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', bankCashVo);
    return await this.bankCashService.createBankCash(bankCashVo);
  }
  @Put('/updateBankCash/:Id')
  async updateaBankCash(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() bankCashVo: BankCashVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('BankCashVo: ', bankCashVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.bankCashService.updateaBankCash(
      Id,
      userId,
      bankCashVo,
    );
  }
  @Get('/removeBankCash/:Id')
  async removeBankCash(@Param('Id') Id: string) {
    return await this.bankCashService.removeBankCash(Id);
  }
  @Get('/getBankCashById/:Id')
  async getBankCashById(@Param('Id') Id: string) {
    return await this.bankCashService.getBankCashById(Id);
  }

  @Get('/getBankCash')
  async getBankCashList(@Query() query) {
    //核心代码测试
    //bankCash/getBankCash?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new BankCashSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.bankCashService.getBankCashList(search);
  }
  @Get('/getBankCashAll')
  async getBankCashAll() {
    return await this.bankCashService.getBankCashAll();
  }
  @Get('/getBankCashAllView')
  async getBankCashAllView() {
    return await this.bankCashService.getBankCashAllView();
  }
}
