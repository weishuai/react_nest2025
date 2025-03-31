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
import { FhmeasuringService } from '../myservices/fhmeasuring_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FhmeasuringSearchVo, FhmeasuringVo } from '../myvo/fhmeasuring_vo';
@Controller('/fhmeasuring')
export class FhmeasuringController {
  private fhmeasuringService = new FhmeasuringService();
  @Post('/createFhmeasuring')
  async createFhmeasuring(@Body() fhmeasuringVo: FhmeasuringVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', fhmeasuringVo);
    return await this.fhmeasuringService.createFhmeasuring(fhmeasuringVo);
  }
  @Put('/updateFhmeasuring/:Id')
  async updateaFhmeasuring(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() fhmeasuringVo: FhmeasuringVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('FhmeasuringVo: ', fhmeasuringVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.fhmeasuringService.updateaFhmeasuring(
      Id,
      userId,
      fhmeasuringVo,
    );
  }
  @Get('/removeFhmeasuring/:Id')
  async removeFhmeasuring(@Param('Id') Id: string) {
    return await this.fhmeasuringService.removeFhmeasuring(Id);
  }
  @Get('/getFhmeasuringById/:Id')
  async getFhmeasuringById(@Param('Id') Id: string) {
    return await this.fhmeasuringService.getFhmeasuringById(Id);
  }

  @Get('/getFhmeasuring')
  async getFhmeasuringList(@Query() query) {
    //核心代码测试
    //fhmeasuring/getFhmeasuring?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new FhmeasuringSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.fhmeasuringService.getFhmeasuringList(search);
  }
  @Get('/getFhmeasuringAll')
  async getFhmeasuringAll() {
    return await this.fhmeasuringService.getFhmeasuringAll();
  }
  @Get('/getFhmeasuringAllView')
  async getFhmeasuringAllView() {
    return await this.fhmeasuringService.getFhmeasuringAllView();
  }

  // @Get('/getFhmeasuringSearch')
  // async getFhmeasuringSearch(@Query() search: FhmeasuringSearchVo) {
  //   return await this.fhmeasuringService.getFhmeasuringSearch(search);
  // }

}
