"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellingPriceRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const selling_price_1 = require("../myentities/selling_price");
class SellingPriceRepo {
    async create(sellingPriceVo) {
        return await (0, typeorm_1.getRepository)(selling_price_1.SellingPrice).insert(sellingPriceVo);
    }
    async update(Id, user_id, sellingPriceVo) {
        sellingPriceVo.updatedAt = new Date();
        sellingPriceVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(selling_price_1.SellingPrice).update(Id, sellingPriceVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(selling_price_1.SellingPrice).update(Ids[0], {
            isactived: '1',
        });
    }
    async getSellingPricesById(id) {
        const qb = await (0, typeorm_1.getRepository)(selling_price_1.SellingPrice).createQueryBuilder('selling_price');
        const fields = {
            id: 'selling_price.id',
            name: 'selling_price.name',
            fhname: 'selling_price.fhname',
            company: 'selling_price.company',
            mygroup: 'selling_price.mygroup',
            dscountPolicy: 'selling_price.dscountPolicy',
            description: 'selling_price.description',
            createdAt: 'selling_price.created_at',
            updatedAt: 'selling_price.updated_at',
            isactived: 'selling_price.isactived',
            islocked: 'selling_price.islocked',
            createUid: 'selling_price.create_uid',
            updatedUid: 'selling_price.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'selling_price', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getSellingPriceAll() {
        const qb = (0, typeorm_1.getRepository)(selling_price_1.SellingPrice).createQueryBuilder('selling_price');
        const fields = {
            id: 'selling_price.id',
            name: 'selling_price.name',
            description: 'selling_price.description',
            fhname: 'selling_price.fhname',
            company: 'selling_price.company',
            mygroup: 'selling_price.mygroup',
            dscountPolicy: 'selling_price.dscountPolicy',
            createdAt: 'selling_price.created_at',
            updatedAt: 'selling_price.updated_at',
            isactived: 'selling_price.isactived',
            islocked: 'selling_price.islocked',
            createUid: 'selling_price.create_uid',
            updatedUid: 'selling_price.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("selling_price.isactived='0'");
        qb.orderBy('selling_price.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getSellingPriceAllView() {
        const qb = await (0, typeorm_1.getRepository)(selling_price_1.SellingPrice).createQueryBuilder('selling_price');
        const fields = {
            id: 'selling_price.id',
            name: 'selling_price.name',
            description: 'selling_price.description',
            fhname: 'selling_price.fhname',
            company: 'selling_price.company',
            mygroup: 'selling_price.mygroup',
            dscountPolicy: 'selling_price.dscountPolicy',
            createdAt: 'selling_price.created_at',
            updatedAt: 'selling_price.updated_at',
            isactived: 'selling_price.isactived',
            islocked: 'selling_price.islocked',
            createUid: 'selling_price.create_uid',
            updatedUid: 'selling_price.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('selling_price.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getSellingPriceList(search) {
        const qb = await (0, typeorm_1.getRepository)(selling_price_1.SellingPrice).createQueryBuilder('selling_price');
        const fields = {
            id: 'selling_price.id',
            name: 'selling_price.name',
            description: 'selling_price.description',
            fhname: 'selling_price.fhname',
            company: 'selling_price.company',
            mygroup: 'selling_price.mygroup',
            dscountPolicy: 'selling_price.dscountPolicy',
            createdAt: 'selling_price.created_at',
            updatedAt: 'selling_price.updated_at',
            isactived: 'selling_price.isactived',
            islocked: 'selling_price.islocked',
            createUid: 'selling_price.create_uid',
            updatedUid: 'selling_price.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("selling_price.isactived='0'");
        qb.orderBy('selling_price.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.SellingPriceRepo = SellingPriceRepo;
//# sourceMappingURL=selling_price_repo.js.map