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
import { mybomService } from '../myservices/mybom_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { mybomSearchVo, mybomVo } from '../myvo/mybom_vo';
@Controller('/mybom')
export class mybomController {
  private mybomService = new mybomService();
  @Post('/createmybom')
  async createmybom(@Body() mybomVo: mybomVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', mybomVo);
    return await this.mybomService.createmybom(mybomVo);
  }
  @Put('/updatemybom/:Id')
  async updateamybom(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() mybomVo: mybomVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('mybomVo: ', mybomVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.mybomService.updateamybom(
      Id,
      userId,
      mybomVo,
    );
  }
  @Get('/removemybom/:Id')
  async removemybom(@Param('Id') Id: string) {
    return await this.mybomService.removemybom(Id);
  }
  @Get('/getmybomById/:Id')
  async getmybomById(@Param('Id') Id: string) {
    return await this.mybomService.getmybomById(Id);
  }

  @Get('/getmybom')
  async getmybomList(@Query() query) {
    //核心代码测试
    //mybom/getmybom?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new mybomSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.mybomService.getmybomList(search);
  }
  @Get('/getmybomAll')
  async getmybomAll() {
    return await this.mybomService.getmybomAll();
  }
  @Get('/getmybomAllView')
  async getmybomAllView() {
    return await this.mybomService.getmybomAllView();
  }
}
