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
import { ProcurePlanService } from '../myservices/procure_plan_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ProcurePlanSearchVo, ProcurePlanVo } from '../myvo/procure_plan_vo';
@Controller('/procurePlan')
export class ProcurePlanController {
  private procurePlanService = new ProcurePlanService();
  @Post('/createProcurePlan')
  async createProcurePlan(@Body() procurePlanVo: ProcurePlanVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', procurePlanVo);
    return await this.procurePlanService.createProcurePlan(procurePlanVo);
  }
  @Put('/updateProcurePlan/:Id')
  async updateaProcurePlan(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() procurePlanVo: ProcurePlanVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('ProcurePlanVo: ', procurePlanVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.procurePlanService.updateaProcurePlan(
      Id,
      userId,
      procurePlanVo,
    );
  }
  @Get('/removeProcurePlan/:Id')
  async removeProcurePlan(@Param('Id') Id: string) {
    return await this.procurePlanService.removeProcurePlan(Id);
  }
  @Get('/getProcurePlanById/:Id')
  async getProcurePlanById(@Param('Id') Id: string) {
    return await this.procurePlanService.getProcurePlanById(Id);
  }

  @Get('/getProcurePlan')
  async getProcurePlanList(@Query() query) {
    //核心代码测试
    //procurePlan/getProcurePlan?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new ProcurePlanSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.procurePlanService.getProcurePlanList(search);
  }
  @Get('/getProcurePlanAll')
  async getProcurePlanAll() {
    return await this.procurePlanService.getProcurePlanAll();
  }
  @Get('/getProcurePlanAllView')
  async getProcurePlanAllView() {
    return await this.procurePlanService.getProcurePlanAllView();
  }

  // @Get('/getProcurePlanSearch')
  // async getProcurePlanSearch(@Query() search: ProcurePlanSearchVo) {
  //   return await this.procurePlanService.getProcurePlanSearch(search);
  // }

}
