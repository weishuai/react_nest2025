"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhservicePlanRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const fhservice_plan_1 = require("../myentities/fhservice_plan");
class FhservicePlanRepo {
    async create(fhservicePlanVo) {
        return await (0, typeorm_1.getRepository)(fhservice_plan_1.FhservicePlan).insert(fhservicePlanVo);
    }
    async update(Id, user_id, fhservicePlanVo) {
        fhservicePlanVo.updatedAt = new Date();
        fhservicePlanVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(fhservice_plan_1.FhservicePlan).update(Id, fhservicePlanVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(fhservice_plan_1.FhservicePlan).update(Ids[0], {
            isactived: '1',
        });
    }
    async getFhservicePlansById(id) {
        const qb = await (0, typeorm_1.getRepository)(fhservice_plan_1.FhservicePlan).createQueryBuilder('fhservice_plan');
        const fields = {
            id: 'fhservice_plan.id',
            name: 'fhservice_plan.name',
            fhname: 'fhservice_plan.fhname',
            fhF1: 'fhservice_plan.fhF1',
            fhF2: 'fhservice_plan.fhF2',
            fhF3: 'fhservice_plan.fhF3',
            fhF4: 'fhservice_plan.fhF4',
            fhF5: 'fhservice_plan.fhF5',
            fhF6: 'fhservice_plan.fhF6',
            fhF7: 'fhservice_plan.fhF7',
            fhF8: 'fhservice_plan.fhF8',
            fhF9: 'fhservice_plan.fhF9',
            fhF10: 'fhservice_plan.fhF10',
            description: 'fhservice_plan.description',
            createdAt: 'fhservice_plan.created_at',
            updatedAt: 'fhservice_plan.updated_at',
            isactived: 'fhservice_plan.isactived',
            islocked: 'fhservice_plan.islocked',
            createUid: 'fhservice_plan.create_uid',
            updatedUid: 'fhservice_plan.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'fhservice_plan', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getFhservicePlanAll() {
        const qb = (0, typeorm_1.getRepository)(fhservice_plan_1.FhservicePlan).createQueryBuilder('fhservice_plan');
        const fields = {
            id: 'fhservice_plan.id',
            name: 'fhservice_plan.name',
            description: 'fhservice_plan.description',
            fhname: 'fhservice_plan.fhname',
            fhF1: 'fhservice_plan.fhF1',
            fhF2: 'fhservice_plan.fhF2',
            fhF3: 'fhservice_plan.fhF3',
            fhF4: 'fhservice_plan.fhF4',
            fhF5: 'fhservice_plan.fhF5',
            fhF6: 'fhservice_plan.fhF6',
            fhF7: 'fhservice_plan.fhF7',
            fhF8: 'fhservice_plan.fhF8',
            fhF9: 'fhservice_plan.fhF9',
            fhF10: 'fhservice_plan.fhF10',
            createdAt: 'fhservice_plan.created_at',
            updatedAt: 'fhservice_plan.updated_at',
            isactived: 'fhservice_plan.isactived',
            islocked: 'fhservice_plan.islocked',
            createUid: 'fhservice_plan.create_uid',
            updatedUid: 'fhservice_plan.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("fhservice_plan.isactived='0'");
        qb.orderBy('fhservice_plan.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getFhservicePlanAllView() {
        const qb = await (0, typeorm_1.getRepository)(fhservice_plan_1.FhservicePlan).createQueryBuilder('fhservice_plan');
        const fields = {
            id: 'fhservice_plan.id',
            name: 'fhservice_plan.name',
            description: 'fhservice_plan.description',
            fhname: 'fhservice_plan.fhname',
            fhF1: 'fhservice_plan.fhF1',
            fhF2: 'fhservice_plan.fhF2',
            fhF3: 'fhservice_plan.fhF3',
            fhF4: 'fhservice_plan.fhF4',
            fhF5: 'fhservice_plan.fhF5',
            fhF6: 'fhservice_plan.fhF6',
            fhF7: 'fhservice_plan.fhF7',
            fhF8: 'fhservice_plan.fhF8',
            fhF9: 'fhservice_plan.fhF9',
            fhF10: 'fhservice_plan.fhF10',
            createdAt: 'fhservice_plan.created_at',
            updatedAt: 'fhservice_plan.updated_at',
            isactived: 'fhservice_plan.isactived',
            islocked: 'fhservice_plan.islocked',
            createUid: 'fhservice_plan.create_uid',
            updatedUid: 'fhservice_plan.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('fhservice_plan.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getFhservicePlanList(search) {
        const qb = await (0, typeorm_1.getRepository)(fhservice_plan_1.FhservicePlan).createQueryBuilder('fhservice_plan');
        const fields = {
            id: 'fhservice_plan.id',
            name: 'fhservice_plan.name',
            description: 'fhservice_plan.description',
            fhname: 'fhservice_plan.fhname',
            fhF1: 'fhservice_plan.fhF1',
            fhF2: 'fhservice_plan.fhF2',
            fhF3: 'fhservice_plan.fhF3',
            fhF4: 'fhservice_plan.fhF4',
            fhF5: 'fhservice_plan.fhF5',
            fhF6: 'fhservice_plan.fhF6',
            fhF7: 'fhservice_plan.fhF7',
            fhF8: 'fhservice_plan.fhF8',
            fhF9: 'fhservice_plan.fhF9',
            fhF10: 'fhservice_plan.fhF10',
            createdAt: 'fhservice_plan.created_at',
            updatedAt: 'fhservice_plan.updated_at',
            isactived: 'fhservice_plan.isactived',
            islocked: 'fhservice_plan.islocked',
            createUid: 'fhservice_plan.create_uid',
            updatedUid: 'fhservice_plan.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("fhservice_plan.isactived='0'");
        qb.orderBy('fhservice_plan.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.FhservicePlanRepo = FhservicePlanRepo;
//# sourceMappingURL=fhservice_plan_repo.js.map