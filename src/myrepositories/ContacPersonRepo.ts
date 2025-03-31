import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { ContacPersonSearchVo, ContacPersonVo } from '../myvo/ContacPersonVo';
import { ContacPerson } from '../myentities';
import { Client } from '../myentities/Client';
import _ from 'lodash';

export class ContacPersonRepo {
  async create(accountTagVo: ContacPersonVo) {
    return await getRepository(ContacPerson).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: ContacPersonVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(ContacPerson).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(ContacPerson).update(Ids[0], {
      isactived: '1',
    });
  }

  async getContacPersonAllBydueDate() {
    const qb = getRepository(ContacPerson).createQueryBuilder('contac_person');
    const fields: Record<string, string> = {
      id: 'contac_person.id',
      dateBirth: 'contac_person.date_birth',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    ///qb.where('invoice_details.due_date');
    ///andWhereEqual(qb, 'invoice_details', 'due_date', id);
    const res = await qb.getRawMany();
    return res;
  }

  async getContacPersonById(id: string) {
    const qb = getRepository(ContacPerson).createQueryBuilder('contac_person');
    const fields: Record<string, string> = {
      id: 'contac_person.id',
      name: 'contac_person.name',
      client: 'contac_person.client',
      isAlert: 'contac_person.is_alert',
      no: 'contac_person.no',
      email: 'contac_person.email',
      islogin: 'contac_person.islogin',
      login: 'contac_person.login',
      password: 'contac_person.password',
      isnotification: 'contac_person.isnotification',
      isemail: 'contac_person.isemail',
      description: 'contac_person.description',
      jobTitle: 'contac_person.job_title',
      account: 'contac_person.account',
      phoneNumber: 'contac_person.phone_number',
      mobileNumber: 'contac_person.mobile_number',
      faxNumber: 'contac_person.fax_number',
      gender: 'contac_person.gender',
      dateBirth: 'contac_person.date_birth',
      language: 'contac_person.language',
      income: 'contac_person.income',
      marital: 'contac_person.marital',
      children: 'contac_person.children',
      street: 'contac_person.street',
      city: 'contac_person.city',
      state: 'contac_person.state',
      postCode: 'contac_person.post_code',
      country: 'contac_person.country',
      emergency: 'contac_person.emergency',
      securityCourse: 'contac_person.security_course',
      additionalField3: 'contac_person.additional_field3',
      additionalField4: 'contac_person.additional_field4',
      additionalField5: 'contac_person.additional_field5',
      createdAt: 'contac_person.created_at',
      updatedAt: 'contac_person.updated_at',
      isactived: 'contac_person.isactived',
      islocked: 'contac_person.islocked',
      createUid: 'contac_person.create_uid',
      updatedUid: 'contac_person.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'contac_person', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getContacPersonAllView() {
    const qb = getRepository(ContacPerson).createQueryBuilder('contac_person');
    const fields: Record<string, string> = {
      id: 'contac_person.id',
      name: 'contac_person.name',
      isAlert: 'contac_person.is_alert',
      client: 'contac_person.client',
      no: 'contac_person.no',
      email: 'contac_person.email',
      islogin: 'contac_person.islogin',
      login: 'contac_person.login',
      password: 'contac_person.password',
      isnotification: 'contac_person.isnotification',
      isemail: 'contac_person.isemail',
      description: 'contac_person.description',
      jobTitle: 'contac_person.job_title',
      account: 'contac_person.account',
      phoneNumber: 'contac_person.phone_number',
      mobileNumber: 'contac_person.mobile_number',
      faxNumber: 'contac_person.fax_number',
      gender: 'contac_person.gender',
      dateBirth: 'contac_person.date_birth',
      language: 'contac_person.language',
      income: 'contac_person.income',
      marital: 'contac_person.marital',
      children: 'contac_person.children',
      street: 'contac_person.street',
      city: 'contac_person.city',
      state: 'contac_person.state',
      postCode: 'contac_person.post_code',
      country: 'contac_person.country',
      emergency: 'contac_person.emergency',
      securityCourse: 'contac_person.security_course',
      additionalField3: 'contac_person.additional_field3',
      additionalField4: 'contac_person.additional_field4',
      additionalField5: 'contac_person.additional_field5',
      createdAt: 'contac_person.created_at',
      updatedAt: 'contac_person.updated_at',
      isactived: 'contac_person.isactived',
      islocked: 'contac_person.islocked',
      createUid: 'contac_person.create_uid',
      updatedUid: 'contac_person.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    //andWhereEqual(qb, 'leadpools', 'id', id);
    const res = await qb.getRawMany();
    return {'fhok':res};
  }

  async getContacPersonAll(search: ContacPersonSearchVo) {
    const qb = getRepository(ContacPerson).createQueryBuilder('contac_person');
    qb.leftJoin(Client, 'client', 'client.id=contac_person.client');
    const fields: Record<string, string> = {
      id: 'contac_person.id',
      name: 'contac_person.name',
      isAlert: 'contac_person.is_alert',
      client: 'client.name',
      no: 'contac_person.no',
      email: 'contac_person.email',
      islogin: 'contac_person.islogin',
      login: 'contac_person.login',
      password: 'contac_person.password',
      isnotification: 'contac_person.isnotification',
      isemail: 'contac_person.isemail',
      description: 'contac_person.description',
      jobTitle: 'contac_person.job_title',
      account: 'contac_person.account',
      phoneNumber: 'contac_person.phone_number',
      mobileNumber: 'contac_person.mobile_number',
      faxNumber: 'contac_person.fax_number',
      gender: 'contac_person.gender',
      dateBirth: 'contac_person.date_birth',
      language: 'contac_person.language',
      income: 'contac_person.income',
      marital: 'contac_person.marital',
      children: 'contac_person.children',
      street: 'contac_person.street',
      city: 'contac_person.city',
      state: 'contac_person.state',
      postCode: 'contac_person.post_code',
      country: 'contac_person.country',
      emergency: 'contac_person.emergency',
      securityCourse: 'contac_person.security_course',
      additionalField3: 'contac_person.additional_field3',
      additionalField4: 'contac_person.additional_field4',
      additionalField5: 'contac_person.additional_field5',
      createdAt: 'contac_person.created_at',
      updatedAt: 'contac_person.updated_at',
      isactived: 'contac_person.isactived',
      islocked: 'contac_person.islocked',
      createUid: 'contac_person.create_uid',
      updatedUid: 'contac_person.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("contac_person.isactived='0'");
    multiSearch(qb, ['contac_person.name', 'contac_person.description'], search.search);
    qb.orderBy('contac_person.created_at', 'DESC');
    //andWhereEqual(qb, 'leadpools', 'id', id);
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getContacPerson(userId: string, search: ContacPersonSearchVo) {
    const qb = getRepository(ContacPerson).createQueryBuilder('contac_person');
    const fields: Record<string, string> = {
      id: 'contac_person.id',
      name: 'contac_person.name',
      isAlert: 'contac_person.is_alert',
      client: 'contac_person.client',
      no: 'contac_person.no',
      email: 'contac_person.email',
      islogin: 'contac_person.islogin',
      login: 'contac_person.login',
      password: 'contac_person.password',
      isnotification: 'contac_person.isnotification',
      isemail: 'contac_person.isemail',
      description: 'contac_person.description',
      jobTitle: 'contac_person.job_title',
      account: 'contac_person.account',
      phoneNumber: 'contac_person.phone_number',
      mobileNumber: 'contac_person.mobile_number',
      faxNumber: 'contac_person.fax_number',
      gender: 'contac_person.gender',
      dateBirth: 'contac_person.date_birth',
      language: 'contac_person.language',
      income: 'contac_person.income',
      marital: 'contac_person.marital',
      children: 'contac_person.children',
      street: 'contac_person.street',
      city: 'contac_person.city',
      state: 'contac_person.state',
      postCode: 'contac_person.post_code',
      country: 'contac_person.country',
      emergency: 'contac_person.emergency',
      securityCourse: 'contac_person.security_course',
      additionalField3: 'contac_person.additional_field3',
      additionalField4: 'contac_person.additional_field4',
      additionalField5: 'contac_person.additional_field5',
      createdAt: 'contac_person.created_at',
      updatedAt: 'contac_person.updated_at',
      isactived: 'contac_person.isactived',
      islocked: 'contac_person.islocked',
      createUid: 'contac_person.create_uid',
      updatedUid: 'contac_person.updated_uid',
    };

    selectFields(qb, fields);
    ///qb.where("contac_person.isactived='0'");

    const userIds = userId;
    ///qb.where("contac_person.isactived='0' and (contac_person.create_uid = '" + userIds + "' or contac_person.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" + userIds + "%') ) )");

    //andWhereEqual(qb, 'leadpools', 'name', search.fundType);
    if (!_.isNil(search.mtable) && !_.isEmpty(search.mtable)) {
      if (search.mtable == 'client') {
        andWhereEqual(qb, 'contac_person', 'client', search.mid);
      }
    }

    ///multiSearch(qb, ['contac_person.name', 'contac_person.description'], search.search);
    setSorts(qb, fields, search.sort);
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }
}
