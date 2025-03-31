"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadpoolsRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class LeadpoolsRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Leadpools).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.Leadpools).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Leadpools).update(Ids[0], {
            isactived: '1',
        });
    }
    async getLeadpoolsById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Leadpools).createQueryBuilder('leadpools');
        const fields = {
            id: 'leadpools.id',
            name: 'leadpools.name',
            description: 'leadpools.description',
            createdAt: 'leadpools.created_at',
            updatedAt: 'leadpools.updated_at',
            isactived: 'leadpools.isactived',
            islocked: 'leadpools.islocked',
            createUid: 'leadpools.create_uid',
            updatedUid: 'leadpools.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'leadpools', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getLeadpoolsAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Leadpools).createQueryBuilder('leadpools');
        const fields = {
            id: 'leadpools.id',
            name: 'leadpools.name',
            description: 'leadpools.description',
            createdAt: 'leadpools.created_at',
            updatedAt: 'leadpools.updated_at',
            isactived: 'leadpools.isactived',
            islocked: 'leadpools.islocked',
            createUid: 'leadpools.create_uid',
            updatedUid: 'leadpools.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("leadpools.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['leadpools.name', 'leadpools.description'], search.search);
        qb.orderBy('leadpools.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getLeadpoolsAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Leadpools).createQueryBuilder('leadpools');
        const fields = {
            id: 'leadpools.id',
            name: 'leadpools.name',
            description: 'leadpools.description',
            createdAt: 'leadpools.created_at',
            updatedAt: 'leadpools.updated_at',
            isactived: 'leadpools.isactived',
            islocked: 'leadpools.islocked',
            createUid: 'leadpools.create_uid',
            updatedUid: 'leadpools.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return { 'fhok': res };
    }
    async getLeadpools(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Leadpools).createQueryBuilder('leadpools');
        const fields = {
            id: 'leadpools.id',
            name: 'leadpools.name',
            description: 'leadpools.description',
            createdAt: 'leadpools.created_at',
            updatedAt: 'leadpools.updated_at',
            isactived: 'leadpools.isactived',
            islocked: 'leadpools.islocked',
            createUid: 'leadpools.create_uid',
            updatedUid: 'leadpools.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("leadpools.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['leadpools.name', 'leadpools.description'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.LeadpoolsRepo = LeadpoolsRepo;
//# sourceMappingURL=LeadpoolsRepo.js.map