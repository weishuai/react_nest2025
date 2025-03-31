"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhservicePlanService = void 0;
const fhservice_plan_repo_1 = require("../myrepositories/fhservice_plan_repo");
class FhservicePlanService {
    constructor() {
        this.fhservicePlanRepo = new fhservice_plan_repo_1.FhservicePlanRepo();
    }
    async findOneFhservicePlan(Id) {
        return await this.fhservicePlanRepo.getFhservicePlansById(Id);
    }
    async createFhservicePlan(fhservicePlanVo) {
        return await this.fhservicePlanRepo.create(fhservicePlanVo);
    }
    async updateaFhservicePlan(Id, user_id, fhservicePlanVo) {
        return await this.fhservicePlanRepo.update(Id, user_id, fhservicePlanVo);
    }
    async removeFhservicePlan(Ids) {
        console.log(Ids);
        return await this.fhservicePlanRepo.remove([Ids]);
    }
    async getFhservicePlanById(id) {
        return await this.fhservicePlanRepo.getFhservicePlansById(id);
    }
    async getFhservicePlanList(search) {
        return await this.fhservicePlanRepo.getFhservicePlanList(search);
    }
    async getFhservicePlanAll() {
        return await this.fhservicePlanRepo.getFhservicePlanAll();
    }
    async getFhservicePlanAllView() {
        return await this.fhservicePlanRepo.getFhservicePlanAllView();
    }
}
exports.FhservicePlanService = FhservicePlanService;
//# sourceMappingURL=fhservice_plan_service.js.map