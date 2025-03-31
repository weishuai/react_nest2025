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
import { ProcurePlanListService } from '../myservices/procure_plan_list_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ProcurePlanListSearchVo, ProcurePlanListVo } from '../myvo/procure_plan_list_vo';
@Controller('/procurePlanList')
export class ProcurePlanListController {
  private procurePlanListService = new ProcurePlanListService();
  @Post('/createProcurePlanList')
  async createProcurePlanList(@Body() procurePlanListVo: ProcurePlanListVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', procurePlanListVo);
    return await this.procurePlanListService.createProcurePlanList(procurePlanListVo);
  }
  @Put('/updateProcurePlanList/:Id')
  async updateaProcurePlanList(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() procurePlanListVo: ProcurePlanListVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('ProcurePlanListVo: ', procurePlanListVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.procurePlanListService.updateaProcurePlanList(
      Id,
      userId,
      procurePlanListVo,
    );
  }
  @Get('/removeProcurePlanList/:Id')
  async removeProcurePlanList(@Param('Id') Id: string) {
    return await this.procurePlanListService.removeProcurePlanList(Id);
  }
  @Get('/getProcurePlanListById/:Id')
  async getProcurePlanListById(@Param('Id') Id: string) {
    return await this.procurePlanListService.getProcurePlanListById(Id);
  }

  @Get('/getProcurePlanList')
  async getProcurePlanListList(@Query() query) {
    //核心代码测试
    //procurePlanList/getProcurePlanList?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new ProcurePlanListSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.procurePlanListService.getProcurePlanListList(search);
  }
  @Get('/getProcurePlanListAll')
  async getProcurePlanListAll() {
    return await this.procurePlanListService.getProcurePlanListAll();
  }
  @Get('/getProcurePlanListAllView')
  async getProcurePlanListAllView() {
    return await this.procurePlanListService.getProcurePlanListAllView();
  }

  // @Get('/getProcurePlanListSearch')
  // async getProcurePlanListSearch(@Query() search: ProcurePlanListSearchVo) {
  //   return await this.procurePlanListService.getProcurePlanListSearch(search);
  // }

}
