"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadsService = void 0;
const myrepositories_1 = require("../myrepositories");
class LeadsService {
    constructor() {
        this.leadsRepo = new myrepositories_1.LeadsRepo();
    }
    async findOneleads(Id) {
        return this.leadsRepo.getleadssById(Id);
    }
    async createLeads(leadsVo) {
        return this.leadsRepo.create(leadsVo);
    }
    async updateaLeads(Id, user_id, leadsVo) {
        leadsVo.updatedAt = new Date();
        leadsVo.updatedUid = user_id;
        return this.leadsRepo.update(Id, user_id, leadsVo);
    }
    async removeLeads(Ids) {
        return this.leadsRepo.remove(Ids);
    }
    async getLeadsById(id) {
        return this.leadsRepo.getleadssById(id);
    }
    async getLeads(userId, search) {
        return this.leadsRepo.getleads(userId, search);
    }
    async getLeadsAll(search) {
        return this.leadsRepo.getLeadsAll(search);
    }
    async getLeadsAllView() {
        return this.leadsRepo.getLeadsAllView();
    }
}
exports.LeadsService = LeadsService;
//# sourceMappingURL=LeadsService.js.map