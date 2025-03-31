import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { BatchSearchVo, BatchVo } from '../myvo/batch_vo';
import { Batch } from '../myentities/batch';

export class BatchRepo {
  async create(batchVo: BatchVo) {
    return await getRepository(Batch).insert(batchVo);
  }
  async update(Id: string, user_id: string, batchVo: BatchVo) {
    batchVo.updatedAt = new Date();
    batchVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Batch).update(Id, batchVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Batch).update(Ids[0], {
      isactived: '1',
    });
  }
  async getBatchsById(id: string) {
    const qb = await getRepository(Batch).createQueryBuilder(
      'batch',
    );
    const fields: Record<string, string> = {
      id: 'batch.id',
      name: 'batch.name',
      titel: 'batch.titel', 
      product: 'batch.product', 
      number: 'batch.number', 
      code: 'batch.code', 

      description: 'batch.description',
      createdAt: 'batch.created_at',
      updatedAt: 'batch.updated_at',
      isactived: 'batch.isactived',
      islocked: 'batch.islocked',
      createUid: 'batch.create_uid',
      updatedUid: 'batch.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'batch', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getBatchAll() {
    const qb = getRepository(Batch).createQueryBuilder('batch');
    const fields: Record<string, string> = {
      id: 'batch.id',
      name: 'batch.name',
      description: 'batch.description',
      titel: 'batch.titel', 
      product: 'batch.product', 
      number: 'batch.number', 
      code: 'batch.code', 

      createdAt: 'batch.created_at',
      updatedAt: 'batch.updated_at',
      isactived: 'batch.isactived',
      islocked: 'batch.islocked',
      createUid: 'batch.create_uid',
      updatedUid: 'batch.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("batch.isactived='0'");
    qb.orderBy('batch.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getBatchAllView() {
    const qb = await getRepository(Batch).createQueryBuilder(
      'batch',
    );
    const fields: Record<string, string> = {
      id: 'batch.id',
      name: 'batch.name',
      description: 'batch.description',
      titel: 'batch.titel', 
      product: 'batch.product', 
      number: 'batch.number', 
      code: 'batch.code', 

      createdAt: 'batch.created_at',
      updatedAt: 'batch.updated_at',
      isactived: 'batch.isactived',
      islocked: 'batch.islocked',
      createUid: 'batch.create_uid',
      updatedUid: 'batch.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('batch.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getBatchList(search: BatchSearchVo) {
    const qb = await getRepository(Batch).createQueryBuilder(
      'batch',
    );
    const fields: Record<string, string> = {
      id: 'batch.id',
      name: 'batch.name',
      description: 'batch.description',
      titel: 'batch.titel', 
      product: 'batch.product', 
      number: 'batch.number', 
      code: 'batch.code', 

      createdAt: 'batch.created_at',
      updatedAt: 'batch.updated_at',
      isactived: 'batch.isactived',
      islocked: 'batch.islocked',
      createUid: 'batch.create_uid',
      updatedUid: 'batch.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("batch.isactived='0'");
    /*
    multiSearch(
      qb,
      ['batch.name', 'batch.description'],
      search.search,
    );
     */
    qb.orderBy('batch.created_at', 'DESC');
    //qb.addOrderBy('batch.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }
}
