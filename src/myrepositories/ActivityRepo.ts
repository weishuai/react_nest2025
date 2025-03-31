import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import {
  ActivitySearchVo,
  ActivityVo,
  FHActivitySearchVo,
} from '../myvo/ActivityVo';
import { Activity } from '../myentities/Activity';
import _ from 'lodash';

export class ActivityRepo {
  async create(accountTagVo: ActivityVo) {
    return await getRepository(Activity).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: ActivityVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Activity).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Activity).update(Ids[0], {
      isactived: '1',
    });
  }

  async getActivitysById(id: string) {
    const qb = getRepository(Activity).createQueryBuilder('activity');
    const fields: Record<string, string> = {
      id: 'activity.id',
      mid: 'activity.mid',
      mtable: 'activity.mtable',
      types: 'activity.types',
      subject: 'activity.subject',
      starts: 'activity.starts',
      ends: 'activity.ends',
      allDayEvent: 'activity.all_day_event',
      attendees1: 'activity.attendees1',
      attendees2: 'activity.attendees2',
      relatedType: 'activity.related_type',
      relatedTo: 'activity.related_to',
      eventType: 'activity.event_type',
      location: 'activity.location',
      description: 'activity.description',
      collaborate1: 'activity.collaborate1',
      collaborate2: 'activity.collaborate2',
      priority: 'activity.priority',
      status: 'activity.status',
      attachment: 'activity.attachment',
      emailTo: 'activity.email_to',
      cc: 'activity.cc',
      sendMine: 'activity.send_mine',
      contact: 'activity.contact',
      ///caller: 'activity.caller',
      senderNumber: 'activity.sender_number',
      receiverNumber: 'activity.receiver_number',
      createdAt: 'activity.created_at',
      updatedAt: 'activity.updated_at',
      isactived: 'activity.isactived',
      islocked: 'activity.islocked',
      createUid: 'activity.create_uid',
      updatedUid: 'activity.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'activity', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getActivityAll(search: ActivitySearchVo) {
    const qb = getRepository(Activity).createQueryBuilder('activity');
    const fields: Record<string, string> = {
      id: 'activity.id',
      mid: 'activity.mid',
      mtable: 'activity.mtable',
      types: 'activity.types',
      subject: 'activity.subject',
      starts: 'activity.starts',
      ends: 'activity.ends',
      allDayEvent: 'activity.all_day_event',
      attendees1: 'activity.attendees1',
      attendees2: 'activity.attendees2',
      relatedType: 'activity.related_type',
      relatedTo: 'activity.related_to',
      eventType: 'activity.event_type',
      location: 'activity.location',
      description: 'activity.description',
      collaborate1: 'activity.collaborate1',
      collaborate2: 'activity.collaborate2',
      priority: 'activity.priority',
      status: 'activity.status',
      attachment: 'activity.attachment',
      emailTo: 'activity.email_to',
      cc: 'activity.cc',
      sendMine: 'activity.send_mine',
      contact: 'activity.contact',
      //caller: 'activity.caller',
      senderNumber: 'activity.sender_number',
      receiverNumber: 'activity.receiver_number',
      createdAt: 'activity.created_at',
      updatedAt: 'activity.updated_at',
      isactived: 'activity.isactived',
      islocked: 'activity.islocked',
      createUid: 'activity.create_uid',
      updatedUid: 'activity.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("activity.isactived='0'");
    multiSearch(qb, ['activity.subject', 'activity.types'], search.search);
    qb.orderBy('activity.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getActivityAllView() {
    const qb = getRepository(Activity).createQueryBuilder('activity');
    const fields: Record<string, string> = {
      id: 'activity.id',
      mid: 'activity.mid',
      mtable: 'activity.mtable',
      types: 'activity.types',
      subject: 'activity.subject',
      starts: 'activity.starts',
      ends: 'activity.ends',
      allDayEvent: 'activity.all_day_event',
      attendees1: 'activity.attendees1',
      attendees2: 'activity.attendees2',
      relatedType: 'activity.related_type',
      relatedTo: 'activity.related_to',
      eventType: 'activity.event_type',
      location: 'activity.location',
      description: 'activity.description',
      collaborate1: 'activity.collaborate1',
      collaborate2: 'activity.collaborate2',
      priority: 'activity.priority',
      status: 'activity.status',
      attachment: 'activity.attachment',
      emailTo: 'activity.email_to',
      cc: 'activity.cc',
      sendMine: 'activity.send_mine',
      contact: 'activity.contact',
      ///caller: 'activity.caller',
      senderNumber: 'activity.sender_number',
      receiverNumber: 'activity.receiver_number',
      createdAt: 'activity.created_at',
      updatedAt: 'activity.updated_at',
      isactived: 'activity.isactived',
      islocked: 'activity.islocked',
      createUid: 'activity.create_uid',
      updatedUid: 'activity.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return {'fhok':res};
  }

  async getActivityEventsAll() {
    const qb = getRepository(Activity).createQueryBuilder('activity');
    const fields: Record<string, string> = {
      id: 'activity.id',
      mid: 'activity.mid',
      mtable: 'activity.mtable',
      types: 'activity.types',
      subject: 'activity.subject',
      starts: 'activity.starts',
      ends: 'activity.ends',
      allDayEvent: 'activity.all_day_event',
      attendees1: 'activity.attendees1',
      attendees2: 'activity.attendees2',
      relatedType: 'activity.related_type',
      relatedTo: 'activity.related_to',
      eventType: 'activity.event_type',
      location: 'activity.location',
      description: 'activity.description',
      collaborate1: 'activity.collaborate1',
      collaborate2: 'activity.collaborate2',
      priority: 'activity.priority',
      status: 'activity.status',
      attachment: 'activity.attachment',
      emailTo: 'activity.email_to',
      cc: 'activity.cc',
      sendMine: 'activity.send_mine',
      contact: 'activity.contact',
      ///caller: 'activity.caller',
      senderNumber: 'activity.sender_number',
      receiverNumber: 'activity.receiver_number',
      createdAt: 'activity.created_at',
      updatedAt: 'activity.updated_at',
      isactived: 'activity.isactived',
      islocked: 'activity.islocked',
      createUid: 'activity.create_uid',
      updatedUid: 'activity.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.where("activity.isactived='0'");
    andWhereEqual(qb, 'activity', 'types', 'Event');
    const res = await qb.getRawMany();
    return res;
  }

  async getActivity(userId: string, search: ActivitySearchVo) {
    const qb = getRepository(Activity).createQueryBuilder('activity');
    const fields: Record<string, string> = {
      id: 'activity.id',
      mid: 'activity.mid',
      mtable: 'activity.mtable',
      types: 'activity.types',
      subject: 'activity.subject',
      starts: 'activity.starts',
      ends: 'activity.ends',
      allDayEvent: 'activity.all_day_event',
      attendees1: 'activity.attendees1',
      attendees2: 'activity.attendees2',
      relatedType: 'activity.related_type',
      relatedTo: 'activity.related_to',
      eventType: 'activity.event_type',
      location: 'activity.location',
      description: 'activity.description',
      collaborate1: 'activity.collaborate1',
      collaborate2: 'activity.collaborate2',
      priority: 'activity.priority',
      status: 'activity.status',
      attachment: 'activity.attachment',
      emailTo: 'activity.email_to',
      cc: 'activity.cc',
      sendMine: 'activity.send_mine',
      contact: 'activity.contact',
      ///caller: 'activity.caller',
      senderNumber: 'activity.sender_number',
      receiverNumber: 'activity.receiver_number',
      createdAt: 'activity.created_at',
      updatedAt: 'activity.updated_at',
      isactived: 'activity.isactived',
      islocked: 'activity.islocked',
      createUid: 'activity.create_uid',
      updatedUid: 'activity.updated_uid',
    };

    selectFields(qb, fields);
    ///qb.where("activity.isactived='0'");
    const userIds = userId;
    qb.where(
      "activity.isactived='0' and (activity.create_uid = '" +
        userIds +
        "' or activity.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" +
        userIds +
        "%') ) )",
    );

    if (!_.isNil(search.fundType) && !_.isEmpty(search.fundType)) {
      andWhereEqual(qb, 'activity', 'types', search.fundType);
    }

    if (!_.isNil(search.mtable) && !_.isEmpty(search.mtable)) {
      andWhereEqual(qb, 'activity', 'mtable', search.mtable);
    }

    if (!_.isNil(search.mid) && !_.isEmpty(search.mid)) {
      andWhereEqual(qb, 'activity', 'mid', search.mid);
    }

    multiSearch(qb, ['activity.subject', 'activity.types'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  async getActivitTask(userId: string, search: ActivitySearchVo) {
    const qb = getRepository(Activity).createQueryBuilder('activity');
    const fields: Record<string, string> = {
      id: 'activity.id',
      mid: 'activity.mid',
      mtable: 'activity.mtable',
      types: 'activity.types',
      subject: 'activity.subject',
      starts: 'activity.starts',
      ends: 'activity.ends',
      allDayEvent: 'activity.all_day_event',
      attendees1: 'activity.attendees1',
      attendees2: 'activity.attendees2',
      relatedType: 'activity.related_type',
      relatedTo: 'activity.related_to',
      eventType: 'activity.event_type',
      location: 'activity.location',
      description: 'activity.description',
      collaborate1: 'activity.collaborate1',
      collaborate2: 'activity.collaborate2',
      priority: 'activity.priority',
      status: 'activity.status',
      attachment: 'activity.attachment',
      emailTo: 'activity.email_to',
      cc: 'activity.cc',
      sendMine: 'activity.send_mine',
      contact: 'activity.contact',
      ///caller: 'activity.caller',
      senderNumber: 'activity.sender_number',
      receiverNumber: 'activity.receiver_number',
      createdAt: 'activity.created_at',
      updatedAt: 'activity.updated_at',
      isactived: 'activity.isactived',
      islocked: 'activity.islocked',
      createUid: 'activity.create_uid',
      updatedUid: 'activity.updated_uid',
    };

    selectFields(qb, fields);
    //qb.where("activity.isactived='0'");
    const userIds = userId;
    qb.where(
      "activity.isactived='0' and (activity.create_uid = '" +
        userIds +
        "' or activity.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" +
        userIds +
        "%') ) )",
    );

    andWhereEqual(qb, 'activity', 'types', 'Task');

    multiSearch(qb, ['activity.subject', 'activity.types'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  async getActivitNote(userId: string, search: ActivitySearchVo) {
    const qb = getRepository(Activity).createQueryBuilder('activity');
    const fields: Record<string, string> = {
      id: 'activity.id',
      mid: 'activity.mid',
      mtable: 'activity.mtable',
      types: 'activity.types',
      subject: 'activity.subject',
      starts: 'activity.starts',
      ends: 'activity.ends',
      allDayEvent: 'activity.all_day_event',
      attendees1: 'activity.attendees1',
      attendees2: 'activity.attendees2',
      relatedType: 'activity.related_type',
      relatedTo: 'activity.related_to',
      eventType: 'activity.event_type',
      location: 'activity.location',
      description: 'activity.description',
      collaborate1: 'activity.collaborate1',
      collaborate2: 'activity.collaborate2',
      priority: 'activity.priority',
      status: 'activity.status',
      attachment: 'activity.attachment',
      emailTo: 'activity.email_to',
      cc: 'activity.cc',
      sendMine: 'activity.send_mine',
      contact: 'activity.contact',
      ///caller: 'activity.caller',
      senderNumber: 'activity.sender_number',
      receiverNumber: 'activity.receiver_number',
      createdAt: 'activity.created_at',
      updatedAt: 'activity.updated_at',
      isactived: 'activity.isactived',
      islocked: 'activity.islocked',
      createUid: 'activity.create_uid',
      updatedUid: 'activity.updated_uid',
    };

    selectFields(qb, fields);
    ///qb.where("activity.isactived='0'");
    const userIds = userId;
    qb.where(
      "activity.isactived='0' and (activity.create_uid = '" +
        userIds +
        "' or activity.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" +
        userIds +
        "%') ) )",
    );

    andWhereEqual(qb, 'activity', 'types', 'Note');

    multiSearch(qb, ['activity.subject', 'activity.types'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  async getActivitSQL(userId: string, search: FHActivitySearchVo) {
    const qb = getRepository(Activity).createQueryBuilder('activity');
    const fields: Record<string, string> = {
      id: 'activity.id',
      mid: 'activity.mid',
      mtable: 'activity.mtable',
      types: 'activity.types',
      subject: 'activity.subject',
      starts: 'activity.starts',
      ends: 'activity.ends',
      allDayEvent: 'activity.all_day_event',
      attendees1: 'activity.attendees1',
      attendees2: 'activity.attendees2',
      relatedType: 'activity.related_type',
      relatedTo: 'activity.related_to',
      eventType: 'activity.event_type',
      location: 'activity.location',
      description: 'activity.description',
      collaborate1: 'activity.collaborate1',
      collaborate2: 'activity.collaborate2',
      priority: 'activity.priority',
      status: 'activity.status',
      attachment: 'activity.attachment',
      emailTo: 'activity.email_to',
      cc: 'activity.cc',
      sendMine: 'activity.send_mine',
      contact: 'activity.contact',
      ///caller: 'activity.caller',
      senderNumber: 'activity.sender_number',
      receiverNumber: 'activity.receiver_number',
      createdAt: 'activity.created_at',
      updatedAt: 'activity.updated_at',
      isactived: 'activity.isactived',
      islocked: 'activity.islocked',
      createUid: 'activity.create_uid',
      updatedUid: 'activity.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("activity.isactived='0'");
    const userIds = userId;
    ///qb.where("activity.isactived='0' and (activity.create_uid = '" + userIds + "' or activity.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" + userIds + "%') ) )");

    if (!_.isNil(search.stageName) && !_.isEmpty(search.stageName)) {
      andWhereEqual(qb, 'activity', 'types', search.stageName);
    }

    if (!_.isNil(search.startDate) && _.isNil(search.endDate)) {
      qb.andWhere("activity.created_at >='" + search.startDate + "'");
    }

    if (!_.isNil(search.endDate) && _.isNil(search.startDate)) {
      qb.andWhere("activity.created_at <='" + search.endDate + "'");
    }
    if (!_.isNil(search.endDate) && !_.isNil(search.startDate)) {
      qb.andWhere(
        "(activity.created_at >='" +
          search.startDate +
          "'" +
          " and  activity.created_at <='" +
          search.endDate +
          "')",
      );
    }

    if (!_.isNil(search.Owner)) {
      qb.andWhere("activity.create_uid ='" + search.Owner + "'");
    }

    if (!_.isNil(search.month)) {
      qb.andWhere("activity.created_at LIKE '%" + search.month + "%'");
    }

    const count = await qb.getCount();
    const raws = await qb.getRawMany();
    return { count: count, raws: raws };
  }
}
