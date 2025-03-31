import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { FhservicetbSearchVo, FhservicetbVo } from '../myvo/fhservicetb_vo';
import { Fhservicetb } from '../myentities/fhservicetb';

export class FhservicetbRepo {
  async create(fhservicetbVo: FhservicetbVo) {
    return await getRepository(Fhservicetb).insert(fhservicetbVo);
  }
  async update(Id: string, user_id: string, fhservicetbVo: FhservicetbVo) {
    fhservicetbVo.updatedAt = new Date();
    fhservicetbVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Fhservicetb).update(Id, fhservicetbVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Fhservicetb).update(Ids[0], {
      isactived: '1',
    });
  }
  async getFhservicetbsById(id: string) {
    const qb = await getRepository(Fhservicetb).createQueryBuilder(
      'fhservicetb',
    );
    const fields: Record<string, string> = {
      id: 'fhservicetb.id',
      name: 'fhservicetb.name',
      fhname: 'fhservicetb.fhname', 
      fhF0: 'fhservicetb.fhF0', 
      fhF1: 'fhservicetb.fhF1', 
      fhF2: 'fhservicetb.fhF2', 
      fhF3: 'fhservicetb.fhF3', 
      fhF4: 'fhservicetb.fhF4', 
      fhF5: 'fhservicetb.fhF5', 
      fhF6: 'fhservicetb.fhF6', 
      fhF7: 'fhservicetb.fhF7', 
      fhF8: 'fhservicetb.fhF8', 

      description: 'fhservicetb.description',
      createdAt: 'fhservicetb.created_at',
      updatedAt: 'fhservicetb.updated_at',
      isactived: 'fhservicetb.isactived',
      islocked: 'fhservicetb.islocked',
      createUid: 'fhservicetb.create_uid',
      updatedUid: 'fhservicetb.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'fhservicetb', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getFhservicetbAll() {
    const qb = getRepository(Fhservicetb).createQueryBuilder('fhservicetb');
    const fields: Record<string, string> = {
      id: 'fhservicetb.id',
      name: 'fhservicetb.name',
      description: 'fhservicetb.description',
      fhname: 'fhservicetb.fhname', 
      fhF0: 'fhservicetb.fhF0', 
      fhF1: 'fhservicetb.fhF1', 
      fhF2: 'fhservicetb.fhF2', 
      fhF3: 'fhservicetb.fhF3', 
      fhF4: 'fhservicetb.fhF4', 
      fhF5: 'fhservicetb.fhF5', 
      fhF6: 'fhservicetb.fhF6', 
      fhF7: 'fhservicetb.fhF7', 
      fhF8: 'fhservicetb.fhF8', 

      createdAt: 'fhservicetb.created_at',
      updatedAt: 'fhservicetb.updated_at',
      isactived: 'fhservicetb.isactived',
      islocked: 'fhservicetb.islocked',
      createUid: 'fhservicetb.create_uid',
      updatedUid: 'fhservicetb.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("fhservicetb.isactived='0'");
    qb.orderBy('fhservicetb.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getFhservicetbAllView() {
    const qb = await getRepository(Fhservicetb).createQueryBuilder(
      'fhservicetb',
    );
    const fields: Record<string, string> = {
      id: 'fhservicetb.id',
      name: 'fhservicetb.name',
      description: 'fhservicetb.description',
      fhname: 'fhservicetb.fhname', 
      fhF0: 'fhservicetb.fhF0', 
      fhF1: 'fhservicetb.fhF1', 
      fhF2: 'fhservicetb.fhF2', 
      fhF3: 'fhservicetb.fhF3', 
      fhF4: 'fhservicetb.fhF4', 
      fhF5: 'fhservicetb.fhF5', 
      fhF6: 'fhservicetb.fhF6', 
      fhF7: 'fhservicetb.fhF7', 
      fhF8: 'fhservicetb.fhF8', 

      createdAt: 'fhservicetb.created_at',
      updatedAt: 'fhservicetb.updated_at',
      isactived: 'fhservicetb.isactived',
      islocked: 'fhservicetb.islocked',
      createUid: 'fhservicetb.create_uid',
      updatedUid: 'fhservicetb.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('fhservicetb.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getFhservicetbList(search: FhservicetbSearchVo) {
    const qb = await getRepository(Fhservicetb).createQueryBuilder(
      'fhservicetb',
    );
    const fields: Record<string, string> = {
      id: 'fhservicetb.id',
      name: 'fhservicetb.name',
      description: 'fhservicetb.description',
      fhname: 'fhservicetb.fhname', 
      fhF0: 'fhservicetb.fhF0', 
      fhF1: 'fhservicetb.fhF1', 
      fhF2: 'fhservicetb.fhF2', 
      fhF3: 'fhservicetb.fhF3', 
      fhF4: 'fhservicetb.fhF4', 
      fhF5: 'fhservicetb.fhF5', 
      fhF6: 'fhservicetb.fhF6', 
      fhF7: 'fhservicetb.fhF7', 
      fhF8: 'fhservicetb.fhF8', 

      createdAt: 'fhservicetb.created_at',
      updatedAt: 'fhservicetb.updated_at',
      isactived: 'fhservicetb.isactived',
      islocked: 'fhservicetb.islocked',
      createUid: 'fhservicetb.create_uid',
      updatedUid: 'fhservicetb.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("fhservicetb.isactived='0'");
    /*
    multiSearch(
      qb,
      ['fhservicetb.name', 'fhservicetb.description'],
      search.search,
    );
     */
    qb.orderBy('fhservicetb.created_at', 'DESC');
    //qb.addOrderBy('fhservicetb.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  // async getFhservicetbSearch(search: FhservicetbSearchVo) {
  //   const qb =await getRepository(Fhservicetb).createQueryBuilder('fhservicetb');
  //   qb.leftJoin(User, 'user', 'fhservicetb.create_uid = user.id');
  //   qb.select( `fhservicetb.id,
  //     fhservicetb.name,
  //     fhservicetb.description,
  //     fhservicetb.created_at,
  //     fhservicetb.updated_at,
  //     fhservicetb.isactived,
  //     fhservicetb.islocked,
  //     fhservicetb.create_uid,
  //     fhservicetb.updated_uid,
  //     user.user_name as userName`);
  //     // andWhereEqual(qb, 'fhservicetb', 'name', ownerType);
  //     // qb.where("fhservicetb.isactived='0'");
  //     const fields: Record<string, string> = {
  //       id: 'fhservicetb.id',
  //       name: 'fhservicetb.name',
  //       description: 'fhservicetb.description',
  //             fhname: 'fhservicetb.fhname', 
  //     fhF0: 'fhservicetb.fhF0', 
  //     fhF1: 'fhservicetb.fhF1', 
  //     fhF2: 'fhservicetb.fhF2', 
  //     fhF3: 'fhservicetb.fhF3', 
  //     fhF4: 'fhservicetb.fhF4', 
  //     fhF5: 'fhservicetb.fhF5', 
  //     fhF6: 'fhservicetb.fhF6', 
  //     fhF7: 'fhservicetb.fhF7', 
  //     fhF8: 'fhservicetb.fhF8', 

  //       createdAt: 'fhservicetb.created_at',
  //       updatedAt: 'fhservicetb.updated_at',
  //       isactived: 'fhservicetb.isactived',
  //       islocked: 'fhservicetb.islocked',
  //       createUid: 'fhservicetb.create_uid',
  //       updatedUid: 'fhservicetb.updated_uid',
  //       activityName: 'user.user_name',
  //     };
  
  //     selectFields(qb, fields);

  //     multiSearch(
  //       qb,
  //       ['fhservicetb.name', 'fhservicetb.description'],
  //       search.search,
  //     );  
  //     qb.orderBy('fhservicetb.created_at', 'DESC');
  //     const count = await qb.getCount();
  //     const { skip, take } = skipAndTake(count, search);
  //     const raws = await qb.offset(skip).limit(take).getRawMany();
  //     return {'raws':raws,'count':count};
  // }



}
