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
import { TbpackagService } from '../myservices/tbpackag_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TbpackagSearchVo, TbpackagVo } from '../myvo/tbpackag_vo';
@Controller('/tbpackag')
export class TbpackagController {
  private tbpackagService = new TbpackagService();
  @Post('/createTbpackag')
  async createTbpackag(@Body() tbpackagVo: TbpackagVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', tbpackagVo);
    return await this.tbpackagService.createTbpackag(tbpackagVo);
  }
  @Put('/updateTbpackag/:Id')
  async updateaTbpackag(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() tbpackagVo: TbpackagVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('TbpackagVo: ', tbpackagVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.tbpackagService.updateaTbpackag(
      Id,
      userId,
      tbpackagVo,
    );
  }
  @Get('/removeTbpackag/:Id')
  async removeTbpackag(@Param('Id') Id: string) {
    return await this.tbpackagService.removeTbpackag(Id);
  }
  @Get('/getTbpackagById/:Id')
  async getTbpackagById(@Param('Id') Id: string) {
    return await this.tbpackagService.getTbpackagById(Id);
  }

  @Get('/getTbpackag')
  async getTbpackagList(@Query() query) {
    //核心代码测试
    //tbpackag/getTbpackag?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new TbpackagSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.tbpackagService.getTbpackagList(search);
  }
  @Get('/getTbpackagAll')
  async getTbpackagAll() {
    return await this.tbpackagService.getTbpackagAll();
  }
  @Get('/getTbpackagAllView')
  async getTbpackagAllView() {
    return await this.tbpackagService.getTbpackagAllView();
  }

  // @Get('/getTbpackagSearch')
  // async getTbpackagSearch(@Query() search: TbpackagSearchVo) {
  //   return await this.tbpackagService.getTbpackagSearch(search);
  // }

}
