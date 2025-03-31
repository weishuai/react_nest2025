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
import { WarehouseService } from '../myservices/warehouse_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { WarehouseSearchVo, WarehouseVo } from '../myvo/warehouse_vo';
@Controller('/warehouse')
export class WarehouseController {
  private warehouseService = new WarehouseService();
  @Post('/createWarehouse')
  async createWarehouse(@Body() warehouseVo: WarehouseVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', warehouseVo);
    return await this.warehouseService.createWarehouse(warehouseVo);
  }
  @Put('/updateWarehouse/:Id')
  async updateaWarehouse(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() warehouseVo: WarehouseVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('WarehouseVo: ', warehouseVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.warehouseService.updateaWarehouse(
      Id,
      userId,
      warehouseVo,
    );
  }
  @Get('/removeWarehouse/:Id')
  async removeWarehouse(@Param('Id') Id: string) {
    return await this.warehouseService.removeWarehouse(Id);
  }
  @Get('/getWarehouseById/:Id')
  async getWarehouseById(@Param('Id') Id: string) {
    return await this.warehouseService.getWarehouseById(Id);
  }

  @Get('/getWarehouse')
  async getWarehouseList(@Query() query) {
    //核心代码测试
    //warehouse/getWarehouse?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new WarehouseSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.warehouseService.getWarehouseList(search);
  }
  @Get('/getWarehouseAll')
  async getWarehouseAll() {
    return await this.warehouseService.getWarehouseAll();
  }
  @Get('/getWarehouseAllView')
  async getWarehouseAllView() {
    return await this.warehouseService.getWarehouseAllView();
  }
}
