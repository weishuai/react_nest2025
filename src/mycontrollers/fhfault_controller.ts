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
import { FhfaultService } from '../myservices/fhfault_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FhfaultSearchVo, FhfaultVo } from '../myvo/fhfault_vo';
@Controller('/fhfault')
export class FhfaultController {
  private fhfaultService = new FhfaultService();
  @Post('/createFhfault')
  async createFhfault(@Body() fhfaultVo: FhfaultVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', fhfaultVo);
    return await this.fhfaultService.createFhfault(fhfaultVo);
  }
  @Put('/updateFhfault/:Id')
  async updateaFhfault(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() fhfaultVo: FhfaultVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('FhfaultVo: ', fhfaultVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.fhfaultService.updateaFhfault(
      Id,
      userId,
      fhfaultVo,
    );
  }
  @Get('/removeFhfault/:Id')
  async removeFhfault(@Param('Id') Id: string) {
    return await this.fhfaultService.removeFhfault(Id);
  }
  @Get('/getFhfaultById/:Id')
  async getFhfaultById(@Param('Id') Id: string) {
    return await this.fhfaultService.getFhfaultById(Id);
  }

  @Get('/getFhfault')
  async getFhfaultList(@Query() query) {
    //核心代码测试
    //fhfault/getFhfault?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new FhfaultSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.fhfaultService.getFhfaultList(search);
  }
  @Get('/getFhfaultAll')
  async getFhfaultAll() {
    return await this.fhfaultService.getFhfaultAll();
  }
  @Get('/getFhfaultAllView')
  async getFhfaultAllView() {
    return await this.fhfaultService.getFhfaultAllView();
  }

  // @Get('/getFhfaultSearch')
  // async getFhfaultSearch(@Query() search: FhfaultSearchVo) {
  //   return await this.fhfaultService.getFhfaultSearch(search);
  // }

}
