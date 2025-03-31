"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class CurrencyRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Currency).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.Currency).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Currency).update(Ids[0], {
            isactived: '1',
        });
    }
    async getcurrencysById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Currency).createQueryBuilder('currency');
        const fields = {
            id: 'currency.id',
            name: 'currency.name',
            rate: 'currency.rate',
            source: 'currency.source',
            description: 'currency.description',
            createdAt: 'currency.created_at',
            updatedAt: 'currency.updated_at',
            isactived: 'currency.isactived',
            islocked: 'currency.islocked',
            createUid: 'currency.create_uid',
            updatedUid: 'currency.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'currency', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getcurrencyAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Currency).createQueryBuilder('currency');
        const fields = {
            id: 'currency.id',
            name: 'currency.name',
            rate: 'currency.rate',
            source: 'currency.source',
            description: 'currency.description',
            createdAt: 'currency.created_at',
            updatedAt: 'currency.updated_at',
            isactived: 'currency.isactived',
            islocked: 'currency.islocked',
            createUid: 'currency.create_uid',
            updatedUid: 'currency.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("currency.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['currency.name', 'currency.remark'], search.search);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getcurrencyAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Currency).createQueryBuilder('currency');
        const fields = {
            id: 'currency.id',
            name: 'currency.name',
            rate: 'currency.rate',
            source: 'currency.source',
            description: 'currency.description',
            createdAt: 'currency.created_at',
            updatedAt: 'currency.updated_at',
            isactived: 'currency.isactived',
            islocked: 'currency.islocked',
            createUid: 'currency.create_uid',
            updatedUid: 'currency.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return { 'fhok': res };
    }
    async getcurrency(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Currency).createQueryBuilder('currency');
        const fields = {
            id: 'currency.id',
            name: 'currency.name',
            rate: 'currency.rate',
            source: 'currency.source',
            description: 'currency.description',
            createdAt: 'currency.created_at',
            updatedAt: 'currency.updated_at',
            isactived: 'currency.isactived',
            islocked: 'currency.islocked',
            createUid: 'currency.create_uid',
            updatedUid: 'currency.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("currency.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'currency', 'satus', search.fundType);
        (0, my_utils_1.multiSearch)(qb, ['currency.name', 'currency.remark'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.CurrencyRepo = CurrencyRepo;
//# sourceMappingURL=CurrencyRepo.js.map