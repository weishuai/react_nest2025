"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class JobRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Job).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.Job).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Job).update(Ids[0], {
            isactived: '1',
        });
    }
    async getJobsById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Job).createQueryBuilder('job');
        const fields = {
            id: 'job.id',
            title: 'job.title',
            name: 'job.name',
            description: 'job.description',
            wiType: 'job.wi_type',
            clients: 'job.clients',
            enabled: 'job.enabled',
            createdAt: 'job.created_at',
            updatedAt: 'job.updated_at',
            isactived: 'job.isactived',
            islocked: 'job.islocked',
            createUid: 'job.create_uid',
            updatedUid: 'job.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'job', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getJobAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Job).createQueryBuilder('job');
        const fields = {
            id: 'job.id',
            title: 'job.title',
            name: 'job.name',
            description: 'job.description',
            wiType: 'job.wi_type',
            clients: 'job.clients',
            enabled: 'job.enabled',
            createdAt: 'job.created_at',
            updatedAt: 'job.updated_at',
            isactived: 'job.isactived',
            islocked: 'job.islocked',
            createUid: 'job.create_uid',
            updatedUid: 'job.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("job.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['job.title'], search.search);
        qb.orderBy('job.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getJobAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Job).createQueryBuilder('job');
        const fields = {
            id: 'job.id',
            title: 'job.title',
            name: 'job.name',
            description: 'job.description',
            wiType: 'job.wi_type',
            clients: 'job.clients',
            enabled: 'job.enabled',
            createdAt: 'job.created_at',
            updatedAt: 'job.updated_at',
            isactived: 'job.isactived',
            islocked: 'job.islocked',
            createUid: 'job.create_uid',
            updatedUid: 'job.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return { "fhok": res };
    }
    async getJob(userId, search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Job).createQueryBuilder('job');
        const fields = {
            id: 'job.id',
            title: 'job.title',
            name: 'job.name',
            description: 'job.description',
            wiType: 'job.wi_type',
            clients: 'job.clients',
            enabled: 'job.enabled',
            createdAt: 'job.created_at',
            updatedAt: 'job.updated_at',
            isactived: 'job.isactived',
            islocked: 'job.islocked',
            createUid: 'job.create_uid',
            updatedUid: 'job.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        const userIds = userId;
        (0, my_utils_1.andWhereEqual)(qb, 'job', 'satus', search.fundType);
        (0, my_utils_1.multiSearch)(qb, ['job.title'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.JobRepo = JobRepo;
//# sourceMappingURL=JobRepo.js.map