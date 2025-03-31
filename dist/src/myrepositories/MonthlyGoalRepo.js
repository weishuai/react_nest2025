"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyGoalRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class MonthlyGoalRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.MonthlyGoal).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.MonthlyGoal).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.MonthlyGoal).update(Ids[0], {
            isactived: '1',
        });
    }
    async getMonthlyGoalsById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.MonthlyGoal).createQueryBuilder('monthly_goal');
        const fields = {
            id: 'monthly_goal.id',
            targetNumber: 'monthly_goal.target_number',
            type: 'monthly_goal.type',
            teamId: 'monthly_goal.team_id',
            personalId: 'monthly_goal.personal_id',
            byType: 'monthly_goal.by_type',
            createdAt: 'monthly_goal.created_at',
            updatedAt: 'monthly_goal.updated_at',
            isactived: 'monthly_goal.isactived',
            islocked: 'monthly_goal.islocked',
            createUid: 'monthly_goal.create_uid',
            updatedUid: 'monthly_goal.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'monthly_goal', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getMonthlyGoalAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.MonthlyGoal).createQueryBuilder('monthly_goal');
        const fields = {
            id: 'monthly_goal.id',
            targetNumber: 'monthly_goal.target_number',
            type: 'monthly_goal.type',
            teamId: 'monthly_goal.team_id',
            personalId: 'monthly_goal.personal_id',
            byType: 'monthly_goal.by_type',
            createdAt: 'monthly_goal.created_at',
            updatedAt: 'monthly_goal.updated_at',
            isactived: 'monthly_goal.isactived',
            islocked: 'monthly_goal.islocked',
            createUid: 'monthly_goal.create_uid',
            updatedUid: 'monthly_goal.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.multiSearch)(qb, ['monthly_goal.type', 'monthly_goal.targetNumber'], search.search);
        qb.orderBy('monthly_goal.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getMonthlyGoal(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.MonthlyGoal).createQueryBuilder('monthly_goal');
        const fields = {
            id: 'monthly_goal.id',
            targetNumber: 'monthly_goal.target_number',
            type: 'monthly_goal.type',
            teamId: 'monthly_goal.team_id',
            personalId: 'monthly_goal.personal_id',
            byType: 'monthly_goal.by_type',
            createdAt: 'monthly_goal.created_at',
            updatedAt: 'monthly_goal.updated_at',
            isactived: 'monthly_goal.isactived',
            islocked: 'monthly_goal.islocked',
            createUid: 'monthly_goal.create_uid',
            updatedUid: 'monthly_goal.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("monthly_goal.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['monthly_goal.type', 'monthly_goal.targetNumber'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.MonthlyGoalRepo = MonthlyGoalRepo;
//# sourceMappingURL=MonthlyGoalRepo.js.map