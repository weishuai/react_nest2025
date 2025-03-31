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
import { TbreturnvisitService } from '../myservices/tbreturnvisit_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TbreturnvisitSearchVo, TbreturnvisitVo } from '../myvo/tbreturnvisit_vo';
@Controller('/tbreturnvisit')
export class TbreturnvisitController {
  private tbreturnvisitService = new TbreturnvisitService();
  @Post('/createTbreturnvisit')
  async createTbreturnvisit(@Body() tbreturnvisitVo: TbreturnvisitVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', tbreturnvisitVo);
    return await this.tbreturnvisitService.createTbreturnvisit(tbreturnvisitVo);
  }
  @Put('/updateTbreturnvisit/:Id')
  async updateaTbreturnvisit(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() tbreturnvisitVo: TbreturnvisitVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('TbreturnvisitVo: ', tbreturnvisitVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.tbreturnvisitService.updateaTbreturnvisit(
      Id,
      userId,
      tbreturnvisitVo,
    );
  }
  @Get('/removeTbreturnvisit/:Id')
  async removeTbreturnvisit(@Param('Id') Id: string) {
    return await this.tbreturnvisitService.removeTbreturnvisit(Id);
  }
  @Get('/getTbreturnvisitById/:Id')
  async getTbreturnvisitById(@Param('Id') Id: string) {
    return await this.tbreturnvisitService.getTbreturnvisitById(Id);
  }

  @Get('/getTbreturnvisit')
  async getTbreturnvisitList(@Query() query) {
    //核心代码测试
    //tbreturnvisit/getTbreturnvisit?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new TbreturnvisitSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.tbreturnvisitService.getTbreturnvisitList(search);
  }
  @Get('/getTbreturnvisitAll')
  async getTbreturnvisitAll() {
    return await this.tbreturnvisitService.getTbreturnvisitAll();
  }
  @Get('/getTbreturnvisitAllView')
  async getTbreturnvisitAllView() {
    return await this.tbreturnvisitService.getTbreturnvisitAllView();
  }

  // @Get('/getTbreturnvisitSearch')
  // async getTbreturnvisitSearch(@Query() search: TbreturnvisitSearchVo) {
  //   return await this.tbreturnvisitService.getTbreturnvisitSearch(search);
  // }

}
