"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myBomProductRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const mybom_product_1 = require("../myentities/mybom_product");
class myBomProductRepo {
    async create(mybomProductVo) {
        return await (0, typeorm_1.getRepository)(mybom_product_1.myBomProduct).insert(mybomProductVo);
    }
    async update(Id, user_id, mybomProductVo) {
        mybomProductVo.updatedAt = new Date();
        mybomProductVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(mybom_product_1.myBomProduct).update(Id, mybomProductVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(mybom_product_1.myBomProduct).update(Ids[0], {
            isactived: '1',
        });
    }
    async getmyBomProductsById(id) {
        const qb = await (0, typeorm_1.getRepository)(mybom_product_1.myBomProduct).createQueryBuilder('mybom_product');
        const fields = {
            id: 'mybom_product.id',
            name: 'mybom_product.name',
            mid: 'mybom_product.mid',
            product: 'mybom_product.product',
            number: 'mybom_product.number',
            unit: 'mybom_product.unit',
            description: 'mybom_product.description',
            createdAt: 'mybom_product.created_at',
            updatedAt: 'mybom_product.updated_at',
            isactived: 'mybom_product.isactived',
            islocked: 'mybom_product.islocked',
            createUid: 'mybom_product.create_uid',
            updatedUid: 'mybom_product.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'mybom_product', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getmyBomProductAll() {
        const qb = (0, typeorm_1.getRepository)(mybom_product_1.myBomProduct).createQueryBuilder('mybom_product');
        const fields = {
            id: 'mybom_product.id',
            name: 'mybom_product.name',
            description: 'mybom_product.description',
            mid: 'mybom_product.mid',
            product: 'mybom_product.product',
            number: 'mybom_product.number',
            unit: 'mybom_product.unit',
            createdAt: 'mybom_product.created_at',
            updatedAt: 'mybom_product.updated_at',
            isactived: 'mybom_product.isactived',
            islocked: 'mybom_product.islocked',
            createUid: 'mybom_product.create_uid',
            updatedUid: 'mybom_product.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("mybom_product.isactived='0'");
        qb.orderBy('mybom_product.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getmyBomProductAllView() {
        const qb = await (0, typeorm_1.getRepository)(mybom_product_1.myBomProduct).createQueryBuilder('mybom_product');
        const fields = {
            id: 'mybom_product.id',
            name: 'mybom_product.name',
            description: 'mybom_product.description',
            mid: 'mybom_product.mid',
            product: 'mybom_product.product',
            number: 'mybom_product.number',
            unit: 'mybom_product.unit',
            createdAt: 'mybom_product.created_at',
            updatedAt: 'mybom_product.updated_at',
            isactived: 'mybom_product.isactived',
            islocked: 'mybom_product.islocked',
            createUid: 'mybom_product.create_uid',
            updatedUid: 'mybom_product.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('mybom_product.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getmyBomProductList(search) {
        const qb = await (0, typeorm_1.getRepository)(mybom_product_1.myBomProduct).createQueryBuilder('mybom_product');
        const fields = {
            id: 'mybom_product.id',
            name: 'mybom_product.name',
            description: 'mybom_product.description',
            mid: 'mybom_product.mid',
            product: 'mybom_product.product',
            number: 'mybom_product.number',
            unit: 'mybom_product.unit',
            createdAt: 'mybom_product.created_at',
            updatedAt: 'mybom_product.updated_at',
            isactived: 'mybom_product.isactived',
            islocked: 'mybom_product.islocked',
            createUid: 'mybom_product.create_uid',
            updatedUid: 'mybom_product.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("mybom_product.isactived='0'");
        qb.orderBy('mybom_product.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.myBomProductRepo = myBomProductRepo;
//# sourceMappingURL=mybom_product_repo.js.map