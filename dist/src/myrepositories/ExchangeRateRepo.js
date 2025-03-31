"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRateRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class ExchangeRateRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.ExchangeRate).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.ExchangeRate).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.ExchangeRate).update(Ids[0], {
            isactived: '1',
        });
    }
    async getExchangeRatesById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.ExchangeRate).createQueryBuilder('exchangeRate');
        const fields = {
            id: 'exchangeRate.id',
            name: 'exchangeRate.name',
            description: 'exchangeRate.description',
            createdAt: 'exchangeRate.created_at',
            updatedAt: 'exchangeRate.updated_at',
            isactived: 'exchangeRate.isactived',
            islocked: 'exchangeRate.islocked',
            createUid: 'exchangeRate.create_uid',
            updatedUid: 'exchangeRate.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'exchangeRate', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getExchangeRateAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.ExchangeRate).createQueryBuilder('exchangeRate');
        const fields = {
            id: 'exchangeRate.id',
            name: 'exchangeRate.name',
            description: 'exchangeRate.description',
            createdAt: 'exchangeRate.created_at',
            updatedAt: 'exchangeRate.updated_at',
            isactived: 'exchangeRate.isactived',
            islocked: 'exchangeRate.islocked',
            createUid: 'exchangeRate.create_uid',
            updatedUid: 'exchangeRate.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("exchangeRate.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['exchangeRate.name', 'exchangeRate.description'], search.search);
        qb.orderBy('exchangeRate.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getExchangeRateAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.ExchangeRate).createQueryBuilder('exchangeRate');
        const fields = {
            id: 'exchangeRate.id',
            name: 'exchangeRate.name',
            description: 'exchangeRate.description',
            createdAt: 'exchangeRate.created_at',
            updatedAt: 'exchangeRate.updated_at',
            isactived: 'exchangeRate.isactived',
            islocked: 'exchangeRate.islocked',
            createUid: 'exchangeRate.create_uid',
            updatedUid: 'exchangeRate.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return { 'fhok': res };
    }
    async getExchangeRate(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.ExchangeRate).createQueryBuilder('exchangeRate');
        const fields = {
            id: 'exchangeRate.id',
            name: 'exchangeRate.name',
            description: 'exchangeRate.description',
            createdAt: 'exchangeRate.created_at',
            updatedAt: 'exchangeRate.updated_at',
            isactived: 'exchangeRate.isactived',
            islocked: 'exchangeRate.islocked',
            createUid: 'exchangeRate.create_uid',
            updatedUid: 'exchangeRate.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("exchangeRate.isactived='0'");
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.ExchangeRateRepo = ExchangeRateRepo;
//# sourceMappingURL=ExchangeRateRepo.js.map