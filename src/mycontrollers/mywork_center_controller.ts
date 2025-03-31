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
import { myWorkCenterService } from '../myservices/mywork_center_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { myWorkCenterSearchVo, myWorkCenterVo } from '../myvo/mywork_center_vo';
@Controller('/myworkCenter')
export class myWorkCenterController {
  private myworkCenterService = new myWorkCenterService();
  @Post('/createmyWorkCenter')
  async createmyWorkCenter(@Body() myworkCenterVo: myWorkCenterVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', myworkCenterVo);
    return await this.myworkCenterService.createmyWorkCenter(myworkCenterVo);
  }
  @Put('/updatemyWorkCenter/:Id')
  async updateamyWorkCenter(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() myworkCenterVo: myWorkCenterVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('myWorkCenterVo: ', myworkCenterVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.myworkCenterService.updateamyWorkCenter(
      Id,
      userId,
      myworkCenterVo,
    );
  }
  @Get('/removemyWorkCenter/:Id')
  async removemyWorkCenter(@Param('Id') Id: string) {
    return await this.myworkCenterService.removemyWorkCenter(Id);
  }
  @Get('/getmyWorkCenterById/:Id')
  async getmyWorkCenterById(@Param('Id') Id: string) {
    return await this.myworkCenterService.getmyWorkCenterById(Id);
  }

  @Get('/getmyWorkCenter')
  async getmyWorkCenterList(@Query() query) {
    //核心代码测试
    //myworkCenter/getmyWorkCenter?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new myWorkCenterSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.myworkCenterService.getmyWorkCenterList(search);
  }
  @Get('/getmyWorkCenterAll')
  async getmyWorkCenterAll() {
    return await this.myworkCenterService.getmyWorkCenterAll();
  }
  @Get('/getmyWorkCenterAllView')
  async getmyWorkCenterAllView() {
    return await this.myworkCenterService.getmyWorkCenterAllView();
  }
}
