"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcurePriceRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const procure_price_1 = require("../myentities/procure_price");
class ProcurePriceRepo {
    async create(procurePriceVo) {
        return await (0, typeorm_1.getRepository)(procure_price_1.ProcurePrice).insert(procurePriceVo);
    }
    async update(Id, user_id, procurePriceVo) {
        procurePriceVo.updatedAt = new Date();
        procurePriceVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(procure_price_1.ProcurePrice).update(Id, procurePriceVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(procure_price_1.ProcurePrice).update(Ids[0], {
            isactived: '1',
        });
    }
    async getProcurePricesById(id) {
        const qb = await (0, typeorm_1.getRepository)(procure_price_1.ProcurePrice).createQueryBuilder('procure_price');
        const fields = {
            id: 'procure_price.id',
            name: 'procure_price.name',
            supplier: 'procure_price.supplier',
            product: 'procure_price.product',
            productCode: 'procure_price.productCode',
            deliveryLeadTime: 'procure_price.deliveryLeadTime',
            product2: 'procure_price.product2',
            productTemlp: 'procure_price.productTemlp',
            number: 'procure_price.number',
            unitPrice: 'procure_price.unitPrice',
            ative: 'procure_price.ative',
            company: 'procure_price.company',
            description: 'procure_price.description',
            createdAt: 'procure_price.created_at',
            updatedAt: 'procure_price.updated_at',
            isactived: 'procure_price.isactived',
            islocked: 'procure_price.islocked',
            createUid: 'procure_price.create_uid',
            updatedUid: 'procure_price.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'procure_price', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getProcurePriceAll() {
        const qb = (0, typeorm_1.getRepository)(procure_price_1.ProcurePrice).createQueryBuilder('procure_price');
        const fields = {
            id: 'procure_price.id',
            name: 'procure_price.name',
            description: 'procure_price.description',
            supplier: 'procure_price.supplier',
            product: 'procure_price.product',
            productCode: 'procure_price.productCode',
            deliveryLeadTime: 'procure_price.deliveryLeadTime',
            product2: 'procure_price.product2',
            productTemlp: 'procure_price.productTemlp',
            number: 'procure_price.number',
            unitPrice: 'procure_price.unitPrice',
            ative: 'procure_price.ative',
            company: 'procure_price.company',
            createdAt: 'procure_price.created_at',
            updatedAt: 'procure_price.updated_at',
            isactived: 'procure_price.isactived',
            islocked: 'procure_price.islocked',
            createUid: 'procure_price.create_uid',
            updatedUid: 'procure_price.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("procure_price.isactived='0'");
        qb.orderBy('procure_price.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getProcurePriceAllView() {
        const qb = await (0, typeorm_1.getRepository)(procure_price_1.ProcurePrice).createQueryBuilder('procure_price');
        const fields = {
            id: 'procure_price.id',
            name: 'procure_price.name',
            description: 'procure_price.description',
            supplier: 'procure_price.supplier',
            product: 'procure_price.product',
            productCode: 'procure_price.productCode',
            deliveryLeadTime: 'procure_price.deliveryLeadTime',
            product2: 'procure_price.product2',
            productTemlp: 'procure_price.productTemlp',
            number: 'procure_price.number',
            unitPrice: 'procure_price.unitPrice',
            ative: 'procure_price.ative',
            company: 'procure_price.company',
            createdAt: 'procure_price.created_at',
            updatedAt: 'procure_price.updated_at',
            isactived: 'procure_price.isactived',
            islocked: 'procure_price.islocked',
            createUid: 'procure_price.create_uid',
            updatedUid: 'procure_price.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('procure_price.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getProcurePriceList(search) {
        const qb = await (0, typeorm_1.getRepository)(procure_price_1.ProcurePrice).createQueryBuilder('procure_price');
        const fields = {
            id: 'procure_price.id',
            name: 'procure_price.name',
            description: 'procure_price.description',
            supplier: 'procure_price.supplier',
            product: 'procure_price.product',
            productCode: 'procure_price.productCode',
            deliveryLeadTime: 'procure_price.deliveryLeadTime',
            product2: 'procure_price.product2',
            productTemlp: 'procure_price.productTemlp',
            number: 'procure_price.number',
            unitPrice: 'procure_price.unitPrice',
            ative: 'procure_price.ative',
            company: 'procure_price.company',
            createdAt: 'procure_price.created_at',
            updatedAt: 'procure_price.updated_at',
            isactived: 'procure_price.isactived',
            islocked: 'procure_price.islocked',
            createUid: 'procure_price.create_uid',
            updatedUid: 'procure_price.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("procure_price.isactived='0'");
        qb.orderBy('procure_price.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.ProcurePriceRepo = ProcurePriceRepo;
//# sourceMappingURL=procure_price_repo.js.map