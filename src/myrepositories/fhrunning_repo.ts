import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { FhrunningSearchVo, FhrunningVo } from '../myvo/fhrunning_vo';
import { Fhrunning } from '../myentities/fhrunning';

export class FhrunningRepo {
  async create(fhrunningVo: FhrunningVo) {
    return await getRepository(Fhrunning).insert(fhrunningVo);
  }
  async update(Id: string, user_id: string, fhrunningVo: FhrunningVo) {
    fhrunningVo.updatedAt = new Date();
    fhrunningVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Fhrunning).update(Id, fhrunningVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Fhrunning).update(Ids[0], {
      isactived: '1',
    });
  }
  async getFhrunningsById(id: string) {
    const qb = await getRepository(Fhrunning).createQueryBuilder(
      'fhrunning',
    );
    const fields: Record<string, string> = {
      id: 'fhrunning.id',
      name: 'fhrunning.name',
      fhname: 'fhrunning.fhname', 
      fhF1: 'fhrunning.fhF1', 
      fhF2: 'fhrunning.fhF2', 
      fhF3: 'fhrunning.fhF3', 
      fhF4: 'fhrunning.fhF4', 
      fhF5: 'fhrunning.fhF5', 
      fhF6: 'fhrunning.fhF6', 
      fhF7: 'fhrunning.fhF7', 
      fhF8: 'fhrunning.fhF8', 
      fhF9: 'fhrunning.fhF9', 

      description: 'fhrunning.description',
      createdAt: 'fhrunning.created_at',
      updatedAt: 'fhrunning.updated_at',
      isactived: 'fhrunning.isactived',
      islocked: 'fhrunning.islocked',
      createUid: 'fhrunning.create_uid',
      updatedUid: 'fhrunning.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'fhrunning', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getFhrunningAll() {
    const qb = getRepository(Fhrunning).createQueryBuilder('fhrunning');
    const fields: Record<string, string> = {
      id: 'fhrunning.id',
      name: 'fhrunning.name',
      description: 'fhrunning.description',
      fhname: 'fhrunning.fhname', 
      fhF1: 'fhrunning.fhF1', 
      fhF2: 'fhrunning.fhF2', 
      fhF3: 'fhrunning.fhF3', 
      fhF4: 'fhrunning.fhF4', 
      fhF5: 'fhrunning.fhF5', 
      fhF6: 'fhrunning.fhF6', 
      fhF7: 'fhrunning.fhF7', 
      fhF8: 'fhrunning.fhF8', 
      fhF9: 'fhrunning.fhF9', 

      createdAt: 'fhrunning.created_at',
      updatedAt: 'fhrunning.updated_at',
      isactived: 'fhrunning.isactived',
      islocked: 'fhrunning.islocked',
      createUid: 'fhrunning.create_uid',
      updatedUid: 'fhrunning.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("fhrunning.isactived='0'");
    qb.orderBy('fhrunning.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getFhrunningAllView() {
    const qb = await getRepository(Fhrunning).createQueryBuilder(
      'fhrunning',
    );
    const fields: Record<string, string> = {
      id: 'fhrunning.id',
      name: 'fhrunning.name',
      description: 'fhrunning.description',
      fhname: 'fhrunning.fhname', 
      fhF1: 'fhrunning.fhF1', 
      fhF2: 'fhrunning.fhF2', 
      fhF3: 'fhrunning.fhF3', 
      fhF4: 'fhrunning.fhF4', 
      fhF5: 'fhrunning.fhF5', 
      fhF6: 'fhrunning.fhF6', 
      fhF7: 'fhrunning.fhF7', 
      fhF8: 'fhrunning.fhF8', 
      fhF9: 'fhrunning.fhF9', 

      createdAt: 'fhrunning.created_at',
      updatedAt: 'fhrunning.updated_at',
      isactived: 'fhrunning.isactived',
      islocked: 'fhrunning.islocked',
      createUid: 'fhrunning.create_uid',
      updatedUid: 'fhrunning.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('fhrunning.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getFhrunningList(search: FhrunningSearchVo) {
    const qb = await getRepository(Fhrunning).createQueryBuilder(
      'fhrunning',
    );
    const fields: Record<string, string> = {
      id: 'fhrunning.id',
      name: 'fhrunning.name',
      description: 'fhrunning.description',
      fhname: 'fhrunning.fhname', 
      fhF1: 'fhrunning.fhF1', 
      fhF2: 'fhrunning.fhF2', 
      fhF3: 'fhrunning.fhF3', 
      fhF4: 'fhrunning.fhF4', 
      fhF5: 'fhrunning.fhF5', 
      fhF6: 'fhrunning.fhF6', 
      fhF7: 'fhrunning.fhF7', 
      fhF8: 'fhrunning.fhF8', 
      fhF9: 'fhrunning.fhF9', 

      createdAt: 'fhrunning.created_at',
      updatedAt: 'fhrunning.updated_at',
      isactived: 'fhrunning.isactived',
      islocked: 'fhrunning.islocked',
      createUid: 'fhrunning.create_uid',
      updatedUid: 'fhrunning.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("fhrunning.isactived='0'");
    /*
    multiSearch(
      qb,
      ['fhrunning.name', 'fhrunning.description'],
      search.search,
    );
     */
    qb.orderBy('fhrunning.created_at', 'DESC');
    //qb.addOrderBy('fhrunning.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  // async getFhrunningSearch(search: FhrunningSearchVo) {
  //   const qb =await getRepository(Fhrunning).createQueryBuilder('fhrunning');
  //   qb.leftJoin(User, 'user', 'fhrunning.create_uid = user.id');
  //   qb.select( `fhrunning.id,
  //     fhrunning.name,
  //     fhrunning.description,
  //     fhrunning.created_at,
  //     fhrunning.updated_at,
  //     fhrunning.isactived,
  //     fhrunning.islocked,
  //     fhrunning.create_uid,
  //     fhrunning.updated_uid,
  //     user.user_name as userName`);
  //     // andWhereEqual(qb, 'fhrunning', 'name', ownerType);
  //     // qb.where("fhrunning.isactived='0'");
  //     const fields: Record<string, string> = {
  //       id: 'fhrunning.id',
  //       name: 'fhrunning.name',
  //       description: 'fhrunning.description',
  //             fhname: 'fhrunning.fhname', 
  //     fhF1: 'fhrunning.fhF1', 
  //     fhF2: 'fhrunning.fhF2', 
  //     fhF3: 'fhrunning.fhF3', 
  //     fhF4: 'fhrunning.fhF4', 
  //     fhF5: 'fhrunning.fhF5', 
  //     fhF6: 'fhrunning.fhF6', 
  //     fhF7: 'fhrunning.fhF7', 
  //     fhF8: 'fhrunning.fhF8', 
  //     fhF9: 'fhrunning.fhF9', 

  //       createdAt: 'fhrunning.created_at',
  //       updatedAt: 'fhrunning.updated_at',
  //       isactived: 'fhrunning.isactived',
  //       islocked: 'fhrunning.islocked',
  //       createUid: 'fhrunning.create_uid',
  //       updatedUid: 'fhrunning.updated_uid',
  //       activityName: 'user.user_name',
  //     };
  
  //     selectFields(qb, fields);

  //     multiSearch(
  //       qb,
  //       ['fhrunning.name', 'fhrunning.description'],
  //       search.search,
  //     );  
  //     qb.orderBy('fhrunning.created_at', 'DESC');
  //     const count = await qb.getCount();
  //     const { skip, take } = skipAndTake(count, search);
  //     const raws = await qb.offset(skip).limit(take).getRawMany();
  //     return {'raws':raws,'count':count};
  // }



}
