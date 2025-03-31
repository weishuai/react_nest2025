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
import { InventoryService } from '../myservices/inventory_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { InventorySearchVo, InventoryVo } from '../myvo/inventory_vo';
@Controller('/inventory')
export class InventoryController {
  private inventoryService = new InventoryService();
  @Post('/createInventory')
  async createInventory(@Body() inventoryVo: InventoryVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', inventoryVo);
    return await this.inventoryService.createInventory(inventoryVo);
  }
  @Put('/updateInventory/:Id')
  async updateaInventory(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() inventoryVo: InventoryVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('InventoryVo: ', inventoryVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.inventoryService.updateaInventory(
      Id,
      userId,
      inventoryVo,
    );
  }
  @Get('/removeInventory/:Id')
  async removeInventory(@Param('Id') Id: string) {
    return await this.inventoryService.removeInventory(Id);
  }
  @Get('/getInventoryById/:Id')
  async getInventoryById(@Param('Id') Id: string) {
    return await this.inventoryService.getInventoryById(Id);
  }

  @Get('/getInventory')
  async getInventoryList(@Query() query) {
    //核心代码测试
    //inventory/getInventory?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new InventorySearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.inventoryService.getInventoryList(search);
  }
  @Get('/getInventoryAll')
  async getInventoryAll() {
    return await this.inventoryService.getInventoryAll();
  }
  @Get('/getInventoryAllView')
  async getInventoryAllView() {
    return await this.inventoryService.getInventoryAllView();
  }
}
