import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { FhinspectionSearchVo, FhinspectionVo } from '../myvo/fhinspection_vo';
import { Fhinspection } from '../myentities/fhinspection';

export class FhinspectionRepo {
  async create(fhinspectionVo: FhinspectionVo) {
    return await getRepository(Fhinspection).insert(fhinspectionVo);
  }
  async update(Id: string, user_id: string, fhinspectionVo: FhinspectionVo) {
    fhinspectionVo.updatedAt = new Date();
    fhinspectionVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Fhinspection).update(Id, fhinspectionVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Fhinspection).update(Ids[0], {
      isactived: '1',
    });
  }
  async getFhinspectionsById(id: string) {
    const qb = await getRepository(Fhinspection).createQueryBuilder(
      'fhinspection',
    );
    const fields: Record<string, string> = {
      id: 'fhinspection.id',
      name: 'fhinspection.name',
      fhname: 'fhinspection.fhname', 
      fhF1: 'fhinspection.fhF1', 
      fhF2: 'fhinspection.fhF2', 
      fhF3: 'fhinspection.fhF3', 
      fhF4: 'fhinspection.fhF4', 
      fhF5: 'fhinspection.fhF5', 
      fhF6: 'fhinspection.fhF6', 

      description: 'fhinspection.description',
      createdAt: 'fhinspection.created_at',
      updatedAt: 'fhinspection.updated_at',
      isactived: 'fhinspection.isactived',
      islocked: 'fhinspection.islocked',
      createUid: 'fhinspection.create_uid',
      updatedUid: 'fhinspection.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'fhinspection', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getFhinspectionAll() {
    const qb = getRepository(Fhinspection).createQueryBuilder('fhinspection');
    const fields: Record<string, string> = {
      id: 'fhinspection.id',
      name: 'fhinspection.name',
      description: 'fhinspection.description',
      fhname: 'fhinspection.fhname', 
      fhF1: 'fhinspection.fhF1', 
      fhF2: 'fhinspection.fhF2', 
      fhF3: 'fhinspection.fhF3', 
      fhF4: 'fhinspection.fhF4', 
      fhF5: 'fhinspection.fhF5', 
      fhF6: 'fhinspection.fhF6', 

      createdAt: 'fhinspection.created_at',
      updatedAt: 'fhinspection.updated_at',
      isactived: 'fhinspection.isactived',
      islocked: 'fhinspection.islocked',
      createUid: 'fhinspection.create_uid',
      updatedUid: 'fhinspection.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("fhinspection.isactived='0'");
    qb.orderBy('fhinspection.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getFhinspectionAllView() {
    const qb = await getRepository(Fhinspection).createQueryBuilder(
      'fhinspection',
    );
    const fields: Record<string, string> = {
      id: 'fhinspection.id',
      name: 'fhinspection.name',
      description: 'fhinspection.description',
      fhname: 'fhinspection.fhname', 
      fhF1: 'fhinspection.fhF1', 
      fhF2: 'fhinspection.fhF2', 
      fhF3: 'fhinspection.fhF3', 
      fhF4: 'fhinspection.fhF4', 
      fhF5: 'fhinspection.fhF5', 
      fhF6: 'fhinspection.fhF6', 

      createdAt: 'fhinspection.created_at',
      updatedAt: 'fhinspection.updated_at',
      isactived: 'fhinspection.isactived',
      islocked: 'fhinspection.islocked',
      createUid: 'fhinspection.create_uid',
      updatedUid: 'fhinspection.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('fhinspection.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getFhinspectionList(search: FhinspectionSearchVo) {
    const qb = await getRepository(Fhinspection).createQueryBuilder(
      'fhinspection',
    );
    const fields: Record<string, string> = {
      id: 'fhinspection.id',
      name: 'fhinspection.name',
      description: 'fhinspection.description',
      fhname: 'fhinspection.fhname', 
      fhF1: 'fhinspection.fhF1', 
      fhF2: 'fhinspection.fhF2', 
      fhF3: 'fhinspection.fhF3', 
      fhF4: 'fhinspection.fhF4', 
      fhF5: 'fhinspection.fhF5', 
      fhF6: 'fhinspection.fhF6', 

      createdAt: 'fhinspection.created_at',
      updatedAt: 'fhinspection.updated_at',
      isactived: 'fhinspection.isactived',
      islocked: 'fhinspection.islocked',
      createUid: 'fhinspection.create_uid',
      updatedUid: 'fhinspection.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("fhinspection.isactived='0'");
    /*
    multiSearch(
      qb,
      ['fhinspection.name', 'fhinspection.description'],
      search.search,
    );
     */
    qb.orderBy('fhinspection.created_at', 'DESC');
    //qb.addOrderBy('fhinspection.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  // async getFhinspectionSearch(search: FhinspectionSearchVo) {
  //   const qb =await getRepository(Fhinspection).createQueryBuilder('fhinspection');
  //   qb.leftJoin(User, 'user', 'fhinspection.create_uid = user.id');
  //   qb.select( `fhinspection.id,
  //     fhinspection.name,
  //     fhinspection.description,
  //     fhinspection.created_at,
  //     fhinspection.updated_at,
  //     fhinspection.isactived,
  //     fhinspection.islocked,
  //     fhinspection.create_uid,
  //     fhinspection.updated_uid,
  //     user.user_name as userName`);
  //     // andWhereEqual(qb, 'fhinspection', 'name', ownerType);
  //     // qb.where("fhinspection.isactived='0'");
  //     const fields: Record<string, string> = {
  //       id: 'fhinspection.id',
  //       name: 'fhinspection.name',
  //       description: 'fhinspection.description',
  //             fhname: 'fhinspection.fhname', 
  //     fhF1: 'fhinspection.fhF1', 
  //     fhF2: 'fhinspection.fhF2', 
  //     fhF3: 'fhinspection.fhF3', 
  //     fhF4: 'fhinspection.fhF4', 
  //     fhF5: 'fhinspection.fhF5', 
  //     fhF6: 'fhinspection.fhF6', 

  //       createdAt: 'fhinspection.created_at',
  //       updatedAt: 'fhinspection.updated_at',
  //       isactived: 'fhinspection.isactived',
  //       islocked: 'fhinspection.islocked',
  //       createUid: 'fhinspection.create_uid',
  //       updatedUid: 'fhinspection.updated_uid',
  //       activityName: 'user.user_name',
  //     };
  
  //     selectFields(qb, fields);

  //     multiSearch(
  //       qb,
  //       ['fhinspection.name', 'fhinspection.description'],
  //       search.search,
  //     );  
  //     qb.orderBy('fhinspection.created_at', 'DESC');
  //     const count = await qb.getCount();
  //     const { skip, take } = skipAndTake(count, search);
  //     const raws = await qb.offset(skip).limit(take).getRawMany();
  //     return {'raws':raws,'count':count};
  // }



}
