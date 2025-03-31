import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { LeadsSearchVo, LeadsVo } from '../myvo/LeadsVo';
import { Leads } from '../myentities/Leads';
import { Client } from '../myentities/Client';
export class LeadsRepo {
  async create(accountTagVo: LeadsVo) {
    return await getRepository(Leads).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: LeadsVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Leads).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Leads).update(Ids[0], {
      isactived: '1',
    });
  }

  async getleadssById(id: string) {
    const qb = getRepository(Leads).createQueryBuilder('leads');
    const fields: Record<string, string> = {
      id: 'leads.id',
      name: 'leads.name',
      jobTitle: 'leads.job_title',
      company: 'leads.company',
      industry: 'leads.industry',
      website: 'leads.website',
      email: 'leads.email',
      phoneNumber: 'leads.phone_number',
      mobileNumber: 'leads.mobile_number',
      faxNumber: 'leads.fax_number',
      remark: 'leads.remark',
      leadOwner: 'leads.lead_owner',
      leadPool: 'leads.lead_pool',
      campaign: 'leads.campaign',
      source: 'leads.source',
      streetRoad: 'leads.street_road',
      city: 'leads.city',
      ctate: 'leads.ctate',
      postCode: 'leads.post_code',
      country: 'leads.country',
      createdAt: 'leads.created_at',
      updatedAt: 'leads.updated_at',
      isactived: 'leads.isactived',
      islocked: 'leads.islocked',
      createUid: 'leads.create_uid',
      updatedUid: 'leads.updated_uid',
      satus: 'leads.satus',
      linkedIn: 'leads.linked_in',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'leads', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getLeadsAll(search: LeadsSearchVo) {
    const qb = getRepository(Leads).createQueryBuilder('leads');
    qb.leftJoin(Client, 'client', 'leads.company = client.id');
    const fields: Record<string, string> = {
      id: 'leads.id',
      name: 'leads.name',
      jobTitle: 'leads.job_title',
      company: 'client.name',
      industry: 'leads.industry',
      website: 'leads.website',
      email: 'leads.email',
      phoneNumber: 'leads.phone_number',
      mobileNumber: 'leads.mobile_number',
      faxNumber: 'leads.fax_number',
      remark: 'leads.remark',
      leadOwner: 'leads.lead_owner',
      leadPool: 'leads.lead_pool',
      campaign: 'leads.campaign',
      source: 'leads.source',
      streetRoad: 'leads.street_road',
      city: 'leads.city',
      ctate: 'leads.ctate',
      postCode: 'leads.post_code',
      country: 'leads.country',
      createdAt: 'leads.created_at',
      updatedAt: 'leads.updated_at',
      isactived: 'leads.isactived',
      islocked: 'leads.islocked',
      createUid: 'leads.create_uid',
      updatedUid: 'leads.updated_uid',
      satus: 'leads.satus',
      linkedIn: 'leads.linked_in',
    };
    selectFields(qb, fields);
    qb.where("leads.isactived='0'");
    multiSearch(qb, ['leads.name', 'leads.remark'], search.search);
    qb.orderBy('leads.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getLeadsAllView() {
    const qb = getRepository(Leads).createQueryBuilder('leads');
    const fields: Record<string, string> = {
      id: 'leads.id',
      name: 'leads.name',
      jobTitle: 'leads.job_title',
      company: 'leads.company',
      industry: 'leads.industry',
      website: 'leads.website',
      email: 'leads.email',
      phoneNumber: 'leads.phone_number',
      mobileNumber: 'leads.mobile_number',
      faxNumber: 'leads.fax_number',
      remark: 'leads.remark',
      leadOwner: 'leads.lead_owner',
      leadPool: 'leads.lead_pool',
      campaign: 'leads.campaign',
      source: 'leads.source',
      streetRoad: 'leads.street_road',
      city: 'leads.city',
      ctate: 'leads.ctate',
      postCode: 'leads.post_code',
      country: 'leads.country',
      createdAt: 'leads.created_at',
      updatedAt: 'leads.updated_at',
      isactived: 'leads.isactived',
      islocked: 'leads.islocked',
      createUid: 'leads.create_uid',
      updatedUid: 'leads.updated_uid',
      satus: 'leads.satus',
      linkedIn: 'leads.linked_in',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getleads(userId: string, search: LeadsSearchVo) {
    const qb = getRepository(Leads).createQueryBuilder('leads');
    const fields: Record<string, string> = {
      id: 'leads.id',
      name: 'leads.name',
      jobTitle: 'leads.job_title',
      company: 'leads.company',
      industry: 'leads.industry',
      website: 'leads.website',
      email: 'leads.email',
      phoneNumber: 'leads.phone_number',
      mobileNumber: 'leads.mobile_number',
      faxNumber: 'leads.fax_number',
      remark: 'leads.remark',
      leadOwner: 'leads.lead_owner',
      leadPool: 'leads.lead_pool',
      campaign: 'leads.campaign',
      source: 'leads.source',
      streetRoad: 'leads.street_road',
      city: 'leads.city',
      ctate: 'leads.ctate',
      postCode: 'leads.post_code',
      country: 'leads.country',
      createdAt: 'leads.created_at',
      updatedAt: 'leads.updated_at',
      isactived: 'leads.isactived',
      islocked: 'leads.islocked',
      createUid: 'leads.create_uid',
      updatedUid: 'leads.updated_uid',
      satus: 'leads.satus',
      linkedIn: 'leads.linked_in',
    };

    selectFields(qb, fields);
    //qb.where("leads.isactived='0'");

    const userIds = userId;
    //qb.where("leads.isactived='0' and (leads.create_uid = '" + userIds + "' or leads.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" + userIds + "%') ) )");

    andWhereEqual(qb, 'leads', 'satus', search.fundType);
    multiSearch(qb, ['leads.name', 'leads.remark'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
