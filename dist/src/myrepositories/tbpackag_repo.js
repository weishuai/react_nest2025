"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbpackagRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const tbpackag_1 = require("../myentities/tbpackag");
class TbpackagRepo {
    async create(tbpackagVo) {
        return await (0, typeorm_1.getRepository)(tbpackag_1.Tbpackag).insert(tbpackagVo);
    }
    async update(Id, user_id, tbpackagVo) {
        tbpackagVo.updatedAt = new Date();
        tbpackagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(tbpackag_1.Tbpackag).update(Id, tbpackagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(tbpackag_1.Tbpackag).update(Ids[0], {
            isactived: '1',
        });
    }
    async getTbpackagsById(id) {
        const qb = await (0, typeorm_1.getRepository)(tbpackag_1.Tbpackag).createQueryBuilder('tbpackag');
        const fields = {
            id: 'tbpackag.id',
            name: 'tbpackag.name',
            mid: 'tbpackag.mid',
            project: 'tbpackag.project',
            product: 'tbpackag.product',
            productCode: 'tbpackag.productCode',
            code: 'tbpackag.code',
            deliveryQuantity: 'tbpackag.deliveryQuantity',
            deliveryDate: 'tbpackag.deliveryDate',
            factoryOrderNumber: 'tbpackag.factoryOrderNumber',
            trackingNumber: 'tbpackag.trackingNumber',
            expressCompany: 'tbpackag.expressCompany',
            recipient: 'tbpackag.recipient',
            shipper: 'tbpackag.shipper',
            photo: 'tbpackag.photo',
            description: 'tbpackag.description',
            createdAt: 'tbpackag.created_at',
            updatedAt: 'tbpackag.updated_at',
            isactived: 'tbpackag.isactived',
            islocked: 'tbpackag.islocked',
            createUid: 'tbpackag.create_uid',
            updatedUid: 'tbpackag.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'tbpackag', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getTbpackagAll() {
        const qb = (0, typeorm_1.getRepository)(tbpackag_1.Tbpackag).createQueryBuilder('tbpackag');
        const fields = {
            id: 'tbpackag.id',
            name: 'tbpackag.name',
            description: 'tbpackag.description',
            mid: 'tbpackag.mid',
            project: 'tbpackag.project',
            product: 'tbpackag.product',
            productCode: 'tbpackag.productCode',
            code: 'tbpackag.code',
            deliveryQuantity: 'tbpackag.deliveryQuantity',
            deliveryDate: 'tbpackag.deliveryDate',
            factoryOrderNumber: 'tbpackag.factoryOrderNumber',
            trackingNumber: 'tbpackag.trackingNumber',
            expressCompany: 'tbpackag.expressCompany',
            recipient: 'tbpackag.recipient',
            shipper: 'tbpackag.shipper',
            photo: 'tbpackag.photo',
            createdAt: 'tbpackag.created_at',
            updatedAt: 'tbpackag.updated_at',
            isactived: 'tbpackag.isactived',
            islocked: 'tbpackag.islocked',
            createUid: 'tbpackag.create_uid',
            updatedUid: 'tbpackag.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("tbpackag.isactived='0'");
        qb.orderBy('tbpackag.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getTbpackagAllView() {
        const qb = await (0, typeorm_1.getRepository)(tbpackag_1.Tbpackag).createQueryBuilder('tbpackag');
        const fields = {
            id: 'tbpackag.id',
            name: 'tbpackag.name',
            description: 'tbpackag.description',
            mid: 'tbpackag.mid',
            project: 'tbpackag.project',
            product: 'tbpackag.product',
            productCode: 'tbpackag.productCode',
            code: 'tbpackag.code',
            deliveryQuantity: 'tbpackag.deliveryQuantity',
            deliveryDate: 'tbpackag.deliveryDate',
            factoryOrderNumber: 'tbpackag.factoryOrderNumber',
            trackingNumber: 'tbpackag.trackingNumber',
            expressCompany: 'tbpackag.expressCompany',
            recipient: 'tbpackag.recipient',
            shipper: 'tbpackag.shipper',
            photo: 'tbpackag.photo',
            createdAt: 'tbpackag.created_at',
            updatedAt: 'tbpackag.updated_at',
            isactived: 'tbpackag.isactived',
            islocked: 'tbpackag.islocked',
            createUid: 'tbpackag.create_uid',
            updatedUid: 'tbpackag.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('tbpackag.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getTbpackagList(search) {
        const qb = await (0, typeorm_1.getRepository)(tbpackag_1.Tbpackag).createQueryBuilder('tbpackag');
        const fields = {
            id: 'tbpackag.id',
            name: 'tbpackag.name',
            description: 'tbpackag.description',
            mid: 'tbpackag.mid',
            project: 'tbpackag.project',
            product: 'tbpackag.product',
            productCode: 'tbpackag.productCode',
            code: 'tbpackag.code',
            deliveryQuantity: 'tbpackag.deliveryQuantity',
            deliveryDate: 'tbpackag.deliveryDate',
            factoryOrderNumber: 'tbpackag.factoryOrderNumber',
            trackingNumber: 'tbpackag.trackingNumber',
            expressCompany: 'tbpackag.expressCompany',
            recipient: 'tbpackag.recipient',
            shipper: 'tbpackag.shipper',
            photo: 'tbpackag.photo',
            createdAt: 'tbpackag.created_at',
            updatedAt: 'tbpackag.updated_at',
            isactived: 'tbpackag.isactived',
            islocked: 'tbpackag.islocked',
            createUid: 'tbpackag.create_uid',
            updatedUid: 'tbpackag.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("tbpackag.isactived='0'");
        qb.orderBy('tbpackag.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.TbpackagRepo = TbpackagRepo;
//# sourceMappingURL=tbpackag_repo.js.map