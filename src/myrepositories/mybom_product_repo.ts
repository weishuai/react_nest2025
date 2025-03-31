import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { myBomProductSearchVo, myBomProductVo } from '../myvo/mybom_product_vo';
import { myBomProduct } from '../myentities/mybom_product';

export class myBomProductRepo {
  async create(mybomProductVo: myBomProductVo) {
    return await getRepository(myBomProduct).insert(mybomProductVo);
  }
  async update(Id: string, user_id: string, mybomProductVo: myBomProductVo) {
    mybomProductVo.updatedAt = new Date();
    mybomProductVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(myBomProduct).update(Id, mybomProductVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(myBomProduct).update(Ids[0], {
      isactived: '1',
    });
  }
  async getmyBomProductsById(id: string) {
    const qb = await getRepository(myBomProduct).createQueryBuilder(
      'mybom_product',
    );
    const fields: Record<string, string> = {
      id: 'mybom_product.id',
      name: 'mybom_product.name',
      mid: 'mybom_product.mid', 
      product: 'mybom_product.product', 
      number: 'mybom_product.number', 
      unit: 'mybom_product.unit', 

      description: 'mybom_product.description',
      createdAt: 'mybom_product.created_at',
      updatedAt: 'mybom_product.updated_at',
      isactived: 'mybom_product.isactived',
      islocked: 'mybom_product.islocked',
      createUid: 'mybom_product.create_uid',
      updatedUid: 'mybom_product.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'mybom_product', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getmyBomProductAll() {
    const qb = getRepository(myBomProduct).createQueryBuilder('mybom_product');
    const fields: Record<string, string> = {
      id: 'mybom_product.id',
      name: 'mybom_product.name',
      description: 'mybom_product.description',
      mid: 'mybom_product.mid', 
      product: 'mybom_product.product', 
      number: 'mybom_product.number', 
      unit: 'mybom_product.unit', 

      createdAt: 'mybom_product.created_at',
      updatedAt: 'mybom_product.updated_at',
      isactived: 'mybom_product.isactived',
      islocked: 'mybom_product.islocked',
      createUid: 'mybom_product.create_uid',
      updatedUid: 'mybom_product.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("mybom_product.isactived='0'");
    qb.orderBy('mybom_product.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getmyBomProductAllView() {
    const qb = await getRepository(myBomProduct).createQueryBuilder(
      'mybom_product',
    );
    const fields: Record<string, string> = {
      id: 'mybom_product.id',
      name: 'mybom_product.name',
      description: 'mybom_product.description',
      mid: 'mybom_product.mid', 
      product: 'mybom_product.product', 
      number: 'mybom_product.number', 
      unit: 'mybom_product.unit', 

      createdAt: 'mybom_product.created_at',
      updatedAt: 'mybom_product.updated_at',
      isactived: 'mybom_product.isactived',
      islocked: 'mybom_product.islocked',
      createUid: 'mybom_product.create_uid',
      updatedUid: 'mybom_product.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('mybom_product.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getmyBomProductList(search: myBomProductSearchVo) {
    const qb = await getRepository(myBomProduct).createQueryBuilder(
      'mybom_product',
    );
    const fields: Record<string, string> = {
      id: 'mybom_product.id',
      name: 'mybom_product.name',
      description: 'mybom_product.description',
      mid: 'mybom_product.mid', 
      product: 'mybom_product.product', 
      number: 'mybom_product.number', 
      unit: 'mybom_product.unit', 

      createdAt: 'mybom_product.created_at',
      updatedAt: 'mybom_product.updated_at',
      isactived: 'mybom_product.isactived',
      islocked: 'mybom_product.islocked',
      createUid: 'mybom_product.create_uid',
      updatedUid: 'mybom_product.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("mybom_product.isactived='0'");
    /*
    multiSearch(
      qb,
      ['mybom_product.name', 'mybom_product.description'],
      search.search,
    );
     */
    qb.orderBy('mybom_product.created_at', 'DESC');
    //qb.addOrderBy('mybom_product.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }
}
