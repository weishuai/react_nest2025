import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import {
  ServiceContractSearchVo,
  ServiceContractVo,
} from '../myvo/ServiceContractVo';
import { ServiceContract } from '../myentities';

import { Client } from '../myentities/Client';

export class ServiceContractRepo {
  async create(accountTagVo: ServiceContractVo) {
    return await getRepository(ServiceContract).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: ServiceContractVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(ServiceContract).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(ServiceContract).update(Ids[0], {
      isactived: '1',
    });
  }
  async getserviceContractsById(id: string) {
    const qb =
      getRepository(ServiceContract).createQueryBuilder('service_contract');
    const fields: Record<string, string> = {
      id: 'service_contract.id',
      contractRef: 'service_contract.contract_ref',
      createdBy: 'service_contract.created_by',
      contractName: 'service_contract.contract_name',
      status: 'service_contract.status',
      account: 'service_contract.account',
      contractValues: 'service_contract.contract_values',
      startDate: 'service_contract.start_date',
      endDate: 'service_contract.end_date',
      sla: 'service_contract.sla',
      period: 'service_contract.period',
      contractValue: 'service_contract.contract_value',
      clientPo: 'service_contract.client_po',
      additionalField5: 'service_contract.additional_field5',
      termsConditions: 'service_contract.terms_conditions',
      remark: 'service_contract.remark',
      createdAt: 'service_contract.created_at',
      updatedAt: 'service_contract.updated_at',
      isactived: 'service_contract.isactived',
      islocked: 'service_contract.islocked',
      createUid: 'service_contract.create_uid',
      updatedUid: 'service_contract.updated_uid',
      currency: 'service_contract.currency',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'service_contract', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getserviceContractAll(search: ServiceContractSearchVo) {
    const qb =
      getRepository(ServiceContract).createQueryBuilder('service_contract');

      qb.leftJoin(Client, 'client', 'service_contract.account=client.id');
      
    const fields: Record<string, string> = {
      id: 'service_contract.id',
      contractRef: 'service_contract.contract_ref',
      createdBy: 'service_contract.created_by',
      contractName: 'service_contract.contract_name',
      status: 'service_contract.status',
      account: 'client.name',
      contractValues: 'service_contract.contract_values',
      startDate: 'service_contract.start_date',
      endDate: 'service_contract.end_date',
      sla: 'service_contract.sla',
      period: 'service_contract.period',
      contractValue: 'service_contract.contract_value',
      clientPo: 'service_contract.client_po',
      additionalField5: 'service_contract.additional_field5',
      termsConditions: 'service_contract.terms_conditions',
      remark: 'service_contract.remark',
      createdAt: 'service_contract.created_at',
      updatedAt: 'service_contract.updated_at',
      isactived: 'service_contract.isactived',
      islocked: 'service_contract.islocked',
      createUid: 'service_contract.create_uid',
      updatedUid: 'service_contract.updated_uid',
      currency: 'service_contract.currency',
    };
    selectFields(qb, fields);
    qb.distinct(true);
    qb.where("service_contract.isactived='0'");
    multiSearch(
      qb,
      ['service_contract.contract_ref', 'service_contract.remark'],
      search.search,
    );
    
    qb.orderBy('service_contract.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getserviceContractAllView() {
    const qb =
      getRepository(ServiceContract).createQueryBuilder('service_contract');
    const fields: Record<string, string> = {
      id: 'service_contract.id',
      contractRef: 'service_contract.contract_ref',
      createdBy: 'service_contract.created_by',
      contractName: 'service_contract.contract_name',
      status: 'service_contract.status',
      account: 'service_contract.account',
      contractValues: 'service_contract.contract_values',
      startDate: 'service_contract.start_date',
      endDate: 'service_contract.end_date',
      sla: 'service_contract.sla',
      period: 'service_contract.period',
      contractValue: 'service_contract.contract_value',
      clientPo: 'service_contract.client_po',
      additionalField5: 'service_contract.additional_field5',
      termsConditions: 'service_contract.terms_conditions',
      remark: 'service_contract.remark',
      createdAt: 'service_contract.created_at',
      updatedAt: 'service_contract.updated_at',
      isactived: 'service_contract.isactived',
      islocked: 'service_contract.islocked',
      createUid: 'service_contract.create_uid',
      updatedUid: 'service_contract.updated_uid',
      currency: 'service_contract.currency',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getserviceContract(userId: string, search: ServiceContractSearchVo) {
    const qb =
      getRepository(ServiceContract).createQueryBuilder('service_contract');
    const fields: Record<string, string> = {
      id: 'service_contract.id',
      contractRef: 'service_contract.contract_ref',
      createdBy: 'service_contract.created_by',
      contractName: 'service_contract.contract_name',
      status: 'service_contract.status',
      account: 'service_contract.account',
      contractValues: 'service_contract.contract_values',
      startDate: 'service_contract.start_date',
      endDate: 'service_contract.end_date',
      sla: 'service_contract.sla',
      period: 'service_contract.period',
      contractValue: 'service_contract.contract_value',
      clientPo: 'service_contract.client_po',
      additionalField5: 'service_contract.additional_field5',
      termsConditions: 'service_contract.terms_conditions',
      remark: 'service_contract.remark',
      createdAt: 'service_contract.created_at',
      updatedAt: 'service_contract.updated_at',
      isactived: 'service_contract.isactived',
      islocked: 'service_contract.islocked',
      createUid: 'service_contract.create_uid',
      updatedUid: 'service_contract.updated_uid',
      currency: 'service_contract.currency',
    };

    selectFields(qb, fields);
    //qb.where("service_contract.isactived='0'");
    const userIds = userId;
    qb.where(
      "service_contract.isactived='0' and (service_contract.create_uid = '" +
        userIds +
        "' or service_contract.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" +
        userIds +
        "%') ) )",
    );

    andWhereEqual(qb, 'service_contract', 'satus', search.fundType);
    multiSearch(
      qb,
      ['service_contract.contract_ref', 'service_contract.remark'],
      search.search,
    );
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
