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
import { ProcurePriceService } from '../myservices/procure_price_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ProcurePriceSearchVo, ProcurePriceVo } from '../myvo/procure_price_vo';
@Controller('/procurePrice')
export class ProcurePriceController {
  private procurePriceService = new ProcurePriceService();
  @Post('/createProcurePrice')
  async createProcurePrice(@Body() procurePriceVo: ProcurePriceVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', procurePriceVo);
    return await this.procurePriceService.createProcurePrice(procurePriceVo);
  }
  @Put('/updateProcurePrice/:Id')
  async updateaProcurePrice(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() procurePriceVo: ProcurePriceVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('ProcurePriceVo: ', procurePriceVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.procurePriceService.updateaProcurePrice(
      Id,
      userId,
      procurePriceVo,
    );
  }
  @Get('/removeProcurePrice/:Id')
  async removeProcurePrice(@Param('Id') Id: string) {
    return await this.procurePriceService.removeProcurePrice(Id);
  }
  @Get('/getProcurePriceById/:Id')
  async getProcurePriceById(@Param('Id') Id: string) {
    return await this.procurePriceService.getProcurePriceById(Id);
  }

  @Get('/getProcurePrice')
  async getProcurePriceList(@Query() query) {
    //核心代码测试
    //procurePrice/getProcurePrice?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new ProcurePriceSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.procurePriceService.getProcurePriceList(search);
  }
  @Get('/getProcurePriceAll')
  async getProcurePriceAll() {
    return await this.procurePriceService.getProcurePriceAll();
  }
  @Get('/getProcurePriceAllView')
  async getProcurePriceAllView() {
    return await this.procurePriceService.getProcurePriceAllView();
  }

  // @Get('/getProcurePriceSearch')
  // async getProcurePriceSearch(@Query() search: ProcurePriceSearchVo) {
  //   return await this.procurePriceService.getProcurePriceSearch(search);
  // }

}
