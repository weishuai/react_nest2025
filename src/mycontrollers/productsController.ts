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
import { CurrentUserToken } from '../myutils/current.user.token';
import _ from 'lodash';
import { FHUserService } from '../myservices/FHUserService';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FHUserSearchVo, FHUserVo } from '../myvo/FHUserVo';
@Controller('/products')
export class ProductsController {
  private fhuserService = new FHUserService();
  @Get('/products-small')
  async getFHAccountTagList(@Query() query) {
    const fhJSON = {
      data: [
        {
          id: '1000',
          code: 'f230fh0g3',
          name: 'Bamboo Watch',
          description: 'Product Description',
          image: 'bamboo-watch.jpg',
          price: 65,
          category: 'Accessories',
          quantity: 24,
          inventoryStatus: 'INSTOCK',
          rating: 5,
        },
        {
          id: '1001',
          code: 'nvklal433',
          name: 'Black Watch',
          description: 'Product Description',
          image: 'black-watch.jpg',
          price: 72,
          category: 'Accessories',
          quantity: 61,
          inventoryStatus: 'INSTOCK',
          rating: 4,
        },
        {
          id: '1002',
          code: 'zz21cz3c1',
          name: 'Blue Band',
          description: 'Product Description',
          image: 'blue-band.jpg',
          price: 79,
          category: 'Fitness',
          quantity: 2,
          inventoryStatus: 'LOWSTOCK',
          rating: 3,
        },
      ],
    };
    return await fhJSON;
  }
}
