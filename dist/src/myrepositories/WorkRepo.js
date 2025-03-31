"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const lodash_1 = require("lodash");
const myentities_1 = require("../myentities");
class WorkRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Work).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log('90003:' + JSON.stringify(accountTagVo));
        return await (0, typeorm_1.getRepository)(myentities_1.Work).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Work).update(Ids[0], {
            isactived: '1',
        });
    }
    async getWorksById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Work).createQueryBuilder('work');
        const fields = {
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
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'work', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getWorkOrderBySqlStartDate(SqlStartDate) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Work).createQueryBuilder('work');
        const fields = {
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
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("work.isactived='0' and work.start_date LIKE '" + SqlStartDate + "%'");
        const res = await qb.getRawMany();
        return res;
    }
    async getWorkAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Work).createQueryBuilder('work');
        const fields = {
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
        qb.leftJoin(myentities_1.Terms, 'terms', 'work.terms_id = terms.id');
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("work.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['work.title', 'work.remark'], search.search);
        qb.orderBy('work.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getWorkAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Work).createQueryBuilder('work');
        const fields = {
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
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getWork(userId, search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Work).createQueryBuilder('work');
        const fields = {
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
        (0, my_utils_1.selectFields)(qb, fields);
        const userIds = userId;
        qb.where("work.isactived='0' and (work.create_uid = '" +
            userIds +
            "' or work.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" +
            userIds +
            "%') ) )");
        if (!lodash_1.default.isNil(search.mtable) && !lodash_1.default.isEmpty(search.mtable)) {
            if (search.mtable == 'client') {
                (0, my_utils_1.andWhereEqual)(qb, 'work', 'client', search.mid);
            }
        }
        (0, my_utils_1.multiSearch)(qb, ['work.title', 'work.remark'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
    async getWorkAPP(assignTo, search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Work).createQueryBuilder('work');
        const fields = {
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
        (0, my_utils_1.selectFields)(qb, fields);
        const userIds = assignTo;
        qb.where("work.isactived='0' and (work.assign_to LIKE '%" + userIds + "%' )");
        (0, my_utils_1.andWhereEqual)(qb, 'work', 'states', search.fhstates);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.WorkRepo = WorkRepo;
//# sourceMappingURL=WorkRepo.js.map