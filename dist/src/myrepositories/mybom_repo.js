"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mybomRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const mybom_1 = require("../myentities/mybom");
class mybomRepo {
    async create(mybomVo) {
        return await (0, typeorm_1.getRepository)(mybom_1.mybom).insert(mybomVo);
    }
    async update(Id, user_id, mybomVo) {
        mybomVo.updatedAt = new Date();
        mybomVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(mybom_1.mybom).update(Id, mybomVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(mybom_1.mybom).update(Ids[0], {
            isactived: '1',
        });
    }
    async getmybomsById(id) {
        const qb = await (0, typeorm_1.getRepository)(mybom_1.mybom).createQueryBuilder('mybom');
        const fields = {
            id: 'mybom.id',
            name: 'mybom.name',
            product: 'mybom.product',
            code: 'mybom.code',
            productTelm: 'mybom.product_telm',
            bomType: 'mybom.bom_type',
            number: 'mybom.number',
            description: 'mybom.description',
            createdAt: 'mybom.created_at',
            updatedAt: 'mybom.updated_at',
            isactived: 'mybom.isactived',
            islocked: 'mybom.islocked',
            createUid: 'mybom.create_uid',
            updatedUid: 'mybom.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'mybom', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getmybomAll() {
        const qb = (0, typeorm_1.getRepository)(mybom_1.mybom).createQueryBuilder('mybom');
        const fields = {
            id: 'mybom.id',
            name: 'mybom.name',
            description: 'mybom.description',
            product: 'mybom.product',
            code: 'mybom.code',
            productTelm: 'mybom.product_telm',
            bomType: 'mybom.bom_type',
            number: 'mybom.number',
            createdAt: 'mybom.created_at',
            updatedAt: 'mybom.updated_at',
            isactived: 'mybom.isactived',
            islocked: 'mybom.islocked',
            createUid: 'mybom.create_uid',
            updatedUid: 'mybom.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("mybom.isactived='0'");
        qb.orderBy('mybom.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getmybomAllView() {
        const qb = await (0, typeorm_1.getRepository)(mybom_1.mybom).createQueryBuilder('mybom');
        const fields = {
            id: 'mybom.id',
            name: 'mybom.name',
            description: 'mybom.description',
            product: 'mybom.product',
            code: 'mybom.code',
            productTelm: 'mybom.product_telm',
            bomType: 'mybom.bom_type',
            number: 'mybom.number',
            createdAt: 'mybom.created_at',
            updatedAt: 'mybom.updated_at',
            isactived: 'mybom.isactived',
            islocked: 'mybom.islocked',
            createUid: 'mybom.create_uid',
            updatedUid: 'mybom.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('mybom.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getmybomList(search) {
        const qb = await (0, typeorm_1.getRepository)(mybom_1.mybom).createQueryBuilder('mybom');
        const fields = {
            id: 'mybom.id',
            name: 'mybom.name',
            description: 'mybom.description',
            product: 'mybom.product',
            code: 'mybom.code',
            productTelm: 'mybom.product_telm',
            bomType: 'mybom.bom_type',
            number: 'mybom.number',
            createdAt: 'mybom.created_at',
            updatedAt: 'mybom.updated_at',
            isactived: 'mybom.isactived',
            islocked: 'mybom.islocked',
            createUid: 'mybom.create_uid',
            updatedUid: 'mybom.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("mybom.isactived='0'");
        qb.orderBy('mybom.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.mybomRepo = mybomRepo;
//# sourceMappingURL=mybom_repo.js.map