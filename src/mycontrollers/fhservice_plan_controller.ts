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
import { FhservicePlanService } from '../myservices/fhservice_plan_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FhservicePlanSearchVo, FhservicePlanVo } from '../myvo/fhservice_plan_vo';
@Controller('/fhservicePlan')
export class FhservicePlanController {
  private fhservicePlanService = new FhservicePlanService();
  @Post('/createFhservicePlan')
  async createFhservicePlan(@Body() fhservicePlanVo: FhservicePlanVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', fhservicePlanVo);
    return await this.fhservicePlanService.createFhservicePlan(fhservicePlanVo);
  }
  @Put('/updateFhservicePlan/:Id')
  async updateaFhservicePlan(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() fhservicePlanVo: FhservicePlanVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('FhservicePlanVo: ', fhservicePlanVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.fhservicePlanService.updateaFhservicePlan(
      Id,
      userId,
      fhservicePlanVo,
    );
  }
  @Get('/removeFhservicePlan/:Id')
  async removeFhservicePlan(@Param('Id') Id: string) {
    return await this.fhservicePlanService.removeFhservicePlan(Id);
  }
  @Get('/getFhservicePlanById/:Id')
  async getFhservicePlanById(@Param('Id') Id: string) {
    return await this.fhservicePlanService.getFhservicePlanById(Id);
  }

  @Get('/getFhservicePlan')
  async getFhservicePlanList(@Query() query) {
    //核心代码测试
    //fhservicePlan/getFhservicePlan?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new FhservicePlanSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.fhservicePlanService.getFhservicePlanList(search);
  }
  @Get('/getFhservicePlanAll')
  async getFhservicePlanAll() {
    return await this.fhservicePlanService.getFhservicePlanAll();
  }
  @Get('/getFhservicePlanAllView')
  async getFhservicePlanAllView() {
    return await this.fhservicePlanService.getFhservicePlanAllView();
  }

  // @Get('/getFhservicePlanSearch')
  // async getFhservicePlanSearch(@Query() search: FhservicePlanSearchVo) {
  //   return await this.fhservicePlanService.getFhservicePlanSearch(search);
  // }

}
