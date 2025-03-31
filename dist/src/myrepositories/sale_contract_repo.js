"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleContractRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const sale_contract_1 = require("../myentities/sale_contract");
class SaleContractRepo {
    async create(saleContractVo) {
        return await (0, typeorm_1.getRepository)(sale_contract_1.SaleContract).insert(saleContractVo);
    }
    async update(Id, user_id, saleContractVo) {
        saleContractVo.updatedAt = new Date();
        saleContractVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(sale_contract_1.SaleContract).update(Id, saleContractVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(sale_contract_1.SaleContract).update(Ids[0], {
            isactived: '1',
        });
    }
    async getSaleContractsById(id) {
        const qb = await (0, typeorm_1.getRepository)(sale_contract_1.SaleContract).createQueryBuilder('sale_contract');
        const fields = {
            id: 'sale_contract.id',
            name: 'sale_contract.name',
            fhname: 'sale_contract.fhname',
            releaseTime: 'sale_contract.releaseTime',
            project: 'sale_contract.project',
            version: 'sale_contract.version',
            custom: 'sale_contract.custom',
            expectedCompletion: 'sale_contract.expectedCompletion',
            productionCompleted: 'sale_contract.productionCompleted',
            deliveryCompleted: 'sale_contract.deliveryCompleted',
            estimatedTime: 'sale_contract.estimatedTime',
            contractAmount: 'sale_contract.contractAmount',
            invoicingAmount: 'sale_contract.invoicingAmount',
            collectionAmount: 'sale_contract.collectionAmount',
            completionProgress: 'sale_contract.completionProgress',
            specialRequirements: 'sale_contract.specialRequirements',
            description: 'sale_contract.description',
            createdAt: 'sale_contract.created_at',
            updatedAt: 'sale_contract.updated_at',
            isactived: 'sale_contract.isactived',
            islocked: 'sale_contract.islocked',
            createUid: 'sale_contract.create_uid',
            updatedUid: 'sale_contract.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'sale_contract', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getSaleContractAll() {
        const qb = (0, typeorm_1.getRepository)(sale_contract_1.SaleContract).createQueryBuilder('sale_contract');
        const fields = {
            id: 'sale_contract.id',
            name: 'sale_contract.name',
            description: 'sale_contract.description',
            fhname: 'sale_contract.fhname',
            releaseTime: 'sale_contract.releaseTime',
            project: 'sale_contract.project',
            version: 'sale_contract.version',
            custom: 'sale_contract.custom',
            expectedCompletion: 'sale_contract.expectedCompletion',
            productionCompleted: 'sale_contract.productionCompleted',
            deliveryCompleted: 'sale_contract.deliveryCompleted',
            estimatedTime: 'sale_contract.estimatedTime',
            contractAmount: 'sale_contract.contractAmount',
            invoicingAmount: 'sale_contract.invoicingAmount',
            collectionAmount: 'sale_contract.collectionAmount',
            completionProgress: 'sale_contract.completionProgress',
            specialRequirements: 'sale_contract.specialRequirements',
            createdAt: 'sale_contract.created_at',
            updatedAt: 'sale_contract.updated_at',
            isactived: 'sale_contract.isactived',
            islocked: 'sale_contract.islocked',
            createUid: 'sale_contract.create_uid',
            updatedUid: 'sale_contract.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("sale_contract.isactived='0'");
        qb.orderBy('sale_contract.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getSaleContractAllView() {
        const qb = await (0, typeorm_1.getRepository)(sale_contract_1.SaleContract).createQueryBuilder('sale_contract');
        const fields = {
            id: 'sale_contract.id',
            name: 'sale_contract.name',
            description: 'sale_contract.description',
            fhname: 'sale_contract.fhname',
            releaseTime: 'sale_contract.releaseTime',
            project: 'sale_contract.project',
            version: 'sale_contract.version',
            custom: 'sale_contract.custom',
            expectedCompletion: 'sale_contract.expectedCompletion',
            productionCompleted: 'sale_contract.productionCompleted',
            deliveryCompleted: 'sale_contract.deliveryCompleted',
            estimatedTime: 'sale_contract.estimatedTime',
            contractAmount: 'sale_contract.contractAmount',
            invoicingAmount: 'sale_contract.invoicingAmount',
            collectionAmount: 'sale_contract.collectionAmount',
            completionProgress: 'sale_contract.completionProgress',
            specialRequirements: 'sale_contract.specialRequirements',
            createdAt: 'sale_contract.created_at',
            updatedAt: 'sale_contract.updated_at',
            isactived: 'sale_contract.isactived',
            islocked: 'sale_contract.islocked',
            createUid: 'sale_contract.create_uid',
            updatedUid: 'sale_contract.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('sale_contract.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getSaleContractList(search) {
        const qb = await (0, typeorm_1.getRepository)(sale_contract_1.SaleContract).createQueryBuilder('sale_contract');
        const fields = {
            id: 'sale_contract.id',
            name: 'sale_contract.name',
            description: 'sale_contract.description',
            fhname: 'sale_contract.fhname',
            releaseTime: 'sale_contract.releaseTime',
            project: 'sale_contract.project',
            version: 'sale_contract.version',
            custom: 'sale_contract.custom',
            expectedCompletion: 'sale_contract.expectedCompletion',
            productionCompleted: 'sale_contract.productionCompleted',
            deliveryCompleted: 'sale_contract.deliveryCompleted',
            estimatedTime: 'sale_contract.estimatedTime',
            contractAmount: 'sale_contract.contractAmount',
            invoicingAmount: 'sale_contract.invoicingAmount',
            collectionAmount: 'sale_contract.collectionAmount',
            completionProgress: 'sale_contract.completionProgress',
            specialRequirements: 'sale_contract.specialRequirements',
            createdAt: 'sale_contract.created_at',
            updatedAt: 'sale_contract.updated_at',
            isactived: 'sale_contract.isactived',
            islocked: 'sale_contract.islocked',
            createUid: 'sale_contract.create_uid',
            updatedUid: 'sale_contract.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("sale_contract.isactived='0'");
        qb.orderBy('sale_contract.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.SaleContractRepo = SaleContractRepo;
//# sourceMappingURL=sale_contract_repo.js.map