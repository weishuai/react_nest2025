import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { StoreMoveListSearchVo, StoreMoveListVo } from '../myvo/store_move_list_vo';
import { StoreMoveList } from '../myentities/store_move_list';

export class StoreMoveListRepo {
  async create(storeMoveListVo: StoreMoveListVo) {
    return await getRepository(StoreMoveList).insert(storeMoveListVo);
  }
  async update(Id: string, user_id: string, storeMoveListVo: StoreMoveListVo) {
    storeMoveListVo.updatedAt = new Date();
    storeMoveListVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(StoreMoveList).update(Id, storeMoveListVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(StoreMoveList).update(Ids[0], {
      isactived: '1',
    });
  }
  async getStoreMoveListsById(id: string) {
    const qb = await getRepository(StoreMoveList).createQueryBuilder(
      'store_move_list',
    );
    const fields: Record<string, string> = {
      id: 'store_move_list.id',
      name: 'store_move_list.name',
      mid: 'store_move_list.mid', 
      product: 'store_move_list.product', 
      demand: 'store_move_list.demand', 
      reserve: 'store_move_list.reserve', 
      complete: 'store_move_list.complete', 
      unit: 'store_move_list.unit', 
      sellingPrice: 'store_move_list.selling_price', 
      costPprice: 'store_move_list.cost_price', 

      description: 'store_move_list.description',
      createdAt: 'store_move_list.created_at',
      updatedAt: 'store_move_list.updated_at',
      isactived: 'store_move_list.isactived',
      islocked: 'store_move_list.islocked',
      createUid: 'store_move_list.create_uid',
      updatedUid: 'store_move_list.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'store_move_list', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getStoreMoveListAll() {
    const qb = getRepository(StoreMoveList).createQueryBuilder('store_move_list');
    const fields: Record<string, string> = {
      id: 'store_move_list.id',
      name: 'store_move_list.name',
      description: 'store_move_list.description',
      mid: 'store_move_list.mid', 
      product: 'store_move_list.product', 
      demand: 'store_move_list.demand', 
      reserve: 'store_move_list.reserve', 
      complete: 'store_move_list.complete', 
      unit: 'store_move_list.unit', 
      sellingPrice: 'store_move_list.selling_price', 
      costPprice: 'store_move_list.cost_price', 

      createdAt: 'store_move_list.created_at',
      updatedAt: 'store_move_list.updated_at',
      isactived: 'store_move_list.isactived',
      islocked: 'store_move_list.islocked',
      createUid: 'store_move_list.create_uid',
      updatedUid: 'store_move_list.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("store_move_list.isactived='0'");
    qb.orderBy('store_move_list.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getStoreMoveListAllView() {
    const qb = await getRepository(StoreMoveList).createQueryBuilder(
      'store_move_list',
    );
    const fields: Record<string, string> = {
      id: 'store_move_list.id',
      name: 'store_move_list.name',
      description: 'store_move_list.description',
      mid: 'store_move_list.mid', 
      product: 'store_move_list.product', 
      demand: 'store_move_list.demand', 
      reserve: 'store_move_list.reserve', 
      complete: 'store_move_list.complete', 
      unit: 'store_move_list.unit', 
      sellingPrice: 'store_move_list.selling_price', 
      costPprice: 'store_move_list.cost_price', 

      createdAt: 'store_move_list.created_at',
      updatedAt: 'store_move_list.updated_at',
      isactived: 'store_move_list.isactived',
      islocked: 'store_move_list.islocked',
      createUid: 'store_move_list.create_uid',
      updatedUid: 'store_move_list.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('store_move_list.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getStoreMoveListList(search: StoreMoveListSearchVo) {
    const qb = await getRepository(StoreMoveList).createQueryBuilder(
      'store_move_list',
    );
    const fields: Record<string, string> = {
      id: 'store_move_list.id',
      name: 'store_move_list.name',
      description: 'store_move_list.description',
      mid: 'store_move_list.mid', 
      product: 'store_move_list.product', 
      demand: 'store_move_list.demand', 
      reserve: 'store_move_list.reserve', 
      complete: 'store_move_list.complete', 
      unit: 'store_move_list.unit', 
      sellingPrice: 'store_move_list.selling_price', 
      costPprice: 'store_move_list.cost_price', 

      createdAt: 'store_move_list.created_at',
      updatedAt: 'store_move_list.updated_at',
      isactived: 'store_move_list.isactived',
      islocked: 'store_move_list.islocked',
      createUid: 'store_move_list.create_uid',
      updatedUid: 'store_move_list.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("store_move_list.isactived='0'");
    /*
    multiSearch(
      qb,
      ['store_move_list.name', 'store_move_list.description'],
      search.search,
    );
     */
    qb.orderBy('store_move_list.created_at', 'DESC');
    //qb.addOrderBy('store_move_list.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  // async getStoreMoveListSearch(search: StoreMoveListSearchVo) {
  //   const qb =await getRepository(StoreMoveList).createQueryBuilder('store_move_list');
  //   qb.leftJoin(User, 'user', 'store_move_list.create_uid = user.id');
  //   qb.select( `store_move_list.id,
  //     store_move_list.name,
  //     store_move_list.description,
  //     store_move_list.created_at,
  //     store_move_list.updated_at,
  //     store_move_list.isactived,
  //     store_move_list.islocked,
  //     store_move_list.create_uid,
  //     store_move_list.updated_uid,
  //     user.user_name as userName`);
  //     // andWhereEqual(qb, 'store_move_list', 'name', ownerType);
  //     // qb.where("store_move_list.isactived='0'");
  //     const fields: Record<string, string> = {
  //       id: 'store_move_list.id',
  //       name: 'store_move_list.name',
  //       description: 'store_move_list.description',
  //             mid: 'store_move_list.mid', 
  //     product: 'store_move_list.product', 
  //     demand: 'store_move_list.demand', 
  //     reserve: 'store_move_list.reserve', 
  //     complete: 'store_move_list.complete', 
  //     unit: 'store_move_list.unit', 
  //     sellingPrice: 'store_move_list.selling_price', 
  //     costPprice: 'store_move_list.cost_price', 

  //       createdAt: 'store_move_list.created_at',
  //       updatedAt: 'store_move_list.updated_at',
  //       isactived: 'store_move_list.isactived',
  //       islocked: 'store_move_list.islocked',
  //       createUid: 'store_move_list.create_uid',
  //       updatedUid: 'store_move_list.updated_uid',
  //       activityName: 'user.user_name',
  //     };
  
  //     selectFields(qb, fields);

  //     multiSearch(
  //       qb,
  //       ['store_move_list.name', 'store_move_list.description'],
  //       search.search,
  //     );  
  //     qb.orderBy('store_move_list.created_at', 'DESC');
  //     const count = await qb.getCount();
  //     const { skip, take } = skipAndTake(count, search);
  //     const raws = await qb.offset(skip).limit(take).getRawMany();
  //     return {'raws':raws,'count':count};
  // }



}
