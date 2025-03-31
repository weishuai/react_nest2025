"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcurePlanListRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const procure_plan_list_1 = require("../myentities/procure_plan_list");
class ProcurePlanListRepo {
    async create(procurePlanListVo) {
        return await (0, typeorm_1.getRepository)(procure_plan_list_1.ProcurePlanList).insert(procurePlanListVo);
    }
    async update(Id, user_id, procurePlanListVo) {
        procurePlanListVo.updatedAt = new Date();
        procurePlanListVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(procure_plan_list_1.ProcurePlanList).update(Id, procurePlanListVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(procure_plan_list_1.ProcurePlanList).update(Ids[0], {
            isactived: '1',
        });
    }
    async getProcurePlanListsById(id) {
        const qb = await (0, typeorm_1.getRepository)(procure_plan_list_1.ProcurePlanList).createQueryBuilder('procure_plan_list');
        const fields = {
            id: 'procure_plan_list.id',
            name: 'procure_plan_list.name',
            mid: 'procure_plan_list.mid',
            product: 'procure_plan_list.product',
            fhtext: 'procure_plan_list.fhtext',
            number: 'procure_plan_list.number',
            orderedQuantity: 'procure_plan_list.orderedQuantity',
            unit: 'procure_plan_list.unit',
            unitPrice: 'procure_plan_list.unitPrice',
            description: 'procure_plan_list.description',
            createdAt: 'procure_plan_list.created_at',
            updatedAt: 'procure_plan_list.updated_at',
            isactived: 'procure_plan_list.isactived',
            islocked: 'procure_plan_list.islocked',
            createUid: 'procure_plan_list.create_uid',
            updatedUid: 'procure_plan_list.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'procure_plan_list', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getProcurePlanListAll() {
        const qb = (0, typeorm_1.getRepository)(procure_plan_list_1.ProcurePlanList).createQueryBuilder('procure_plan_list');
        const fields = {
            id: 'procure_plan_list.id',
            name: 'procure_plan_list.name',
            description: 'procure_plan_list.description',
            mid: 'procure_plan_list.mid',
            product: 'procure_plan_list.product',
            fhtext: 'procure_plan_list.fhtext',
            number: 'procure_plan_list.number',
            orderedQuantity: 'procure_plan_list.orderedQuantity',
            unit: 'procure_plan_list.unit',
            unitPrice: 'procure_plan_list.unitPrice',
            createdAt: 'procure_plan_list.created_at',
            updatedAt: 'procure_plan_list.updated_at',
            isactived: 'procure_plan_list.isactived',
            islocked: 'procure_plan_list.islocked',
            createUid: 'procure_plan_list.create_uid',
            updatedUid: 'procure_plan_list.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("procure_plan_list.isactived='0'");
        qb.orderBy('procure_plan_list.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getProcurePlanListAllView() {
        const qb = await (0, typeorm_1.getRepository)(procure_plan_list_1.ProcurePlanList).createQueryBuilder('procure_plan_list');
        const fields = {
            id: 'procure_plan_list.id',
            name: 'procure_plan_list.name',
            description: 'procure_plan_list.description',
            mid: 'procure_plan_list.mid',
            product: 'procure_plan_list.product',
            fhtext: 'procure_plan_list.fhtext',
            number: 'procure_plan_list.number',
            orderedQuantity: 'procure_plan_list.orderedQuantity',
            unit: 'procure_plan_list.unit',
            unitPrice: 'procure_plan_list.unitPrice',
            createdAt: 'procure_plan_list.created_at',
            updatedAt: 'procure_plan_list.updated_at',
            isactived: 'procure_plan_list.isactived',
            islocked: 'procure_plan_list.islocked',
            createUid: 'procure_plan_list.create_uid',
            updatedUid: 'procure_plan_list.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('procure_plan_list.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getProcurePlanListList(search) {
        const qb = await (0, typeorm_1.getRepository)(procure_plan_list_1.ProcurePlanList).createQueryBuilder('procure_plan_list');
        const fields = {
            id: 'procure_plan_list.id',
            name: 'procure_plan_list.name',
            description: 'procure_plan_list.description',
            mid: 'procure_plan_list.mid',
            product: 'procure_plan_list.product',
            fhtext: 'procure_plan_list.fhtext',
            number: 'procure_plan_list.number',
            orderedQuantity: 'procure_plan_list.orderedQuantity',
            unit: 'procure_plan_list.unit',
            unitPrice: 'procure_plan_list.unitPrice',
            createdAt: 'procure_plan_list.created_at',
            updatedAt: 'procure_plan_list.updated_at',
            isactived: 'procure_plan_list.isactived',
            islocked: 'procure_plan_list.islocked',
            createUid: 'procure_plan_list.create_uid',
            updatedUid: 'procure_plan_list.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("procure_plan_list.isactived='0'");
        qb.orderBy('procure_plan_list.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.ProcurePlanListRepo = ProcurePlanListRepo;
//# sourceMappingURL=procure_plan_list_repo.js.map