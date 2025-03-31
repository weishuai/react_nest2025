import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { WorkSearchVo, WorkVo } from '../myvo/WorkVo';
import { Terms, Work } from '../myentities';

export class WorkRepo {
  async create(accountTagVo: WorkVo) {
    return await getRepository(Work).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: WorkVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log('90003:'+JSON.stringify(accountTagVo));
    // accountTagVo.workInstructions=["Z8NUy3rAt9"]
    return await getRepository(Work).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Work).update(Ids[0], {
      isactived: '1',
    });
  }
  async getWorksById(id: string) {
    const qb = getRepository(Work).createQueryBuilder('work');
    const fields: Record<string, string> = {
      id: 'work.id',
      termsId: 'work.terms_id',
      signBelowTxt: 'work.sign_below_txt',
      signBelowPhoto: 'work.sign_below_photo',
      signBelowUserid: 'work.sign_below_userid',
      signBelowTime: 'work.sign_below_time',
      priority: 'work.priority',
      quote: 'work.quote',
      title: 'work.title',
      states: 'work.states',
      qty: 'work.qty',
      workType: 'work.work_type',
      room: 'work.room',
      client: 'work.client',
      contact: 'work.contact',
      workInstructions: 'work.work_instructions',
      assignTo: 'work.assign_to',
      startDate: 'work.start_date',
      endDate: 'work.end_date',
      remark: 'work.remark',
      reedback: 'work.reedback',
      fullAddress: 'work.full_address',
      createdAt: 'work.created_at',
      updatedAt: 'work.updated_at',
      isactived: 'work.isactived',
      islocked: 'work.islocked',
      createUid: 'work.create_uid',
      updatedUid: 'work.updated_uid',
      refNumber: 'work.ref_number',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'work', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getWorkOrderBySqlStartDate(SqlStartDate: string) {
    const qb = getRepository(Work).createQueryBuilder('work');
    const fields: Record<string, string> = {
      id: 'work.id',
      priority: 'work.priority',
      termsId: 'work.terms_id',
      signBelowTxt: 'work.sign_below_txt',
      signBelowPhoto: 'work.sign_below_photo',
      signBelowUserid: 'work.sign_below_userid',
      signBelowTime: 'work.sign_below_time',
      quote: 'work.quote',
      title: 'work.title',
      states: 'work.states',
      qty: 'work.qty',
      workType: 'work.work_type',
      room: 'work.room',
      client: 'work.client',
      contact: 'work.contact',
      workInstructions: 'work.work_instructions',
      assignTo: 'work.assign_to',
      startDate: 'work.start_date',
      endDate: 'work.end_date',
      remark: 'work.remark',
      reedback: 'work.reedback',
      fullAddress: 'work.full_address',
      createdAt: 'work.created_at',
      updatedAt: 'work.updated_at',
      isactived: 'work.isactived',
      islocked: 'work.islocked',
      createUid: 'work.create_uid',
      updatedUid: 'work.updated_uid',
      refNumber: 'work.ref_number',
    };
    selectFields(qb, fields);
    qb.where(
      "work.isactived='0' and work.start_date LIKE '" + SqlStartDate + "%'",
    );
    ///qb.where('1=1');
    const res = await qb.getRawMany();
    return res;
  }

  async getWorkAll(search: WorkSearchVo) {
    const qb = getRepository(Work).createQueryBuilder('work');
    const fields: Record<string, string> = {
      id: 'work.id',
      priority: 'work.priority',
      termsId: 'work.terms_id',
      signBelowTxt: 'work.sign_below_txt',
      signBelowPhoto: 'work.sign_below_photo',
      signBelowUserid: 'work.sign_below_userid',
      signBelowTime: 'work.sign_below_time',
      quote: 'work.quote',
      title: 'work.title',
      states: 'work.states',
      qty: 'work.qty',
      workType: 'work.work_type',
      room: 'work.room',
      client: 'work.client',
      contact: 'work.contact',
      workInstructions: 'work.work_instructions',
      assignTo: 'work.assign_to',
      startDate: 'work.start_date',
      endDate: 'work.end_date',
      remark: 'work.remark',
      reedback: 'work.reedback',
      fullAddress: 'work.full_address',
      createdAt: 'work.created_at',
      updatedAt: 'work.updated_at',
      isactived: 'work.isactived',
      islocked: 'work.islocked',
      createUid: 'work.create_uid',
      updatedUid: 'work.updated_uid',
      refNumber: 'work.ref_number',
      backgroundColor: 'terms.background_color',
    };
    qb.leftJoin(Terms, 'terms', 'work.terms_id = terms.id');
    selectFields(qb, fields);
    qb.where("work.isactived='0'");
    multiSearch(qb, ['work.title', 'work.remark'], search.search);
    qb.orderBy('work.created_at', 'DESC');
    ///qb.where('1=1');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getWorkAllView() {
    const qb = getRepository(Work).createQueryBuilder('work');
    const fields: Record<string, string> = {
      id: 'work.id',
      priority: 'work.priority',
      termsId: 'work.terms_id',
      signBelowTxt: 'work.sign_below_txt',
      signBelowPhoto: 'work.sign_below_photo',
      signBelowUserid: 'work.sign_below_userid',
      signBelowTime: 'work.sign_below_time',
      quote: 'work.quote',
      title: 'work.title',
      states: 'work.states',
      qty: 'work.qty',
      workType: 'work.work_type',
      room: 'work.room',
      client: 'work.client',
      contact: 'work.contact',
      workInstructions: 'work.work_instructions',
      assignTo: 'work.assign_to',
      startDate: 'work.start_date',
      endDate: 'work.end_date',
      remark: 'work.remark',
      reedback: 'work.reedback',
      fullAddress: 'work.full_address',
      createdAt: 'work.created_at',
      updatedAt: 'work.updated_at',
      isactived: 'work.isactived',
      islocked: 'work.islocked',
      createUid: 'work.create_uid',
      updatedUid: 'work.updated_uid',
      refNumber: 'work.ref_number',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getWork(userId: string, search: WorkSearchVo) {
    const qb = getRepository(Work).createQueryBuilder('work');
    const fields: Record<string, string> = {
      id: 'work.id',
      priority: 'work.priority',
      termsId: 'work.terms_id',
      signBelowTxt: 'work.sign_below_txt',
      signBelowPhoto: 'work.sign_below_photo',
      signBelowUserid: 'work.sign_below_userid',
      signBelowTime: 'work.sign_below_time',
      quote: 'work.quote',
      title: 'work.title',
      states: 'work.states',
      qty: 'work.qty',
      workType: 'work.work_type',
      room: 'work.room',
      client: 'work.client',
      contact: 'work.contact',
      workInstructions: 'work.work_instructions',
      assignTo: 'work.assign_to',
      startDate: 'work.start_date',
      endDate: 'work.end_date',
      remark: 'work.remark',
      reedback: 'work.reedback',
      fullAddress: 'work.full_address',
      createdAt: 'work.created_at',
      updatedAt: 'work.updated_at',
      isactived: 'work.isactived',
      islocked: 'work.islocked',
      createUid: 'work.create_uid',
      updatedUid: 'work.updated_uid',
      refNumber: 'work.ref_number',
    };

    selectFields(qb, fields);
    ///qb.where("work.isactived='0'");
    const userIds = userId;
    qb.where(
      "work.isactived='0' and (work.create_uid = '" +
        userIds +
        "' or work.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" +
        userIds +
        "%') ) )",
    );

    ////andWhereEqual(qb, 'work', 'satus', search.fundType);

    if (!_.isNil(search.mtable) && !_.isEmpty(search.mtable)) {
      if (search.mtable == 'client') {
        andWhereEqual(qb, 'work', 'client', search.mid);
      }
    }

    multiSearch(qb, ['work.title', 'work.remark'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }

  async getWorkAPP(assignTo: string, search: WorkSearchVo) {
    const qb = getRepository(Work).createQueryBuilder('work');
    const fields: Record<string, string> = {
      id: 'work.id',
      priority: 'work.priority',
      termsId: 'work.terms_id',
      signBelowTxt: 'work.sign_below_txt',
      signBelowPhoto: 'work.sign_below_photo',
      signBelowUserid: 'work.sign_below_userid',
      signBelowTime: 'work.sign_below_time',
      quote: 'work.quote',
      title: 'work.title',
      states: 'work.states',
      qty: 'work.qty',
      workType: 'work.work_type',
      room: 'work.room',
      client: 'work.client',
      contact: 'work.contact',
      workInstructions: 'work.work_instructions',
      assignTo: 'work.assign_to',
      startDate: 'work.start_date',
      endDate: 'work.end_date',
      remark: 'work.remark',
      reedback: 'work.reedback',
      fullAddress: 'work.full_address',
      createdAt: 'work.created_at',
      updatedAt: 'work.updated_at',
      isactived: 'work.isactived',
      islocked: 'work.islocked',
      createUid: 'work.create_uid',
      updatedUid: 'work.updated_uid',
      refNumber: 'work.ref_number',
    };

    selectFields(qb, fields);
    /// qb.where("work.isactived='0'");
    const userIds = assignTo;
    qb.where(
      "work.isactived='0' and (work.assign_to LIKE '%" + userIds + "%' )",
    );

    andWhereEqual(qb, 'work', 'states', search.fhstates);

    setSorts(qb, fields, search.sort);
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
