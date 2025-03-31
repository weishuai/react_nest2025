"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCommentsRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const lodash_1 = require("lodash");
const myentities_1 = require("../myentities");
class TaskCommentsRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.TaskComments).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.TaskComments).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.TaskComments).update(Ids[0], {
            isactived: '1',
        });
    }
    async updateTaskCommentsVoByMid(mid, id) {
        const listItems = this.getTaskCommentsAllByMid(mid);
        (await listItems).map((Item) => {
            (0, typeorm_1.getRepository)(myentities_1.TaskComments).update(Item.id, { mid: id });
        });
        return 'ok';
    }
    async getTaskCommentsAllByMid(mid) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.TaskComments).createQueryBuilder('task_comments');
        const fields = {
            id: 'task_comments.id',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        (0, my_utils_1.andWhereEqual)(qb, 'task_comments', 'mid', mid);
        const res = await qb.getRawMany();
        return res;
    }
    async getTaskCommentssById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.TaskComments).createQueryBuilder('task_comments');
        const fields = {
            id: 'task_comments.id',
            mid: 'task_comments.mid',
            subject: 'task_comments.subject',
            assignTo: 'task_comments.assign_to',
            note: 'task_comments.note',
            createdAt: 'task_comments.created_at',
            updatedAt: 'task_comments.updated_at',
            isactived: 'task_comments.isactived',
            islocked: 'task_comments.islocked',
            createUid: 'task_comments.create_uid',
            updatedUid: 'task_comments.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'task_comments', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getTaskCommentsAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.TaskComments).createQueryBuilder('task_comments');
        const fields = {
            id: 'task_comments.id',
            mid: 'task_comments.mid',
            subject: 'task_comments.subject',
            assignTo: 'task_comments.assign_to',
            note: 'task_comments.note',
            createdAt: 'task_comments.created_at',
            updatedAt: 'task_comments.updated_at',
            isactived: 'task_comments.isactived',
            islocked: 'task_comments.islocked',
            createUid: 'task_comments.create_uid',
            updatedUid: 'task_comments.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("task_comments.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['task_comments.subject', 'task_comments.note'], search.search);
        qb.orderBy('task_comments.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getTaskCommentsAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.TaskComments).createQueryBuilder('task_comments');
        const fields = {
            id: 'task_comments.id',
            mid: 'task_comments.mid',
            subject: 'task_comments.subject',
            assignTo: 'task_comments.assign_to',
            note: 'task_comments.note',
            createdAt: 'task_comments.created_at',
            updatedAt: 'task_comments.updated_at',
            isactived: 'task_comments.isactived',
            islocked: 'task_comments.islocked',
            createUid: 'task_comments.create_uid',
            updatedUid: 'task_comments.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getTaskComments(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.TaskComments).createQueryBuilder('task_comments');
        const fields = {
            id: 'task_comments.id',
            mid: 'task_comments.mid',
            subject: 'task_comments.subject',
            assignTo: 'task_comments.assign_to',
            note: 'task_comments.note',
            createdAt: 'task_comments.created_at',
            updatedAt: 'task_comments.updated_at',
            isactived: 'task_comments.isactived',
            islocked: 'task_comments.islocked',
            createUid: 'task_comments.create_uid',
            updatedUid: 'task_comments.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("task_comments.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'task_comments', 'subject', search.fundType);
        if (!lodash_1.default.isNil(search.mid)) {
            (0, my_utils_1.andWhereEqual)(qb, 'task_comments', 'mid', search.mid);
        }
        (0, my_utils_1.multiSearch)(qb, ['task_comments.subject', 'task_comments.note'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.TaskCommentsRepo = TaskCommentsRepo;
//# sourceMappingURL=TaskCommentsRepo.js.map