"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTypeRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class ProductTypeRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.ProductType).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.ProductType).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.ProductType).update(Ids[0], {
            isactived: '1',
        });
    }
    async getProductTypesById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.ProductType).createQueryBuilder('productType');
        const fields = {
            id: 'productType.id',
            name: 'productType.name',
            description: 'productType.description',
            createdAt: 'productType.created_at',
            updatedAt: 'productType.updated_at',
            isactived: 'productType.isactived',
            islocked: 'productType.islocked',
            createUid: 'productType.create_uid',
            updatedUid: 'productType.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'productType', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getProductTypeAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.ProductType).createQueryBuilder('productType');
        const fields = {
            id: 'productType.id',
            name: 'productType.name',
            description: 'productType.description',
            createdAt: 'productType.created_at',
            updatedAt: 'productType.updated_at',
            isactived: 'productType.isactived',
            islocked: 'productType.islocked',
            createUid: 'productType.create_uid',
            updatedUid: 'productType.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("productType.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['productType.name', 'productType.description'], search.search);
        qb.orderBy('productType.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getProductTypeAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.ProductType).createQueryBuilder('productType');
        const fields = {
            id: 'productType.id',
            name: 'productType.name',
            description: 'productType.description',
            createdAt: 'productType.created_at',
            updatedAt: 'productType.updated_at',
            isactived: 'productType.isactived',
            islocked: 'productType.islocked',
            createUid: 'productType.create_uid',
            updatedUid: 'productType.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getProductType(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.ProductType).createQueryBuilder('productType');
        const fields = {
            id: 'productType.id',
            name: 'productType.name',
            description: 'productType.description',
            createdAt: 'productType.created_at',
            updatedAt: 'productType.updated_at',
            isactived: 'productType.isactived',
            islocked: 'productType.islocked',
            createUid: 'productType.create_uid',
            updatedUid: 'productType.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("productType.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['productType.name', 'productType.description'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.ProductTypeRepo = ProductTypeRepo;
//# sourceMappingURL=ProductTypeRepo.js.map