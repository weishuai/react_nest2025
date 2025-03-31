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
import { StockQuantService } from '../myservices/stock_quant_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StockQuantSearchVo, StockQuantVo } from '../myvo/stock_quant_vo';
@Controller('/stockQuant')
export class StockQuantController {
  private stockQuantService = new StockQuantService();
  @Post('/createStockQuant')
  async createStockQuant(@Body() stockQuantVo: StockQuantVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', stockQuantVo);
    return await this.stockQuantService.createStockQuant(stockQuantVo);
  }
  @Put('/updateStockQuant/:Id')
  async updateaStockQuant(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() stockQuantVo: StockQuantVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('StockQuantVo: ', stockQuantVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.stockQuantService.updateaStockQuant(
      Id,
      userId,
      stockQuantVo,
    );
  }
  @Get('/removeStockQuant/:Id')
  async removeStockQuant(@Param('Id') Id: string) {
    return await this.stockQuantService.removeStockQuant(Id);
  }
  @Get('/getStockQuantById/:Id')
  async getStockQuantById(@Param('Id') Id: string) {
    return await this.stockQuantService.getStockQuantById(Id);
  }

  @Get('/getStockQuant')
  async getStockQuantList(@Query() query) {
    //核心代码测试
    //stockQuant/getStockQuant?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new StockQuantSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.stockQuantService.getStockQuantList(search);
  }
  @Get('/getStockQuantAll')
  async getStockQuantAll() {
    return await this.stockQuantService.getStockQuantAll();
  }
  @Get('/getStockQuantAllView')
  async getStockQuantAllView() {
    return await this.stockQuantService.getStockQuantAllView();
  }
}
