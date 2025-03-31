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
import { FhreformService } from '../myservices/fhreform_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FhreformSearchVo, FhreformVo } from '../myvo/fhreform_vo';
@Controller('/fhreform')
export class FhreformController {
  private fhreformService = new FhreformService();
  @Post('/createFhreform')
  async createFhreform(@Body() fhreformVo: FhreformVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', fhreformVo);
    return await this.fhreformService.createFhreform(fhreformVo);
  }
  @Put('/updateFhreform/:Id')
  async updateaFhreform(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() fhreformVo: FhreformVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('FhreformVo: ', fhreformVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.fhreformService.updateaFhreform(
      Id,
      userId,
      fhreformVo,
    );
  }
  @Get('/removeFhreform/:Id')
  async removeFhreform(@Param('Id') Id: string) {
    return await this.fhreformService.removeFhreform(Id);
  }
  @Get('/getFhreformById/:Id')
  async getFhreformById(@Param('Id') Id: string) {
    return await this.fhreformService.getFhreformById(Id);
  }

  @Get('/getFhreform')
  async getFhreformList(@Query() query) {
    //核心代码测试
    //fhreform/getFhreform?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new FhreformSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.fhreformService.getFhreformList(search);
  }
  @Get('/getFhreformAll')
  async getFhreformAll() {
    return await this.fhreformService.getFhreformAll();
  }
  @Get('/getFhreformAllView')
  async getFhreformAllView() {
    return await this.fhreformService.getFhreformAllView();
  }

  // @Get('/getFhreformSearch')
  // async getFhreformSearch(@Query() search: FhreformSearchVo) {
  //   return await this.fhreformService.getFhreformSearch(search);
  // }

}
