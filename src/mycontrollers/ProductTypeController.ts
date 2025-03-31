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
import { ProductTypeService } from '../myservices/ProductTypeService';
import { ProductTypeSearchVo, ProductTypeVo } from '../myvo/ProductTypeVo';

@Controller('/productType')
export class ProductTypeController {
  private productTypeService = new ProductTypeService();

  @Post('/createProductType')
  async createProductType(@Body() ProductTypeVo: ProductTypeVo) {
    return this.productTypeService.createProductType(ProductTypeVo);
  }

  @Put('/updateProductType/:Id')
  async updateaProductType(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() ProductTypeVo: ProductTypeVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.productTypeService.updateaProductType(
      Id,
      userId,
      ProductTypeVo,
    );
  }

  @Get('/removeProductType/:Id')
  async removeProductType(@Param('Id') Id: string) {
    return this.productTypeService.removeProductType([Id]);
  }

  @Get('/getProductTypeById/:Id')
  async getProductTypeById(@Param('Id') Id: string) {
    return this.productTypeService.getProductTypeById(Id);
  }

  @Get('/getProductType')
  async getProductType(@Query() search: ProductTypeSearchVo) {
    return this.productTypeService.getProductType(search);
  }

  @Get('/getProductTypeAll')
  async getProductTypeAll(@Query() search: ProductTypeSearchVo) {
    return this.productTypeService.getProductTypeAll(search);
  }

  @Get('/getProductTypeAllView')
  async getProductTypeAllView() {
    return this.productTypeService.getProductTypeAllView();
  }
}
