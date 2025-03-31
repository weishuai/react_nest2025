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
import { myWorkService } from '../myservices/mywork_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { myWorkSearchVo, myWorkVo } from '../myvo/mywork_vo';
@Controller('/mywork')
export class myWorkController {
  private myworkService = new myWorkService();
  @Post('/createmyWork')
  async createmyWork(@Body() myworkVo: myWorkVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', myworkVo);
    return await this.myworkService.createmyWork(myworkVo);
  }
  @Put('/updatemyWork/:Id')
  async updateamyWork(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() myworkVo: myWorkVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('myWorkVo: ', myworkVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.myworkService.updateamyWork(
      Id,
      userId,
      myworkVo,
    );
  }
  @Get('/removemyWork/:Id')
  async removemyWork(@Param('Id') Id: string) {
    return await this.myworkService.removemyWork(Id);
  }
  @Get('/getmyWorkById/:Id')
  async getmyWorkById(@Param('Id') Id: string) {
    return await this.myworkService.getmyWorkById(Id);
  }

  @Get('/getmyWork')
  async getmyWorkList(@Query() query) {
    //核心代码测试
    //mywork/getmyWork?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new myWorkSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.myworkService.getmyWorkList(search);
  }
  @Get('/getmyWorkAll')
  async getmyWorkAll() {
    return await this.myworkService.getmyWorkAll();
  }
  @Get('/getmyWorkAllView')
  async getmyWorkAllView() {
    return await this.myworkService.getmyWorkAllView();
  }
}
