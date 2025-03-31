"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyGoalService = void 0;
const myrepositories_1 = require("../myrepositories");
class MonthlyGoalService {
    constructor() {
        this.monthlyGoalRepo = new myrepositories_1.MonthlyGoalRepo();
    }
    async findOneMonthlyGoal(Id) {
        return this.monthlyGoalRepo.getMonthlyGoalsById(Id);
    }
    async createMonthlyGoal(monthlyGoalVo) {
        return this.monthlyGoalRepo.create(monthlyGoalVo);
    }
    async updateaMonthlyGoal(Id, user_id, monthlyGoalVo) {
        monthlyGoalVo.updatedAt = new Date();
        monthlyGoalVo.updatedUid = user_id;
        return this.monthlyGoalRepo.update(Id, user_id, monthlyGoalVo);
    }
    async removeMonthlyGoal(Ids) {
        return this.monthlyGoalRepo.remove(Ids);
    }
    async getMonthlyGoalById(id) {
        return this.monthlyGoalRepo.getMonthlyGoalsById(id);
    }
    async getMonthlyGoal(search) {
        return this.monthlyGoalRepo.getMonthlyGoal(search);
    }
    async getMonthlyGoalAll(search) {
        return this.monthlyGoalRepo.getMonthlyGoalAll(search);
    }
}
exports.MonthlyGoalService = MonthlyGoalService;
//# sourceMappingURL=MonthlyGoalService.js.map