"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductItemRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class ProductItemRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.ProductItem).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.ProductItem).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.ProductItem).update(Ids[0], {
            isactived: '1',
        });
    }
    async getproductItemsById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.ProductItem).createQueryBuilder('product_item');
        const fields = {
            id: 'product_item.id',
            name: 'product_item.name',
            description: 'product_item.idescription',
            qty: 'product_item.qty',
            unit: 'product_item.unit',
            unitPrice: 'product_item.unit_price',
            remark: 'product_item.remark',
            createdAt: 'product_item.created_at',
            updatedAt: 'product_item.updated_at',
            isactived: 'product_item.isactived',
            islocked: 'product_item.islocked',
            createUid: 'product_item.create_uid',
            updatedUid: 'product_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'product_item', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getproductItemAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.ProductItem).createQueryBuilder('product_item');
        const fields = {
            id: 'product_item.id',
            name: 'product_item.name',
            description: 'product_item.idescription',
            qty: 'product_item.qty',
            unit: 'product_item.unit',
            unitPrice: 'product_item.unit_price',
            remark: 'product_item.remark',
            createdAt: 'product_item.created_at',
            updatedAt: 'product_item.updated_at',
            isactived: 'product_item.isactived',
            islocked: 'product_item.islocked',
            createUid: 'product_item.create_uid',
            updatedUid: 'product_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("product_item.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['product_item.name', 'product_item.remark'], search.search);
        qb.orderBy('product_item.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getproductItemAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.ProductItem).createQueryBuilder('product_item');
        const fields = {
            id: 'product_item.id',
            name: 'product_item.name',
            description: 'product_item.idescription',
            qty: 'product_item.qty',
            unit: 'product_item.unit',
            unitPrice: 'product_item.unit_price',
            remark: 'product_item.remark',
            createdAt: 'product_item.created_at',
            updatedAt: 'product_item.updated_at',
            isactived: 'product_item.isactived',
            islocked: 'product_item.islocked',
            createUid: 'product_item.create_uid',
            updatedUid: 'product_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getproductItem(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.ProductItem).createQueryBuilder('product_item');
        const fields = {
            id: 'product_item.id',
            name: 'product_item.name',
            description: 'product_item.idescription',
            qty: 'product_item.qty',
            unit: 'product_item.unit',
            unitPrice: 'product_item.unit_price',
            remark: 'product_item.remark',
            createdAt: 'product_item.created_at',
            updatedAt: 'product_item.updated_at',
            isactived: 'product_item.isactived',
            islocked: 'product_item.islocked',
            createUid: 'product_item.create_uid',
            updatedUid: 'product_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("product_item.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'product_item', 'satus', search.fundType);
        (0, my_utils_1.multiSearch)(qb, ['product_item.name', 'product_item.remark'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.ProductItemRepo = ProductItemRepo;
//# sourceMappingURL=ProductItemRepo.js.map