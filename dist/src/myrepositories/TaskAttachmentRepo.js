"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskAttachmentRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const lodash_1 = require("lodash");
const myentities_1 = require("../myentities");
class TaskAttachmentRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.TaskAttachment).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.TaskAttachment).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.TaskAttachment).update(Ids[0], {
            isactived: '1',
        });
    }
    async updateTaskAttachmentsVoByMid(mid, id) {
        const listItems = this.getTaskAttachmentsAllByMid(mid);
        (await listItems).map((Item) => {
            (0, typeorm_1.getRepository)(myentities_1.TaskAttachment).update(Item.id, { mid: id });
        });
        return 'ok';
    }
    async getTaskAttachmentsAllByMid(mid) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.TaskAttachment).createQueryBuilder('task_attachment');
        const fields = {
            id: 'task_attachment.id',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        (0, my_utils_1.andWhereEqual)(qb, 'task_attachment', 'mid', mid);
        const res = await qb.getRawMany();
        return res;
    }
    async getTaskAttachmentsById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.TaskAttachment).createQueryBuilder('task_attachment');
        const fields = {
            id: 'task_attachment.id',
            mid: 'task_attachment.mid',
            subject: 'task_attachment.subject',
            note: 'task_attachment.note',
            attachment: 'task_attachment.attachment',
            createdAt: 'task_attachment.created_at',
            updatedAt: 'task_attachment.updated_at',
            isactived: 'task_attachment.isactived',
            islocked: 'task_attachment.islocked',
            createUid: 'task_attachment.create_uid',
            updatedUid: 'task_attachment.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'task_attachment', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getTaskAttachmentAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.TaskAttachment).createQueryBuilder('task_attachment');
        const fields = {
            id: 'task_attachment.id',
            mid: 'task_attachment.mid',
            subject: 'task_attachment.subject',
            note: 'task_attachment.note',
            attachment: 'task_attachment.attachment',
            createdAt: 'task_attachment.created_at',
            updatedAt: 'task_attachment.updated_at',
            isactived: 'task_attachment.isactived',
            islocked: 'task_attachment.islocked',
            createUid: 'task_attachment.create_uid',
            updatedUid: 'task_attachment.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("task_attachment.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['task_attachment.subject', 'task_attachment.note'], search.search);
        qb.orderBy('task_attachment.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getTaskAttachmentAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.TaskAttachment).createQueryBuilder('task_attachment');
        const fields = {
            id: 'task_attachment.id',
            mid: 'task_attachment.mid',
            subject: 'task_attachment.subject',
            note: 'task_attachment.note',
            attachment: 'task_attachment.attachment',
            createdAt: 'task_attachment.created_at',
            updatedAt: 'task_attachment.updated_at',
            isactived: 'task_attachment.isactived',
            islocked: 'task_attachment.islocked',
            createUid: 'task_attachment.create_uid',
            updatedUid: 'task_attachment.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getTaskAttachment(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.TaskAttachment).createQueryBuilder('task_attachment');
        const fields = {
            id: 'task_attachment.id',
            mid: 'task_attachment.mid',
            subject: 'task_attachment.subject',
            note: 'task_attachment.note',
            attachment: 'task_attachment.attachment',
            createdAt: 'task_attachment.created_at',
            updatedAt: 'task_attachment.updated_at',
            isactived: 'task_attachment.isactived',
            islocked: 'task_attachment.islocked',
            createUid: 'task_attachment.create_uid',
            updatedUid: 'task_attachment.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("task_attachment.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'task_attachment', 'subject', search.fundType);
        if (!lodash_1.default.isNil(search.mid)) {
            (0, my_utils_1.andWhereEqual)(qb, 'task_attachment', 'mid', search.mid);
        }
        (0, my_utils_1.multiSearch)(qb, ['task_attachment.subject', 'task_attachment.note'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.TaskAttachmentRepo = TaskAttachmentRepo;
//# sourceMappingURL=TaskAttachmentRepo.js.map