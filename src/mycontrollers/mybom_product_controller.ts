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
import { myBomProductService } from '../myservices/mybom_product_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { myBomProductSearchVo, myBomProductVo } from '../myvo/mybom_product_vo';
@Controller('/mybomProduct')
export class myBomProductController {
  private mybomProductService = new myBomProductService();
  @Post('/createmyBomProduct')
  async createmyBomProduct(@Body() mybomProductVo: myBomProductVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', mybomProductVo);
    return await this.mybomProductService.createmyBomProduct(mybomProductVo);
  }
  @Put('/updatemyBomProduct/:Id')
  async updateamyBomProduct(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() mybomProductVo: myBomProductVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('myBomProductVo: ', mybomProductVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.mybomProductService.updateamyBomProduct(
      Id,
      userId,
      mybomProductVo,
    );
  }
  @Get('/removemyBomProduct/:Id')
  async removemyBomProduct(@Param('Id') Id: string) {
    return await this.mybomProductService.removemyBomProduct(Id);
  }
  @Get('/getmyBomProductById/:Id')
  async getmyBomProductById(@Param('Id') Id: string) {
    return await this.mybomProductService.getmyBomProductById(Id);
  }

  @Get('/getmyBomProduct')
  async getmyBomProductList(@Query() query) {
    //核心代码测试
    //mybomProduct/getmyBomProduct?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new myBomProductSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.mybomProductService.getmyBomProductList(search);
  }
  @Get('/getmyBomProductAll')
  async getmyBomProductAll() {
    return await this.mybomProductService.getmyBomProductAll();
  }
  @Get('/getmyBomProductAllView')
  async getmyBomProductAllView() {
    return await this.mybomProductService.getmyBomProductAllView();
  }
}
