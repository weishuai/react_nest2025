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
import { InventoryListService } from '../myservices/inventory_list_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { InventoryListSearchVo, InventoryListVo } from '../myvo/inventory_list_vo';
@Controller('/inventoryList')
export class InventoryListController {
  private inventoryListService = new InventoryListService();
  @Post('/createInventoryList')
  async createInventoryList(@Body() inventoryListVo: InventoryListVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', inventoryListVo);
    return await this.inventoryListService.createInventoryList(inventoryListVo);
  }
  @Put('/updateInventoryList/:Id')
  async updateaInventoryList(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() inventoryListVo: InventoryListVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('InventoryListVo: ', inventoryListVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.inventoryListService.updateaInventoryList(
      Id,
      userId,
      inventoryListVo,
    );
  }
  @Get('/removeInventoryList/:Id')
  async removeInventoryList(@Param('Id') Id: string) {
    return await this.inventoryListService.removeInventoryList(Id);
  }
  @Get('/getInventoryListById/:Id')
  async getInventoryListById(@Param('Id') Id: string) {
    return await this.inventoryListService.getInventoryListById(Id);
  }

  @Get('/getInventoryList')
  async getInventoryListList(@Query() query) {
    //核心代码测试
    //inventoryList/getInventoryList?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new InventoryListSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.inventoryListService.getInventoryListList(search);
  }
  @Get('/getInventoryListAll')
  async getInventoryListAll() {
    return await this.inventoryListService.getInventoryListAll();
  }
  @Get('/getInventoryListAllView')
  async getInventoryListAllView() {
    return await this.inventoryListService.getInventoryListAllView();
  }
}
