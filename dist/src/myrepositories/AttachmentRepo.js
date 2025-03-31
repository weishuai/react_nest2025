"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentRepo = void 0;
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const Attachment_1 = require("../myentities/Attachment");
const User_1 = require("../myentities/User");
class AttachmentRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(Attachment_1.Attachment).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        return await (0, typeorm_1.getRepository)(Attachment_1.Attachment).update(Id, accountTagVo);
    }
    async updateAttachmentByMid(mid, id) {
        const listItems = this.getAttachmentAllByMid(mid);
        (await listItems).map((Item) => {
            (0, typeorm_1.getRepository)(Attachment_1.Attachment).update(Item.id, { mid: id });
        });
        return 'ok';
    }
    async getAttachmentAllByMid(mid) {
        const qb = (0, typeorm_1.getRepository)(Attachment_1.Attachment).createQueryBuilder('attachment');
        const fields = {
            id: 'attachment.id',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        (0, my_utils_1.andWhereEqual)(qb, 'attachment', 'mid', mid);
        const res = await qb.getRawMany();
        return res;
    }
    async getAttachments(ownerId, ownerType) {
        const qb = (0, typeorm_1.getRepository)(Attachment_1.Attachment).createQueryBuilder('attachment');
        qb.leftJoin(User_1.User, 'user', 'attachment.uploadUserId = user.id');
        qb.select(`attachment.id, 
               attachment.dateUploaded as dateUploaded,
               attachment.name,
               attachment.url,
               attachment.mimetype,
               attachment.size,
               attachment.when,
               user.userName as uploadUserName`);
        const conditions = {};
        conditions['ownerId'] = ownerId;
        qb.where('attachment.isDel = 0 and attachment.ownerId = :ownerId', conditions);
        (0, my_utils_1.andWhereEqual)(qb, 'attachment', 'ownerType', ownerType);
        return qb.getRawMany();
    }
    addAttachment(attachment) {
        attachment.dateUploaded = new Date();
        attachment.isDel = 0;
        return (0, typeorm_1.getRepository)(Attachment_1.Attachment).insert(attachment);
    }
    async removeAttachment(id) {
        return (0, typeorm_1.getRepository)(Attachment_1.Attachment).update(id, { isDel: 1 });
    }
    async removeAttachments(ids) {
        return (0, typeorm_1.getRepository)(Attachment_1.Attachment).update(ids, { isDel: 1 });
    }
    async getAttachmentsByUserId(ownerId, ownerType, uploadUserId) {
        const qb = (0, typeorm_1.getRepository)(Attachment_1.Attachment).createQueryBuilder('attachment');
        qb.leftJoin(User_1.User, 'user', 'attachment.uploadUserId = user.id');
        qb.select(`attachment.id, 
               attachment.dateUploaded as dateUploaded,
               attachment.name,
               attachment.url,
               attachment.mimetype,
               attachment.size,
               attachment.when,
               user.userName as uploadUserName`);
        const conditions = {};
        conditions['ownerId'] = ownerId;
        conditions['uploadUserId'] = uploadUserId;
        qb.where('attachment.isDel = 0 and attachment.ownerId = :ownerId and attachment.uploadUserId = :uploadUserId ', conditions);
        (0, my_utils_1.andWhereEqual)(qb, 'attachment', 'ownerType', ownerType);
        return qb.getRawMany();
    }
    async getVendorAttachments(names, ownerType) {
        const qb = (0, typeorm_1.getRepository)(Attachment_1.Attachment).createQueryBuilder('attachment');
        qb.leftJoin(User_1.User, 'user', 'attachment.uploadUserId = user.id');
        qb.select(`attachment.id, 
               attachment.dateUploaded as dateUploaded,
               attachment.name,
               attachment.url,
               attachment.mimetype,
               attachment.size,
               attachment.when,
               user.userName as uploadUserName`);
        qb.where('attachment.isDel = 0 ');
        (0, my_utils_1.andWhereEqual)(qb, 'attachment', 'ownerType', ownerType);
        return qb.getRawMany();
    }
    async getAttachment(when, mid) {
        return (0, typeorm_1.getRepository)(Attachment_1.Attachment).findOneBy({ when, mid, isDel: 0, });
    }
}
exports.AttachmentRepo = AttachmentRepo;
//# sourceMappingURL=AttachmentRepo.js.map