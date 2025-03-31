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
import { HrContractService } from '../myservices/hr_contract_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HrContractSearchVo, HrContractVo } from '../myvo/hr_contract_vo';
@Controller('/hrContract')
export class HrContractController {
  private hrContractService = new HrContractService();
  @Post('/createHrContract')
  async createHrContract(@Body() hrContractVo: HrContractVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', hrContractVo);
    return await this.hrContractService.createHrContract(hrContractVo);
  }
  @Put('/updateHrContract/:Id')
  async updateaHrContract(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() hrContractVo: HrContractVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('HrContractVo: ', hrContractVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.hrContractService.updateaHrContract(
      Id,
      userId,
      hrContractVo,
    );
  }
  @Get('/removeHrContract/:Id')
  async removeHrContract(@Param('Id') Id: string) {
    return await this.hrContractService.removeHrContract(Id);
  }
  @Get('/getHrContractById/:Id')
  async getHrContractById(@Param('Id') Id: string) {
    return await this.hrContractService.getHrContractById(Id);
  }

  @Get('/getHrContract')
  async getHrContractList(@Query() query) {
    //核心代码测试
    //hrContract/getHrContract?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new HrContractSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.hrContractService.getHrContractList(search);
  }
  @Get('/getHrContractAll')
  async getHrContractAll() {
    return await this.hrContractService.getHrContractAll();
  }
  @Get('/getHrContractAllView')
  async getHrContractAllView() {
    return await this.hrContractService.getHrContractAllView();
  }

  // @Get('/getHrContractSearch')
  // async getHrContractSearch(@Query() search: HrContractSearchVo) {
  //   return await this.hrContractService.getHrContractSearch(search);
  // }

}
