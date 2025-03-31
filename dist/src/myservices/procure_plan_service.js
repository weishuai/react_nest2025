"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcurePlanService = void 0;
const procure_plan_repo_1 = require("../myrepositories/procure_plan_repo");
class ProcurePlanService {
    constructor() {
        this.procurePlanRepo = new procure_plan_repo_1.ProcurePlanRepo();
    }
    async findOneProcurePlan(Id) {
        return await this.procurePlanRepo.getProcurePlansById(Id);
    }
    async createProcurePlan(procurePlanVo) {
        return await this.procurePlanRepo.create(procurePlanVo);
    }
    async updateaProcurePlan(Id, user_id, procurePlanVo) {
        return await this.procurePlanRepo.update(Id, user_id, procurePlanVo);
    }
    async removeProcurePlan(Ids) {
        console.log(Ids);
        return await this.procurePlanRepo.remove([Ids]);
    }
    async getProcurePlanById(id) {
        return await this.procurePlanRepo.getProcurePlansById(id);
    }
    async getProcurePlanList(search) {
        return await this.procurePlanRepo.getProcurePlanList(search);
    }
    async getProcurePlanAll() {
        return await this.procurePlanRepo.getProcurePlanAll();
    }
    async getProcurePlanAllView() {
        return await this.procurePlanRepo.getProcurePlanAllView();
    }
}
exports.ProcurePlanService = ProcurePlanService;
//# sourceMappingURL=procure_plan_service.js.map