import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { HrContractSearchVo, HrContractVo } from '../myvo/hr.contract_vo';
import { HrContract } from '../myentities/hr.contract';

export class HrContractRepo {
  async create(hrContractVo: HrContractVo) {
    return await getRepository(HrContract).insert(hrContractVo);
  }
  async update(Id: string, user_id: string, hrContractVo: HrContractVo) {
    hrContractVo.updatedAt = new Date();
    hrContractVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(HrContract).update(Id, hrContractVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(HrContract).update(Ids[0], {
      isactived: '1',
    });
  }
  async getHrContractsById(id: string) {
    const qb = await getRepository(HrContract).createQueryBuilder(
      'hr.contract',
    );
    const fields: Record<string, string> = {
      id: 'hr.contract.id',
      name: 'hr.contract.name',
      fhname: 'hr.contract.fhname', 
      staff: 'hr.contract.staff', 
      department: 'hr.contract.department', 
      job: 'hr.contract.job', 
      company: 'hr.contract.company', 
      payStructure: 'hr.contract.payStructure', 
      startDate: 'hr.contract.startDate', 
      firstContractDate: 'hr.contract.firstContractDate', 
      endDate: 'hr.contract.endDate', 
      workArrangement: 'hr.contract.workArrangement', 
      HRSupervisor: 'hr.contract.HRSupervisor', 
      wages: 'hr.contract.wages', 
      fhtxt: 'hr.contract.fhtxt', 

      description: 'hr.contract.description',
      createdAt: 'hr.contract.created_at',
      updatedAt: 'hr.contract.updated_at',
      isactived: 'hr.contract.isactived',
      islocked: 'hr.contract.islocked',
      createUid: 'hr.contract.create_uid',
      updatedUid: 'hr.contract.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'hr.contract', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getHrContractAll() {
    const qb = getRepository(HrContract).createQueryBuilder('hr.contract');
    const fields: Record<string, string> = {
      id: 'hr.contract.id',
      name: 'hr.contract.name',
      description: 'hr.contract.description',
      fhname: 'hr.contract.fhname', 
      staff: 'hr.contract.staff', 
      department: 'hr.contract.department', 
      job: 'hr.contract.job', 
      company: 'hr.contract.company', 
      payStructure: 'hr.contract.payStructure', 
      startDate: 'hr.contract.startDate', 
      firstContractDate: 'hr.contract.firstContractDate', 
      endDate: 'hr.contract.endDate', 
      workArrangement: 'hr.contract.workArrangement', 
      HRSupervisor: 'hr.contract.HRSupervisor', 
      wages: 'hr.contract.wages', 
      fhtxt: 'hr.contract.fhtxt', 

      createdAt: 'hr.contract.created_at',
      updatedAt: 'hr.contract.updated_at',
      isactived: 'hr.contract.isactived',
      islocked: 'hr.contract.islocked',
      createUid: 'hr.contract.create_uid',
      updatedUid: 'hr.contract.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("hr.contract.isactived='0'");
    qb.orderBy('hr.contract.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getHrContractAllView() {
    const qb = await getRepository(HrContract).createQueryBuilder(
      'hr.contract',
    );
    const fields: Record<string, string> = {
      id: 'hr.contract.id',
      name: 'hr.contract.name',
      description: 'hr.contract.description',
      fhname: 'hr.contract.fhname', 
      staff: 'hr.contract.staff', 
      department: 'hr.contract.department', 
      job: 'hr.contract.job', 
      company: 'hr.contract.company', 
      payStructure: 'hr.contract.payStructure', 
      startDate: 'hr.contract.startDate', 
      firstContractDate: 'hr.contract.firstContractDate', 
      endDate: 'hr.contract.endDate', 
      workArrangement: 'hr.contract.workArrangement', 
      HRSupervisor: 'hr.contract.HRSupervisor', 
      wages: 'hr.contract.wages', 
      fhtxt: 'hr.contract.fhtxt', 

      createdAt: 'hr.contract.created_at',
      updatedAt: 'hr.contract.updated_at',
      isactived: 'hr.contract.isactived',
      islocked: 'hr.contract.islocked',
      createUid: 'hr.contract.create_uid',
      updatedUid: 'hr.contract.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('hr.contract.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getHrContractList(search: HrContractSearchVo) {
    const qb = await getRepository(HrContract).createQueryBuilder(
      'hr.contract',
    );
    const fields: Record<string, string> = {
      id: 'hr.contract.id',
      name: 'hr.contract.name',
      description: 'hr.contract.description',
      fhname: 'hr.contract.fhname', 
      staff: 'hr.contract.staff', 
      department: 'hr.contract.department', 
      job: 'hr.contract.job', 
      company: 'hr.contract.company', 
      payStructure: 'hr.contract.payStructure', 
      startDate: 'hr.contract.startDate', 
      firstContractDate: 'hr.contract.firstContractDate', 
      endDate: 'hr.contract.endDate', 
      workArrangement: 'hr.contract.workArrangement', 
      HRSupervisor: 'hr.contract.HRSupervisor', 
      wages: 'hr.contract.wages', 
      fhtxt: 'hr.contract.fhtxt', 

      createdAt: 'hr.contract.created_at',
      updatedAt: 'hr.contract.updated_at',
      isactived: 'hr.contract.isactived',
      islocked: 'hr.contract.islocked',
      createUid: 'hr.contract.create_uid',
      updatedUid: 'hr.contract.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("hr.contract.isactived='0'");
    /*
    multiSearch(
      qb,
      ['hr.contract.name', 'hr.contract.description'],
      search.search,
    );
     */
    qb.orderBy('hr.contract.created_at', 'DESC');
    //qb.addOrderBy('hr.contract.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  // async getHrContractSearch(search: HrContractSearchVo) {
  //   const qb =await getRepository(HrContract).createQueryBuilder('hr.contract');
  //   qb.leftJoin(User, 'user', 'hr.contract.create_uid = user.id');
  //   qb.select( `hr.contract.id,
  //     hr.contract.name,
  //     hr.contract.description,
  //     hr.contract.created_at,
  //     hr.contract.updated_at,
  //     hr.contract.isactived,
  //     hr.contract.islocked,
  //     hr.contract.create_uid,
  //     hr.contract.updated_uid,
  //     user.user_name as userName`);
  //     // andWhereEqual(qb, 'hr.contract', 'name', ownerType);
  //     // qb.where("hr.contract.isactived='0'");
  //     const fields: Record<string, string> = {
  //       id: 'hr.contract.id',
  //       name: 'hr.contract.name',
  //       description: 'hr.contract.description',
  //             fhname: 'hr.contract.fhname', 
  //     staff: 'hr.contract.staff', 
  //     department: 'hr.contract.department', 
  //     job: 'hr.contract.job', 
  //     company: 'hr.contract.company', 
  //     payStructure: 'hr.contract.payStructure', 
  //     startDate: 'hr.contract.startDate', 
  //     firstContractDate: 'hr.contract.firstContractDate', 
  //     endDate: 'hr.contract.endDate', 
  //     workArrangement: 'hr.contract.workArrangement', 
  //     HRSupervisor: 'hr.contract.HRSupervisor', 
  //     wages: 'hr.contract.wages', 
  //     fhtxt: 'hr.contract.fhtxt', 

  //       createdAt: 'hr.contract.created_at',
  //       updatedAt: 'hr.contract.updated_at',
  //       isactived: 'hr.contract.isactived',
  //       islocked: 'hr.contract.islocked',
  //       createUid: 'hr.contract.create_uid',
  //       updatedUid: 'hr.contract.updated_uid',
  //       activityName: 'user.user_name',
  //     };
  
  //     selectFields(qb, fields);

  //     multiSearch(
  //       qb,
  //       ['hr.contract.name', 'hr.contract.description'],
  //       search.search,
  //     );  
  //     qb.orderBy('hr.contract.created_at', 'DESC');
  //     const count = await qb.getCount();
  //     const { skip, take } = skipAndTake(count, search);
  //     const raws = await qb.offset(skip).limit(take).getRawMany();
  //     return {'raws':raws,'count':count};
  // }



}
