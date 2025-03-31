import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { WarrantySearchVo, WarrantyVo } from '../myvo/WarrantyVo';
import { Warranty } from '../myentities';
import { Product } from '../myentities/Product';

export class WarrantyRepo {
  async create(accountTagVo: WarrantyVo) {
    return await getRepository(Warranty).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: WarrantyVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Warranty).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Warranty).update(Ids[0], {
      isactived: '1',
    });
  }

  async getWarrantysById(id: string) {
    const qb = getRepository(Warranty).createQueryBuilder('warranty');
    const fields: Record<string, string> = {
      id: 'warranty.id',
      name: 'warranty.name',
      product: 'warranty.product',
      startDate: 'warranty.start_date',
      endDate: 'warranty.end_date',
      isRemind: 'warranty.is_remind',
      description: 'warranty.description',
      createdAt: 'warranty.created_at',
      updatedAt: 'warranty.updated_at',
      isactived: 'warranty.isactived',
      islocked: 'warranty.islocked',
      createUid: 'warranty.create_uid',
      updatedUid: 'warranty.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'warranty', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getWarrantyAll(search: WarrantySearchVo) {
    const qb = getRepository(Warranty).createQueryBuilder('warranty');
    qb.leftJoin(Product, 'product', 'warranty.product=product.id');
    const fields: Record<string, string> = {
      id: 'warranty.id',
      name: 'warranty.name',
      product: 'product.product_name',
      startDate: 'warranty.start_date',
      endDate: 'warranty.end_date',
      isRemind: 'warranty.is_remind',
      description: 'warranty.description',
      createdAt: 'warranty.created_at',
      updatedAt: 'warranty.updated_at',
      isactived: 'warranty.isactived',
      islocked: 'warranty.islocked',
      createUid: 'warranty.create_uid',
      updatedUid: 'warranty.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("warranty.isactived='0'");
    multiSearch(qb, ['warranty.name', 'warranty.description'], search.search);
    qb.orderBy('warranty.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getWarrantyAllView() {
    const qb = getRepository(Warranty).createQueryBuilder('warranty');
    const fields: Record<string, string> = {
      id: 'warranty.id',
      name: 'warranty.name',
      product: 'warranty.product',
      startDate: 'warranty.start_date',
      endDate: 'warranty.end_date',
      isRemind: 'warranty.is_remind',
      description: 'warranty.description',
      createdAt: 'warranty.created_at',
      updatedAt: 'warranty.updated_at',
      isactived: 'warranty.isactived',
      islocked: 'warranty.islocked',
      createUid: 'warranty.create_uid',
      updatedUid: 'warranty.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getWarranty(search: WarrantySearchVo) {
    const qb = getRepository(Warranty).createQueryBuilder('warranty');
    const fields: Record<string, string> = {
      id: 'warranty.id',
      name: 'warranty.name',
      product: 'warranty.product',
      startDate: 'warranty.start_date',
      endDate: 'warranty.end_date',
      isRemind: 'warranty.is_remind',
      description: 'warranty.description',
      createdAt: 'warranty.created_at',
      updatedAt: 'warranty.updated_at',
      isactived: 'warranty.isactived',
      islocked: 'warranty.islocked',
      createUid: 'warranty.create_uid',
      updatedUid: 'warranty.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("warranty.isactived='0'");
    andWhereEqual(qb, 'warranty', 'name', search.fundType);
    multiSearch(qb, ['warranty.name', 'warranty.description'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
