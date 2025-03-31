import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { FhservicePlanSearchVo, FhservicePlanVo } from '../myvo/fhservice_plan_vo';
import { FhservicePlan } from '../myentities/fhservice_plan';

export class FhservicePlanRepo {
  async create(fhservicePlanVo: FhservicePlanVo) {
    return await getRepository(FhservicePlan).insert(fhservicePlanVo);
  }
  async update(Id: string, user_id: string, fhservicePlanVo: FhservicePlanVo) {
    fhservicePlanVo.updatedAt = new Date();
    fhservicePlanVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(FhservicePlan).update(Id, fhservicePlanVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(FhservicePlan).update(Ids[0], {
      isactived: '1',
    });
  }
  async getFhservicePlansById(id: string) {
    const qb = await getRepository(FhservicePlan).createQueryBuilder(
      'fhservice_plan',
    );
    const fields: Record<string, string> = {
      id: 'fhservice_plan.id',
      name: 'fhservice_plan.name',
      fhname: 'fhservice_plan.fhname', 
      fhF1: 'fhservice_plan.fhF1', 
      fhF2: 'fhservice_plan.fhF2', 
      fhF3: 'fhservice_plan.fhF3', 
      fhF4: 'fhservice_plan.fhF4', 
      fhF5: 'fhservice_plan.fhF5', 
      fhF6: 'fhservice_plan.fhF6', 
      fhF7: 'fhservice_plan.fhF7', 
      fhF8: 'fhservice_plan.fhF8', 
      fhF9: 'fhservice_plan.fhF9', 
      fhF10: 'fhservice_plan.fhF10', 

      description: 'fhservice_plan.description',
      createdAt: 'fhservice_plan.created_at',
      updatedAt: 'fhservice_plan.updated_at',
      isactived: 'fhservice_plan.isactived',
      islocked: 'fhservice_plan.islocked',
      createUid: 'fhservice_plan.create_uid',
      updatedUid: 'fhservice_plan.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'fhservice_plan', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getFhservicePlanAll() {
    const qb = getRepository(FhservicePlan).createQueryBuilder('fhservice_plan');
    const fields: Record<string, string> = {
      id: 'fhservice_plan.id',
      name: 'fhservice_plan.name',
      description: 'fhservice_plan.description',
      fhname: 'fhservice_plan.fhname', 
      fhF1: 'fhservice_plan.fhF1', 
      fhF2: 'fhservice_plan.fhF2', 
      fhF3: 'fhservice_plan.fhF3', 
      fhF4: 'fhservice_plan.fhF4', 
      fhF5: 'fhservice_plan.fhF5', 
      fhF6: 'fhservice_plan.fhF6', 
      fhF7: 'fhservice_plan.fhF7', 
      fhF8: 'fhservice_plan.fhF8', 
      fhF9: 'fhservice_plan.fhF9', 
      fhF10: 'fhservice_plan.fhF10', 

      createdAt: 'fhservice_plan.created_at',
      updatedAt: 'fhservice_plan.updated_at',
      isactived: 'fhservice_plan.isactived',
      islocked: 'fhservice_plan.islocked',
      createUid: 'fhservice_plan.create_uid',
      updatedUid: 'fhservice_plan.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("fhservice_plan.isactived='0'");
    qb.orderBy('fhservice_plan.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getFhservicePlanAllView() {
    const qb = await getRepository(FhservicePlan).createQueryBuilder(
      'fhservice_plan',
    );
    const fields: Record<string, string> = {
      id: 'fhservice_plan.id',
      name: 'fhservice_plan.name',
      description: 'fhservice_plan.description',
      fhname: 'fhservice_plan.fhname', 
      fhF1: 'fhservice_plan.fhF1', 
      fhF2: 'fhservice_plan.fhF2', 
      fhF3: 'fhservice_plan.fhF3', 
      fhF4: 'fhservice_plan.fhF4', 
      fhF5: 'fhservice_plan.fhF5', 
      fhF6: 'fhservice_plan.fhF6', 
      fhF7: 'fhservice_plan.fhF7', 
      fhF8: 'fhservice_plan.fhF8', 
      fhF9: 'fhservice_plan.fhF9', 
      fhF10: 'fhservice_plan.fhF10', 

      createdAt: 'fhservice_plan.created_at',
      updatedAt: 'fhservice_plan.updated_at',
      isactived: 'fhservice_plan.isactived',
      islocked: 'fhservice_plan.islocked',
      createUid: 'fhservice_plan.create_uid',
      updatedUid: 'fhservice_plan.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('fhservice_plan.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getFhservicePlanList(search: FhservicePlanSearchVo) {
    const qb = await getRepository(FhservicePlan).createQueryBuilder(
      'fhservice_plan',
    );
    const fields: Record<string, string> = {
      id: 'fhservice_plan.id',
      name: 'fhservice_plan.name',
      description: 'fhservice_plan.description',
      fhname: 'fhservice_plan.fhname', 
      fhF1: 'fhservice_plan.fhF1', 
      fhF2: 'fhservice_plan.fhF2', 
      fhF3: 'fhservice_plan.fhF3', 
      fhF4: 'fhservice_plan.fhF4', 
      fhF5: 'fhservice_plan.fhF5', 
      fhF6: 'fhservice_plan.fhF6', 
      fhF7: 'fhservice_plan.fhF7', 
      fhF8: 'fhservice_plan.fhF8', 
      fhF9: 'fhservice_plan.fhF9', 
      fhF10: 'fhservice_plan.fhF10', 

      createdAt: 'fhservice_plan.created_at',
      updatedAt: 'fhservice_plan.updated_at',
      isactived: 'fhservice_plan.isactived',
      islocked: 'fhservice_plan.islocked',
      createUid: 'fhservice_plan.create_uid',
      updatedUid: 'fhservice_plan.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("fhservice_plan.isactived='0'");
    /*
    multiSearch(
      qb,
      ['fhservice_plan.name', 'fhservice_plan.description'],
      search.search,
    );
     */
    qb.orderBy('fhservice_plan.created_at', 'DESC');
    //qb.addOrderBy('fhservice_plan.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  // async getFhservicePlanSearch(search: FhservicePlanSearchVo) {
  //   const qb =await getRepository(FhservicePlan).createQueryBuilder('fhservice_plan');
  //   qb.leftJoin(User, 'user', 'fhservice_plan.create_uid = user.id');
  //   qb.select( `fhservice_plan.id,
  //     fhservice_plan.name,
  //     fhservice_plan.description,
  //     fhservice_plan.created_at,
  //     fhservice_plan.updated_at,
  //     fhservice_plan.isactived,
  //     fhservice_plan.islocked,
  //     fhservice_plan.create_uid,
  //     fhservice_plan.updated_uid,
  //     user.user_name as userName`);
  //     // andWhereEqual(qb, 'fhservice_plan', 'name', ownerType);
  //     // qb.where("fhservice_plan.isactived='0'");
  //     const fields: Record<string, string> = {
  //       id: 'fhservice_plan.id',
  //       name: 'fhservice_plan.name',
  //       description: 'fhservice_plan.description',
  //             fhname: 'fhservice_plan.fhname', 
  //     fhF1: 'fhservice_plan.fhF1', 
  //     fhF2: 'fhservice_plan.fhF2', 
  //     fhF3: 'fhservice_plan.fhF3', 
  //     fhF4: 'fhservice_plan.fhF4', 
  //     fhF5: 'fhservice_plan.fhF5', 
  //     fhF6: 'fhservice_plan.fhF6', 
  //     fhF7: 'fhservice_plan.fhF7', 
  //     fhF8: 'fhservice_plan.fhF8', 
  //     fhF9: 'fhservice_plan.fhF9', 
  //     fhF10: 'fhservice_plan.fhF10', 

  //       createdAt: 'fhservice_plan.created_at',
  //       updatedAt: 'fhservice_plan.updated_at',
  //       isactived: 'fhservice_plan.isactived',
  //       islocked: 'fhservice_plan.islocked',
  //       createUid: 'fhservice_plan.create_uid',
  //       updatedUid: 'fhservice_plan.updated_uid',
  //       activityName: 'user.user_name',
  //     };
  
  //     selectFields(qb, fields);

  //     multiSearch(
  //       qb,
  //       ['fhservice_plan.name', 'fhservice_plan.description'],
  //       search.search,
  //     );  
  //     qb.orderBy('fhservice_plan.created_at', 'DESC');
  //     const count = await qb.getCount();
  //     const { skip, take } = skipAndTake(count, search);
  //     const raws = await qb.offset(skip).limit(take).getRawMany();
  //     return {'raws':raws,'count':count};
  // }



}
