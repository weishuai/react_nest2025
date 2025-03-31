"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryItemRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const lodash_1 = require("lodash");
const myentities_1 = require("../myentities");
class DeliveryItemRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.DeliveryItem).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.DeliveryItem).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.DeliveryItem).update(Ids[0], {
            isactived: '1',
        });
    }
    async updatedeliveryItemVoByMid(mid, id) {
        const listItems = this.getdeliveryItemAllByMid(mid);
        (await listItems).map((Item) => {
            (0, typeorm_1.getRepository)(myentities_1.DeliveryItem).update(Item.id, { mid: id });
        });
        return 'ok';
    }
    async getdeliveryItemAllByMid(mid) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.DeliveryItem).createQueryBuilder('delivery_item');
        const fields = {
            id: 'delivery_item.id',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        (0, my_utils_1.andWhereEqual)(qb, 'delivery_item', 'mid', mid);
        const res = await qb.getRawMany();
        return res;
    }
    async getdeliveryItemsById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.DeliveryItem).createQueryBuilder('delivery_item');
        const fields = {
            id: 'delivery_item.id',
            mid: 'delivery_item.mid',
            detailsId: 'delivery_item.details_id',
            name: 'delivery_item.name',
            description: 'delivery_item.description',
            qty: 'delivery_item.qty',
            balanceQty: 'delivery_item.balance_qty',
            unit: 'delivery_item.unit',
            remarks: 'delivery_item.remarks',
            createdAt: 'delivery_item.created_at',
            updatedAt: 'delivery_item.updated_at',
            isactived: 'delivery_item.isactived',
            islocked: 'delivery_item.islocked',
            createUid: 'delivery_item.create_uid',
            updatedUid: 'delivery_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'delivery_item', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getdeliveryItemAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.DeliveryItem).createQueryBuilder('delivery_item');
        const fields = {
            id: 'delivery_item.id',
            mid: 'delivery_item.mid',
            detailsId: 'delivery_item.details_id',
            name: 'delivery_item.name',
            description: 'delivery_item.description',
            qty: 'delivery_item.qty',
            balanceQty: 'delivery_item.balance_qty',
            unit: 'delivery_item.unit',
            remarks: 'delivery_item.remarks',
            createdAt: 'delivery_item.created_at',
            updatedAt: 'delivery_item.updated_at',
            isactived: 'delivery_item.isactived',
            islocked: 'delivery_item.islocked',
            createUid: 'delivery_item.create_uid',
            updatedUid: 'delivery_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("delivery_item.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['delivery_item.name', 'delivery_item.remarks'], search.search);
        qb.orderBy('delivery_item.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getdeliveryItemAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.DeliveryItem).createQueryBuilder('delivery_item');
        const fields = {
            id: 'delivery_item.id',
            mid: 'delivery_item.mid',
            detailsId: 'delivery_item.details_id',
            name: 'delivery_item.name',
            description: 'delivery_item.description',
            qty: 'delivery_item.qty',
            balanceQty: 'delivery_item.balance_qty',
            unit: 'delivery_item.unit',
            remarks: 'delivery_item.remarks',
            createdAt: 'delivery_item.created_at',
            updatedAt: 'delivery_item.updated_at',
            isactived: 'delivery_item.isactived',
            islocked: 'delivery_item.islocked',
            createUid: 'delivery_item.create_uid',
            updatedUid: 'delivery_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getdeliveryItem(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.DeliveryItem).createQueryBuilder('delivery_item');
        const fields = {
            id: 'delivery_item.id',
            mid: 'delivery_item.mid',
            detailsId: 'delivery_item.details_id',
            name: 'delivery_item.name',
            description: 'delivery_item.description',
            qty: 'delivery_item.qty',
            balanceQty: 'delivery_item.balance_qty',
            unit: 'delivery_item.unit',
            remarks: 'delivery_item.remarks',
            createdAt: 'delivery_item.created_at',
            updatedAt: 'delivery_item.updated_at',
            isactived: 'delivery_item.isactived',
            islocked: 'delivery_item.islocked',
            createUid: 'delivery_item.create_uid',
            updatedUid: 'delivery_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("delivery_item.isactived='0'");
        if (!lodash_1.default.isNil(search.mid)) {
            (0, my_utils_1.andWhereEqual)(qb, 'delivery_item', 'mid', search.mid);
        }
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.DeliveryItemRepo = DeliveryItemRepo;
//# sourceMappingURL=DeliveryItemRepo.js.map