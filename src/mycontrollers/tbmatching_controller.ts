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
import { TbmatchingService } from '../myservices/tbmatching_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TbmatchingSearchVo, TbmatchingVo } from '../myvo/tbmatching_vo';
@Controller('/tbmatching')
export class TbmatchingController {
  private tbmatchingService = new TbmatchingService();
  @Post('/createTbmatching')
  async createTbmatching(@Body() tbmatchingVo: TbmatchingVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', tbmatchingVo);
    return await this.tbmatchingService.createTbmatching(tbmatchingVo);
  }
  @Put('/updateTbmatching/:Id')
  async updateaTbmatching(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() tbmatchingVo: TbmatchingVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('TbmatchingVo: ', tbmatchingVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.tbmatchingService.updateaTbmatching(
      Id,
      userId,
      tbmatchingVo,
    );
  }
  @Get('/removeTbmatching/:Id')
  async removeTbmatching(@Param('Id') Id: string) {
    return await this.tbmatchingService.removeTbmatching(Id);
  }
  @Get('/getTbmatchingById/:Id')
  async getTbmatchingById(@Param('Id') Id: string) {
    return await this.tbmatchingService.getTbmatchingById(Id);
  }

  @Get('/getTbmatching')
  async getTbmatchingList(@Query() query) {
    //核心代码测试
    //tbmatching/getTbmatching?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new TbmatchingSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.tbmatchingService.getTbmatchingList(search);
  }
  @Get('/getTbmatchingAll')
  async getTbmatchingAll() {
    return await this.tbmatchingService.getTbmatchingAll();
  }
  @Get('/getTbmatchingAllView')
  async getTbmatchingAllView() {
    return await this.tbmatchingService.getTbmatchingAllView();
  }

  // @Get('/getTbmatchingSearch')
  // async getTbmatchingSearch(@Query() search: TbmatchingSearchVo) {
  //   return await this.tbmatchingService.getTbmatchingSearch(search);
  // }

}
