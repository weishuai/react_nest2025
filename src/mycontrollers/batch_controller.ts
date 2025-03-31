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
import { BatchService } from '../myservices/batch_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BatchSearchVo, BatchVo } from '../myvo/batch_vo';
@Controller('/batch')
export class BatchController {
  private batchService = new BatchService();
  @Post('/createBatch')
  async createBatch(@Body() batchVo: BatchVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', batchVo);
    return await this.batchService.createBatch(batchVo);
  }
  @Put('/updateBatch/:Id')
  async updateaBatch(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() batchVo: BatchVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('BatchVo: ', batchVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.batchService.updateaBatch(
      Id,
      userId,
      batchVo,
    );
  }
  @Get('/removeBatch/:Id')
  async removeBatch(@Param('Id') Id: string) {
    return await this.batchService.removeBatch(Id);
  }
  @Get('/getBatchById/:Id')
  async getBatchById(@Param('Id') Id: string) {
    return await this.batchService.getBatchById(Id);
  }

  @Get('/getBatch')
  async getBatchList(@Query() query) {
    //核心代码测试
    //batch/getBatch?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new BatchSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.batchService.getBatchList(search);
  }
  @Get('/getBatchAll')
  async getBatchAll() {
    return await this.batchService.getBatchAll();
  }
  @Get('/getBatchAllView')
  async getBatchAllView() {
    return await this.batchService.getBatchAllView();
  }
}
