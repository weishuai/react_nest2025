"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class FeedbackRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Feedback).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.Feedback).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Feedback).update(Ids[0], {
            isactived: '1',
        });
    }
    async getFeedbacksById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Feedback).createQueryBuilder('feedback');
        const fields = {
            id: 'feedback.id',
            name: 'feedback.name',
            description: 'feedback.description',
            createdAt: 'feedback.created_at',
            updatedAt: 'feedback.updated_at',
            isactived: 'feedback.isactived',
            islocked: 'feedback.islocked',
            createUid: 'feedback.create_uid',
            updatedUid: 'feedback.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'feedback', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getFeedbackAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Feedback).createQueryBuilder('feedback');
        const fields = {
            id: 'feedback.id',
            name: 'feedback.name',
            description: 'feedback.description',
            createdAt: 'feedback.created_at',
            updatedAt: 'feedback.updated_at',
            isactived: 'feedback.isactived',
            islocked: 'feedback.islocked',
            createUid: 'feedback.create_uid',
            updatedUid: 'feedback.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("feedback.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['feedback.name', 'feedback.description'], search.search);
        qb.orderBy('feedback.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getFeedbackAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Feedback).createQueryBuilder('feedback');
        const fields = {
            id: 'feedback.id',
            name: 'feedback.name',
            description: 'feedback.description',
            createdAt: 'feedback.created_at',
            updatedAt: 'feedback.updated_at',
            isactived: 'feedback.isactived',
            islocked: 'feedback.islocked',
            createUid: 'feedback.create_uid',
            updatedUid: 'feedback.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getFeedback(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Feedback).createQueryBuilder('feedback');
        const fields = {
            id: 'feedback.id',
            name: 'feedback.name',
            description: 'feedback.description',
            createdAt: 'feedback.created_at',
            updatedAt: 'feedback.updated_at',
            isactived: 'feedback.isactived',
            islocked: 'feedback.islocked',
            createUid: 'feedback.create_uid',
            updatedUid: 'feedback.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("feedback.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'feedback', 'name', search.fundType);
        (0, my_utils_1.multiSearch)(qb, ['feedback.name', 'feedback.description'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.FeedbackRepo = FeedbackRepo;
//# sourceMappingURL=FeedbackRepo.js.map