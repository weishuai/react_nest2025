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
import { TbaftersaleService } from '../myservices/tbaftersale_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TbaftersaleSearchVo, TbaftersaleVo } from '../myvo/tbaftersale_vo';
@Controller('/tbaftersale')
export class TbaftersaleController {
  private tbaftersaleService = new TbaftersaleService();
  @Post('/createTbaftersale')
  async createTbaftersale(@Body() tbaftersaleVo: TbaftersaleVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', tbaftersaleVo);
    return await this.tbaftersaleService.createTbaftersale(tbaftersaleVo);
  }
  @Put('/updateTbaftersale/:Id')
  async updateaTbaftersale(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() tbaftersaleVo: TbaftersaleVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('TbaftersaleVo: ', tbaftersaleVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.tbaftersaleService.updateaTbaftersale(
      Id,
      userId,
      tbaftersaleVo,
    );
  }
  @Get('/removeTbaftersale/:Id')
  async removeTbaftersale(@Param('Id') Id: string) {
    return await this.tbaftersaleService.removeTbaftersale(Id);
  }
  @Get('/getTbaftersaleById/:Id')
  async getTbaftersaleById(@Param('Id') Id: string) {
    return await this.tbaftersaleService.getTbaftersaleById(Id);
  }

  @Get('/getTbaftersale')
  async getTbaftersaleList(@Query() query) {
    //核心代码测试
    //tbaftersale/getTbaftersale?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new TbaftersaleSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.tbaftersaleService.getTbaftersaleList(search);
  }
  @Get('/getTbaftersaleAll')
  async getTbaftersaleAll() {
    return await this.tbaftersaleService.getTbaftersaleAll();
  }
  @Get('/getTbaftersaleAllView')
  async getTbaftersaleAllView() {
    return await this.tbaftersaleService.getTbaftersaleAllView();
  }

  // @Get('/getTbaftersaleSearch')
  // async getTbaftersaleSearch(@Query() search: TbaftersaleSearchVo) {
  //   return await this.tbaftersaleService.getTbaftersaleSearch(search);
  // }

}
