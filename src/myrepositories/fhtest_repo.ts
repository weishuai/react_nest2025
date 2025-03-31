import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { FhtestSearchVo, FhtestVo } from '../myvo/fhtest_vo';
import { Fhtest } from '../myentities/fhtest';

export class FhtestRepo {
  async create(fhtestVo: FhtestVo) {
    return await getRepository(Fhtest).insert(fhtestVo);
  }
  async update(Id: string, user_id: string, fhtestVo: FhtestVo) {
    fhtestVo.updatedAt = new Date();
    fhtestVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Fhtest).update(Id, fhtestVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Fhtest).update(Ids[0], {
      isactived: '1',
    });
  }
  async getFhtestsById(id: string) {
    const qb = await getRepository(Fhtest).createQueryBuilder(
      'fhtest',
    );
    const fields: Record<string, string> = {
      id: 'fhtest.id',
      name: 'fhtest.name',
      fhname: 'fhtest.fhname', 
      fhF1: 'fhtest.fhF1', 
      fhF2: 'fhtest.fhF2', 
      fhF3: 'fhtest.fhF3', 
      fhF4: 'fhtest.fhF4', 
      fhF5: 'fhtest.fhF5', 
      fhF6: 'fhtest.fhF6', 
      fhF7: 'fhtest.fhF7', 

      description: 'fhtest.description',
      createdAt: 'fhtest.created_at',
      updatedAt: 'fhtest.updated_at',
      isactived: 'fhtest.isactived',
      islocked: 'fhtest.islocked',
      createUid: 'fhtest.create_uid',
      updatedUid: 'fhtest.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'fhtest', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getFhtestAll() {
    const qb = getRepository(Fhtest).createQueryBuilder('fhtest');
    const fields: Record<string, string> = {
      id: 'fhtest.id',
      name: 'fhtest.name',
      description: 'fhtest.description',
      fhname: 'fhtest.fhname', 
      fhF1: 'fhtest.fhF1', 
      fhF2: 'fhtest.fhF2', 
      fhF3: 'fhtest.fhF3', 
      fhF4: 'fhtest.fhF4', 
      fhF5: 'fhtest.fhF5', 
      fhF6: 'fhtest.fhF6', 
      fhF7: 'fhtest.fhF7', 

      createdAt: 'fhtest.created_at',
      updatedAt: 'fhtest.updated_at',
      isactived: 'fhtest.isactived',
      islocked: 'fhtest.islocked',
      createUid: 'fhtest.create_uid',
      updatedUid: 'fhtest.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("fhtest.isactived='0'");
    qb.orderBy('fhtest.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getFhtestAllView() {
    const qb = await getRepository(Fhtest).createQueryBuilder(
      'fhtest',
    );
    const fields: Record<string, string> = {
      id: 'fhtest.id',
      name: 'fhtest.name',
      description: 'fhtest.description',
      fhname: 'fhtest.fhname', 
      fhF1: 'fhtest.fhF1', 
      fhF2: 'fhtest.fhF2', 
      fhF3: 'fhtest.fhF3', 
      fhF4: 'fhtest.fhF4', 
      fhF5: 'fhtest.fhF5', 
      fhF6: 'fhtest.fhF6', 
      fhF7: 'fhtest.fhF7', 

      createdAt: 'fhtest.created_at',
      updatedAt: 'fhtest.updated_at',
      isactived: 'fhtest.isactived',
      islocked: 'fhtest.islocked',
      createUid: 'fhtest.create_uid',
      updatedUid: 'fhtest.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('fhtest.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getFhtestList(search: FhtestSearchVo) {
    const qb = await getRepository(Fhtest).createQueryBuilder(
      'fhtest',
    );
    const fields: Record<string, string> = {
      id: 'fhtest.id',
      name: 'fhtest.name',
      description: 'fhtest.description',
      fhname: 'fhtest.fhname', 
      fhF1: 'fhtest.fhF1', 
      fhF2: 'fhtest.fhF2', 
      fhF3: 'fhtest.fhF3', 
      fhF4: 'fhtest.fhF4', 
      fhF5: 'fhtest.fhF5', 
      fhF6: 'fhtest.fhF6', 
      fhF7: 'fhtest.fhF7', 

      createdAt: 'fhtest.created_at',
      updatedAt: 'fhtest.updated_at',
      isactived: 'fhtest.isactived',
      islocked: 'fhtest.islocked',
      createUid: 'fhtest.create_uid',
      updatedUid: 'fhtest.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("fhtest.isactived='0'");
    /*
    multiSearch(
      qb,
      ['fhtest.name', 'fhtest.description'],
      search.search,
    );
     */
    qb.orderBy('fhtest.created_at', 'DESC');
    //qb.addOrderBy('fhtest.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  // async getFhtestSearch(search: FhtestSearchVo) {
  //   const qb =await getRepository(Fhtest).createQueryBuilder('fhtest');
  //   qb.leftJoin(User, 'user', 'fhtest.create_uid = user.id');
  //   qb.select( `fhtest.id,
  //     fhtest.name,
  //     fhtest.description,
  //     fhtest.created_at,
  //     fhtest.updated_at,
  //     fhtest.isactived,
  //     fhtest.islocked,
  //     fhtest.create_uid,
  //     fhtest.updated_uid,
  //     user.user_name as userName`);
  //     // andWhereEqual(qb, 'fhtest', 'name', ownerType);
  //     // qb.where("fhtest.isactived='0'");
  //     const fields: Record<string, string> = {
  //       id: 'fhtest.id',
  //       name: 'fhtest.name',
  //       description: 'fhtest.description',
  //             fhname: 'fhtest.fhname', 
  //     fhF1: 'fhtest.fhF1', 
  //     fhF2: 'fhtest.fhF2', 
  //     fhF3: 'fhtest.fhF3', 
  //     fhF4: 'fhtest.fhF4', 
  //     fhF5: 'fhtest.fhF5', 
  //     fhF6: 'fhtest.fhF6', 
  //     fhF7: 'fhtest.fhF7', 

  //       createdAt: 'fhtest.created_at',
  //       updatedAt: 'fhtest.updated_at',
  //       isactived: 'fhtest.isactived',
  //       islocked: 'fhtest.islocked',
  //       createUid: 'fhtest.create_uid',
  //       updatedUid: 'fhtest.updated_uid',
  //       activityName: 'user.user_name',
  //     };
  
  //     selectFields(qb, fields);

  //     multiSearch(
  //       qb,
  //       ['fhtest.name', 'fhtest.description'],
  //       search.search,
  //     );  
  //     qb.orderBy('fhtest.created_at', 'DESC');
  //     const count = await qb.getCount();
  //     const { skip, take } = skipAndTake(count, search);
  //     const raws = await qb.offset(skip).limit(take).getRawMany();
  //     return {'raws':raws,'count':count};
  // }



}
