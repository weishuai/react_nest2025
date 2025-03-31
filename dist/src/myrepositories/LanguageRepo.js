"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class LanguageRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Language).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.Language).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Language).update(Ids[0], {
            isactived: '1',
        });
    }
    async getLanguagesById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Language).createQueryBuilder('language');
        const fields = {
            id: 'language.id',
            name: 'language.name',
            description: 'language.description',
            createdAt: 'language.created_at',
            updatedAt: 'language.updated_at',
            isactived: 'language.isactived',
            islocked: 'language.islocked',
            createUid: 'language.create_uid',
            updatedUid: 'language.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'language', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getLanguageAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Language).createQueryBuilder('language');
        const fields = {
            id: 'language.id',
            name: 'language.name',
            description: 'language.description',
            createdAt: 'language.created_at',
            updatedAt: 'language.updated_at',
            isactived: 'language.isactived',
            islocked: 'language.islocked',
            createUid: 'language.create_uid',
            updatedUid: 'language.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("language.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['language.name', 'language.description'], search.search);
        qb.orderBy('language.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getLanguageAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Language).createQueryBuilder('language');
        const fields = {
            id: 'language.id',
            name: 'language.name',
            description: 'language.description',
            createdAt: 'language.created_at',
            updatedAt: 'language.updated_at',
            isactived: 'language.isactived',
            islocked: 'language.islocked',
            createUid: 'language.create_uid',
            updatedUid: 'language.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return { 'fhok': res };
    }
    async getLanguage(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Language).createQueryBuilder('language');
        const fields = {
            id: 'language.id',
            name: 'language.name',
            description: 'language.description',
            createdAt: 'language.created_at',
            updatedAt: 'language.updated_at',
            isactived: 'language.isactived',
            islocked: 'language.islocked',
            createUid: 'language.create_uid',
            updatedUid: 'language.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("language.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'language', 'satus', search.fundType);
        (0, my_utils_1.multiSearch)(qb, ['language.name', 'language.description'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.LanguageRepo = LanguageRepo;
//# sourceMappingURL=LanguageRepo.js.map