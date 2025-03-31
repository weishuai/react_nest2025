import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { ProductSearchVo, ProductVo } from '../myvo/ProductVo';
import { Product } from '../myentities';

export class ProductRepo {
  async create(accountTagVo: ProductVo) {
    return await getRepository(Product).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: ProductVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Product).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Product).update(Ids[0], {
      isactived: '1',
    });
  }

  async getproductsById(id: string) {
    const qb = getRepository(Product).createQueryBuilder('product');
    const fields: Record<string, string> = {
      id: 'product.id',
      photo: 'product.photo',
      productName: 'product.product_name',
      description: 'product.description',
      manufacturer: 'product.manufacturer',
      category: 'product.category',
      unit: 'product.unit',
      currency: 'product.currency',
      listPrice: 'product.list_price',
      cost: 'product.cost',
      createdAt: 'product.created_at',
      updatedAt: 'product.updated_at',
      isactived: 'product.isactived',
      islocked: 'product.islocked',
      createUid: 'product.create_uid',
      updatedUid: 'product.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'product', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getproductAll(search: ProductSearchVo) {
    const qb = getRepository(Product).createQueryBuilder('product');
    const fields: Record<string, string> = {
      id: 'product.id',
      photo: 'product.photo',
      productName: 'product.product_name',
      description: 'product.description',
      manufacturer: 'product.manufacturer',
      category: 'product.category',
      unit: 'product.unit',
      currency: 'product.currency',
      listPrice: 'product.list_price',
      cost: 'product.cost',
      createdAt: 'product.created_at',
      updatedAt: 'product.updated_at',
      isactived: 'product.isactived',
      islocked: 'product.islocked',
      createUid: 'product.create_uid',
      updatedUid: 'product.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("product.isactived='0'");
    multiSearch(
      qb,
      ['product.product_name', 'product.description'],
      search.search,
    );
    qb.orderBy('product.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getproductAllView() {
    const qb = getRepository(Product).createQueryBuilder('product');
    const fields: Record<string, string> = {
      id: 'product.id',
      photo: 'product.photo',
      productName: 'product.product_name',
      description: 'product.description',
      manufacturer: 'product.manufacturer',
      category: 'product.category',
      unit: 'product.unit',
      currency: 'product.currency',
      listPrice: 'product.list_price',
      cost: 'product.cost',
      createdAt: 'product.created_at',
      updatedAt: 'product.updated_at',
      isactived: 'product.isactived',
      islocked: 'product.islocked',
      createUid: 'product.create_uid',
      updatedUid: 'product.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return {'fhok':res};
  }

  async getproduct(search: ProductSearchVo) {
    const qb = getRepository(Product).createQueryBuilder('product');
    const fields: Record<string, string> = {
      id: 'product.id',
      photo: 'product.photo',
      productName: 'product.product_name',
      description: 'product.description',
      manufacturer: 'product.manufacturer',
      category: 'product.category',
      unit: 'product.unit',
      currency: 'product.currency',
      listPrice: 'product.list_price',
      cost: 'product.cost',
      createdAt: 'product.created_at',
      updatedAt: 'product.updated_at',
      isactived: 'product.isactived',
      islocked: 'product.islocked',
      createUid: 'product.create_uid',
      updatedUid: 'product.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("product.isactived='0'");
    //andWhereEqual(qb, 'product', 'satus', search.fundType);
    multiSearch(
      qb,
      ['product.product_name', 'product.description'],
      search.search,
    );
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
