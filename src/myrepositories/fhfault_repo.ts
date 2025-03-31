import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { FhfaultSearchVo, FhfaultVo } from '../myvo/fhfault_vo';
import { Fhfault } from '../myentities/fhfault';

export class FhfaultRepo {
  async create(fhfaultVo: FhfaultVo) {
    return await getRepository(Fhfault).insert(fhfaultVo);
  }
  async update(Id: string, user_id: string, fhfaultVo: FhfaultVo) {
    fhfaultVo.updatedAt = new Date();
    fhfaultVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Fhfault).update(Id, fhfaultVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Fhfault).update(Ids[0], {
      isactived: '1',
    });
  }
  async getFhfaultsById(id: string) {
    const qb = await getRepository(Fhfault).createQueryBuilder(
      'fhfault',
    );
    const fields: Record<string, string> = {
      id: 'fhfault.id',
      name: 'fhfault.name',
      fhname: 'fhfault.fhname', 
      fhF1: 'fhfault.fhF1', 
      fhF2: 'fhfault.fhF2', 
      fhF3: 'fhfault.fhF3', 
      fhF4: 'fhfault.fhF4', 
      fhF5: 'fhfault.fhF5', 
      fhF6: 'fhfault.fhF6', 
      fhF7: 'fhfault.fhF7', 
      fhF8: 'fhfault.fhF8', 
      fhF9: 'fhfault.fhF9', 
      fhF10: 'fhfault.fhF10', 

      description: 'fhfault.description',
      createdAt: 'fhfault.created_at',
      updatedAt: 'fhfault.updated_at',
      isactived: 'fhfault.isactived',
      islocked: 'fhfault.islocked',
      createUid: 'fhfault.create_uid',
      updatedUid: 'fhfault.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'fhfault', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getFhfaultAll() {
    const qb = getRepository(Fhfault).createQueryBuilder('fhfault');
    const fields: Record<string, string> = {
      id: 'fhfault.id',
      name: 'fhfault.name',
      description: 'fhfault.description',
      fhname: 'fhfault.fhname', 
      fhF1: 'fhfault.fhF1', 
      fhF2: 'fhfault.fhF2', 
      fhF3: 'fhfault.fhF3', 
      fhF4: 'fhfault.fhF4', 
      fhF5: 'fhfault.fhF5', 
      fhF6: 'fhfault.fhF6', 
      fhF7: 'fhfault.fhF7', 
      fhF8: 'fhfault.fhF8', 
      fhF9: 'fhfault.fhF9', 
      fhF10: 'fhfault.fhF10', 

      createdAt: 'fhfault.created_at',
      updatedAt: 'fhfault.updated_at',
      isactived: 'fhfault.isactived',
      islocked: 'fhfault.islocked',
      createUid: 'fhfault.create_uid',
      updatedUid: 'fhfault.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("fhfault.isactived='0'");
    qb.orderBy('fhfault.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getFhfaultAllView() {
    const qb = await getRepository(Fhfault).createQueryBuilder(
      'fhfault',
    );
    const fields: Record<string, string> = {
      id: 'fhfault.id',
      name: 'fhfault.name',
      description: 'fhfault.description',
      fhname: 'fhfault.fhname', 
      fhF1: 'fhfault.fhF1', 
      fhF2: 'fhfault.fhF2', 
      fhF3: 'fhfault.fhF3', 
      fhF4: 'fhfault.fhF4', 
      fhF5: 'fhfault.fhF5', 
      fhF6: 'fhfault.fhF6', 
      fhF7: 'fhfault.fhF7', 
      fhF8: 'fhfault.fhF8', 
      fhF9: 'fhfault.fhF9', 
      fhF10: 'fhfault.fhF10', 

      createdAt: 'fhfault.created_at',
      updatedAt: 'fhfault.updated_at',
      isactived: 'fhfault.isactived',
      islocked: 'fhfault.islocked',
      createUid: 'fhfault.create_uid',
      updatedUid: 'fhfault.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('fhfault.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getFhfaultList(search: FhfaultSearchVo) {
    const qb = await getRepository(Fhfault).createQueryBuilder(
      'fhfault',
    );
    const fields: Record<string, string> = {
      id: 'fhfault.id',
      name: 'fhfault.name',
      description: 'fhfault.description',
      fhname: 'fhfault.fhname', 
      fhF1: 'fhfault.fhF1', 
      fhF2: 'fhfault.fhF2', 
      fhF3: 'fhfault.fhF3', 
      fhF4: 'fhfault.fhF4', 
      fhF5: 'fhfault.fhF5', 
      fhF6: 'fhfault.fhF6', 
      fhF7: 'fhfault.fhF7', 
      fhF8: 'fhfault.fhF8', 
      fhF9: 'fhfault.fhF9', 
      fhF10: 'fhfault.fhF10', 

      createdAt: 'fhfault.created_at',
      updatedAt: 'fhfault.updated_at',
      isactived: 'fhfault.isactived',
      islocked: 'fhfault.islocked',
      createUid: 'fhfault.create_uid',
      updatedUid: 'fhfault.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("fhfault.isactived='0'");
    /*
    multiSearch(
      qb,
      ['fhfault.name', 'fhfault.description'],
      search.search,
    );
     */
    qb.orderBy('fhfault.created_at', 'DESC');
    //qb.addOrderBy('fhfault.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  // async getFhfaultSearch(search: FhfaultSearchVo) {
  //   const qb =await getRepository(Fhfault).createQueryBuilder('fhfault');
  //   qb.leftJoin(User, 'user', 'fhfault.create_uid = user.id');
  //   qb.select( `fhfault.id,
  //     fhfault.name,
  //     fhfault.description,
  //     fhfault.created_at,
  //     fhfault.updated_at,
  //     fhfault.isactived,
  //     fhfault.islocked,
  //     fhfault.create_uid,
  //     fhfault.updated_uid,
  //     user.user_name as userName`);
  //     // andWhereEqual(qb, 'fhfault', 'name', ownerType);
  //     // qb.where("fhfault.isactived='0'");
  //     const fields: Record<string, string> = {
  //       id: 'fhfault.id',
  //       name: 'fhfault.name',
  //       description: 'fhfault.description',
  //             fhname: 'fhfault.fhname', 
  //     fhF1: 'fhfault.fhF1', 
  //     fhF2: 'fhfault.fhF2', 
  //     fhF3: 'fhfault.fhF3', 
  //     fhF4: 'fhfault.fhF4', 
  //     fhF5: 'fhfault.fhF5', 
  //     fhF6: 'fhfault.fhF6', 
  //     fhF7: 'fhfault.fhF7', 
  //     fhF8: 'fhfault.fhF8', 
  //     fhF9: 'fhfault.fhF9', 
  //     fhF10: 'fhfault.fhF10', 

  //       createdAt: 'fhfault.created_at',
  //       updatedAt: 'fhfault.updated_at',
  //       isactived: 'fhfault.isactived',
  //       islocked: 'fhfault.islocked',
  //       createUid: 'fhfault.create_uid',
  //       updatedUid: 'fhfault.updated_uid',
  //       activityName: 'user.user_name',
  //     };
  
  //     selectFields(qb, fields);

  //     multiSearch(
  //       qb,
  //       ['fhfault.name', 'fhfault.description'],
  //       search.search,
  //     );  
  //     qb.orderBy('fhfault.created_at', 'DESC');
  //     const count = await qb.getCount();
  //     const { skip, take } = skipAndTake(count, search);
  //     const raws = await qb.offset(skip).limit(take).getRawMany();
  //     return {'raws':raws,'count':count};
  // }



}
