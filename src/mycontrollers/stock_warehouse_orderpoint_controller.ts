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
import { StockWarehouseOrderpointService } from '../myservices/stock_warehouse_orderpoint_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StockWarehouseOrderpointSearchVo, StockWarehouseOrderpointVo } from '../myvo/stock_warehouse_orderpoint_vo';
@Controller('/stockWarehouseOrderpoint')
export class StockWarehouseOrderpointController {
  private stockWarehouseOrderpointService = new StockWarehouseOrderpointService();
  @Post('/createStockWarehouseOrderpoint')
  async createStockWarehouseOrderpoint(@Body() stockWarehouseOrderpointVo: StockWarehouseOrderpointVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', stockWarehouseOrderpointVo);
    return await this.stockWarehouseOrderpointService.createStockWarehouseOrderpoint(stockWarehouseOrderpointVo);
  }
  @Put('/updateStockWarehouseOrderpoint/:Id')
  async updateaStockWarehouseOrderpoint(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() stockWarehouseOrderpointVo: StockWarehouseOrderpointVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('StockWarehouseOrderpointVo: ', stockWarehouseOrderpointVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.stockWarehouseOrderpointService.updateaStockWarehouseOrderpoint(
      Id,
      userId,
      stockWarehouseOrderpointVo,
    );
  }
  @Get('/removeStockWarehouseOrderpoint/:Id')
  async removeStockWarehouseOrderpoint(@Param('Id') Id: string) {
    return await this.stockWarehouseOrderpointService.removeStockWarehouseOrderpoint(Id);
  }
  @Get('/getStockWarehouseOrderpointById/:Id')
  async getStockWarehouseOrderpointById(@Param('Id') Id: string) {
    return await this.stockWarehouseOrderpointService.getStockWarehouseOrderpointById(Id);
  }

  @Get('/getStockWarehouseOrderpoint')
  async getStockWarehouseOrderpointList(@Query() query) {
    //核心代码测试
    //stockWarehouseOrderpoint/getStockWarehouseOrderpoint?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new StockWarehouseOrderpointSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.stockWarehouseOrderpointService.getStockWarehouseOrderpointList(search);
  }
  @Get('/getStockWarehouseOrderpointAll')
  async getStockWarehouseOrderpointAll() {
    return await this.stockWarehouseOrderpointService.getStockWarehouseOrderpointAll();
  }
  @Get('/getStockWarehouseOrderpointAllView')
  async getStockWarehouseOrderpointAllView() {
    return await this.stockWarehouseOrderpointService.getStockWarehouseOrderpointAllView();
  }
}
