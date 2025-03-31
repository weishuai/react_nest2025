import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { ProcurePlanSearchVo, ProcurePlanVo } from '../myvo/procure_plan_vo';
import { ProcurePlan } from '../myentities/procure_plan';

export class ProcurePlanRepo {
  async create(procurePlanVo: ProcurePlanVo) {
    return await getRepository(ProcurePlan).insert(procurePlanVo);
  }
  async update(Id: string, user_id: string, procurePlanVo: ProcurePlanVo) {
    procurePlanVo.updatedAt = new Date();
    procurePlanVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(ProcurePlan).update(Id, procurePlanVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(ProcurePlan).update(Ids[0], {
      isactived: '1',
    });
  }
  async getProcurePlansById(id: string) {
    const qb = await getRepository(ProcurePlan).createQueryBuilder(
      'procure_plan',
    );
    const fields: Record<string, string> = {
      id: 'procure_plan.id',
      name: 'procure_plan.name',
      fhname: 'procure_plan.fhname', 
      purchaser: 'procure_plan.purchaser', 
      applicationType: 'procure_plan.applicationType', 
      supplier: 'procure_plan.supplier', 
      deadline: 'procure_plan.deadline', 
      subscriptionDate: 'procure_plan.subscriptionDate', 
      deliveryDate: 'procure_plan.deliveryDate', 
      sourceFile: 'procure_plan.sourceFile', 
      jobType: 'procure_plan.jobType', 
      company: 'procure_plan.company', 
      term: 'procure_plan.term', 

      description: 'procure_plan.description',
      createdAt: 'procure_plan.created_at',
      updatedAt: 'procure_plan.updated_at',
      isactived: 'procure_plan.isactived',
      islocked: 'procure_plan.islocked',
      createUid: 'procure_plan.create_uid',
      updatedUid: 'procure_plan.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'procure_plan', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getProcurePlanAll() {
    const qb = getRepository(ProcurePlan).createQueryBuilder('procure_plan');
    const fields: Record<string, string> = {
      id: 'procure_plan.id',
      name: 'procure_plan.name',
      description: 'procure_plan.description',
      fhname: 'procure_plan.fhname', 
      purchaser: 'procure_plan.purchaser', 
      applicationType: 'procure_plan.applicationType', 
      supplier: 'procure_plan.supplier', 
      deadline: 'procure_plan.deadline', 
      subscriptionDate: 'procure_plan.subscriptionDate', 
      deliveryDate: 'procure_plan.deliveryDate', 
      sourceFile: 'procure_plan.sourceFile', 
      jobType: 'procure_plan.jobType', 
      company: 'procure_plan.company', 
      term: 'procure_plan.term', 

      createdAt: 'procure_plan.created_at',
      updatedAt: 'procure_plan.updated_at',
      isactived: 'procure_plan.isactived',
      islocked: 'procure_plan.islocked',
      createUid: 'procure_plan.create_uid',
      updatedUid: 'procure_plan.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("procure_plan.isactived='0'");
    qb.orderBy('procure_plan.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getProcurePlanAllView() {
    const qb = await getRepository(ProcurePlan).createQueryBuilder(
      'procure_plan',
    );
    const fields: Record<string, string> = {
      id: 'procure_plan.id',
      name: 'procure_plan.name',
      description: 'procure_plan.description',
      fhname: 'procure_plan.fhname', 
      purchaser: 'procure_plan.purchaser', 
      applicationType: 'procure_plan.applicationType', 
      supplier: 'procure_plan.supplier', 
      deadline: 'procure_plan.deadline', 
      subscriptionDate: 'procure_plan.subscriptionDate', 
      deliveryDate: 'procure_plan.deliveryDate', 
      sourceFile: 'procure_plan.sourceFile', 
      jobType: 'procure_plan.jobType', 
      company: 'procure_plan.company', 
      term: 'procure_plan.term', 

      createdAt: 'procure_plan.created_at',
      updatedAt: 'procure_plan.updated_at',
      isactived: 'procure_plan.isactived',
      islocked: 'procure_plan.islocked',
      createUid: 'procure_plan.create_uid',
      updatedUid: 'procure_plan.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('procure_plan.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getProcurePlanList(search: ProcurePlanSearchVo) {
    const qb = await getRepository(ProcurePlan).createQueryBuilder(
      'procure_plan',
    );
    const fields: Record<string, string> = {
      id: 'procure_plan.id',
      name: 'procure_plan.name',
      description: 'procure_plan.description',
      fhname: 'procure_plan.fhname', 
      purchaser: 'procure_plan.purchaser', 
      applicationType: 'procure_plan.applicationType', 
      supplier: 'procure_plan.supplier', 
      deadline: 'procure_plan.deadline', 
      subscriptionDate: 'procure_plan.subscriptionDate', 
      deliveryDate: 'procure_plan.deliveryDate', 
      sourceFile: 'procure_plan.sourceFile', 
      jobType: 'procure_plan.jobType', 
      company: 'procure_plan.company', 
      term: 'procure_plan.term', 

      createdAt: 'procure_plan.created_at',
      updatedAt: 'procure_plan.updated_at',
      isactived: 'procure_plan.isactived',
      islocked: 'procure_plan.islocked',
      createUid: 'procure_plan.create_uid',
      updatedUid: 'procure_plan.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("procure_plan.isactived='0'");
    /*
    multiSearch(
      qb,
      ['procure_plan.name', 'procure_plan.description'],
      search.search,
    );
     */
    qb.orderBy('procure_plan.created_at', 'DESC');
    //qb.addOrderBy('procure_plan.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  // async getProcurePlanSearch(search: ProcurePlanSearchVo) {
  //   const qb =await getRepository(ProcurePlan).createQueryBuilder('procure_plan');
  //   qb.leftJoin(User, 'user', 'procure_plan.create_uid = user.id');
  //   qb.select( `procure_plan.id,
  //     procure_plan.name,
  //     procure_plan.description,
  //     procure_plan.created_at,
  //     procure_plan.updated_at,
  //     procure_plan.isactived,
  //     procure_plan.islocked,
  //     procure_plan.create_uid,
  //     procure_plan.updated_uid,
  //     user.user_name as userName`);
  //     // andWhereEqual(qb, 'procure_plan', 'name', ownerType);
  //     // qb.where("procure_plan.isactived='0'");
  //     const fields: Record<string, string> = {
  //       id: 'procure_plan.id',
  //       name: 'procure_plan.name',
  //       description: 'procure_plan.description',
  //             fhname: 'procure_plan.fhname', 
  //     purchaser: 'procure_plan.purchaser', 
  //     applicationType: 'procure_plan.applicationType', 
  //     supplier: 'procure_plan.supplier', 
  //     deadline: 'procure_plan.deadline', 
  //     subscriptionDate: 'procure_plan.subscriptionDate', 
  //     deliveryDate: 'procure_plan.deliveryDate', 
  //     sourceFile: 'procure_plan.sourceFile', 
  //     jobType: 'procure_plan.jobType', 
  //     company: 'procure_plan.company', 
  //     term: 'procure_plan.term', 

  //       createdAt: 'procure_plan.created_at',
  //       updatedAt: 'procure_plan.updated_at',
  //       isactived: 'procure_plan.isactived',
  //       islocked: 'procure_plan.islocked',
  //       createUid: 'procure_plan.create_uid',
  //       updatedUid: 'procure_plan.updated_uid',
  //       activityName: 'user.user_name',
  //     };
  
  //     selectFields(qb, fields);

  //     multiSearch(
  //       qb,
  //       ['procure_plan.name', 'procure_plan.description'],
  //       search.search,
  //     );  
  //     qb.orderBy('procure_plan.created_at', 'DESC');
  //     const count = await qb.getCount();
  //     const { skip, take } = skipAndTake(count, search);
  //     const raws = await qb.offset(skip).limit(take).getRawMany();
  //     return {'raws':raws,'count':count};
  // }



}
