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
import { StoragelocationService } from '../myservices/storage_location_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StoragelocationSearchVo, StoragelocationVo } from '../myvo/storage_location_vo';
@Controller('/storagelocation')
export class StoragelocationController {
  private storagelocationService = new StoragelocationService();
  @Post('/createStoragelocation')
  async createStoragelocation(@Body() storagelocationVo: StoragelocationVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', storagelocationVo);
    return await this.storagelocationService.createStoragelocation(storagelocationVo);
  }
  @Put('/updateStoragelocation/:Id')
  async updateaStoragelocation(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() storagelocationVo: StoragelocationVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('StoragelocationVo: ', storagelocationVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.storagelocationService.updateaStoragelocation(
      Id,
      userId,
      storagelocationVo,
    );
  }
  @Get('/removeStoragelocation/:Id')
  async removeStoragelocation(@Param('Id') Id: string) {
    return await this.storagelocationService.removeStoragelocation(Id);
  }
  @Get('/getStoragelocationById/:Id')
  async getStoragelocationById(@Param('Id') Id: string) {
    return await this.storagelocationService.getStoragelocationById(Id);
  }

  @Get('/getStoragelocation')
  async getStoragelocationList(@Query() query) {
    //核心代码测试
    //storagelocation/getStoragelocation?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new StoragelocationSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.storagelocationService.getStoragelocationList(search);
  }
  @Get('/getStoragelocationAll')
  async getStoragelocationAll() {
    return await this.storagelocationService.getStoragelocationAll();
  }
  @Get('/getStoragelocationAllView')
  async getStoragelocationAllView() {
    return await this.storagelocationService.getStoragelocationAllView();
  }
}
