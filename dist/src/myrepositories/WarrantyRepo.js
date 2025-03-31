"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarrantyRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
const Product_1 = require("../myentities/Product");
class WarrantyRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Warranty).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.Warranty).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Warranty).update(Ids[0], {
            isactived: '1',
        });
    }
    async getWarrantysById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Warranty).createQueryBuilder('warranty');
        const fields = {
            id: 'warranty.id',
            name: 'warranty.name',
            product: 'warranty.product',
            startDate: 'warranty.start_date',
            endDate: 'warranty.end_date',
            isRemind: 'warranty.is_remind',
            description: 'warranty.description',
            createdAt: 'warranty.created_at',
            updatedAt: 'warranty.updated_at',
            isactived: 'warranty.isactived',
            islocked: 'warranty.islocked',
            createUid: 'warranty.create_uid',
            updatedUid: 'warranty.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'warranty', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getWarrantyAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Warranty).createQueryBuilder('warranty');
        qb.leftJoin(Product_1.Product, 'product', 'warranty.product=product.id');
        const fields = {
            id: 'warranty.id',
            name: 'warranty.name',
            product: 'product.product_name',
            startDate: 'warranty.start_date',
            endDate: 'warranty.end_date',
            isRemind: 'warranty.is_remind',
            description: 'warranty.description',
            createdAt: 'warranty.created_at',
            updatedAt: 'warranty.updated_at',
            isactived: 'warranty.isactived',
            islocked: 'warranty.islocked',
            createUid: 'warranty.create_uid',
            updatedUid: 'warranty.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("warranty.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['warranty.name', 'warranty.description'], search.search);
        qb.orderBy('warranty.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getWarrantyAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Warranty).createQueryBuilder('warranty');
        const fields = {
            id: 'warranty.id',
            name: 'warranty.name',
            product: 'warranty.product',
            startDate: 'warranty.start_date',
            endDate: 'warranty.end_date',
            isRemind: 'warranty.is_remind',
            description: 'warranty.description',
            createdAt: 'warranty.created_at',
            updatedAt: 'warranty.updated_at',
            isactived: 'warranty.isactived',
            islocked: 'warranty.islocked',
            createUid: 'warranty.create_uid',
            updatedUid: 'warranty.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getWarranty(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Warranty).createQueryBuilder('warranty');
        const fields = {
            id: 'warranty.id',
            name: 'warranty.name',
            product: 'warranty.product',
            startDate: 'warranty.start_date',
            endDate: 'warranty.end_date',
            isRemind: 'warranty.is_remind',
            description: 'warranty.description',
            createdAt: 'warranty.created_at',
            updatedAt: 'warranty.updated_at',
            isactived: 'warranty.isactived',
            islocked: 'warranty.islocked',
            createUid: 'warranty.create_uid',
            updatedUid: 'warranty.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("warranty.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'warranty', 'name', search.fundType);
        (0, my_utils_1.multiSearch)(qb, ['warranty.name', 'warranty.description'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.WarrantyRepo = WarrantyRepo;
//# sourceMappingURL=WarrantyRepo.js.map