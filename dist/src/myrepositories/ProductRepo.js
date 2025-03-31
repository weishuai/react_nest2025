"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class ProductRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Product).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.Product).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Product).update(Ids[0], {
            isactived: '1',
        });
    }
    async getproductsById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Product).createQueryBuilder('product');
        const fields = {
            id: 'product.id',
            photo: 'product.photo',
            productName: 'product.product_name',
            description: 'product.description',
            manufacturer: 'product.manufacturer',
            category: 'product.category',
            unit: 'product.unit',
            currency: 'product.currency',
            listPrice: 'product.list_price',
            cost: 'product.cost',
            createdAt: 'product.created_at',
            updatedAt: 'product.updated_at',
            isactived: 'product.isactived',
            islocked: 'product.islocked',
            createUid: 'product.create_uid',
            updatedUid: 'product.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'product', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getproductAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Product).createQueryBuilder('product');
        const fields = {
            id: 'product.id',
            photo: 'product.photo',
            productName: 'product.product_name',
            description: 'product.description',
            manufacturer: 'product.manufacturer',
            category: 'product.category',
            unit: 'product.unit',
            currency: 'product.currency',
            listPrice: 'product.list_price',
            cost: 'product.cost',
            createdAt: 'product.created_at',
            updatedAt: 'product.updated_at',
            isactived: 'product.isactived',
            islocked: 'product.islocked',
            createUid: 'product.create_uid',
            updatedUid: 'product.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("product.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['product.product_name', 'product.description'], search.search);
        qb.orderBy('product.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getproductAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Product).createQueryBuilder('product');
        const fields = {
            id: 'product.id',
            photo: 'product.photo',
            productName: 'product.product_name',
            description: 'product.description',
            manufacturer: 'product.manufacturer',
            category: 'product.category',
            unit: 'product.unit',
            currency: 'product.currency',
            listPrice: 'product.list_price',
            cost: 'product.cost',
            createdAt: 'product.created_at',
            updatedAt: 'product.updated_at',
            isactived: 'product.isactived',
            islocked: 'product.islocked',
            createUid: 'product.create_uid',
            updatedUid: 'product.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return { 'fhok': res };
    }
    async getproduct(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Product).createQueryBuilder('product');
        const fields = {
            id: 'product.id',
            photo: 'product.photo',
            productName: 'product.product_name',
            description: 'product.description',
            manufacturer: 'product.manufacturer',
            category: 'product.category',
            unit: 'product.unit',
            currency: 'product.currency',
            listPrice: 'product.list_price',
            cost: 'product.cost',
            createdAt: 'product.created_at',
            updatedAt: 'product.updated_at',
            isactived: 'product.isactived',
            islocked: 'product.islocked',
            createUid: 'product.create_uid',
            updatedUid: 'product.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("product.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['product.product_name', 'product.description'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.ProductRepo = ProductRepo;
//# sourceMappingURL=ProductRepo.js.map