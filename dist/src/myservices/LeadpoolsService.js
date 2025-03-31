"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadpoolsService = void 0;
const myrepositories_1 = require("../myrepositories");
class LeadpoolsService {
    constructor() {
        this.leadpoolsRepo = new myrepositories_1.LeadpoolsRepo();
    }
    async findOneleadpools(Id) {
        return this.leadpoolsRepo.getLeadpoolsById(Id);
    }
    async createLeadpools(leadpoolsVo) {
        return this.leadpoolsRepo.create(leadpoolsVo);
    }
    async updateaLeadpools(Id, user_id, leadpoolsVo) {
        leadpoolsVo.updatedAt = new Date();
        leadpoolsVo.updatedUid = user_id;
        return this.leadpoolsRepo.update(Id, user_id, leadpoolsVo);
    }
    async removeLeadpools(Ids) {
        return this.leadpoolsRepo.remove(Ids);
    }
    async getLeadpoolsById(id) {
        return this.leadpoolsRepo.getLeadpoolsById(id);
    }
    async getLeadpools(search) {
        return this.leadpoolsRepo.getLeadpools(search);
    }
    async getLeadpoolsAll(search) {
        return this.leadpoolsRepo.getLeadpoolsAll(search);
    }
    async getLeadpoolsAllView() {
        return this.leadpoolsRepo.getLeadpoolsAllView();
    }
}
exports.LeadpoolsService = LeadpoolsService;
//# sourceMappingURL=LeadpoolsService.js.map