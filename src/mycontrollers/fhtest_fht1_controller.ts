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
import { FhtestFht1Service } from '../myservices/fhtest_fht1_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FhtestFht1SearchVo, FhtestFht1Vo } from '../myvo/fhtest_fht1_vo';
@Controller('/fhtestFht1')
export class FhtestFht1Controller {
  private fhtestFht1Service = new FhtestFht1Service();
  @Post('/createFhtestFht1')
  async createFhtestFht1(@Body() fhtestFht1Vo: FhtestFht1Vo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', fhtestFht1Vo);
    return await this.fhtestFht1Service.createFhtestFht1(fhtestFht1Vo);
  }
  @Put('/updateFhtestFht1/:Id')
  async updateaFhtestFht1(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() fhtestFht1Vo: FhtestFht1Vo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('FhtestFht1Vo: ', fhtestFht1Vo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.fhtestFht1Service.updateaFhtestFht1(
      Id,
      userId,
      fhtestFht1Vo,
    );
  }
  @Get('/removeFhtestFht1/:Id')
  async removeFhtestFht1(@Param('Id') Id: string) {
    return await this.fhtestFht1Service.removeFhtestFht1(Id);
  }
  @Get('/getFhtestFht1ById/:Id')
  async getFhtestFht1ById(@Param('Id') Id: string) {
    return await this.fhtestFht1Service.getFhtestFht1ById(Id);
  }

  @Get('/getFhtestFht1')
  async getFhtestFht1List(@Query() query) {
    //核心代码测试
    //fhtestFht1/getFhtestFht1?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new FhtestFht1SearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.fhtestFht1Service.getFhtestFht1List(search);
  }
  @Get('/getFhtestFht1All')
  async getFhtestFht1All() {
    return await this.fhtestFht1Service.getFhtestFht1All();
  }
  @Get('/getFhtestFht1AllView')
  async getFhtestFht1AllView() {
    return await this.fhtestFht1Service.getFhtestFht1AllView();
  }

  // @Get('/getFhtestFht1Search')
  // async getFhtestFht1Search(@Query() search: FhtestFht1SearchVo) {
  //   return await this.fhtestFht1Service.getFhtestFht1Search(search);
  // }

}
