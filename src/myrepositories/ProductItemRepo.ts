import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { ProductItemSearchVo, ProductItemVo } from '../myvo/ProductItemVo';
import { ProductItem } from '../myentities';

export class ProductItemRepo {
  async create(accountTagVo: ProductItemVo) {
    return await getRepository(ProductItem).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: ProductItemVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(ProductItem).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(ProductItem).update(Ids[0], {
      isactived: '1',
    });
  }

  async getproductItemsById(id: string) {
    const qb = getRepository(ProductItem).createQueryBuilder('product_item');
    const fields: Record<string, string> = {
      id: 'product_item.id',
      name: 'product_item.name',
      description: 'product_item.idescription',
      qty: 'product_item.qty',
      unit: 'product_item.unit',
      unitPrice: 'product_item.unit_price',
      remark: 'product_item.remark',
      createdAt: 'product_item.created_at',
      updatedAt: 'product_item.updated_at',
      isactived: 'product_item.isactived',
      islocked: 'product_item.islocked',
      createUid: 'product_item.create_uid',
      updatedUid: 'product_item.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'product_item', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getproductItemAll(search: ProductItemSearchVo) {
    const qb = getRepository(ProductItem).createQueryBuilder('product_item');
    const fields: Record<string, string> = {
      id: 'product_item.id',
      name: 'product_item.name',
      description: 'product_item.idescription',
      qty: 'product_item.qty',
      unit: 'product_item.unit',
      unitPrice: 'product_item.unit_price',
      remark: 'product_item.remark',
      createdAt: 'product_item.created_at',
      updatedAt: 'product_item.updated_at',
      isactived: 'product_item.isactived',
      islocked: 'product_item.islocked',
      createUid: 'product_item.create_uid',
      updatedUid: 'product_item.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("product_item.isactived='0'");
    multiSearch(
      qb,
      ['product_item.name', 'product_item.remark'],
      search.search,
    );
    qb.orderBy('product_item.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getproductItemAllView() {
    const qb = getRepository(ProductItem).createQueryBuilder('product_item');
    const fields: Record<string, string> = {
      id: 'product_item.id',
      name: 'product_item.name',
      description: 'product_item.idescription',
      qty: 'product_item.qty',
      unit: 'product_item.unit',
      unitPrice: 'product_item.unit_price',
      remark: 'product_item.remark',
      createdAt: 'product_item.created_at',
      updatedAt: 'product_item.updated_at',
      isactived: 'product_item.isactived',
      islocked: 'product_item.islocked',
      createUid: 'product_item.create_uid',
      updatedUid: 'product_item.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getproductItem(search: ProductItemSearchVo) {
    const qb = getRepository(ProductItem).createQueryBuilder('product_item');
    const fields: Record<string, string> = {
      id: 'product_item.id',
      name: 'product_item.name',
      description: 'product_item.idescription',
      qty: 'product_item.qty',
      unit: 'product_item.unit',
      unitPrice: 'product_item.unit_price',
      remark: 'product_item.remark',
      createdAt: 'product_item.created_at',
      updatedAt: 'product_item.updated_at',
      isactived: 'product_item.isactived',
      islocked: 'product_item.islocked',
      createUid: 'product_item.create_uid',
      updatedUid: 'product_item.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("product_item.isactived='0'");
    andWhereEqual(qb, 'product_item', 'satus', search.fundType);
    multiSearch(
      qb,
      ['product_item.name', 'product_item.remark'],
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
