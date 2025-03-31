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
import { StockValuationLayerService } from '../myservices/stock_valuation_layer_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StockValuationLayerSearchVo, StockValuationLayerVo } from '../myvo/stock_valuation_layer_vo';
@Controller('/stockValuationLayer')
export class StockValuationLayerController {
  private stockValuationLayerService = new StockValuationLayerService();
  @Post('/createStockValuationLayer')
  async createStockValuationLayer(@Body() stockValuationLayerVo: StockValuationLayerVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', stockValuationLayerVo);
    return await this.stockValuationLayerService.createStockValuationLayer(stockValuationLayerVo);
  }
  @Put('/updateStockValuationLayer/:Id')
  async updateaStockValuationLayer(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() stockValuationLayerVo: StockValuationLayerVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('StockValuationLayerVo: ', stockValuationLayerVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.stockValuationLayerService.updateaStockValuationLayer(
      Id,
      userId,
      stockValuationLayerVo,
    );
  }
  @Get('/removeStockValuationLayer/:Id')
  async removeStockValuationLayer(@Param('Id') Id: string) {
    return await this.stockValuationLayerService.removeStockValuationLayer(Id);
  }
  @Get('/getStockValuationLayerById/:Id')
  async getStockValuationLayerById(@Param('Id') Id: string) {
    return await this.stockValuationLayerService.getStockValuationLayerById(Id);
  }

  @Get('/getStockValuationLayer')
  async getStockValuationLayerList(@Query() query) {
    //核心代码测试
    //stockValuationLayer/getStockValuationLayer?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new StockValuationLayerSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.stockValuationLayerService.getStockValuationLayerList(search);
  }
  @Get('/getStockValuationLayerAll')
  async getStockValuationLayerAll() {
    return await this.stockValuationLayerService.getStockValuationLayerAll();
  }
  @Get('/getStockValuationLayerAllView')
  async getStockValuationLayerAllView() {
    return await this.stockValuationLayerService.getStockValuationLayerAllView();
  }
}
