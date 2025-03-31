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
import { ProductItemService } from '../myservices/ProductItemService';
import { ProductItemSearchVo, ProductItemVo } from '../myvo/ProductItemVo';

@Controller('/productItem')
export class ProductItemController {
  private productItemService = new ProductItemService();

  @Post('/createProductItem')
  async createProductItem(@Body() ProductItemVo: ProductItemVo) {
    return this.productItemService.createProductItem(ProductItemVo);
  }

  @Put('/updateProductItem/:Id')
  async updateaProductItem(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() ProductItemVo: ProductItemVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.productItemService.updateaProductItem(
      Id,
      userId,
      ProductItemVo,
    );
  }

  @Get('/removeProductItem/:Id')
  async removeProductItem(@Param('Id') Id: string) {
    return this.productItemService.removeProductItem([Id]);
  }

  @Get('/getProductItemById/:Id')
  async getProductItemById(@Param('Id') Id: string) {
    return this.productItemService.getProductItemById(Id);
  }

  @Get('/getProductItem')
  async getProductItem(@Query() search: ProductItemSearchVo) {
    return this.productItemService.getProductItem(search);
  }

  @Get('/getProductItemAll')
  async getProductItemAll(@Query() search: ProductItemSearchVo) {
    return this.productItemService.getProductItemAll(search);
  }

  @Get('/getProductItemAllView')
  async getProductItemAllView() {
    return this.productItemService.getProductItemAllView();
  }
}
