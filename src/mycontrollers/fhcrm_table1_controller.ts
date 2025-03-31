/*


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
import { FHcrmTable1Service } from '../myservices/fhcrm_table1_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FHcrmTable1SearchVo, FHcrmTable1Vo } from '../myvo/fhcrm_table1_vo';
import Redis from "ioredis";
const redis = new Redis({
  port: 6379,
  host: '127.0.0.1',
  //username: process.env.redisUsername,
  ///password: process.env.redisPW,
});


@Controller('/fhcrmTable1')
export class FHcrmTable1Controller {
  private fhcrmTable1Service = new FHcrmTable1Service();

 

  @Post('/createFHcrmTable1')
  async createFHcrmTable1(@Body() fhcrmTable1Vo: FHcrmTable1Vo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    await redis.lpush("my-users",fhcrmTable1Vo.name);
    console.log('ok1:999000');
    console.log('Body: ', fhcrmTable1Vo);

    return await this.fhcrmTable1Service.createFHcrmTable1(fhcrmTable1Vo);
  }
  @Put('/updateFHcrmTable1/:Id')
  async updateaFHcrmTable1(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() fhcrmTable1Vo: FHcrmTable1Vo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('FHcrmTable1Vo: ', fhcrmTable1Vo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.fhcrmTable1Service.updateaFHcrmTable1(
      Id,
      userId,
      fhcrmTable1Vo,
    );
  }
  @Get('/removeFHcrmTable1/:Id')
  async removeFHcrmTable1(@Param('Id') Id: string) {
    return await this.fhcrmTable1Service.removeFHcrmTable1(Id);
  }
  @Get('/getFHcrmTable1ById/:Id')
  async getFHcrmTable1ById(@Param('Id') Id: string) {
    const ok= await redis.lrange("my-users", 0, -1);
    console.log('ok: ',ok);
    return await this.fhcrmTable1Service.getFHcrmTable1ById(Id);
  }

  @Get('/getFHcrmTable1')
  async getFHcrmTable1List(@Query() query) {
    //核心代码测试
    //fhcrmTable1/getFHcrmTable1?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new FHcrmTable1SearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.fhcrmTable1Service.getFHcrmTable1List(search);
  }
  @Get('/getFHcrmTable1All')
  async getFHcrmTable1All(@Query() search:FHcrmTable1SearchVo) {
    return await this.fhcrmTable1Service.getFHcrmTable1All(search);
  }
  @Get('/getFHcrmTable1AllView')
  async getFHcrmTable1AllView() {
    return await this.fhcrmTable1Service.getFHcrmTable1AllView();
  }
}
*/