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
import { StoreMoveListService } from '../myservices/store_move_list_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StoreMoveListSearchVo, StoreMoveListVo } from '../myvo/store_move_list_vo';
@Controller('/storeMoveList')
export class StoreMoveListController {
  private storeMoveListService = new StoreMoveListService();
  @Post('/createStoreMoveList')
  async createStoreMoveList(@Body() storeMoveListVo: StoreMoveListVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', storeMoveListVo);
    return await this.storeMoveListService.createStoreMoveList(storeMoveListVo);
  }
  @Put('/updateStoreMoveList/:Id')
  async updateaStoreMoveList(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() storeMoveListVo: StoreMoveListVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('StoreMoveListVo: ', storeMoveListVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.storeMoveListService.updateaStoreMoveList(
      Id,
      userId,
      storeMoveListVo,
    );
  }
  @Get('/removeStoreMoveList/:Id')
  async removeStoreMoveList(@Param('Id') Id: string) {
    return await this.storeMoveListService.removeStoreMoveList(Id);
  }
  @Get('/getStoreMoveListById/:Id')
  async getStoreMoveListById(@Param('Id') Id: string) {
    return await this.storeMoveListService.getStoreMoveListById(Id);
  }

  @Get('/getStoreMoveList')
  async getStoreMoveListList(@Query() query) {
    //核心代码测试
    //storeMoveList/getStoreMoveList?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new StoreMoveListSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.storeMoveListService.getStoreMoveListList(search);
  }
  @Get('/getStoreMoveListAll')
  async getStoreMoveListAll() {
    return await this.storeMoveListService.getStoreMoveListAll();
  }
  @Get('/getStoreMoveListAllView')
  async getStoreMoveListAllView() {
    return await this.storeMoveListService.getStoreMoveListAllView();
  }

  // @Get('/getStoreMoveListSearch')
  // async getStoreMoveListSearch(@Query() search: StoreMoveListSearchVo) {
  //   return await this.storeMoveListService.getStoreMoveListSearch(search);
  // }

}
