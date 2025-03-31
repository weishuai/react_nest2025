"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkNoteRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const lodash_1 = require("lodash");
const myentities_1 = require("../myentities");
class WorkNoteRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.WorkNote).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.WorkNote).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.WorkNote).update(Ids[0], {
            isactived: '1',
        });
    }
    async updateWorkNoteVoByMid(mid, id) {
        const listItems = this.getWorkNoteAllByMid(mid);
        (await listItems).map((Item) => {
            (0, typeorm_1.getRepository)(myentities_1.WorkNote).update(Item.id, { mid: id });
        });
        return 'ok';
    }
    async getWorkNotesById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.WorkNote).createQueryBuilder('work_note');
        const fields = {
            id: 'work_note.id',
            workId: 'work_note.work_id',
            title: 'work_note.title',
            note: 'work_note.note',
            assignTo: 'work_note.assign_to',
            createdAt: 'work_note.created_at',
            updatedAt: 'work_note.updated_at',
            isactived: 'work_note.isactived',
            islocked: 'work_note.islocked',
            createUid: 'work_note.create_uid',
            updatedUid: 'work_note.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'work_note', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getWorkNoteAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.WorkNote).createQueryBuilder('work_note');
        const fields = {
            id: 'work_note.id',
            workId: 'work_note.work_id',
            title: 'work_note.title',
            note: 'work_note.note',
            assignTo: 'work_note.assign_to',
            createdAt: 'work_note.created_at',
            updatedAt: 'work_note.updated_at',
            isactived: 'work_note.isactived',
            islocked: 'work_note.islocked',
            createUid: 'work_note.create_uid',
            updatedUid: 'work_note.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("work_note.isactived='0' and work_note.mid='" + search.mid + "'");
        qb.orderBy('work_note.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getWorkNoteAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.WorkNote).createQueryBuilder('work_note');
        const fields = {
            id: 'work_note.id',
            workId: 'work_note.work_id',
            title: 'work_note.title',
            note: 'work_note.note',
            assignTo: 'work_note.assign_to',
            createdAt: 'work_note.created_at',
            updatedAt: 'work_note.updated_at',
            isactived: 'work_note.isactived',
            islocked: 'work_note.islocked',
            createUid: 'work_note.create_uid',
            updatedUid: 'work_note.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getWorkNoteAllByMid(mid) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.WorkNote).createQueryBuilder('work_note');
        const fields = {
            id: 'work_note.id',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        (0, my_utils_1.andWhereEqual)(qb, 'work_note', 'mid', mid);
        const res = await qb.getRawMany();
        return res;
    }
    async getWorkNote(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.WorkNote).createQueryBuilder('work_note');
        const fields = {
            id: 'work_note.id',
            workId: 'work_note.work_id',
            title: 'work_note.title',
            note: 'work_note.note',
            assignTo: 'work_note.assign_to',
            createdAt: 'work_note.created_at',
            updatedAt: 'work_note.updated_at',
            isactived: 'work_note.isactived',
            islocked: 'work_note.islocked',
            createUid: 'work_note.create_uid',
            updatedUid: 'work_note.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("work_note.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'work_note', 'satus', search.fundType);
        if (!lodash_1.default.isNil(search.mid)) {
            (0, my_utils_1.andWhereEqual)(qb, 'work_note', 'mid', search.mid);
        }
        (0, my_utils_1.multiSearch)(qb, ['work_note.name', 'work_note.remark'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.WorkNoteRepo = WorkNoteRepo;
//# sourceMappingURL=WorkNoteRepo.js.map