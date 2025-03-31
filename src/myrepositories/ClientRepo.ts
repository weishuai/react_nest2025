import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { ClientSearchVo, ClientVo, FHClientSearchVo } from '../myvo/ClientVo';
import { Client } from '../myentities';
import { User } from '../myentities/User';
import _ from 'lodash';

export class ClientRepo {
  async create(accountTagVo: ClientVo) {
    return await getRepository(Client).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: ClientVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    console.info("后台接收:2");
    return await getRepository(Client).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Client).update(Ids[0], {
      isactived: '1',
    });
  }

  async getClientById(id: string) {
    const qb = getRepository(Client).createQueryBuilder('client');
    const fields: Record<string, string> = {
      id: 'client.id',
      name: 'client.name',
      accountTag: 'client.account_tag',
      clientState: 'client.client_state',
      accountsType: 'client.accounts_type',
      description: 'client.description',
      type: 'client.type',
      accountOwner: 'client.account_owner',
      regNumber: 'client.reg_number',
      industry: 'client.industry',
      phoneNumber: 'client.phone_number',
      website: 'client.website',
      faxNumber: 'client.fax_number',
      street: 'client.street',
      city: 'client.city',
      state: 'client.state',
      postCode: 'client.post_code',
      country: 'client.country',
      don: 'client.don',
      ref: 'client.ref',
      gender: 'client.gender',
      dateBirth: 'client.date_birth',
      language: 'client.language',
      income: 'client.income',
      marital: 'client.marital',
      children: 'client.children',
      additionalField4: 'client.additional_field4',
      additionalField5: 'client.additional_field5',
      createdAt: 'client.created_at',
      updatedAt: 'client.updated_at',
      isactived: 'client.isactived',
      islocked: 'client.islocked',
      createUid: 'client.create_uid',
      updatedUid: 'client.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'client', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getClientAll(search: ClientSearchVo) {
    //user
    const qb = getRepository(Client).createQueryBuilder('client');
    qb.leftJoin(User, 'user', 'client.account_owner=user.id');
    const fields: Record<string, string> = {
      id: 'client.id',
      name: 'client.name',
      accountTag: 'client.account_tag',
      clientState: 'client.client_state',
      accountsType: 'client.accounts_type',
      description: 'client.description',
      type: 'client.type',
      accountOwner: 'user.userName',
      regNumber: 'client.reg_number',
      industry: 'client.industry',
      phoneNumber: 'client.phone_number',
      website: 'client.website',
      faxNumber: 'client.fax_number',
      street: 'client.street',
      city: 'client.city',
      state: 'client.state',
      postCode: 'client.post_code',
      country: 'client.country',
      don: 'client.don',
      ref: 'client.ref',
      gender: 'client.gender',
      dateBirth: 'client.date_birth',
      language: 'client.language',
      income: 'client.income',
      marital: 'client.marital',
      children: 'client.children',
      additionalField4: 'client.additional_field4',
      additionalField5: 'client.additional_field5',
      createdAt: 'client.created_at',
      updatedAt: 'client.updated_at',
      isactived: 'client.isactived',
      islocked: 'client.islocked',
      createUid: 'client.create_uid',
      updatedUid: 'client.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("client.isactived='0'");
    multiSearch(qb, ['client.name', 'client.description'], search.search);
    qb.orderBy('client.created_at', 'DESC');
    //andWhereEqual(qb, 'leadpools', 'id', id);
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getClientAllView() {
    const qb = getRepository(Client).createQueryBuilder('client');
    const fields: Record<string, string> = {
      id: 'client.id',
      name: 'client.name',
      accountTag: 'client.account_tag',
      clientState: 'client.client_state',
      accountsType: 'client.accounts_type',
      description: 'client.description',
      type: 'client.type',
      accountOwner: 'client.account_owner',
      regNumber: 'client.reg_number',
      industry: 'client.industry',
      phoneNumber: 'client.phone_number',
      website: 'client.website',
      faxNumber: 'client.fax_number',
      street: 'client.street',
      city: 'client.city',
      state: 'client.state',
      postCode: 'client.post_code',
      country: 'client.country',
      don: 'client.don',
      ref: 'client.ref',
      gender: 'client.gender',
      dateBirth: 'client.date_birth',
      language: 'client.language',
      income: 'client.income',
      marital: 'client.marital',
      children: 'client.children',
      additionalField4: 'client.additional_field4',
      additionalField5: 'client.additional_field5',
      createdAt: 'client.created_at',
      updatedAt: 'client.updated_at',
      isactived: 'client.isactived',
      islocked: 'client.islocked',
      createUid: 'client.create_uid',
      updatedUid: 'client.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    //andWhereEqual(qb, 'leadpools', 'id', id);
    const res = await qb.getRawMany();
    return {'fhok':res};
  }

  async getClient(userId: string, search: ClientSearchVo) {
    const qb = getRepository(Client).createQueryBuilder('client');
    const fields: Record<string, string> = {
      id: 'client.id',
      name: 'client.name',
      accountTag: 'client.account_tag',
      clientState: 'client.client_state',
      accountsType: 'client.accounts_type',
      description: 'client.description',
      type: 'client.type',
      accountOwner: 'client.account_owner',
      regNumber: 'client.reg_number',
      industry: 'client.industry',
      phoneNumber: 'client.phone_number',
      website: 'client.website',
      faxNumber: 'client.fax_number',
      street: 'client.street',
      city: 'client.city',
      state: 'client.state',
      postCode: 'client.post_code',
      country: 'client.country',
      don: 'client.don',
      ref: 'client.ref',
      gender: 'client.gender',
      dateBirth: 'client.date_birth',
      language: 'client.language',
      income: 'client.income',
      marital: 'client.marital',
      children: 'client.children',
      additionalField4: 'client.additional_field4',
      additionalField5: 'client.additional_field5',
      createdAt: 'client.created_at',
      updatedAt: 'client.updated_at',
      isactived: 'client.isactived',
      islocked: 'client.islocked',
      createUid: 'client.create_uid',
      updatedUid: 'client.updated_uid',
    };

    selectFields(qb, fields);
    qb.where('1=1');
    const userIds = userId;
    /// userIds = userIds + ',';
    ///qb.where("client.isactived='0' and (client.create_uid = '" + userIds + "' or client.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" + userIds + "%') ) )");

    if (!_.isNil(search.fundType) && search.fundType != 'all') {
      andWhereEqual(qb, 'client', 'type', search.fundType);
    }

    if (!_.isNil(search.accountsType)) {
      andWhereEqual(qb, 'client', 'accounts_type', search.accountsType);
    }

    ///andWhereEqual(qb, 'client', 'create_uid', userId);
    ///andWhereEqual(qb, 'client', 'create_uid', userId);

    multiSearch(qb, ['client.name', 'client.description'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  async getClientSQL(userId: string, search: FHClientSearchVo) {
    const qb = getRepository(Client).createQueryBuilder('client');
    const fields: Record<string, string> = {
      id: 'client.id',
      name: 'client.name',
      accountTag: 'client.account_tag',
      clientState: 'client.client_state',
      accountsType: 'client.accounts_type',
      description: 'client.description',
      type: 'client.type',
      accountOwner: 'client.account_owner',
      regNumber: 'client.reg_number',
      industry: 'client.industry',
      phoneNumber: 'client.phone_number',
      website: 'client.website',
      faxNumber: 'client.fax_number',
      street: 'client.street',
      city: 'client.city',
      state: 'client.state',
      postCode: 'client.post_code',
      country: 'client.country',
      don: 'client.don',
      ref: 'client.ref',
      gender: 'client.gender',
      dateBirth: 'client.date_birth',
      language: 'client.language',
      income: 'client.income',
      marital: 'client.marital',
      children: 'client.children',
      additionalField4: 'client.additional_field4',
      additionalField5: 'client.additional_field5',
      createdAt: 'client.created_at',
      updatedAt: 'client.updated_at',
      isactived: 'client.isactived',
      islocked: 'client.islocked',
      createUid: 'client.create_uid',
      updatedUid: 'client.updated_uid',
    };

    selectFields(qb, fields);
    qb.where('1=1');
    const userIds = userId;
    /// userIds = userIds + ',';
    ///qb.where("client.isactived='0' and (client.create_uid = '" + userIds + "' or client.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" + userIds + "%') ) )");
    if (!_.isNil(search.stageName)) {
      andWhereEqual(qb, 'client', 'client_state', search.stageName);
    }
    if (!_.isNil(search.startDate) && _.isNil(search.endDate)) {
      qb.andWhere("client.created_at >='" + search.startDate + "'");
    }

    if (!_.isNil(search.endDate) && _.isNil(search.startDate)) {
      qb.andWhere("client.created_at <='" + search.endDate + "'");
    }

    if (!_.isNil(search.endDate) && !_.isNil(search.startDate)) {
      ///qb.andWhere("(client.created_at >='" + search.startDate + "'" + " and client.created_at <='" + search.endDate + "')");
    }
    ///setSorts(qb, fields, search.sort);

    if (!_.isNil(search.Owner)) {
      qb.andWhere("client.account_owner ='" + search.Owner + "'");
    }

    if (!_.isNil(search.month)) {
      qb.andWhere("client.created_at LIKE '%" + search.month + "%'");
    }
    if (!_.isNil(search.Client)) {
      qb.andWhere("client.id = '" + search.Client + "'");
    }

    const count = await qb.getCount();
    const raws = await qb.getRawMany();
    return { count: count, raws: raws };
  }
}
