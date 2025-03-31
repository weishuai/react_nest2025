"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhfaultRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const fhfault_1 = require("../myentities/fhfault");
class FhfaultRepo {
    async create(fhfaultVo) {
        return await (0, typeorm_1.getRepository)(fhfault_1.Fhfault).insert(fhfaultVo);
    }
    async update(Id, user_id, fhfaultVo) {
        fhfaultVo.updatedAt = new Date();
        fhfaultVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(fhfault_1.Fhfault).update(Id, fhfaultVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(fhfault_1.Fhfault).update(Ids[0], {
            isactived: '1',
        });
    }
    async getFhfaultsById(id) {
        const qb = await (0, typeorm_1.getRepository)(fhfault_1.Fhfault).createQueryBuilder('fhfault');
        const fields = {
            id: 'fhfault.id',
            name: 'fhfault.name',
            fhname: 'fhfault.fhname',
            fhF1: 'fhfault.fhF1',
            fhF2: 'fhfault.fhF2',
            fhF3: 'fhfault.fhF3',
            fhF4: 'fhfault.fhF4',
            fhF5: 'fhfault.fhF5',
            fhF6: 'fhfault.fhF6',
            fhF7: 'fhfault.fhF7',
            fhF8: 'fhfault.fhF8',
            fhF9: 'fhfault.fhF9',
            fhF10: 'fhfault.fhF10',
            description: 'fhfault.description',
            createdAt: 'fhfault.created_at',
            updatedAt: 'fhfault.updated_at',
            isactived: 'fhfault.isactived',
            islocked: 'fhfault.islocked',
            createUid: 'fhfault.create_uid',
            updatedUid: 'fhfault.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'fhfault', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getFhfaultAll() {
        const qb = (0, typeorm_1.getRepository)(fhfault_1.Fhfault).createQueryBuilder('fhfault');
        const fields = {
            id: 'fhfault.id',
            name: 'fhfault.name',
            description: 'fhfault.description',
            fhname: 'fhfault.fhname',
            fhF1: 'fhfault.fhF1',
            fhF2: 'fhfault.fhF2',
            fhF3: 'fhfault.fhF3',
            fhF4: 'fhfault.fhF4',
            fhF5: 'fhfault.fhF5',
            fhF6: 'fhfault.fhF6',
            fhF7: 'fhfault.fhF7',
            fhF8: 'fhfault.fhF8',
            fhF9: 'fhfault.fhF9',
            fhF10: 'fhfault.fhF10',
            createdAt: 'fhfault.created_at',
            updatedAt: 'fhfault.updated_at',
            isactived: 'fhfault.isactived',
            islocked: 'fhfault.islocked',
            createUid: 'fhfault.create_uid',
            updatedUid: 'fhfault.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("fhfault.isactived='0'");
        qb.orderBy('fhfault.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getFhfaultAllView() {
        const qb = await (0, typeorm_1.getRepository)(fhfault_1.Fhfault).createQueryBuilder('fhfault');
        const fields = {
            id: 'fhfault.id',
            name: 'fhfault.name',
            description: 'fhfault.description',
            fhname: 'fhfault.fhname',
            fhF1: 'fhfault.fhF1',
            fhF2: 'fhfault.fhF2',
            fhF3: 'fhfault.fhF3',
            fhF4: 'fhfault.fhF4',
            fhF5: 'fhfault.fhF5',
            fhF6: 'fhfault.fhF6',
            fhF7: 'fhfault.fhF7',
            fhF8: 'fhfault.fhF8',
            fhF9: 'fhfault.fhF9',
            fhF10: 'fhfault.fhF10',
            createdAt: 'fhfault.created_at',
            updatedAt: 'fhfault.updated_at',
            isactived: 'fhfault.isactived',
            islocked: 'fhfault.islocked',
            createUid: 'fhfault.create_uid',
            updatedUid: 'fhfault.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('fhfault.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getFhfaultList(search) {
        const qb = await (0, typeorm_1.getRepository)(fhfault_1.Fhfault).createQueryBuilder('fhfault');
        const fields = {
            id: 'fhfault.id',
            name: 'fhfault.name',
            description: 'fhfault.description',
            fhname: 'fhfault.fhname',
            fhF1: 'fhfault.fhF1',
            fhF2: 'fhfault.fhF2',
            fhF3: 'fhfault.fhF3',
            fhF4: 'fhfault.fhF4',
            fhF5: 'fhfault.fhF5',
            fhF6: 'fhfault.fhF6',
            fhF7: 'fhfault.fhF7',
            fhF8: 'fhfault.fhF8',
            fhF9: 'fhfault.fhF9',
            fhF10: 'fhfault.fhF10',
            createdAt: 'fhfault.created_at',
            updatedAt: 'fhfault.updated_at',
            isactived: 'fhfault.isactived',
            islocked: 'fhfault.islocked',
            createUid: 'fhfault.create_uid',
            updatedUid: 'fhfault.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("fhfault.isactived='0'");
        qb.orderBy('fhfault.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.FhfaultRepo = FhfaultRepo;
//# sourceMappingURL=fhfault_repo.js.map