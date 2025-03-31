"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotationItemRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const lodash_1 = require("lodash");
const myentities_1 = require("../myentities");
class QuotationItemRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.QuotationItem).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.QuotationItem).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.QuotationItem).update(Ids[0], {
            isactived: '1',
        });
    }
    async updateQuotationItemsVoByMid(mid, id) {
        const listItems = this.getQuotationItemsAllByMid(mid);
        (await listItems).map((Item) => {
            (0, typeorm_1.getRepository)(myentities_1.QuotationItem).update(Item.id, { mid: id });
        });
        return 'ok';
    }
    async getQuotationItemsAllByMid(mid) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.QuotationItem).createQueryBuilder('quotation_item');
        const fields = {
            id: 'quotation_item.id',
            mid: 'quotation_item.mid',
            discountType: 'quotation_item.discount_type',
            productname: 'quotation_item.productname',
            discount: 'quotation_item.discount',
            name: 'quotation_item.name',
            photo: 'quotation_item.photo',
            percentage: 'quotation_item.percentage',
            directPrice: 'quotation_item.direct_price',
            reduction: 'quotation_item.reduction',
            description: 'quotation_item.description',
            qty: 'quotation_item.qty',
            unit: 'quotation_item.unit',
            unitPrice: 'quotation_item.unit_price',
            unitCost: 'quotation_item.unit_cost',
            remark: 'quotation_item.remark',
            createdAt: 'quotation_item.created_at',
            updatedAt: 'quotation_item.updated_at',
            isactived: 'quotation_item.isactived',
            islocked: 'quotation_item.islocked',
            createUid: 'quotation_item.create_uid',
            updatedUid: 'quotation_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        (0, my_utils_1.andWhereEqual)(qb, 'quotation_item', 'mid', mid);
        const res = await qb.getRawMany();
        return res;
    }
    async getQuotationItemsById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.QuotationItem).createQueryBuilder('quotation_item');
        const fields = {
            id: 'quotation_item.id',
            mid: 'quotation_item.mid',
            discountType: 'quotation_item.discount_type',
            productname: 'quotation_item.productname',
            discount: 'quotation_item.discount',
            name: 'quotation_item.name',
            photo: 'quotation_item.photo',
            percentage: 'quotation_item.percentage',
            directPrice: 'quotation_item.direct_price',
            reduction: 'quotation_item.reduction',
            description: 'quotation_item.description',
            qty: 'quotation_item.qty',
            unit: 'quotation_item.unit',
            unitPrice: 'quotation_item.unit_price',
            unitCost: 'quotation_item.unit_cost',
            remark: 'quotation_item.remark',
            createdAt: 'quotation_item.created_at',
            updatedAt: 'quotation_item.updated_at',
            isactived: 'quotation_item.isactived',
            islocked: 'quotation_item.islocked',
            createUid: 'quotation_item.create_uid',
            updatedUid: 'quotation_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'quotation_item', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getQuotationItemAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.QuotationItem).createQueryBuilder('quotation_item');
        const fields = {
            id: 'quotation_item.id',
            mid: 'quotation_item.mid',
            discountType: 'quotation_item.discount_type',
            productname: 'quotation_item.productname',
            discount: 'quotation_item.discount',
            name: 'quotation_item.name',
            photo: 'quotation_item.photo',
            percentage: 'quotation_item.percentage',
            directPrice: 'quotation_item.direct_price',
            reduction: 'quotation_item.reduction',
            description: 'quotation_item.description',
            qty: 'quotation_item.qty',
            unit: 'quotation_item.unit',
            unitPrice: 'quotation_item.unit_price',
            unitCost: 'quotation_item.unit_cost',
            remark: 'quotation_item.remark',
            createdAt: 'quotation_item.created_at',
            updatedAt: 'quotation_item.updated_at',
            isactived: 'quotation_item.isactived',
            islocked: 'quotation_item.islocked',
            createUid: 'quotation_item.create_uid',
            updatedUid: 'quotation_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("quotation_item.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['quotation_item.name', 'quotation_item.description'], search.search);
        qb.orderBy('quotation_item.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getQuotationItemAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.QuotationItem).createQueryBuilder('quotation_item');
        const fields = {
            id: 'quotation_item.id',
            mid: 'quotation_item.mid',
            discountType: 'quotation_item.discount_type',
            productname: 'quotation_item.productname',
            discount: 'quotation_item.discount',
            name: 'quotation_item.name',
            photo: 'quotation_item.photo',
            percentage: 'quotation_item.percentage',
            directPrice: 'quotation_item.direct_price',
            reduction: 'quotation_item.reduction',
            description: 'quotation_item.description',
            qty: 'quotation_item.qty',
            unit: 'quotation_item.unit',
            unitPrice: 'quotation_item.unit_price',
            unitCost: 'quotation_item.unit_cost',
            remark: 'quotation_item.remark',
            createdAt: 'quotation_item.created_at',
            updatedAt: 'quotation_item.updated_at',
            isactived: 'quotation_item.isactived',
            islocked: 'quotation_item.islocked',
            createUid: 'quotation_item.create_uid',
            updatedUid: 'quotation_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getQuotationItem(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.QuotationItem).createQueryBuilder('quotation_item');
        const fields = {
            id: 'quotation_item.id',
            mid: 'quotation_item.mid',
            discountType: 'quotation_item.discount_type',
            productname: 'quotation_item.productname',
            discount: 'quotation_item.discount',
            name: 'quotation_item.name',
            photo: 'quotation_item.photo',
            percentage: 'quotation_item.percentage',
            directPrice: 'quotation_item.direct_price',
            reduction: 'quotation_item.reduction',
            description: 'quotation_item.description',
            qty: 'quotation_item.qty',
            unit: 'quotation_item.unit',
            unitPrice: 'quotation_item.unit_price',
            unitCost: 'quotation_item.unit_cost',
            remark: 'quotation_item.remark',
            createdAt: 'quotation_item.created_at',
            updatedAt: 'quotation_item.updated_at',
            isactived: 'quotation_item.isactived',
            islocked: 'quotation_item.islocked',
            createUid: 'quotation_item.create_uid',
            updatedUid: 'quotation_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("quotation_item.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'quotation_item', 'name', search.fundType);
        if (!lodash_1.default.isNil(search.mid)) {
            (0, my_utils_1.andWhereEqual)(qb, 'quotation_item', 'mid', search.mid);
        }
        (0, my_utils_1.multiSearch)(qb, ['quotation_item.name', 'quotation_item.description'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
    async getQuotationItemByid(name) {
        return (0, typeorm_1.getRepository)(myentities_1.QuotationItem).findOneBy({
            name,
        });
    }
}
exports.QuotationItemRepo = QuotationItemRepo;
//# sourceMappingURL=QuotationItemRepo.js.map