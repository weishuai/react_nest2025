"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellingPriceListRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const selling_price_list_1 = require("../myentities/selling_price_list");
class SellingPriceListRepo {
    async create(sellingPriceListVo) {
        return await (0, typeorm_1.getRepository)(selling_price_list_1.SellingPriceList).insert(sellingPriceListVo);
    }
    async update(Id, user_id, sellingPriceListVo) {
        sellingPriceListVo.updatedAt = new Date();
        sellingPriceListVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(selling_price_list_1.SellingPriceList).update(Id, sellingPriceListVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(selling_price_list_1.SellingPriceList).update(Ids[0], {
            isactived: '1',
        });
    }
    async getSellingPriceListsById(id) {
        const qb = await (0, typeorm_1.getRepository)(selling_price_list_1.SellingPriceList).createQueryBuilder('selling_price_list');
        const fields = {
            id: 'selling_price_list.id',
            name: 'selling_price_list.name',
            mid: 'selling_price_list.mid',
            product: 'selling_price_list.product',
            variant: 'selling_price_list.variant',
            miniMumQuantity: 'selling_price_list.miniMumQuantity',
            price: 'selling_price_list.price',
            startDate: 'selling_price_list.startDate',
            endDate: 'selling_price_list.endDate',
            description: 'selling_price_list.description',
            createdAt: 'selling_price_list.created_at',
            updatedAt: 'selling_price_list.updated_at',
            isactived: 'selling_price_list.isactived',
            islocked: 'selling_price_list.islocked',
            createUid: 'selling_price_list.create_uid',
            updatedUid: 'selling_price_list.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'selling_price_list', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getSellingPriceListAll() {
        const qb = (0, typeorm_1.getRepository)(selling_price_list_1.SellingPriceList).createQueryBuilder('selling_price_list');
        const fields = {
            id: 'selling_price_list.id',
            name: 'selling_price_list.name',
            description: 'selling_price_list.description',
            mid: 'selling_price_list.mid',
            product: 'selling_price_list.product',
            variant: 'selling_price_list.variant',
            miniMumQuantity: 'selling_price_list.miniMumQuantity',
            price: 'selling_price_list.price',
            startDate: 'selling_price_list.startDate',
            endDate: 'selling_price_list.endDate',
            createdAt: 'selling_price_list.created_at',
            updatedAt: 'selling_price_list.updated_at',
            isactived: 'selling_price_list.isactived',
            islocked: 'selling_price_list.islocked',
            createUid: 'selling_price_list.create_uid',
            updatedUid: 'selling_price_list.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("selling_price_list.isactived='0'");
        qb.orderBy('selling_price_list.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getSellingPriceListAllView() {
        const qb = await (0, typeorm_1.getRepository)(selling_price_list_1.SellingPriceList).createQueryBuilder('selling_price_list');
        const fields = {
            id: 'selling_price_list.id',
            name: 'selling_price_list.name',
            description: 'selling_price_list.description',
            mid: 'selling_price_list.mid',
            product: 'selling_price_list.product',
            variant: 'selling_price_list.variant',
            miniMumQuantity: 'selling_price_list.miniMumQuantity',
            price: 'selling_price_list.price',
            startDate: 'selling_price_list.startDate',
            endDate: 'selling_price_list.endDate',
            createdAt: 'selling_price_list.created_at',
            updatedAt: 'selling_price_list.updated_at',
            isactived: 'selling_price_list.isactived',
            islocked: 'selling_price_list.islocked',
            createUid: 'selling_price_list.create_uid',
            updatedUid: 'selling_price_list.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('selling_price_list.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getSellingPriceListList(search) {
        const qb = await (0, typeorm_1.getRepository)(selling_price_list_1.SellingPriceList).createQueryBuilder('selling_price_list');
        const fields = {
            id: 'selling_price_list.id',
            name: 'selling_price_list.name',
            description: 'selling_price_list.description',
            mid: 'selling_price_list.mid',
            product: 'selling_price_list.product',
            variant: 'selling_price_list.variant',
            miniMumQuantity: 'selling_price_list.miniMumQuantity',
            price: 'selling_price_list.price',
            startDate: 'selling_price_list.startDate',
            endDate: 'selling_price_list.endDate',
            createdAt: 'selling_price_list.created_at',
            updatedAt: 'selling_price_list.updated_at',
            isactived: 'selling_price_list.isactived',
            islocked: 'selling_price_list.islocked',
            createUid: 'selling_price_list.create_uid',
            updatedUid: 'selling_price_list.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("selling_price_list.isactived='0'");
        qb.orderBy('selling_price_list.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.SellingPriceListRepo = SellingPriceListRepo;
//# sourceMappingURL=selling_price_list_repo.js.map