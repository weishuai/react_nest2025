"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const Activity_1 = require("../myentities/Activity");
const lodash_1 = require("lodash");
class ActivityRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(Activity_1.Activity).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(Activity_1.Activity).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(Activity_1.Activity).update(Ids[0], {
            isactived: '1',
        });
    }
    async getActivitysById(id) {
        const qb = (0, typeorm_1.getRepository)(Activity_1.Activity).createQueryBuilder('activity');
        const fields = {
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
            senderNumber: 'activity.sender_number',
            receiverNumber: 'activity.receiver_number',
            createdAt: 'activity.created_at',
            updatedAt: 'activity.updated_at',
            isactived: 'activity.isactived',
            islocked: 'activity.islocked',
            createUid: 'activity.create_uid',
            updatedUid: 'activity.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'activity', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getActivityAll(search) {
        const qb = (0, typeorm_1.getRepository)(Activity_1.Activity).createQueryBuilder('activity');
        const fields = {
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
            senderNumber: 'activity.sender_number',
            receiverNumber: 'activity.receiver_number',
            createdAt: 'activity.created_at',
            updatedAt: 'activity.updated_at',
            isactived: 'activity.isactived',
            islocked: 'activity.islocked',
            createUid: 'activity.create_uid',
            updatedUid: 'activity.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("activity.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['activity.subject', 'activity.types'], search.search);
        qb.orderBy('activity.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getActivityAllView() {
        const qb = (0, typeorm_1.getRepository)(Activity_1.Activity).createQueryBuilder('activity');
        const fields = {
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
            senderNumber: 'activity.sender_number',
            receiverNumber: 'activity.receiver_number',
            createdAt: 'activity.created_at',
            updatedAt: 'activity.updated_at',
            isactived: 'activity.isactived',
            islocked: 'activity.islocked',
            createUid: 'activity.create_uid',
            updatedUid: 'activity.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return { 'fhok': res };
    }
    async getActivityEventsAll() {
        const qb = (0, typeorm_1.getRepository)(Activity_1.Activity).createQueryBuilder('activity');
        const fields = {
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
            senderNumber: 'activity.sender_number',
            receiverNumber: 'activity.receiver_number',
            createdAt: 'activity.created_at',
            updatedAt: 'activity.updated_at',
            isactived: 'activity.isactived',
            islocked: 'activity.islocked',
            createUid: 'activity.create_uid',
            updatedUid: 'activity.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.where("activity.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'activity', 'types', 'Event');
        const res = await qb.getRawMany();
        return res;
    }
    async getActivity(userId, search) {
        const qb = (0, typeorm_1.getRepository)(Activity_1.Activity).createQueryBuilder('activity');
        const fields = {
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
            senderNumber: 'activity.sender_number',
            receiverNumber: 'activity.receiver_number',
            createdAt: 'activity.created_at',
            updatedAt: 'activity.updated_at',
            isactived: 'activity.isactived',
            islocked: 'activity.islocked',
            createUid: 'activity.create_uid',
            updatedUid: 'activity.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        const userIds = userId;
        qb.where("activity.isactived='0' and (activity.create_uid = '" +
            userIds +
            "' or activity.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" +
            userIds +
            "%') ) )");
        if (!lodash_1.default.isNil(search.fundType) && !lodash_1.default.isEmpty(search.fundType)) {
            (0, my_utils_1.andWhereEqual)(qb, 'activity', 'types', search.fundType);
        }
        if (!lodash_1.default.isNil(search.mtable) && !lodash_1.default.isEmpty(search.mtable)) {
            (0, my_utils_1.andWhereEqual)(qb, 'activity', 'mtable', search.mtable);
        }
        if (!lodash_1.default.isNil(search.mid) && !lodash_1.default.isEmpty(search.mid)) {
            (0, my_utils_1.andWhereEqual)(qb, 'activity', 'mid', search.mid);
        }
        (0, my_utils_1.multiSearch)(qb, ['activity.subject', 'activity.types'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
    async getActivitTask(userId, search) {
        const qb = (0, typeorm_1.getRepository)(Activity_1.Activity).createQueryBuilder('activity');
        const fields = {
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
            senderNumber: 'activity.sender_number',
            receiverNumber: 'activity.receiver_number',
            createdAt: 'activity.created_at',
            updatedAt: 'activity.updated_at',
            isactived: 'activity.isactived',
            islocked: 'activity.islocked',
            createUid: 'activity.create_uid',
            updatedUid: 'activity.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        const userIds = userId;
        qb.where("activity.isactived='0' and (activity.create_uid = '" +
            userIds +
            "' or activity.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" +
            userIds +
            "%') ) )");
        (0, my_utils_1.andWhereEqual)(qb, 'activity', 'types', 'Task');
        (0, my_utils_1.multiSearch)(qb, ['activity.subject', 'activity.types'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
    async getActivitNote(userId, search) {
        const qb = (0, typeorm_1.getRepository)(Activity_1.Activity).createQueryBuilder('activity');
        const fields = {
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
            senderNumber: 'activity.sender_number',
            receiverNumber: 'activity.receiver_number',
            createdAt: 'activity.created_at',
            updatedAt: 'activity.updated_at',
            isactived: 'activity.isactived',
            islocked: 'activity.islocked',
            createUid: 'activity.create_uid',
            updatedUid: 'activity.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        const userIds = userId;
        qb.where("activity.isactived='0' and (activity.create_uid = '" +
            userIds +
            "' or activity.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" +
            userIds +
            "%') ) )");
        (0, my_utils_1.andWhereEqual)(qb, 'activity', 'types', 'Note');
        (0, my_utils_1.multiSearch)(qb, ['activity.subject', 'activity.types'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
    async getActivitSQL(userId, search) {
        const qb = (0, typeorm_1.getRepository)(Activity_1.Activity).createQueryBuilder('activity');
        const fields = {
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
            senderNumber: 'activity.sender_number',
            receiverNumber: 'activity.receiver_number',
            createdAt: 'activity.created_at',
            updatedAt: 'activity.updated_at',
            isactived: 'activity.isactived',
            islocked: 'activity.islocked',
            createUid: 'activity.create_uid',
            updatedUid: 'activity.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("activity.isactived='0'");
        const userIds = userId;
        if (!lodash_1.default.isNil(search.stageName) && !lodash_1.default.isEmpty(search.stageName)) {
            (0, my_utils_1.andWhereEqual)(qb, 'activity', 'types', search.stageName);
        }
        if (!lodash_1.default.isNil(search.startDate) && lodash_1.default.isNil(search.endDate)) {
            qb.andWhere("activity.created_at >='" + search.startDate + "'");
        }
        if (!lodash_1.default.isNil(search.endDate) && lodash_1.default.isNil(search.startDate)) {
            qb.andWhere("activity.created_at <='" + search.endDate + "'");
        }
        if (!lodash_1.default.isNil(search.endDate) && !lodash_1.default.isNil(search.startDate)) {
            qb.andWhere("(activity.created_at >='" +
                search.startDate +
                "'" +
                " and  activity.created_at <='" +
                search.endDate +
                "')");
        }
        if (!lodash_1.default.isNil(search.Owner)) {
            qb.andWhere("activity.create_uid ='" + search.Owner + "'");
        }
        if (!lodash_1.default.isNil(search.month)) {
            qb.andWhere("activity.created_at LIKE '%" + search.month + "%'");
        }
        const count = await qb.getCount();
        const raws = await qb.getRawMany();
        return { count: count, raws: raws };
    }
}
exports.ActivityRepo = ActivityRepo;
//# sourceMappingURL=ActivityRepo.js.map