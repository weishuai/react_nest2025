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
import { SaleContractService } from '../myservices/sale_contract_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SaleContractSearchVo, SaleContractVo } from '../myvo/sale_contract_vo';
@Controller('/saleContract')
export class SaleContractController {
  private saleContractService = new SaleContractService();
  @Post('/createSaleContract')
  async createSaleContract(@Body() saleContractVo: SaleContractVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', saleContractVo);
    return await this.saleContractService.createSaleContract(saleContractVo);
  }
  @Put('/updateSaleContract/:Id')
  async updateaSaleContract(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() saleContractVo: SaleContractVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('SaleContractVo: ', saleContractVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.saleContractService.updateaSaleContract(
      Id,
      userId,
      saleContractVo,
    );
  }
  @Get('/removeSaleContract/:Id')
  async removeSaleContract(@Param('Id') Id: string) {
    return await this.saleContractService.removeSaleContract(Id);
  }
  @Get('/getSaleContractById/:Id')
  async getSaleContractById(@Param('Id') Id: string) {
    return await this.saleContractService.getSaleContractById(Id);
  }

  @Get('/getSaleContract')
  async getSaleContractList(@Query() query) {
    //核心代码测试
    //saleContract/getSaleContract?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new SaleContractSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.saleContractService.getSaleContractList(search);
  }
  @Get('/getSaleContractAll')
  async getSaleContractAll() {
    return await this.saleContractService.getSaleContractAll();
  }
  @Get('/getSaleContractAllView')
  async getSaleContractAllView() {
    return await this.saleContractService.getSaleContractAllView();
  }

  // @Get('/getSaleContractSearch')
  // async getSaleContractSearch(@Query() search: SaleContractSearchVo) {
  //   return await this.saleContractService.getSaleContractSearch(search);
  // }

}
