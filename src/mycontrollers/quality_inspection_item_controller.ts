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
import { QualitylnspectionItemService } from '../myservices/quality_inspection_item_service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { QualitylnspectionItemSearchVo, QualitylnspectionItemVo } from '../myvo/quality_inspection_item_vo';
@Controller('/qualitylnspectionItem')
export class QualitylnspectionItemController {
  private qualitylnspectionItemService = new QualitylnspectionItemService();
  @Post('/createQualitylnspectionItem')
  async createQualitylnspectionItem(@Body() qualitylnspectionItemVo: QualitylnspectionItemVo) {
    ///核心代码
    //Post
    ///Body { "id":"3","name":"154363268@qq.com","password":"123456"}
    ///Body:  { id: '3', name: '154363268@qq.com', password: '123456'}
    //返回值{"identifiers": [{	"id": "3"	}],"generatedMaps": [	{}],"raw": []}
    console.log('Body: ', qualitylnspectionItemVo);
    return await this.qualitylnspectionItemService.createQualitylnspectionItem(qualitylnspectionItemVo);
  }
  @Put('/updateQualitylnspectionItem/:Id')
  async updateaQualitylnspectionItem(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() qualitylnspectionItemVo: QualitylnspectionItemVo,
  ) {
    //请求时主要设置Header:userToken及其值
    console.log('userToken: ', userToken);
    console.log('Id: ', Id);
    console.log('QualitylnspectionItemVo: ', qualitylnspectionItemVo);
    let userId = '';
    if (userToken != null && userToken != '') {
      userId = userToken;
    }

    return await this.qualitylnspectionItemService.updateaQualitylnspectionItem(
      Id,
      userId,
      qualitylnspectionItemVo,
    );
  }
  @Get('/removeQualitylnspectionItem/:Id')
  async removeQualitylnspectionItem(@Param('Id') Id: string) {
    return await this.qualitylnspectionItemService.removeQualitylnspectionItem(Id);
  }
  @Get('/getQualitylnspectionItemById/:Id')
  async getQualitylnspectionItemById(@Param('Id') Id: string) {
    return await this.qualitylnspectionItemService.getQualitylnspectionItemById(Id);
  }

  @Get('/getQualitylnspectionItem')
  async getQualitylnspectionItemList(@Query() query) {
    //核心代码测试
    //qualitylnspectionItem/getQualitylnspectionItem?search=1&pageIndex=0&recordIndex=0&pageSize=50
    ///query:  { search: '1', pageIndex: '0', recordIndex: '0', pageSize: '50' }
    console.log('query: ', query);
    const search = new QualitylnspectionItemSearchVo();
    search.search = query.search;
    search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
    search.recordIndex = Number(
      search.recordIndex != null ? search.recordIndex : 0,
    );
    search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);

    console.log('fhok: ', JSON.stringify(search));
    return await this.qualitylnspectionItemService.getQualitylnspectionItemList(search);
  }
  @Get('/getQualitylnspectionItemAll')
  async getQualitylnspectionItemAll() {
    return await this.qualitylnspectionItemService.getQualitylnspectionItemAll();
  }
  @Get('/getQualitylnspectionItemAllView')
  async getQualitylnspectionItemAllView() {
    return await this.qualitylnspectionItemService.getQualitylnspectionItemAllView();
  }

  // @Get('/getQualitylnspectionItemSearch')
  // async getQualitylnspectionItemSearch(@Query() search: QualitylnspectionItemSearchVo) {
  //   return await this.qualitylnspectionItemService.getQualitylnspectionItemSearch(search);
  // }

}
