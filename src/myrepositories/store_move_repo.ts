import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { StoreMoveSearchVo, StoreMoveVo } from '../myvo/store_move_vo';
import { StoreMove } from '../myentities/store_move';

export class StoreMoveRepo {
  async create(storeMoveVo: StoreMoveVo) {
    return await getRepository(StoreMove).insert(storeMoveVo);
  }
  async update(Id: string, user_id: string, storeMoveVo: StoreMoveVo) {
    storeMoveVo.updatedAt = new Date();
    storeMoveVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(StoreMove).update(Id, storeMoveVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(StoreMove).update(Ids[0], {
      isactived: '1',
    });
  }
  async getStoreMovesById(id: string) {
    const qb = await getRepository(StoreMove).createQueryBuilder(
      'store_move',
    );
    const fields: Record<string, string> = {
      id: 'store_move.id',
      name: 'store_move.name',
      partners: 'store_move.partners', 
      deliveryDate: 'store_move.delivery_date', 
      sourceLocation: 'store_move.source_location', 
      sourceDocument: 'store_move.source_document', 
      type: 'store_move.type', 
      owner: 'store_move.owner', 
      fhtime: 'store_move.fhtime', 
      notes: 'store_move.notes', 

      description: 'store_move.description',
      createdAt: 'store_move.created_at',
      updatedAt: 'store_move.updated_at',
      isactived: 'store_move.isactived',
      islocked: 'store_move.islocked',
      createUid: 'store_move.create_uid',
      updatedUid: 'store_move.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'store_move', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getStoreMoveAll() {
    const qb = getRepository(StoreMove).createQueryBuilder('store_move');
    const fields: Record<string, string> = {
      id: 'store_move.id',
      name: 'store_move.name',
      description: 'store_move.description',
      partners: 'store_move.partners', 
      deliveryDate: 'store_move.delivery_date', 
      sourceLocation: 'store_move.source_location', 
      sourceDocument: 'store_move.source_document', 
      type: 'store_move.type', 
      owner: 'store_move.owner', 
      fhtime: 'store_move.fhtime', 
      notes: 'store_move.notes', 

      createdAt: 'store_move.created_at',
      updatedAt: 'store_move.updated_at',
      isactived: 'store_move.isactived',
      islocked: 'store_move.islocked',
      createUid: 'store_move.create_uid',
      updatedUid: 'store_move.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("store_move.isactived='0'");
    qb.orderBy('store_move.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getStoreMoveAllView() {
    const qb = await getRepository(StoreMove).createQueryBuilder(
      'store_move',
    );
    const fields: Record<string, string> = {
      id: 'store_move.id',
      name: 'store_move.name',
      description: 'store_move.description',
      partners: 'store_move.partners', 
      deliveryDate: 'store_move.delivery_date', 
      sourceLocation: 'store_move.source_location', 
      sourceDocument: 'store_move.source_document', 
      type: 'store_move.type', 
      owner: 'store_move.owner', 
      fhtime: 'store_move.fhtime', 
      notes: 'store_move.notes', 

      createdAt: 'store_move.created_at',
      updatedAt: 'store_move.updated_at',
      isactived: 'store_move.isactived',
      islocked: 'store_move.islocked',
      createUid: 'store_move.create_uid',
      updatedUid: 'store_move.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('store_move.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getStoreMoveList(search: StoreMoveSearchVo) {
    const qb = await getRepository(StoreMove).createQueryBuilder(
      'store_move',
    );
    const fields: Record<string, string> = {
      id: 'store_move.id',
      name: 'store_move.name',
      description: 'store_move.description',
      partners: 'store_move.partners', 
      deliveryDate: 'store_move.delivery_date', 
      sourceLocation: 'store_move.source_location', 
      sourceDocument: 'store_move.source_document', 
      type: 'store_move.type', 
      owner: 'store_move.owner', 
      fhtime: 'store_move.fhtime', 
      notes: 'store_move.notes', 

      createdAt: 'store_move.created_at',
      updatedAt: 'store_move.updated_at',
      isactived: 'store_move.isactived',
      islocked: 'store_move.islocked',
      createUid: 'store_move.create_uid',
      updatedUid: 'store_move.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("store_move.isactived='0'");
    /*
    multiSearch(
      qb,
      ['store_move.name', 'store_move.description'],
      search.search,
    );
     */
    qb.orderBy('store_move.created_at', 'DESC');
    //qb.addOrderBy('store_move.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }
}
