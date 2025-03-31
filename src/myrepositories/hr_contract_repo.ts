import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { HrContractSearchVo, HrContractVo } from '../myvo/hr_contract_vo';
import { HrContract } from '../myentities/hr_contract';

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
      'hr_contract',
    );
    const fields: Record<string, string> = {
      id: 'hr_contract.id',
      name: 'hr_contract.name',
      fhname: 'hr_contract.fhname', 
      staff: 'hr_contract.staff', 
      department: 'hr_contract.department', 
      job: 'hr_contract.job', 
      company: 'hr_contract.company', 
      payStructure: 'hr_contract.payStructure', 
      startDate: 'hr_contract.startDate', 
      firstContractDate: 'hr_contract.firstContractDate', 
      endDate: 'hr_contract.endDate', 
      workArrangement: 'hr_contract.workArrangement', 
      HRSupervisor: 'hr_contract.HRSupervisor', 
      wages: 'hr_contract.wages', 
      fhtxt: 'hr_contract.fhtxt', 

      description: 'hr_contract.description',
      createdAt: 'hr_contract.created_at',
      updatedAt: 'hr_contract.updated_at',
      isactived: 'hr_contract.isactived',
      islocked: 'hr_contract.islocked',
      createUid: 'hr_contract.create_uid',
      updatedUid: 'hr_contract.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'hr_contract', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getHrContractAll() {
    const qb = getRepository(HrContract).createQueryBuilder('hr_contract');
    const fields: Record<string, string> = {
      id: 'hr_contract.id',
      name: 'hr_contract.name',
      description: 'hr_contract.description',
      fhname: 'hr_contract.fhname', 
      staff: 'hr_contract.staff', 
      department: 'hr_contract.department', 
      job: 'hr_contract.job', 
      company: 'hr_contract.company', 
      payStructure: 'hr_contract.payStructure', 
      startDate: 'hr_contract.startDate', 
      firstContractDate: 'hr_contract.firstContractDate', 
      endDate: 'hr_contract.endDate', 
      workArrangement: 'hr_contract.workArrangement', 
      HRSupervisor: 'hr_contract.HRSupervisor', 
      wages: 'hr_contract.wages', 
      fhtxt: 'hr_contract.fhtxt', 

      createdAt: 'hr_contract.created_at',
      updatedAt: 'hr_contract.updated_at',
      isactived: 'hr_contract.isactived',
      islocked: 'hr_contract.islocked',
      createUid: 'hr_contract.create_uid',
      updatedUid: 'hr_contract.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("hr_contract.isactived='0'");
    qb.orderBy('hr_contract.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getHrContractAllView() {
    const qb = await getRepository(HrContract).createQueryBuilder(
      'hr_contract',
    );
    const fields: Record<string, string> = {
      id: 'hr_contract.id',
      name: 'hr_contract.name',
      description: 'hr_contract.description',
      fhname: 'hr_contract.fhname', 
      staff: 'hr_contract.staff', 
      department: 'hr_contract.department', 
      job: 'hr_contract.job', 
      company: 'hr_contract.company', 
      payStructure: 'hr_contract.payStructure', 
      startDate: 'hr_contract.startDate', 
      firstContractDate: 'hr_contract.firstContractDate', 
      endDate: 'hr_contract.endDate', 
      workArrangement: 'hr_contract.workArrangement', 
      HRSupervisor: 'hr_contract.HRSupervisor', 
      wages: 'hr_contract.wages', 
      fhtxt: 'hr_contract.fhtxt', 

      createdAt: 'hr_contract.created_at',
      updatedAt: 'hr_contract.updated_at',
      isactived: 'hr_contract.isactived',
      islocked: 'hr_contract.islocked',
      createUid: 'hr_contract.create_uid',
      updatedUid: 'hr_contract.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('hr_contract.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getHrContractList(search: HrContractSearchVo) {
    const qb = await getRepository(HrContract).createQueryBuilder(
      'hr_contract',
    );
    const fields: Record<string, string> = {
      id: 'hr_contract.id',
      name: 'hr_contract.name',
      description: 'hr_contract.description',
      fhname: 'hr_contract.fhname', 
      staff: 'hr_contract.staff', 
      department: 'hr_contract.department', 
      job: 'hr_contract.job', 
      company: 'hr_contract.company', 
      payStructure: 'hr_contract.payStructure', 
      startDate: 'hr_contract.startDate', 
      firstContractDate: 'hr_contract.firstContractDate', 
      endDate: 'hr_contract.endDate', 
      workArrangement: 'hr_contract.workArrangement', 
      HRSupervisor: 'hr_contract.HRSupervisor', 
      wages: 'hr_contract.wages', 
      fhtxt: 'hr_contract.fhtxt', 

      createdAt: 'hr_contract.created_at',
      updatedAt: 'hr_contract.updated_at',
      isactived: 'hr_contract.isactived',
      islocked: 'hr_contract.islocked',
      createUid: 'hr_contract.create_uid',
      updatedUid: 'hr_contract.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("hr_contract.isactived='0'");
    /*
    multiSearch(
      qb,
      ['hr_contract.name', 'hr_contract.description'],
      search.search,
    );
     */
    qb.orderBy('hr_contract.created_at', 'DESC');
    //qb.addOrderBy('hr_contract.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  // async getHrContractSearch(search: HrContractSearchVo) {
  //   const qb =await getRepository(HrContract).createQueryBuilder('hr_contract');
  //   qb.leftJoin(User, 'user', 'hr_contract.create_uid = user.id');
  //   qb.select( `hr_contract.id,
  //     hr_contract.name,
  //     hr_contract.description,
  //     hr_contract.created_at,
  //     hr_contract.updated_at,
  //     hr_contract.isactived,
  //     hr_contract.islocked,
  //     hr_contract.create_uid,
  //     hr_contract.updated_uid,
  //     user.user_name as userName`);
  //     // andWhereEqual(qb, 'hr_contract', 'name', ownerType);
  //     // qb.where("hr_contract.isactived='0'");
  //     const fields: Record<string, string> = {
  //       id: 'hr_contract.id',
  //       name: 'hr_contract.name',
  //       description: 'hr_contract.description',
  //             fhname: 'hr_contract.fhname', 
  //     staff: 'hr_contract.staff', 
  //     department: 'hr_contract.department', 
  //     job: 'hr_contract.job', 
  //     company: 'hr_contract.company', 
  //     payStructure: 'hr_contract.payStructure', 
  //     startDate: 'hr_contract.startDate', 
  //     firstContractDate: 'hr_contract.firstContractDate', 
  //     endDate: 'hr_contract.endDate', 
  //     workArrangement: 'hr_contract.workArrangement', 
  //     HRSupervisor: 'hr_contract.HRSupervisor', 
  //     wages: 'hr_contract.wages', 
  //     fhtxt: 'hr_contract.fhtxt', 

  //       createdAt: 'hr_contract.created_at',
  //       updatedAt: 'hr_contract.updated_at',
  //       isactived: 'hr_contract.isactived',
  //       islocked: 'hr_contract.islocked',
  //       createUid: 'hr_contract.create_uid',
  //       updatedUid: 'hr_contract.updated_uid',
  //       activityName: 'user.user_name',
  //     };
  
  //     selectFields(qb, fields);

  //     multiSearch(
  //       qb,
  //       ['hr_contract.name', 'hr_contract.description'],
  //       search.search,
  //     );  
  //     qb.orderBy('hr_contract.created_at', 'DESC');
  //     const count = await qb.getCount();
  //     const { skip, take } = skipAndTake(count, search);
  //     const raws = await qb.offset(skip).limit(take).getRawMany();
  //     return {'raws':raws,'count':count};
  // }



}
