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
import { ProductService } from '../myservices/ProductService';
import { ProductSearchVo, ProductVo } from '../myvo/ProductVo';

@Controller('/Product')
export class ProductController {
  private productService = new ProductService();

  @Post('/createProduct')
  async createProduct(@Body() ProductVo: ProductVo) {
    return this.productService.createProduct(ProductVo);
  }

  @Put('/updateProduct/:Id')
  async updateaProduct(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() ProductVo: ProductVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.productService.updateaProduct(Id, userId, ProductVo);
  }

  @Get('/removeProduct/:Id')
  async removeProduct(@Param('Id') Id: string) {
    return this.productService.removeProduct([Id]);
  }

  @Get('/getProductById/:Id')
  async getProductById(@Param('Id') Id: string) {
    return this.productService.getProductById(Id);
  }

  @Get('/getProduct')
  async getProduct(@Query() search: ProductSearchVo) {
    return this.productService.getProduct(search);
  }

  @Get('/getProductAll')
  async getProductAll(@Query() search: ProductSearchVo) {
    return this.productService.getProductAll(search);
  }

  @Get('/getFHProductAllView')
  async getProductAllView() {
    return this.productService.getProductAllView();
  }
}
