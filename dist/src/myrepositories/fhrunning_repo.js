"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhrunningRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const fhrunning_1 = require("../myentities/fhrunning");
class FhrunningRepo {
    async create(fhrunningVo) {
        return await (0, typeorm_1.getRepository)(fhrunning_1.Fhrunning).insert(fhrunningVo);
    }
    async update(Id, user_id, fhrunningVo) {
        fhrunningVo.updatedAt = new Date();
        fhrunningVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(fhrunning_1.Fhrunning).update(Id, fhrunningVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(fhrunning_1.Fhrunning).update(Ids[0], {
            isactived: '1',
        });
    }
    async getFhrunningsById(id) {
        const qb = await (0, typeorm_1.getRepository)(fhrunning_1.Fhrunning).createQueryBuilder('fhrunning');
        const fields = {
            id: 'fhrunning.id',
            name: 'fhrunning.name',
            fhname: 'fhrunning.fhname',
            fhF1: 'fhrunning.fhF1',
            fhF2: 'fhrunning.fhF2',
            fhF3: 'fhrunning.fhF3',
            fhF4: 'fhrunning.fhF4',
            fhF5: 'fhrunning.fhF5',
            fhF6: 'fhrunning.fhF6',
            fhF7: 'fhrunning.fhF7',
            fhF8: 'fhrunning.fhF8',
            fhF9: 'fhrunning.fhF9',
            description: 'fhrunning.description',
            createdAt: 'fhrunning.created_at',
            updatedAt: 'fhrunning.updated_at',
            isactived: 'fhrunning.isactived',
            islocked: 'fhrunning.islocked',
            createUid: 'fhrunning.create_uid',
            updatedUid: 'fhrunning.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'fhrunning', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getFhrunningAll() {
        const qb = (0, typeorm_1.getRepository)(fhrunning_1.Fhrunning).createQueryBuilder('fhrunning');
        const fields = {
            id: 'fhrunning.id',
            name: 'fhrunning.name',
            description: 'fhrunning.description',
            fhname: 'fhrunning.fhname',
            fhF1: 'fhrunning.fhF1',
            fhF2: 'fhrunning.fhF2',
            fhF3: 'fhrunning.fhF3',
            fhF4: 'fhrunning.fhF4',
            fhF5: 'fhrunning.fhF5',
            fhF6: 'fhrunning.fhF6',
            fhF7: 'fhrunning.fhF7',
            fhF8: 'fhrunning.fhF8',
            fhF9: 'fhrunning.fhF9',
            createdAt: 'fhrunning.created_at',
            updatedAt: 'fhrunning.updated_at',
            isactived: 'fhrunning.isactived',
            islocked: 'fhrunning.islocked',
            createUid: 'fhrunning.create_uid',
            updatedUid: 'fhrunning.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("fhrunning.isactived='0'");
        qb.orderBy('fhrunning.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getFhrunningAllView() {
        const qb = await (0, typeorm_1.getRepository)(fhrunning_1.Fhrunning).createQueryBuilder('fhrunning');
        const fields = {
            id: 'fhrunning.id',
            name: 'fhrunning.name',
            description: 'fhrunning.description',
            fhname: 'fhrunning.fhname',
            fhF1: 'fhrunning.fhF1',
            fhF2: 'fhrunning.fhF2',
            fhF3: 'fhrunning.fhF3',
            fhF4: 'fhrunning.fhF4',
            fhF5: 'fhrunning.fhF5',
            fhF6: 'fhrunning.fhF6',
            fhF7: 'fhrunning.fhF7',
            fhF8: 'fhrunning.fhF8',
            fhF9: 'fhrunning.fhF9',
            createdAt: 'fhrunning.created_at',
            updatedAt: 'fhrunning.updated_at',
            isactived: 'fhrunning.isactived',
            islocked: 'fhrunning.islocked',
            createUid: 'fhrunning.create_uid',
            updatedUid: 'fhrunning.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('fhrunning.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getFhrunningList(search) {
        const qb = await (0, typeorm_1.getRepository)(fhrunning_1.Fhrunning).createQueryBuilder('fhrunning');
        const fields = {
            id: 'fhrunning.id',
            name: 'fhrunning.name',
            description: 'fhrunning.description',
            fhname: 'fhrunning.fhname',
            fhF1: 'fhrunning.fhF1',
            fhF2: 'fhrunning.fhF2',
            fhF3: 'fhrunning.fhF3',
            fhF4: 'fhrunning.fhF4',
            fhF5: 'fhrunning.fhF5',
            fhF6: 'fhrunning.fhF6',
            fhF7: 'fhrunning.fhF7',
            fhF8: 'fhrunning.fhF8',
            fhF9: 'fhrunning.fhF9',
            createdAt: 'fhrunning.created_at',
            updatedAt: 'fhrunning.updated_at',
            isactived: 'fhrunning.isactived',
            islocked: 'fhrunning.islocked',
            createUid: 'fhrunning.create_uid',
            updatedUid: 'fhrunning.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("fhrunning.isactived='0'");
        qb.orderBy('fhrunning.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.FhrunningRepo = FhrunningRepo;
//# sourceMappingURL=fhrunning_repo.js.map