import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { StoragelocationSearchVo, StoragelocationVo } from '../myvo/storage_location_vo';
import { Storagelocation } from '../myentities/storage_location';

export class StoragelocationRepo {
  async create(storagelocationVo: StoragelocationVo) {
    return await getRepository(Storagelocation).insert(storagelocationVo);
  }
  async update(Id: string, user_id: string, storagelocationVo: StoragelocationVo) {
    storagelocationVo.updatedAt = new Date();
    storagelocationVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Storagelocation).update(Id, storagelocationVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Storagelocation).update(Ids[0], {
      isactived: '1',
    });
  }
  async getStoragelocationsById(id: string) {
    const qb = await getRepository(Storagelocation).createQueryBuilder(
      'storage_location',
    );
    const fields: Record<string, string> = {
      id: 'storage_location.id',
      name: 'storage_location.name',
      myname: 'storage_location.myname', 
      mid: 'storage_location.mid', 
      type: 'storage_location.type', 

      description: 'storage_location.description',
      createdAt: 'storage_location.created_at',
      updatedAt: 'storage_location.updated_at',
      isactived: 'storage_location.isactived',
      islocked: 'storage_location.islocked',
      createUid: 'storage_location.create_uid',
      updatedUid: 'storage_location.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'storage_location', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getStoragelocationAll() {
    const qb = getRepository(Storagelocation).createQueryBuilder('storage_location');
    const fields: Record<string, string> = {
      id: 'storage_location.id',
      name: 'storage_location.name',
      description: 'storage_location.description',
      myname: 'storage_location.myname', 
      mid: 'storage_location.mid', 
      type: 'storage_location.type', 

      createdAt: 'storage_location.created_at',
      updatedAt: 'storage_location.updated_at',
      isactived: 'storage_location.isactived',
      islocked: 'storage_location.islocked',
      createUid: 'storage_location.create_uid',
      updatedUid: 'storage_location.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("storage_location.isactived='0'");
    qb.orderBy('storage_location.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getStoragelocationAllView() {
    const qb = await getRepository(Storagelocation).createQueryBuilder(
      'storage_location',
    );
    const fields: Record<string, string> = {
      id: 'storage_location.id',
      name: 'storage_location.name',
      description: 'storage_location.description',
      myname: 'storage_location.myname', 
      mid: 'storage_location.mid', 
      type: 'storage_location.type', 

      createdAt: 'storage_location.created_at',
      updatedAt: 'storage_location.updated_at',
      isactived: 'storage_location.isactived',
      islocked: 'storage_location.islocked',
      createUid: 'storage_location.create_uid',
      updatedUid: 'storage_location.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('storage_location.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getStoragelocationList(search: StoragelocationSearchVo) {
    const qb = await getRepository(Storagelocation).createQueryBuilder(
      'storage_location',
    );
    const fields: Record<string, string> = {
      id: 'storage_location.id',
      name: 'storage_location.name',
      description: 'storage_location.description',
      myname: 'storage_location.myname', 
      mid: 'storage_location.mid', 
      type: 'storage_location.type', 

      createdAt: 'storage_location.created_at',
      updatedAt: 'storage_location.updated_at',
      isactived: 'storage_location.isactived',
      islocked: 'storage_location.islocked',
      createUid: 'storage_location.create_uid',
      updatedUid: 'storage_location.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("storage_location.isactived='0'");
    /*
    multiSearch(
      qb,
      ['storage_location.name', 'storage_location.description'],
      search.search,
    );
     */
    qb.orderBy('storage_location.created_at', 'DESC');
    //qb.addOrderBy('storage_location.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }
}
