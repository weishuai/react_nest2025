"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxesRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class TaxesRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Taxes).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.Taxes).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Taxes).update(Ids[0], {
            isactived: '1',
        });
    }
    async getTaxessById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Taxes).createQueryBuilder('taxes');
        const fields = {
            id: 'taxes.id',
            name: 'taxes.name',
            rate: 'taxes.rate',
            source: 'taxes.source',
            description: 'taxes.description',
            createdAt: 'taxes.created_at',
            updatedAt: 'taxes.updated_at',
            isactived: 'taxes.isactived',
            islocked: 'taxes.islocked',
            createUid: 'taxes.create_uid',
            updatedUid: 'taxes.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'taxes', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getTaxesAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Taxes).createQueryBuilder('taxes');
        const fields = {
            id: 'taxes.id',
            name: 'taxes.name',
            rate: 'taxes.rate',
            source: 'taxes.source',
            description: 'taxes.description',
            createdAt: 'taxes.created_at',
            updatedAt: 'taxes.updated_at',
            isactived: 'taxes.isactived',
            islocked: 'taxes.islocked',
            createUid: 'taxes.create_uid',
            updatedUid: 'taxes.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("taxes.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['taxes.name', 'taxes.description'], search.search);
        qb.orderBy('taxes.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getTaxesAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Taxes).createQueryBuilder('taxes');
        const fields = {
            id: 'taxes.id',
            name: 'taxes.name',
            rate: 'taxes.rate',
            source: 'taxes.source',
            description: 'taxes.description',
            createdAt: 'taxes.created_at',
            updatedAt: 'taxes.updated_at',
            isactived: 'taxes.isactived',
            islocked: 'taxes.islocked',
            createUid: 'taxes.create_uid',
            updatedUid: 'taxes.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return { 'fhok': res };
    }
    async getTaxes(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Taxes).createQueryBuilder('taxes');
        const fields = {
            id: 'taxes.id',
            name: 'taxes.name',
            rate: 'taxes.rate',
            source: 'taxes.source',
            description: 'taxes.description',
            createdAt: 'taxes.created_at',
            updatedAt: 'taxes.updated_at',
            isactived: 'taxes.isactived',
            islocked: 'taxes.islocked',
            createUid: 'taxes.create_uid',
            updatedUid: 'taxes.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("taxes.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'taxes', 'name', search.fundType);
        (0, my_utils_1.multiSearch)(qb, ['taxes.name', 'taxes.description'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.TaxesRepo = TaxesRepo;
//# sourceMappingURL=TaxesRepo.js.map