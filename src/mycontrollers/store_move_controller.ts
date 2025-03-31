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
import { StoreMoveService } from '../myservices/store_move_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StoreMoveSearchVo, StoreMoveVo } from '../myvo/store_move_vo';
@Controller('/storeMove')
export class StoreMoveController {
  private storeMoveService = new StoreMoveService();
  @Post('/createStoreMove')
  async createStoreMove(@Body() storeMoveVo: StoreMoveVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', storeMoveVo);
    return await this.storeMoveService.createStoreMove(storeMoveVo);
  }
  @Put('/updateStoreMove/:Id')
  async updateaStoreMove(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() storeMoveVo: StoreMoveVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('StoreMoveVo: ', storeMoveVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.storeMoveService.updateaStoreMove(
      Id,
      userId,
      storeMoveVo,
    );
  }
  @Get('/removeStoreMove/:Id')
  async removeStoreMove(@Param('Id') Id: string) {
    return await this.storeMoveService.removeStoreMove(Id);
  }
  @Get('/getStoreMoveById/:Id')
  async getStoreMoveById(@Param('Id') Id: string) {
    return await this.storeMoveService.getStoreMoveById(Id);
  }

  @Get('/getStoreMove')
  async getStoreMoveList(@Query() query) {
    //核心代码测试
    //storeMove/getStoreMove?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new StoreMoveSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.storeMoveService.getStoreMoveList(search);
  }
  @Get('/getStoreMoveAll')
  async getStoreMoveAll() {
    return await this.storeMoveService.getStoreMoveAll();
  }
  @Get('/getStoreMoveAllView')
  async getStoreMoveAllView() {
    return await this.storeMoveService.getStoreMoveAllView();
  }
}
