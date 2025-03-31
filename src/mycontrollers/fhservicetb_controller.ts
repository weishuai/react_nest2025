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
import { FhservicetbService } from '../myservices/fhservicetb_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FhservicetbSearchVo, FhservicetbVo } from '../myvo/fhservicetb_vo';
@Controller('/fhservicetb')
export class FhservicetbController {
  private fhservicetbService = new FhservicetbService();
  @Post('/createFhservicetb')
  async createFhservicetb(@Body() fhservicetbVo: FhservicetbVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', fhservicetbVo);
    return await this.fhservicetbService.createFhservicetb(fhservicetbVo);
  }
  @Put('/updateFhservicetb/:Id')
  async updateaFhservicetb(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() fhservicetbVo: FhservicetbVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('FhservicetbVo: ', fhservicetbVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.fhservicetbService.updateaFhservicetb(
      Id,
      userId,
      fhservicetbVo,
    );
  }
  @Get('/removeFhservicetb/:Id')
  async removeFhservicetb(@Param('Id') Id: string) {
    return await this.fhservicetbService.removeFhservicetb(Id);
  }
  @Get('/getFhservicetbById/:Id')
  async getFhservicetbById(@Param('Id') Id: string) {
    return await this.fhservicetbService.getFhservicetbById(Id);
  }

  @Get('/getFhservicetb')
  async getFhservicetbList(@Query() query) {
    //核心代码测试
    //fhservicetb/getFhservicetb?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new FhservicetbSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.fhservicetbService.getFhservicetbList(search);
  }
  @Get('/getFhservicetbAll')
  async getFhservicetbAll() {
    return await this.fhservicetbService.getFhservicetbAll();
  }
  @Get('/getFhservicetbAllView')
  async getFhservicetbAllView() {
    return await this.fhservicetbService.getFhservicetbAllView();
  }

  // @Get('/getFhservicetbSearch')
  // async getFhservicetbSearch(@Query() search: FhservicetbSearchVo) {
  //   return await this.fhservicetbService.getFhservicetbSearch(search);
  // }

}
