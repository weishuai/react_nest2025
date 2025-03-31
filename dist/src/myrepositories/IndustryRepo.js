"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndustryRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class IndustryRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Industry).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.Industry).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Industry).update(Ids[0], {
            isactived: '1',
        });
    }
    async getIndustryById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Industry).createQueryBuilder('industry');
        const fields = {
            id: 'industry.id',
            name: 'industry.name',
            description: 'industry.description',
            createdAt: 'industry.created_at',
            updatedAt: 'industry.updated_at',
            isactived: 'industry.isactived',
            islocked: 'industry.islocked',
            createUid: 'industry.create_uid',
            updatedUid: 'industry.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'industry', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getIndustryAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Industry).createQueryBuilder('industry');
        const fields = {
            id: 'industry.id',
            name: 'industry.name',
            description: 'industry.description',
            createdAt: 'industry.created_at',
            updatedAt: 'industry.updated_at',
            isactived: 'industry.isactived',
            islocked: 'industry.islocked',
            createUid: 'industry.create_uid',
            updatedUid: 'industry.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("industry.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['industry.name', 'industry.description'], search.search);
        qb.orderBy('industry.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getIndustryAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Industry).createQueryBuilder('industry');
        const fields = {
            id: 'industry.id',
            name: 'industry.name',
            description: 'industry.description',
            createdAt: 'industry.created_at',
            updatedAt: 'industry.updated_at',
            isactived: 'industry.isactived',
            islocked: 'industry.islocked',
            createUid: 'industry.create_uid',
            updatedUid: 'industry.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getIndustry(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Industry).createQueryBuilder('industry');
        const fields = {
            id: 'industry.id',
            name: 'industry.name',
            description: 'industry.description',
            createdAt: 'industry.created_at',
            updatedAt: 'industry.updated_at',
            isactived: 'industry.isactived',
            islocked: 'industry.islocked',
            createUid: 'industry.create_uid',
            updatedUid: 'industry.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("industry.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['industry.name', 'industry.description'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.IndustryRepo = IndustryRepo;
//# sourceMappingURL=IndustryRepo.js.map