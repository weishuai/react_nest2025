"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class CountryRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Country).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.Country).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Country).update(Ids[0], {
            isactived: '1',
        });
    }
    async getCountryById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Country).createQueryBuilder('country');
        const fields = {
            id: 'country.id',
            name: 'country.name',
            description: 'country.description',
            createdAt: 'country.created_at',
            updatedAt: 'country.updated_at',
            isactived: 'country.isactived',
            islocked: 'country.islocked',
            createUid: 'country.create_uid',
            updatedUid: 'country.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'country', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getCountryAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Country).createQueryBuilder('country');
        const fields = {
            id: 'country.id',
            name: 'country.name',
            description: 'country.description',
            createdAt: 'country.created_at',
            updatedAt: 'country.updated_at',
            isactived: 'country.isactived',
            islocked: 'country.islocked',
            createUid: 'country.create_uid',
            updatedUid: 'country.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("country.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['country.name', 'country.description'], search.search);
        qb.orderBy('country.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getCountryAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Country).createQueryBuilder('country');
        const fields = {
            id: 'country.id',
            name: 'country.name',
            description: 'country.description',
            createdAt: 'country.created_at',
            updatedAt: 'country.updated_at',
            isactived: 'country.isactived',
            islocked: 'country.islocked',
            createUid: 'country.create_uid',
            updatedUid: 'country.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return { 'fhok': res };
    }
    async getCountry(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Country).createQueryBuilder('country');
        const fields = {
            id: 'country.id',
            name: 'country.name',
            description: 'country.description',
            createdAt: 'country.created_at',
            updatedAt: 'country.updated_at',
            isactived: 'country.isactived',
            islocked: 'country.islocked',
            createUid: 'country.create_uid',
            updatedUid: 'country.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("country.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['country.name', 'country.description'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.CountryRepo = CountryRepo;
//# sourceMappingURL=CountryRepo.js.map