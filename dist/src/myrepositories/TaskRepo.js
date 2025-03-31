"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class TaskRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Task).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.Task).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Task).update(Ids[0], {
            isactived: '1',
        });
    }
    async gettasksById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Task).createQueryBuilder('task');
        const fields = {
            id: 'task.id',
            subject: 'task.subject',
            dueDate: 'task.due_date',
            collaborate1: 'task.collaborate1',
            collaborate2: 'task.collaborate2',
            relatedTo: 'task.related_to',
            priority: 'task.priority',
            status: 'task.status',
            comments: 'task.comments',
            relatedType: 'task.related_type',
            feedback: 'task.feedback',
            createdAt: 'task.created_at',
            updatedAt: 'task.updated_at',
            isactived: 'task.isactived',
            islocked: 'task.islocked',
            createUid: 'task.create_uid',
            updatedUid: 'task.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'task', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async gettaskAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Task).createQueryBuilder('task');
        const fields = {
            id: 'task.id',
            subject: 'task.subject',
            dueDate: 'task.due_date',
            collaborate1: 'task.collaborate1',
            collaborate2: 'task.collaborate2',
            relatedTo: 'task.related_to',
            priority: 'task.priority',
            status: 'task.status',
            comments: 'task.comments',
            relatedType: 'task.related_type',
            feedback: 'task.feedback',
            createdAt: 'task.created_at',
            updatedAt: 'task.updated_at',
            isactived: 'task.isactived',
            islocked: 'task.islocked',
            createUid: 'task.create_uid',
            updatedUid: 'task.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("task.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['task.subject', 'task.comments'], search.search);
        qb.orderBy('task.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async gettaskAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Task).createQueryBuilder('task');
        const fields = {
            id: 'task.id',
            subject: 'task.subject',
            dueDate: 'task.due_date',
            collaborate1: 'task.collaborate1',
            collaborate2: 'task.collaborate2',
            relatedTo: 'task.related_to',
            priority: 'task.priority',
            status: 'task.status',
            comments: 'task.comments',
            relatedType: 'task.related_type',
            feedback: 'task.feedback',
            createdAt: 'task.created_at',
            updatedAt: 'task.updated_at',
            isactived: 'task.isactived',
            islocked: 'task.islocked',
            createUid: 'task.create_uid',
            updatedUid: 'task.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async gettask(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Task).createQueryBuilder('task');
        const fields = {
            id: 'task.id',
            subject: 'task.subject',
            dueDate: 'task.due_date',
            collaborate1: 'task.collaborate1',
            collaborate2: 'task.collaborate2',
            relatedTo: 'task.related_to',
            priority: 'task.priority',
            status: 'task.status',
            comments: 'task.comments',
            relatedType: 'task.related_type',
            feedback: 'task.feedback',
            createdAt: 'task.created_at',
            updatedAt: 'task.updated_at',
            isactived: 'task.isactived',
            islocked: 'task.islocked',
            createUid: 'task.create_uid',
            updatedUid: 'task.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("task.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'task', 'satus', search.fundType);
        (0, my_utils_1.multiSearch)(qb, ['task.subject', 'task.comments'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.TaskRepo = TaskRepo;
//# sourceMappingURL=TaskRepo.js.map