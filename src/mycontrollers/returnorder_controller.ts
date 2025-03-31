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
import { ReturnorderService } from '../myservices/returnorder_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReturnorderSearchVo, ReturnorderVo } from '../myvo/returnorder_vo';
@Controller('/returnorder')
export class ReturnorderController {
  private returnorderService = new ReturnorderService();
  @Post('/createReturnorder')
  async createReturnorder(@Body() returnorderVo: ReturnorderVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', returnorderVo);
    return await this.returnorderService.createReturnorder(returnorderVo);
  }
  @Put('/updateReturnorder/:Id')
  async updateaReturnorder(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() returnorderVo: ReturnorderVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('ReturnorderVo: ', returnorderVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.returnorderService.updateaReturnorder(
      Id,
      userId,
      returnorderVo,
    );
  }
  @Get('/removeReturnorder/:Id')
  async removeReturnorder(@Param('Id') Id: string) {
    return await this.returnorderService.removeReturnorder(Id);
  }
  @Get('/getReturnorderById/:Id')
  async getReturnorderById(@Param('Id') Id: string) {
    return await this.returnorderService.getReturnorderById(Id);
  }

  @Get('/getReturnorder')
  async getReturnorderList(@Query() query) {
    //核心代码测试
    //returnorder/getReturnorder?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new ReturnorderSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.returnorderService.getReturnorderList(search);
  }
  @Get('/getReturnorderAll')
  async getReturnorderAll() {
    return await this.returnorderService.getReturnorderAll();
  }
  @Get('/getReturnorderAllView')
  async getReturnorderAllView() {
    return await this.returnorderService.getReturnorderAllView();
  }

  // @Get('/getReturnorderSearch')
  // async getReturnorderSearch(@Query() search: ReturnorderSearchVo) {
  //   return await this.returnorderService.getReturnorderSearch(search);
  // }

}
