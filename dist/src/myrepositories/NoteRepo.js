"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class NoteRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Note).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.Note).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Note).update(Ids[0], {
            isactived: '1',
        });
    }
    async getnotesById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Note).createQueryBuilder('note');
        const fields = {
            id: 'note.id',
            subject: 'note.subject',
            relatedTo: 'note.related_to',
            relatedType: 'note.related_type',
            note: 'note.note',
            attachment: 'note.attachment',
            createdAt: 'note.created_at',
            updatedAt: 'note.updated_at',
            isactived: 'note.isactived',
            islocked: 'note.islocked',
            createUid: 'note.create_uid',
            updatedUid: 'note.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'note', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getnoteAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Note).createQueryBuilder('note');
        const fields = {
            id: 'note.id',
            subject: 'note.subject',
            relatedType: 'note.related_type',
            relatedTo: 'note.related_to',
            note: 'note.note',
            attachment: 'note.attachment',
            createdAt: 'note.created_at',
            updatedAt: 'note.updated_at',
            isactived: 'note.isactived',
            islocked: 'note.islocked',
            createUid: 'note.create_uid',
            updatedUid: 'note.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("note.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['note.subject', 'note.note'], search.search);
        qb.orderBy('note.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getnote(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Note).createQueryBuilder('note');
        const fields = {
            id: 'note.id',
            subject: 'note.subject',
            relatedType: 'note.related_type',
            relatedTo: 'note.related_to',
            note: 'note.note',
            attachment: 'note.attachment',
            createdAt: 'note.created_at',
            updatedAt: 'note.updated_at',
            isactived: 'note.isactived',
            islocked: 'note.islocked',
            createUid: 'note.create_uid',
            updatedUid: 'note.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("note.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'note', 'satus', search.fundType);
        (0, my_utils_1.multiSearch)(qb, ['note.subject', 'note.note'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.NoteRepo = NoteRepo;
//# sourceMappingURL=NoteRepo.js.map