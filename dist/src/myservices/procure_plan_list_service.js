"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcurePlanListService = void 0;
const procure_plan_list_repo_1 = require("../myrepositories/procure_plan_list_repo");
class ProcurePlanListService {
    constructor() {
        this.procurePlanListRepo = new procure_plan_list_repo_1.ProcurePlanListRepo();
    }
    async findOneProcurePlanList(Id) {
        return await this.procurePlanListRepo.getProcurePlanListsById(Id);
    }
    async createProcurePlanList(procurePlanListVo) {
        return await this.procurePlanListRepo.create(procurePlanListVo);
    }
    async updateaProcurePlanList(Id, user_id, procurePlanListVo) {
        return await this.procurePlanListRepo.update(Id, user_id, procurePlanListVo);
    }
    async removeProcurePlanList(Ids) {
        console.log(Ids);
        return await this.procurePlanListRepo.remove([Ids]);
    }
    async getProcurePlanListById(id) {
        return await this.procurePlanListRepo.getProcurePlanListsById(id);
    }
    async getProcurePlanListList(search) {
        return await this.procurePlanListRepo.getProcurePlanListList(search);
    }
    async getProcurePlanListAll() {
        return await this.procurePlanListRepo.getProcurePlanListAll();
    }
    async getProcurePlanListAllView() {
        return await this.procurePlanListRepo.getProcurePlanListAllView();
    }
}
exports.ProcurePlanListService = ProcurePlanListService;
//# sourceMappingURL=procure_plan_list_service.js.map