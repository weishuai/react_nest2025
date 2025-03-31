"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcurePlanRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const procure_plan_1 = require("../myentities/procure_plan");
class ProcurePlanRepo {
    async create(procurePlanVo) {
        return await (0, typeorm_1.getRepository)(procure_plan_1.ProcurePlan).insert(procurePlanVo);
    }
    async update(Id, user_id, procurePlanVo) {
        procurePlanVo.updatedAt = new Date();
        procurePlanVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(procure_plan_1.ProcurePlan).update(Id, procurePlanVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(procure_plan_1.ProcurePlan).update(Ids[0], {
            isactived: '1',
        });
    }
    async getProcurePlansById(id) {
        const qb = await (0, typeorm_1.getRepository)(procure_plan_1.ProcurePlan).createQueryBuilder('procure_plan');
        const fields = {
            id: 'procure_plan.id',
            name: 'procure_plan.name',
            fhname: 'procure_plan.fhname',
            purchaser: 'procure_plan.purchaser',
            applicationType: 'procure_plan.applicationType',
            supplier: 'procure_plan.supplier',
            deadline: 'procure_plan.deadline',
            subscriptionDate: 'procure_plan.subscriptionDate',
            deliveryDate: 'procure_plan.deliveryDate',
            sourceFile: 'procure_plan.sourceFile',
            jobType: 'procure_plan.jobType',
            company: 'procure_plan.company',
            term: 'procure_plan.term',
            description: 'procure_plan.description',
            createdAt: 'procure_plan.created_at',
            updatedAt: 'procure_plan.updated_at',
            isactived: 'procure_plan.isactived',
            islocked: 'procure_plan.islocked',
            createUid: 'procure_plan.create_uid',
            updatedUid: 'procure_plan.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'procure_plan', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getProcurePlanAll() {
        const qb = (0, typeorm_1.getRepository)(procure_plan_1.ProcurePlan).createQueryBuilder('procure_plan');
        const fields = {
            id: 'procure_plan.id',
            name: 'procure_plan.name',
            description: 'procure_plan.description',
            fhname: 'procure_plan.fhname',
            purchaser: 'procure_plan.purchaser',
            applicationType: 'procure_plan.applicationType',
            supplier: 'procure_plan.supplier',
            deadline: 'procure_plan.deadline',
            subscriptionDate: 'procure_plan.subscriptionDate',
            deliveryDate: 'procure_plan.deliveryDate',
            sourceFile: 'procure_plan.sourceFile',
            jobType: 'procure_plan.jobType',
            company: 'procure_plan.company',
            term: 'procure_plan.term',
            createdAt: 'procure_plan.created_at',
            updatedAt: 'procure_plan.updated_at',
            isactived: 'procure_plan.isactived',
            islocked: 'procure_plan.islocked',
            createUid: 'procure_plan.create_uid',
            updatedUid: 'procure_plan.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("procure_plan.isactived='0'");
        qb.orderBy('procure_plan.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getProcurePlanAllView() {
        const qb = await (0, typeorm_1.getRepository)(procure_plan_1.ProcurePlan).createQueryBuilder('procure_plan');
        const fields = {
            id: 'procure_plan.id',
            name: 'procure_plan.name',
            description: 'procure_plan.description',
            fhname: 'procure_plan.fhname',
            purchaser: 'procure_plan.purchaser',
            applicationType: 'procure_plan.applicationType',
            supplier: 'procure_plan.supplier',
            deadline: 'procure_plan.deadline',
            subscriptionDate: 'procure_plan.subscriptionDate',
            deliveryDate: 'procure_plan.deliveryDate',
            sourceFile: 'procure_plan.sourceFile',
            jobType: 'procure_plan.jobType',
            company: 'procure_plan.company',
            term: 'procure_plan.term',
            createdAt: 'procure_plan.created_at',
            updatedAt: 'procure_plan.updated_at',
            isactived: 'procure_plan.isactived',
            islocked: 'procure_plan.islocked',
            createUid: 'procure_plan.create_uid',
            updatedUid: 'procure_plan.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('procure_plan.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getProcurePlanList(search) {
        const qb = await (0, typeorm_1.getRepository)(procure_plan_1.ProcurePlan).createQueryBuilder('procure_plan');
        const fields = {
            id: 'procure_plan.id',
            name: 'procure_plan.name',
            description: 'procure_plan.description',
            fhname: 'procure_plan.fhname',
            purchaser: 'procure_plan.purchaser',
            applicationType: 'procure_plan.applicationType',
            supplier: 'procure_plan.supplier',
            deadline: 'procure_plan.deadline',
            subscriptionDate: 'procure_plan.subscriptionDate',
            deliveryDate: 'procure_plan.deliveryDate',
            sourceFile: 'procure_plan.sourceFile',
            jobType: 'procure_plan.jobType',
            company: 'procure_plan.company',
            term: 'procure_plan.term',
            createdAt: 'procure_plan.created_at',
            updatedAt: 'procure_plan.updated_at',
            isactived: 'procure_plan.isactived',
            islocked: 'procure_plan.islocked',
            createUid: 'procure_plan.create_uid',
            updatedUid: 'procure_plan.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("procure_plan.isactived='0'");
        qb.orderBy('procure_plan.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.ProcurePlanRepo = ProcurePlanRepo;
//# sourceMappingURL=procure_plan_repo.js.map