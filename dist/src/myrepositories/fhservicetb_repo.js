"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhservicetbRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const fhservicetb_1 = require("../myentities/fhservicetb");
class FhservicetbRepo {
    async create(fhservicetbVo) {
        return await (0, typeorm_1.getRepository)(fhservicetb_1.Fhservicetb).insert(fhservicetbVo);
    }
    async update(Id, user_id, fhservicetbVo) {
        fhservicetbVo.updatedAt = new Date();
        fhservicetbVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(fhservicetb_1.Fhservicetb).update(Id, fhservicetbVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(fhservicetb_1.Fhservicetb).update(Ids[0], {
            isactived: '1',
        });
    }
    async getFhservicetbsById(id) {
        const qb = await (0, typeorm_1.getRepository)(fhservicetb_1.Fhservicetb).createQueryBuilder('fhservicetb');
        const fields = {
            id: 'fhservicetb.id',
            name: 'fhservicetb.name',
            fhname: 'fhservicetb.fhname',
            fhF0: 'fhservicetb.fhF0',
            fhF1: 'fhservicetb.fhF1',
            fhF2: 'fhservicetb.fhF2',
            fhF3: 'fhservicetb.fhF3',
            fhF4: 'fhservicetb.fhF4',
            fhF5: 'fhservicetb.fhF5',
            fhF6: 'fhservicetb.fhF6',
            fhF7: 'fhservicetb.fhF7',
            fhF8: 'fhservicetb.fhF8',
            description: 'fhservicetb.description',
            createdAt: 'fhservicetb.created_at',
            updatedAt: 'fhservicetb.updated_at',
            isactived: 'fhservicetb.isactived',
            islocked: 'fhservicetb.islocked',
            createUid: 'fhservicetb.create_uid',
            updatedUid: 'fhservicetb.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'fhservicetb', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getFhservicetbAll() {
        const qb = (0, typeorm_1.getRepository)(fhservicetb_1.Fhservicetb).createQueryBuilder('fhservicetb');
        const fields = {
            id: 'fhservicetb.id',
            name: 'fhservicetb.name',
            description: 'fhservicetb.description',
            fhname: 'fhservicetb.fhname',
            fhF0: 'fhservicetb.fhF0',
            fhF1: 'fhservicetb.fhF1',
            fhF2: 'fhservicetb.fhF2',
            fhF3: 'fhservicetb.fhF3',
            fhF4: 'fhservicetb.fhF4',
            fhF5: 'fhservicetb.fhF5',
            fhF6: 'fhservicetb.fhF6',
            fhF7: 'fhservicetb.fhF7',
            fhF8: 'fhservicetb.fhF8',
            createdAt: 'fhservicetb.created_at',
            updatedAt: 'fhservicetb.updated_at',
            isactived: 'fhservicetb.isactived',
            islocked: 'fhservicetb.islocked',
            createUid: 'fhservicetb.create_uid',
            updatedUid: 'fhservicetb.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("fhservicetb.isactived='0'");
        qb.orderBy('fhservicetb.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getFhservicetbAllView() {
        const qb = await (0, typeorm_1.getRepository)(fhservicetb_1.Fhservicetb).createQueryBuilder('fhservicetb');
        const fields = {
            id: 'fhservicetb.id',
            name: 'fhservicetb.name',
            description: 'fhservicetb.description',
            fhname: 'fhservicetb.fhname',
            fhF0: 'fhservicetb.fhF0',
            fhF1: 'fhservicetb.fhF1',
            fhF2: 'fhservicetb.fhF2',
            fhF3: 'fhservicetb.fhF3',
            fhF4: 'fhservicetb.fhF4',
            fhF5: 'fhservicetb.fhF5',
            fhF6: 'fhservicetb.fhF6',
            fhF7: 'fhservicetb.fhF7',
            fhF8: 'fhservicetb.fhF8',
            createdAt: 'fhservicetb.created_at',
            updatedAt: 'fhservicetb.updated_at',
            isactived: 'fhservicetb.isactived',
            islocked: 'fhservicetb.islocked',
            createUid: 'fhservicetb.create_uid',
            updatedUid: 'fhservicetb.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('fhservicetb.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getFhservicetbList(search) {
        const qb = await (0, typeorm_1.getRepository)(fhservicetb_1.Fhservicetb).createQueryBuilder('fhservicetb');
        const fields = {
            id: 'fhservicetb.id',
            name: 'fhservicetb.name',
            description: 'fhservicetb.description',
            fhname: 'fhservicetb.fhname',
            fhF0: 'fhservicetb.fhF0',
            fhF1: 'fhservicetb.fhF1',
            fhF2: 'fhservicetb.fhF2',
            fhF3: 'fhservicetb.fhF3',
            fhF4: 'fhservicetb.fhF4',
            fhF5: 'fhservicetb.fhF5',
            fhF6: 'fhservicetb.fhF6',
            fhF7: 'fhservicetb.fhF7',
            fhF8: 'fhservicetb.fhF8',
            createdAt: 'fhservicetb.created_at',
            updatedAt: 'fhservicetb.updated_at',
            isactived: 'fhservicetb.isactived',
            islocked: 'fhservicetb.islocked',
            createUid: 'fhservicetb.create_uid',
            updatedUid: 'fhservicetb.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("fhservicetb.isactived='0'");
        qb.orderBy('fhservicetb.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.FhservicetbRepo = FhservicetbRepo;
//# sourceMappingURL=fhservicetb_repo.js.map