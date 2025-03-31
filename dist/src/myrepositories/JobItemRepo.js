"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobItemRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const lodash_1 = require("lodash");
const myentities_1 = require("../myentities");
class JobItemRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.JobItem).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.JobItem).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.JobItem).update(Ids[0], {
            isactived: '1',
        });
    }
    async updateJobItemVoByMid(mid, id) {
        const listItems = this.getJobItemAllByMid(mid);
        (await listItems).map((Item) => {
            (0, typeorm_1.getRepository)(myentities_1.JobItem).update(Item.id, { mid: id });
        });
        return 'ok';
    }
    async getJobItemAllByMid(mid) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.JobItem).createQueryBuilder('job_item');
        const fields = {
            id: 'job_item.id',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        (0, my_utils_1.andWhereEqual)(qb, 'job_item', 'mid', mid);
        const res = await qb.getRawMany();
        return res;
    }
    async getJobItemsById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.JobItem).createQueryBuilder('job_item');
        const fields = {
            id: 'job_item.id',
            photo: 'job_item.photo',
            step: 'job_item.step',
            title: 'job_item.title',
            mid: 'job_item.mid',
            template: 'job_item.template',
            require: 'job_item.require',
            createdAt: 'job_item.created_at',
            updatedAt: 'job_item.updated_at',
            isactived: 'job_item.isactived',
            islocked: 'job_item.islocked',
            createUid: 'job_item.create_uid',
            updatedUid: 'job_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'job_item', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getJobItemAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.JobItem).createQueryBuilder('job_item');
        const fields = {
            id: 'job_item.id',
            mid: 'job_item.mid',
            photo: 'job_item.photo',
            step: 'job_item.step',
            title: 'job_item.title',
            template: 'job_item.template',
            require: 'job_item.require',
            createdAt: 'job_item.created_at',
            updatedAt: 'job_item.updated_at',
            isactived: 'job_item.isactived',
            islocked: 'job_item.islocked',
            createUid: 'job_item.create_uid',
            updatedUid: 'job_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("job_item.isactived='0' and job_item.mid='" + search.mid + "'");
        qb.orderBy('job_item.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getJobItemAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.JobItem).createQueryBuilder('job_item');
        const fields = {
            id: 'job_item.id',
            mid: 'job_item.mid',
            photo: 'job_item.photo',
            step: 'job_item.step',
            title: 'job_item.title',
            template: 'job_item.template',
            require: 'job_item.require',
            createdAt: 'job_item.created_at',
            updatedAt: 'job_item.updated_at',
            isactived: 'job_item.isactived',
            islocked: 'job_item.islocked',
            createUid: 'job_item.create_uid',
            updatedUid: 'job_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getJobItem(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.JobItem).createQueryBuilder('job_item');
        const fields = {
            id: 'job_item.id',
            mid: 'job_item.mid',
            photo: 'job_item.photo',
            step: 'job_item.step',
            title: 'job_item.title',
            template: 'job_item.template',
            require: 'job_item.require',
            createdAt: 'job_item.created_at',
            updatedAt: 'job_item.updated_at',
            isactived: 'job_item.isactived',
            islocked: 'job_item.islocked',
            createUid: 'job_item.create_uid',
            updatedUid: 'job_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("job_item.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'job_item', 'satus', search.fundType);
        if (!lodash_1.default.isNil(search.mid) && !lodash_1.default.isEmpty(search.mid)) {
            (0, my_utils_1.andWhereEqual)(qb, 'job_item', 'mid', search.mid);
        }
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
    async getJobItemAPP(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.JobItem).createQueryBuilder('job_item');
        const fields = {
            id: 'job_item.id',
            mid: 'job_item.mid',
            photo: 'job_item.photo',
            step: 'job_item.step',
            title: 'job_item.title',
            template: 'job_item.template',
            require: 'job_item.require',
            createdAt: 'job_item.created_at',
            updatedAt: 'job_item.updated_at',
            isactived: 'job_item.isactived',
            islocked: 'job_item.islocked',
            createUid: 'job_item.create_uid',
            updatedUid: 'job_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        (0, my_utils_1.multiSearch)(qb, ['job_item.title'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.JobItemRepo = JobItemRepo;
//# sourceMappingURL=JobItemRepo.js.map