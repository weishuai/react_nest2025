import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { ProcurePlanListSearchVo, ProcurePlanListVo } from '../myvo/procure_plan_list_vo';
import { ProcurePlanList } from '../myentities/procure_plan_list';

export class ProcurePlanListRepo {
  async create(procurePlanListVo: ProcurePlanListVo) {
    return await getRepository(ProcurePlanList).insert(procurePlanListVo);
  }
  async update(Id: string, user_id: string, procurePlanListVo: ProcurePlanListVo) {
    procurePlanListVo.updatedAt = new Date();
    procurePlanListVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(ProcurePlanList).update(Id, procurePlanListVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(ProcurePlanList).update(Ids[0], {
      isactived: '1',
    });
  }
  async getProcurePlanListsById(id: string) {
    const qb = await getRepository(ProcurePlanList).createQueryBuilder(
      'procure_plan_list',
    );
    const fields: Record<string, string> = {
      id: 'procure_plan_list.id',
      name: 'procure_plan_list.name',
      mid: 'procure_plan_list.mid', 
      product: 'procure_plan_list.product', 
      fhtext: 'procure_plan_list.fhtext', 
      number: 'procure_plan_list.number', 
      orderedQuantity: 'procure_plan_list.orderedQuantity', 
      unit: 'procure_plan_list.unit', 
      unitPrice: 'procure_plan_list.unitPrice', 

      description: 'procure_plan_list.description',
      createdAt: 'procure_plan_list.created_at',
      updatedAt: 'procure_plan_list.updated_at',
      isactived: 'procure_plan_list.isactived',
      islocked: 'procure_plan_list.islocked',
      createUid: 'procure_plan_list.create_uid',
      updatedUid: 'procure_plan_list.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'procure_plan_list', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getProcurePlanListAll() {
    const qb = getRepository(ProcurePlanList).createQueryBuilder('procure_plan_list');
    const fields: Record<string, string> = {
      id: 'procure_plan_list.id',
      name: 'procure_plan_list.name',
      description: 'procure_plan_list.description',
      mid: 'procure_plan_list.mid', 
      product: 'procure_plan_list.product', 
      fhtext: 'procure_plan_list.fhtext', 
      number: 'procure_plan_list.number', 
      orderedQuantity: 'procure_plan_list.orderedQuantity', 
      unit: 'procure_plan_list.unit', 
      unitPrice: 'procure_plan_list.unitPrice', 

      createdAt: 'procure_plan_list.created_at',
      updatedAt: 'procure_plan_list.updated_at',
      isactived: 'procure_plan_list.isactived',
      islocked: 'procure_plan_list.islocked',
      createUid: 'procure_plan_list.create_uid',
      updatedUid: 'procure_plan_list.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("procure_plan_list.isactived='0'");
    qb.orderBy('procure_plan_list.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getProcurePlanListAllView() {
    const qb = await getRepository(ProcurePlanList).createQueryBuilder(
      'procure_plan_list',
    );
    const fields: Record<string, string> = {
      id: 'procure_plan_list.id',
      name: 'procure_plan_list.name',
      description: 'procure_plan_list.description',
      mid: 'procure_plan_list.mid', 
      product: 'procure_plan_list.product', 
      fhtext: 'procure_plan_list.fhtext', 
      number: 'procure_plan_list.number', 
      orderedQuantity: 'procure_plan_list.orderedQuantity', 
      unit: 'procure_plan_list.unit', 
      unitPrice: 'procure_plan_list.unitPrice', 

      createdAt: 'procure_plan_list.created_at',
      updatedAt: 'procure_plan_list.updated_at',
      isactived: 'procure_plan_list.isactived',
      islocked: 'procure_plan_list.islocked',
      createUid: 'procure_plan_list.create_uid',
      updatedUid: 'procure_plan_list.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('procure_plan_list.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getProcurePlanListList(search: ProcurePlanListSearchVo) {
    const qb = await getRepository(ProcurePlanList).createQueryBuilder(
      'procure_plan_list',
    );
    const fields: Record<string, string> = {
      id: 'procure_plan_list.id',
      name: 'procure_plan_list.name',
      description: 'procure_plan_list.description',
      mid: 'procure_plan_list.mid', 
      product: 'procure_plan_list.product', 
      fhtext: 'procure_plan_list.fhtext', 
      number: 'procure_plan_list.number', 
      orderedQuantity: 'procure_plan_list.orderedQuantity', 
      unit: 'procure_plan_list.unit', 
      unitPrice: 'procure_plan_list.unitPrice', 

      createdAt: 'procure_plan_list.created_at',
      updatedAt: 'procure_plan_list.updated_at',
      isactived: 'procure_plan_list.isactived',
      islocked: 'procure_plan_list.islocked',
      createUid: 'procure_plan_list.create_uid',
      updatedUid: 'procure_plan_list.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("procure_plan_list.isactived='0'");
    /*
    multiSearch(
      qb,
      ['procure_plan_list.name', 'procure_plan_list.description'],
      search.search,
    );
     */
    qb.orderBy('procure_plan_list.created_at', 'DESC');
    //qb.addOrderBy('procure_plan_list.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  // async getProcurePlanListSearch(search: ProcurePlanListSearchVo) {
  //   const qb =await getRepository(ProcurePlanList).createQueryBuilder('procure_plan_list');
  //   qb.leftJoin(User, 'user', 'procure_plan_list.create_uid = user.id');
  //   qb.select( `procure_plan_list.id,
  //     procure_plan_list.name,
  //     procure_plan_list.description,
  //     procure_plan_list.created_at,
  //     procure_plan_list.updated_at,
  //     procure_plan_list.isactived,
  //     procure_plan_list.islocked,
  //     procure_plan_list.create_uid,
  //     procure_plan_list.updated_uid,
  //     user.user_name as userName`);
  //     // andWhereEqual(qb, 'procure_plan_list', 'name', ownerType);
  //     // qb.where("procure_plan_list.isactived='0'");
  //     const fields: Record<string, string> = {
  //       id: 'procure_plan_list.id',
  //       name: 'procure_plan_list.name',
  //       description: 'procure_plan_list.description',
  //             mid: 'procure_plan_list.mid', 
  //     product: 'procure_plan_list.product', 
  //     fhtext: 'procure_plan_list.fhtext', 
  //     number: 'procure_plan_list.number', 
  //     orderedQuantity: 'procure_plan_list.orderedQuantity', 
  //     unit: 'procure_plan_list.unit', 
  //     unitPrice: 'procure_plan_list.unitPrice', 

  //       createdAt: 'procure_plan_list.created_at',
  //       updatedAt: 'procure_plan_list.updated_at',
  //       isactived: 'procure_plan_list.isactived',
  //       islocked: 'procure_plan_list.islocked',
  //       createUid: 'procure_plan_list.create_uid',
  //       updatedUid: 'procure_plan_list.updated_uid',
  //       activityName: 'user.user_name',
  //     };
  
  //     selectFields(qb, fields);

  //     multiSearch(
  //       qb,
  //       ['procure_plan_list.name', 'procure_plan_list.description'],
  //       search.search,
  //     );  
  //     qb.orderBy('procure_plan_list.created_at', 'DESC');
  //     const count = await qb.getCount();
  //     const { skip, take } = skipAndTake(count, search);
  //     const raws = await qb.offset(skip).limit(take).getRawMany();
  //     return {'raws':raws,'count':count};
  // }



}
