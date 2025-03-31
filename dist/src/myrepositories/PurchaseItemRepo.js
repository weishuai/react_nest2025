"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseItemRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const lodash_1 = require("lodash");
const myentities_1 = require("../myentities");
class PurchaseItemRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.PurchaseItem).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.PurchaseItem).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.PurchaseItem).update(Ids[0], {
            isactived: '1',
        });
    }
    async updatepurchaseItemVoByMid(mid, id) {
        const listItems = this.getpurchaseItemAllByMid(mid);
        (await listItems).map((Item) => {
            (0, typeorm_1.getRepository)(myentities_1.PurchaseItem).update(Item.id, { mid: id });
        });
        return 'ok';
    }
    async getpurchaseItemAllByMid(mid) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.PurchaseItem).createQueryBuilder('purchase_item');
        const fields = {
            id: 'purchase_item.id',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        (0, my_utils_1.andWhereEqual)(qb, 'purchase_item', 'mid', mid);
        const res = await qb.getRawMany();
        return res;
    }
    async getpurchaseItemsById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.PurchaseItem).createQueryBuilder('purchase_item');
        const fields = {
            id: 'purchase_item.id',
            mid: 'purchase_item.mid',
            detailsId: 'purchase_item.details_id',
            name: 'purchase_item.name',
            description: 'purchase_item.description',
            qty: 'purchase_item.qty',
            balanceQty: 'purchase_item.balance_qty',
            unit: 'purchase_item.unit',
            remarks: 'purchase_item.remarks',
            createdAt: 'purchase_item.created_at',
            updatedAt: 'purchase_item.updated_at',
            isactived: 'purchase_item.isactived',
            islocked: 'purchase_item.islocked',
            createUid: 'purchase_item.create_uid',
            updatedUid: 'purchase_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'purchase_item', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getpurchaseItemAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.PurchaseItem).createQueryBuilder('purchase_item');
        const fields = {
            id: 'purchase_item.id',
            mid: 'purchase_item.mid',
            detailsId: 'purchase_item.details_id',
            name: 'purchase_item.name',
            description: 'purchase_item.description',
            qty: 'purchase_item.qty',
            balanceQty: 'purchase_item.balance_qty',
            unit: 'purchase_item.unit',
            remarks: 'purchase_item.remarks',
            createdAt: 'purchase_item.created_at',
            updatedAt: 'purchase_item.updated_at',
            isactived: 'purchase_item.isactived',
            islocked: 'purchase_item.islocked',
            createUid: 'purchase_item.create_uid',
            updatedUid: 'purchase_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("purchase_item.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['purchase_item.name', 'purchase_item.remarks'], search.search);
        qb.orderBy('purchase_item.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getpurchaseItemAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.PurchaseItem).createQueryBuilder('purchase_item');
        const fields = {
            id: 'purchase_item.id',
            mid: 'purchase_item.mid',
            detailsId: 'purchase_item.details_id',
            name: 'purchase_item.name',
            description: 'purchase_item.description',
            qty: 'purchase_item.qty',
            balanceQty: 'purchase_item.balance_qty',
            unit: 'purchase_item.unit',
            remarks: 'purchase_item.remarks',
            createdAt: 'purchase_item.created_at',
            updatedAt: 'purchase_item.updated_at',
            isactived: 'purchase_item.isactived',
            islocked: 'purchase_item.islocked',
            createUid: 'purchase_item.create_uid',
            updatedUid: 'purchase_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getpurchaseItem(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.PurchaseItem).createQueryBuilder('purchase_item');
        const fields = {
            id: 'purchase_item.id',
            mid: 'purchase_item.mid',
            detailsId: 'purchase_item.details_id',
            name: 'purchase_item.name',
            description: 'purchase_item.description',
            qty: 'purchase_item.qty',
            balanceQty: 'purchase_item.balance_qty',
            unit: 'purchase_item.unit',
            remarks: 'purchase_item.remarks',
            createdAt: 'purchase_item.created_at',
            updatedAt: 'purchase_item.updated_at',
            isactived: 'purchase_item.isactived',
            islocked: 'purchase_item.islocked',
            createUid: 'purchase_item.create_uid',
            updatedUid: 'purchase_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("purchase_item.isactived='0'");
        if (!lodash_1.default.isNil(search.mid)) {
            (0, my_utils_1.andWhereEqual)(qb, 'purchase_item', 'mid', search.mid);
        }
        (0, my_utils_1.multiSearch)(qb, ['purchase_item.name', 'purchase_item.remarks'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.PurchaseItemRepo = PurchaseItemRepo;
//# sourceMappingURL=PurchaseItemRepo.js.map