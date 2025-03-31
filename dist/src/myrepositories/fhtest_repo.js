"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhtestRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const fhtest_1 = require("../myentities/fhtest");
class FhtestRepo {
    async create(fhtestVo) {
        return await (0, typeorm_1.getRepository)(fhtest_1.Fhtest).insert(fhtestVo);
    }
    async update(Id, user_id, fhtestVo) {
        fhtestVo.updatedAt = new Date();
        fhtestVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(fhtest_1.Fhtest).update(Id, fhtestVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(fhtest_1.Fhtest).update(Ids[0], {
            isactived: '1',
        });
    }
    async getFhtestsById(id) {
        const qb = await (0, typeorm_1.getRepository)(fhtest_1.Fhtest).createQueryBuilder('fhtest');
        const fields = {
            id: 'fhtest.id',
            name: 'fhtest.name',
            fhname: 'fhtest.fhname',
            fhF1: 'fhtest.fhF1',
            fhF2: 'fhtest.fhF2',
            fhF3: 'fhtest.fhF3',
            fhF4: 'fhtest.fhF4',
            fhF5: 'fhtest.fhF5',
            fhF6: 'fhtest.fhF6',
            fhF7: 'fhtest.fhF7',
            description: 'fhtest.description',
            createdAt: 'fhtest.created_at',
            updatedAt: 'fhtest.updated_at',
            isactived: 'fhtest.isactived',
            islocked: 'fhtest.islocked',
            createUid: 'fhtest.create_uid',
            updatedUid: 'fhtest.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'fhtest', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getFhtestAll() {
        const qb = (0, typeorm_1.getRepository)(fhtest_1.Fhtest).createQueryBuilder('fhtest');
        const fields = {
            id: 'fhtest.id',
            name: 'fhtest.name',
            description: 'fhtest.description',
            fhname: 'fhtest.fhname',
            fhF1: 'fhtest.fhF1',
            fhF2: 'fhtest.fhF2',
            fhF3: 'fhtest.fhF3',
            fhF4: 'fhtest.fhF4',
            fhF5: 'fhtest.fhF5',
            fhF6: 'fhtest.fhF6',
            fhF7: 'fhtest.fhF7',
            createdAt: 'fhtest.created_at',
            updatedAt: 'fhtest.updated_at',
            isactived: 'fhtest.isactived',
            islocked: 'fhtest.islocked',
            createUid: 'fhtest.create_uid',
            updatedUid: 'fhtest.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("fhtest.isactived='0'");
        qb.orderBy('fhtest.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getFhtestAllView() {
        const qb = await (0, typeorm_1.getRepository)(fhtest_1.Fhtest).createQueryBuilder('fhtest');
        const fields = {
            id: 'fhtest.id',
            name: 'fhtest.name',
            description: 'fhtest.description',
            fhname: 'fhtest.fhname',
            fhF1: 'fhtest.fhF1',
            fhF2: 'fhtest.fhF2',
            fhF3: 'fhtest.fhF3',
            fhF4: 'fhtest.fhF4',
            fhF5: 'fhtest.fhF5',
            fhF6: 'fhtest.fhF6',
            fhF7: 'fhtest.fhF7',
            createdAt: 'fhtest.created_at',
            updatedAt: 'fhtest.updated_at',
            isactived: 'fhtest.isactived',
            islocked: 'fhtest.islocked',
            createUid: 'fhtest.create_uid',
            updatedUid: 'fhtest.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('fhtest.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getFhtestList(search) {
        const qb = await (0, typeorm_1.getRepository)(fhtest_1.Fhtest).createQueryBuilder('fhtest');
        const fields = {
            id: 'fhtest.id',
            name: 'fhtest.name',
            description: 'fhtest.description',
            fhname: 'fhtest.fhname',
            fhF1: 'fhtest.fhF1',
            fhF2: 'fhtest.fhF2',
            fhF3: 'fhtest.fhF3',
            fhF4: 'fhtest.fhF4',
            fhF5: 'fhtest.fhF5',
            fhF6: 'fhtest.fhF6',
            fhF7: 'fhtest.fhF7',
            createdAt: 'fhtest.created_at',
            updatedAt: 'fhtest.updated_at',
            isactived: 'fhtest.isactived',
            islocked: 'fhtest.islocked',
            createUid: 'fhtest.create_uid',
            updatedUid: 'fhtest.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("fhtest.isactived='0'");
        qb.orderBy('fhtest.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.FhtestRepo = FhtestRepo;
//# sourceMappingURL=fhtest_repo.js.map