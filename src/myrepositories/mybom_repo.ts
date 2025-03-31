import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { mybomSearchVo, mybomVo } from '../myvo/mybom_vo';
import { mybom } from '../myentities/mybom';

export class mybomRepo {
  async create(mybomVo: mybomVo) {
    return await getRepository(mybom).insert(mybomVo);
  }
  async update(Id: string, user_id: string, mybomVo: mybomVo) {
    mybomVo.updatedAt = new Date();
    mybomVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(mybom).update(Id, mybomVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(mybom).update(Ids[0], {
      isactived: '1',
    });
  }
  async getmybomsById(id: string) {
    const qb = await getRepository(mybom).createQueryBuilder(
      'mybom',
    );
    const fields: Record<string, string> = {
      id: 'mybom.id',
      name: 'mybom.name',
      product: 'mybom.product', 
      code: 'mybom.code', 
      productTelm: 'mybom.product_telm', 
      bomType: 'mybom.bom_type', 
      number: 'mybom.number', 

      description: 'mybom.description',
      createdAt: 'mybom.created_at',
      updatedAt: 'mybom.updated_at',
      isactived: 'mybom.isactived',
      islocked: 'mybom.islocked',
      createUid: 'mybom.create_uid',
      updatedUid: 'mybom.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'mybom', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getmybomAll() {
    const qb = getRepository(mybom).createQueryBuilder('mybom');
    const fields: Record<string, string> = {
      id: 'mybom.id',
      name: 'mybom.name',
      description: 'mybom.description',
      product: 'mybom.product', 
      code: 'mybom.code', 
      productTelm: 'mybom.product_telm', 
      bomType: 'mybom.bom_type', 
      number: 'mybom.number', 

      createdAt: 'mybom.created_at',
      updatedAt: 'mybom.updated_at',
      isactived: 'mybom.isactived',
      islocked: 'mybom.islocked',
      createUid: 'mybom.create_uid',
      updatedUid: 'mybom.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("mybom.isactived='0'");
    qb.orderBy('mybom.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getmybomAllView() {
    const qb = await getRepository(mybom).createQueryBuilder(
      'mybom',
    );
    const fields: Record<string, string> = {
      id: 'mybom.id',
      name: 'mybom.name',
      description: 'mybom.description',
      product: 'mybom.product', 
      code: 'mybom.code', 
      productTelm: 'mybom.product_telm', 
      bomType: 'mybom.bom_type', 
      number: 'mybom.number', 

      createdAt: 'mybom.created_at',
      updatedAt: 'mybom.updated_at',
      isactived: 'mybom.isactived',
      islocked: 'mybom.islocked',
      createUid: 'mybom.create_uid',
      updatedUid: 'mybom.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('mybom.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getmybomList(search: mybomSearchVo) {
    const qb = await getRepository(mybom).createQueryBuilder(
      'mybom',
    );
    const fields: Record<string, string> = {
      id: 'mybom.id',
      name: 'mybom.name',
      description: 'mybom.description',
      product: 'mybom.product', 
      code: 'mybom.code', 
      productTelm: 'mybom.product_telm', 
      bomType: 'mybom.bom_type', 
      number: 'mybom.number', 

      createdAt: 'mybom.created_at',
      updatedAt: 'mybom.updated_at',
      isactived: 'mybom.isactived',
      islocked: 'mybom.islocked',
      createUid: 'mybom.create_uid',
      updatedUid: 'mybom.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("mybom.isactived='0'");
    /*
    multiSearch(
      qb,
      ['mybom.name', 'mybom.description'],
      search.search,
    );
     */
    qb.orderBy('mybom.created_at', 'DESC');
    //qb.addOrderBy('mybom.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }
}
