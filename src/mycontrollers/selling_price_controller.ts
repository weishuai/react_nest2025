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
import { SellingPriceService } from '../myservices/selling_price_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SellingPriceSearchVo, SellingPriceVo } from '../myvo/selling_price_vo';
@Controller('/sellingPrice')
export class SellingPriceController {
  private sellingPriceService = new SellingPriceService();
  @Post('/createSellingPrice')
  async createSellingPrice(@Body() sellingPriceVo: SellingPriceVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', sellingPriceVo);
    return await this.sellingPriceService.createSellingPrice(sellingPriceVo);
  }
  @Put('/updateSellingPrice/:Id')
  async updateaSellingPrice(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() sellingPriceVo: SellingPriceVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('SellingPriceVo: ', sellingPriceVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.sellingPriceService.updateaSellingPrice(
      Id,
      userId,
      sellingPriceVo,
    );
  }
  @Get('/removeSellingPrice/:Id')
  async removeSellingPrice(@Param('Id') Id: string) {
    return await this.sellingPriceService.removeSellingPrice(Id);
  }
  @Get('/getSellingPriceById/:Id')
  async getSellingPriceById(@Param('Id') Id: string) {
    return await this.sellingPriceService.getSellingPriceById(Id);
  }

  @Get('/getSellingPrice')
  async getSellingPriceList(@Query() query) {
    //核心代码测试
    //sellingPrice/getSellingPrice?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new SellingPriceSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.sellingPriceService.getSellingPriceList(search);
  }
  @Get('/getSellingPriceAll')
  async getSellingPriceAll() {
    return await this.sellingPriceService.getSellingPriceAll();
  }
  @Get('/getSellingPriceAllView')
  async getSellingPriceAllView() {
    return await this.sellingPriceService.getSellingPriceAllView();
  }

  // @Get('/getSellingPriceSearch')
  // async getSellingPriceSearch(@Query() search: SellingPriceSearchVo) {
  //   return await this.sellingPriceService.getSellingPriceSearch(search);
  // }

}
