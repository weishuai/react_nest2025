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
import { FhtestService } from '../myservices/fhtest_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FhtestSearchVo, FhtestVo } from '../myvo/fhtest_vo';
@Controller('/fhtest')
export class FhtestController {
  private fhtestService = new FhtestService();
  @Post('/createFhtest')
  async createFhtest(@Body() fhtestVo: FhtestVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', fhtestVo);
    return await this.fhtestService.createFhtest(fhtestVo);
  }
  @Put('/updateFhtest/:Id')
  async updateaFhtest(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() fhtestVo: FhtestVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('FhtestVo: ', fhtestVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.fhtestService.updateaFhtest(
      Id,
      userId,
      fhtestVo,
    );
  }
  @Get('/removeFhtest/:Id')
  async removeFhtest(@Param('Id') Id: string) {
    return await this.fhtestService.removeFhtest(Id);
  }
  @Get('/getFhtestById/:Id')
  async getFhtestById(@Param('Id') Id: string) {
    return await this.fhtestService.getFhtestById(Id);
  }

  @Get('/getFhtest')
  async getFhtestList(@Query() query) {
    //核心代码测试
    //fhtest/getFhtest?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new FhtestSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.fhtestService.getFhtestList(search);
  }
  @Get('/getFhtestAll')
  async getFhtestAll() {
    return await this.fhtestService.getFhtestAll();
  }
  @Get('/getFhtestAllView')
  async getFhtestAllView() {
    return await this.fhtestService.getFhtestAllView();
  }

  // @Get('/getFhtestSearch')
  // async getFhtestSearch(@Query() search: FhtestSearchVo) {
  //   return await this.fhtestService.getFhtestSearch(search);
  // }

}
