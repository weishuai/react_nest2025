"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermConditionRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class TermConditionRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.TermCondition).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.TermCondition).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.TermCondition).update(Ids[0], {
            isactived: '1',
        });
    }
    async getTermConditionsById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.TermCondition).createQueryBuilder('term_condition');
        const fields = {
            id: 'term_condition.id',
            name: 'term_condition.name',
            description: 'term_condition.description',
            createdAt: 'term_condition.created_at',
            updatedAt: 'term_condition.updated_at',
            isactived: 'term_condition.isactived',
            islocked: 'term_condition.islocked',
            createUid: 'term_condition.create_uid',
            updatedUid: 'term_condition.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'term_condition', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getTermConditionAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.TermCondition).createQueryBuilder('term_condition');
        const fields = {
            id: 'term_condition.id',
            name: 'term_condition.name',
            description: 'term_condition.description',
            createdAt: 'term_condition.created_at',
            updatedAt: 'term_condition.updated_at',
            isactived: 'term_condition.isactived',
            islocked: 'term_condition.islocked',
            createUid: 'term_condition.create_uid',
            updatedUid: 'term_condition.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("term_condition.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['term_condition.name', 'term_condition.description'], search.search);
        qb.orderBy('term_condition.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getTermConditionAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.TermCondition).createQueryBuilder('term_condition');
        const fields = {
            id: 'term_condition.id',
            name: 'term_condition.name',
            description: 'term_condition.description',
            createdAt: 'term_condition.created_at',
            updatedAt: 'term_condition.updated_at',
            isactived: 'term_condition.isactived',
            islocked: 'term_condition.islocked',
            createUid: 'term_condition.create_uid',
            updatedUid: 'term_condition.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return { 'fhok': res };
    }
    async getTermCondition(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.TermCondition).createQueryBuilder('term_condition');
        const fields = {
            id: 'term_condition.id',
            name: 'term_condition.name',
            description: 'term_condition.description',
            createdAt: 'term_condition.created_at',
            updatedAt: 'term_condition.updated_at',
            isactived: 'term_condition.isactived',
            islocked: 'term_condition.islocked',
            createUid: 'term_condition.create_uid',
            updatedUid: 'term_condition.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("term_condition.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'term_condition', 'name', search.fundType);
        (0, my_utils_1.multiSearch)(qb, ['term_condition.name', 'term_condition.description'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.TermConditionRepo = TermConditionRepo;
//# sourceMappingURL=TermConditionRepo.js.map