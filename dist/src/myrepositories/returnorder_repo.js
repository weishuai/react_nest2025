"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnorderRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const returnorder_1 = require("../myentities/returnorder");
class ReturnorderRepo {
    async create(returnorderVo) {
        return await (0, typeorm_1.getRepository)(returnorder_1.Returnorder).insert(returnorderVo);
    }
    async update(Id, user_id, returnorderVo) {
        returnorderVo.updatedAt = new Date();
        returnorderVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(returnorder_1.Returnorder).update(Id, returnorderVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(returnorder_1.Returnorder).update(Ids[0], {
            isactived: '1',
        });
    }
    async getReturnordersById(id) {
        const qb = await (0, typeorm_1.getRepository)(returnorder_1.Returnorder).createQueryBuilder('returnorder');
        const fields = {
            id: 'returnorder.id',
            name: 'returnorder.name',
            project: 'returnorder.project',
            custom: 'returnorder.custom',
            Invoice: 'returnorder.Invoice',
            contractNumber: 'returnorder.contractNumber',
            contractQuantity: 'returnorder.contractQuantity',
            product: 'returnorder.product',
            shipper: 'returnorder.shipper',
            deliveryQuantity: 'returnorder.deliveryQuantity',
            outageQuantity: 'returnorder.outageQuantity',
            deliveryType: 'returnorder.deliveryType',
            trackingNumber: 'returnorder.trackingNumber',
            recipient: 'returnorder.recipient',
            description: 'returnorder.description',
            createdAt: 'returnorder.created_at',
            updatedAt: 'returnorder.updated_at',
            isactived: 'returnorder.isactived',
            islocked: 'returnorder.islocked',
            createUid: 'returnorder.create_uid',
            updatedUid: 'returnorder.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'returnorder', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getReturnorderAll() {
        const qb = (0, typeorm_1.getRepository)(returnorder_1.Returnorder).createQueryBuilder('returnorder');
        const fields = {
            id: 'returnorder.id',
            name: 'returnorder.name',
            description: 'returnorder.description',
            project: 'returnorder.project',
            custom: 'returnorder.custom',
            Invoice: 'returnorder.Invoice',
            contractNumber: 'returnorder.contractNumber',
            contractQuantity: 'returnorder.contractQuantity',
            product: 'returnorder.product',
            shipper: 'returnorder.shipper',
            deliveryQuantity: 'returnorder.deliveryQuantity',
            outageQuantity: 'returnorder.outageQuantity',
            deliveryType: 'returnorder.deliveryType',
            trackingNumber: 'returnorder.trackingNumber',
            recipient: 'returnorder.recipient',
            createdAt: 'returnorder.created_at',
            updatedAt: 'returnorder.updated_at',
            isactived: 'returnorder.isactived',
            islocked: 'returnorder.islocked',
            createUid: 'returnorder.create_uid',
            updatedUid: 'returnorder.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("returnorder.isactived='0'");
        qb.orderBy('returnorder.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getReturnorderAllView() {
        const qb = await (0, typeorm_1.getRepository)(returnorder_1.Returnorder).createQueryBuilder('returnorder');
        const fields = {
            id: 'returnorder.id',
            name: 'returnorder.name',
            description: 'returnorder.description',
            project: 'returnorder.project',
            custom: 'returnorder.custom',
            Invoice: 'returnorder.Invoice',
            contractNumber: 'returnorder.contractNumber',
            contractQuantity: 'returnorder.contractQuantity',
            product: 'returnorder.product',
            shipper: 'returnorder.shipper',
            deliveryQuantity: 'returnorder.deliveryQuantity',
            outageQuantity: 'returnorder.outageQuantity',
            deliveryType: 'returnorder.deliveryType',
            trackingNumber: 'returnorder.trackingNumber',
            recipient: 'returnorder.recipient',
            createdAt: 'returnorder.created_at',
            updatedAt: 'returnorder.updated_at',
            isactived: 'returnorder.isactived',
            islocked: 'returnorder.islocked',
            createUid: 'returnorder.create_uid',
            updatedUid: 'returnorder.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('returnorder.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getReturnorderList(search) {
        const qb = await (0, typeorm_1.getRepository)(returnorder_1.Returnorder).createQueryBuilder('returnorder');
        const fields = {
            id: 'returnorder.id',
            name: 'returnorder.name',
            description: 'returnorder.description',
            project: 'returnorder.project',
            custom: 'returnorder.custom',
            Invoice: 'returnorder.Invoice',
            contractNumber: 'returnorder.contractNumber',
            contractQuantity: 'returnorder.contractQuantity',
            product: 'returnorder.product',
            shipper: 'returnorder.shipper',
            deliveryQuantity: 'returnorder.deliveryQuantity',
            outageQuantity: 'returnorder.outageQuantity',
            deliveryType: 'returnorder.deliveryType',
            trackingNumber: 'returnorder.trackingNumber',
            recipient: 'returnorder.recipient',
            createdAt: 'returnorder.created_at',
            updatedAt: 'returnorder.updated_at',
            isactived: 'returnorder.isactived',
            islocked: 'returnorder.islocked',
            createUid: 'returnorder.create_uid',
            updatedUid: 'returnorder.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("returnorder.isactived='0'");
        qb.orderBy('returnorder.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.ReturnorderRepo = ReturnorderRepo;
//# sourceMappingURL=returnorder_repo.js.map