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
import { SellingPriceListService } from '../myservices/selling_price_list_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SellingPriceListSearchVo, SellingPriceListVo } from '../myvo/selling_price_list_vo';
@Controller('/sellingPriceList')
export class SellingPriceListController {
  private sellingPriceListService = new SellingPriceListService();
  @Post('/createSellingPriceList')
  async createSellingPriceList(@Body() sellingPriceListVo: SellingPriceListVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', sellingPriceListVo);
    return await this.sellingPriceListService.createSellingPriceList(sellingPriceListVo);
  }
  @Put('/updateSellingPriceList/:Id')
  async updateaSellingPriceList(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() sellingPriceListVo: SellingPriceListVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('SellingPriceListVo: ', sellingPriceListVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.sellingPriceListService.updateaSellingPriceList(
      Id,
      userId,
      sellingPriceListVo,
    );
  }
  @Get('/removeSellingPriceList/:Id')
  async removeSellingPriceList(@Param('Id') Id: string) {
    return await this.sellingPriceListService.removeSellingPriceList(Id);
  }
  @Get('/getSellingPriceListById/:Id')
  async getSellingPriceListById(@Param('Id') Id: string) {
    return await this.sellingPriceListService.getSellingPriceListById(Id);
  }

  @Get('/getSellingPriceList')
  async getSellingPriceListList(@Query() query) {
    //核心代码测试
    //sellingPriceList/getSellingPriceList?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new SellingPriceListSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.sellingPriceListService.getSellingPriceListList(search);
  }
  @Get('/getSellingPriceListAll')
  async getSellingPriceListAll() {
    return await this.sellingPriceListService.getSellingPriceListAll();
  }
  @Get('/getSellingPriceListAllView')
  async getSellingPriceListAllView() {
    return await this.sellingPriceListService.getSellingPriceListAllView();
  }

  // @Get('/getSellingPriceListSearch')
  // async getSellingPriceListSearch(@Query() search: SellingPriceListSearchVo) {
  //   return await this.sellingPriceListService.getSellingPriceListSearch(search);
  // }

}
