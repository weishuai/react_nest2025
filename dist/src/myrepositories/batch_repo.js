"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const batch_1 = require("../myentities/batch");
class BatchRepo {
    async create(batchVo) {
        return await (0, typeorm_1.getRepository)(batch_1.Batch).insert(batchVo);
    }
    async update(Id, user_id, batchVo) {
        batchVo.updatedAt = new Date();
        batchVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(batch_1.Batch).update(Id, batchVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(batch_1.Batch).update(Ids[0], {
            isactived: '1',
        });
    }
    async getBatchsById(id) {
        const qb = await (0, typeorm_1.getRepository)(batch_1.Batch).createQueryBuilder('batch');
        const fields = {
            id: 'batch.id',
            name: 'batch.name',
            titel: 'batch.titel',
            product: 'batch.product',
            number: 'batch.number',
            code: 'batch.code',
            description: 'batch.description',
            createdAt: 'batch.created_at',
            updatedAt: 'batch.updated_at',
            isactived: 'batch.isactived',
            islocked: 'batch.islocked',
            createUid: 'batch.create_uid',
            updatedUid: 'batch.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'batch', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getBatchAll() {
        const qb = (0, typeorm_1.getRepository)(batch_1.Batch).createQueryBuilder('batch');
        const fields = {
            id: 'batch.id',
            name: 'batch.name',
            description: 'batch.description',
            titel: 'batch.titel',
            product: 'batch.product',
            number: 'batch.number',
            code: 'batch.code',
            createdAt: 'batch.created_at',
            updatedAt: 'batch.updated_at',
            isactived: 'batch.isactived',
            islocked: 'batch.islocked',
            createUid: 'batch.create_uid',
            updatedUid: 'batch.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("batch.isactived='0'");
        qb.orderBy('batch.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getBatchAllView() {
        const qb = await (0, typeorm_1.getRepository)(batch_1.Batch).createQueryBuilder('batch');
        const fields = {
            id: 'batch.id',
            name: 'batch.name',
            description: 'batch.description',
            titel: 'batch.titel',
            product: 'batch.product',
            number: 'batch.number',
            code: 'batch.code',
            createdAt: 'batch.created_at',
            updatedAt: 'batch.updated_at',
            isactived: 'batch.isactived',
            islocked: 'batch.islocked',
            createUid: 'batch.create_uid',
            updatedUid: 'batch.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('batch.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getBatchList(search) {
        const qb = await (0, typeorm_1.getRepository)(batch_1.Batch).createQueryBuilder('batch');
        const fields = {
            id: 'batch.id',
            name: 'batch.name',
            description: 'batch.description',
            titel: 'batch.titel',
            product: 'batch.product',
            number: 'batch.number',
            code: 'batch.code',
            createdAt: 'batch.created_at',
            updatedAt: 'batch.updated_at',
            isactived: 'batch.isactived',
            islocked: 'batch.islocked',
            createUid: 'batch.create_uid',
            updatedUid: 'batch.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("batch.isactived='0'");
        qb.orderBy('batch.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.BatchRepo = BatchRepo;
//# sourceMappingURL=batch_repo.js.map