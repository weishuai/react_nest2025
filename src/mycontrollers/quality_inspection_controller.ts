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
import { QualityInspectionService } from '../myservices/quality_inspection_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { QualityInspectionSearchVo, QualityInspectionVo } from '../myvo/quality_inspection_vo';
@Controller('/qualityInspection')
export class QualityInspectionController {
  private qualityInspectionService = new QualityInspectionService();
  @Post('/createQualityInspection')
  async createQualityInspection(@Body() qualityInspectionVo: QualityInspectionVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', qualityInspectionVo);
    return await this.qualityInspectionService.createQualityInspection(qualityInspectionVo);
  }
  @Put('/updateQualityInspection/:Id')
  async updateaQualityInspection(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() qualityInspectionVo: QualityInspectionVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('QualityInspectionVo: ', qualityInspectionVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.qualityInspectionService.updateaQualityInspection(
      Id,
      userId,
      qualityInspectionVo,
    );
  }
  @Get('/removeQualityInspection/:Id')
  async removeQualityInspection(@Param('Id') Id: string) {
    return await this.qualityInspectionService.removeQualityInspection(Id);
  }
  @Get('/getQualityInspectionById/:Id')
  async getQualityInspectionById(@Param('Id') Id: string) {
    return await this.qualityInspectionService.getQualityInspectionById(Id);
  }

  @Get('/getQualityInspection')
  async getQualityInspectionList(@Query() query) {
    //核心代码测试
    //qualityInspection/getQualityInspection?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new QualityInspectionSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.qualityInspectionService.getQualityInspectionList(search);
  }
  @Get('/getQualityInspectionAll')
  async getQualityInspectionAll() {
    return await this.qualityInspectionService.getQualityInspectionAll();
  }
  @Get('/getQualityInspectionAllView')
  async getQualityInspectionAllView() {
    return await this.qualityInspectionService.getQualityInspectionAllView();
  }

  // @Get('/getQualityInspectionSearch')
  // async getQualityInspectionSearch(@Query() search: QualityInspectionSearchVo) {
  //   return await this.qualityInspectionService.getQualityInspectionSearch(search);
  // }

}
