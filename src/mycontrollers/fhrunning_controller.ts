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
import { FhrunningService } from '../myservices/fhrunning_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FhrunningSearchVo, FhrunningVo } from '../myvo/fhrunning_vo';
@Controller('/fhrunning')
export class FhrunningController {
  private fhrunningService = new FhrunningService();
  @Post('/createFhrunning')
  async createFhrunning(@Body() fhrunningVo: FhrunningVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', fhrunningVo);
    return await this.fhrunningService.createFhrunning(fhrunningVo);
  }
  @Put('/updateFhrunning/:Id')
  async updateaFhrunning(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() fhrunningVo: FhrunningVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('FhrunningVo: ', fhrunningVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.fhrunningService.updateaFhrunning(
      Id,
      userId,
      fhrunningVo,
    );
  }
  @Get('/removeFhrunning/:Id')
  async removeFhrunning(@Param('Id') Id: string) {
    return await this.fhrunningService.removeFhrunning(Id);
  }
  @Get('/getFhrunningById/:Id')
  async getFhrunningById(@Param('Id') Id: string) {
    return await this.fhrunningService.getFhrunningById(Id);
  }

  @Get('/getFhrunning')
  async getFhrunningList(@Query() query) {
    //核心代码测试
    //fhrunning/getFhrunning?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new FhrunningSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.fhrunningService.getFhrunningList(search);
  }
  @Get('/getFhrunningAll')
  async getFhrunningAll() {
    return await this.fhrunningService.getFhrunningAll();
  }
  @Get('/getFhrunningAllView')
  async getFhrunningAllView() {
    return await this.fhrunningService.getFhrunningAllView();
  }

  // @Get('/getFhrunningSearch')
  // async getFhrunningSearch(@Query() search: FhrunningSearchVo) {
  //   return await this.fhrunningService.getFhrunningSearch(search);
  // }

}
