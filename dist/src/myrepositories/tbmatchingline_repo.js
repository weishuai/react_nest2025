"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbmatchinglineRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const tbmatchingline_1 = require("../myentities/tbmatchingline");
class TbmatchinglineRepo {
    async create(tbmatchinglineVo) {
        return await (0, typeorm_1.getRepository)(tbmatchingline_1.Tbmatchingline).insert(tbmatchinglineVo);
    }
    async update(Id, user_id, tbmatchinglineVo) {
        tbmatchinglineVo.updatedAt = new Date();
        tbmatchinglineVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(tbmatchingline_1.Tbmatchingline).update(Id, tbmatchinglineVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(tbmatchingline_1.Tbmatchingline).update(Ids[0], {
            isactived: '1',
        });
    }
    async getTbmatchinglinesById(id) {
        const qb = await (0, typeorm_1.getRepository)(tbmatchingline_1.Tbmatchingline).createQueryBuilder('tbmatchingline');
        const fields = {
            id: 'tbmatchingline.id',
            name: 'tbmatchingline.name',
            mid: 'tbmatchingline.mid',
            rawMaterial: 'tbmatchingline.rawMaterial',
            batchNumber: 'tbmatchingline.batchNumber',
            number: 'tbmatchingline.number',
            notes: 'tbmatchingline.notes',
            description: 'tbmatchingline.description',
            createdAt: 'tbmatchingline.created_at',
            updatedAt: 'tbmatchingline.updated_at',
            isactived: 'tbmatchingline.isactived',
            islocked: 'tbmatchingline.islocked',
            createUid: 'tbmatchingline.create_uid',
            updatedUid: 'tbmatchingline.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'tbmatchingline', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getTbmatchinglineAll() {
        const qb = (0, typeorm_1.getRepository)(tbmatchingline_1.Tbmatchingline).createQueryBuilder('tbmatchingline');
        const fields = {
            id: 'tbmatchingline.id',
            name: 'tbmatchingline.name',
            description: 'tbmatchingline.description',
            mid: 'tbmatchingline.mid',
            rawMaterial: 'tbmatchingline.rawMaterial',
            batchNumber: 'tbmatchingline.batchNumber',
            number: 'tbmatchingline.number',
            notes: 'tbmatchingline.notes',
            createdAt: 'tbmatchingline.created_at',
            updatedAt: 'tbmatchingline.updated_at',
            isactived: 'tbmatchingline.isactived',
            islocked: 'tbmatchingline.islocked',
            createUid: 'tbmatchingline.create_uid',
            updatedUid: 'tbmatchingline.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("tbmatchingline.isactived='0'");
        qb.orderBy('tbmatchingline.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getTbmatchinglineAllView() {
        const qb = await (0, typeorm_1.getRepository)(tbmatchingline_1.Tbmatchingline).createQueryBuilder('tbmatchingline');
        const fields = {
            id: 'tbmatchingline.id',
            name: 'tbmatchingline.name',
            description: 'tbmatchingline.description',
            mid: 'tbmatchingline.mid',
            rawMaterial: 'tbmatchingline.rawMaterial',
            batchNumber: 'tbmatchingline.batchNumber',
            number: 'tbmatchingline.number',
            notes: 'tbmatchingline.notes',
            createdAt: 'tbmatchingline.created_at',
            updatedAt: 'tbmatchingline.updated_at',
            isactived: 'tbmatchingline.isactived',
            islocked: 'tbmatchingline.islocked',
            createUid: 'tbmatchingline.create_uid',
            updatedUid: 'tbmatchingline.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('tbmatchingline.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getTbmatchinglineList(search) {
        const qb = await (0, typeorm_1.getRepository)(tbmatchingline_1.Tbmatchingline).createQueryBuilder('tbmatchingline');
        const fields = {
            id: 'tbmatchingline.id',
            name: 'tbmatchingline.name',
            description: 'tbmatchingline.description',
            mid: 'tbmatchingline.mid',
            rawMaterial: 'tbmatchingline.rawMaterial',
            batchNumber: 'tbmatchingline.batchNumber',
            number: 'tbmatchingline.number',
            notes: 'tbmatchingline.notes',
            createdAt: 'tbmatchingline.created_at',
            updatedAt: 'tbmatchingline.updated_at',
            isactived: 'tbmatchingline.isactived',
            islocked: 'tbmatchingline.islocked',
            createUid: 'tbmatchingline.create_uid',
            updatedUid: 'tbmatchingline.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("tbmatchingline.isactived='0'");
        qb.orderBy('tbmatchingline.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.TbmatchinglineRepo = TbmatchinglineRepo;
//# sourceMappingURL=tbmatchingline_repo.js.map