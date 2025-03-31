import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { ProductTypeSearchVo, ProductTypeVo } from '../myvo/ProductTypeVo';
import { ProductType } from '../myentities';

export class ProductTypeRepo {
  async create(accountTagVo: ProductTypeVo) {
    return await getRepository(ProductType).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: ProductTypeVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(ProductType).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(ProductType).update(Ids[0], {
      isactived: '1',
    });
  }

  async getProductTypesById(id: string) {
    const qb = getRepository(ProductType).createQueryBuilder('productType');
    const fields: Record<string, string> = {
      id: 'productType.id',
      name: 'productType.name',
      description: 'productType.description',
      createdAt: 'productType.created_at',
      updatedAt: 'productType.updated_at',
      isactived: 'productType.isactived',
      islocked: 'productType.islocked',
      createUid: 'productType.create_uid',
      updatedUid: 'productType.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'productType', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getProductTypeAll(search: ProductTypeSearchVo) {
    const qb = getRepository(ProductType).createQueryBuilder('productType');
    const fields: Record<string, string> = {
      id: 'productType.id',
      name: 'productType.name',
      description: 'productType.description',
      createdAt: 'productType.created_at',
      updatedAt: 'productType.updated_at',
      isactived: 'productType.isactived',
      islocked: 'productType.islocked',
      createUid: 'productType.create_uid',
      updatedUid: 'productType.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("productType.isactived='0'");
    multiSearch(
      qb,
      ['productType.name', 'productType.description'],
      search.search,
    );
    qb.orderBy('productType.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getProductTypeAllView() {
    const qb = getRepository(ProductType).createQueryBuilder('productType');
    const fields: Record<string, string> = {
      id: 'productType.id',
      name: 'productType.name',
      description: 'productType.description',
      createdAt: 'productType.created_at',
      updatedAt: 'productType.updated_at',
      isactived: 'productType.isactived',
      islocked: 'productType.islocked',
      createUid: 'productType.create_uid',
      updatedUid: 'productType.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getProductType(search: ProductTypeSearchVo) {
    const qb = getRepository(ProductType).createQueryBuilder('productType');
    const fields: Record<string, string> = {
      id: 'productType.id',
      name: 'productType.name',
      description: 'productType.description',
      createdAt: 'productType.created_at',
      updatedAt: 'productType.updated_at',
      isactived: 'productType.isactived',
      islocked: 'productType.islocked',
      createUid: 'productType.create_uid',
      updatedUid: 'productType.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("productType.isactived='0'");
    // andWhereEqual(qb, 'language', 'satus', search.fundType);
    multiSearch(
      qb,
      ['productType.name', 'productType.description'],
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
