"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpportunityService = void 0;
const myrepositories_1 = require("../myrepositories");
class OpportunityService {
    constructor() {
        this.opportunityRepo = new myrepositories_1.OpportunityRepo();
        this.opportunityCommentsRepo = new myrepositories_1.OpportunityCommentsRepo();
        this.customizationRepo = new myrepositories_1.CustomizationRepo();
    }
    async findOneOpportunity(Id) {
        return this.opportunityRepo.getopportunitysById(Id);
    }
    async createOpportunity(opportunityVo) {
        const mid = opportunityVo.id;
        const refNumber = 'OP-';
        this.opportunityCommentsRepo.updateOpportunityCommentsVoByMid(mid, opportunityVo.id);
        return this.opportunityRepo.create(opportunityVo);
    }
    async updateaOpportunity(Id, user_id, opportunityVo) {
        opportunityVo.updatedAt = new Date();
        opportunityVo.updatedUid = user_id;
        return this.opportunityRepo.update(Id, user_id, opportunityVo);
    }
    async removeOpportunity(Ids) {
        return this.opportunityRepo.remove(Ids);
    }
    async getOpportunityById(id) {
        return this.opportunityRepo.getopportunitysById(id);
    }
    async getOpportunitysCountBystageName(stageName) {
        return this.opportunityRepo.getOpportunitysCountBystageName(stageName);
    }
    async getOpportunity(userId, search) {
        return this.opportunityRepo.getopportunity(userId, search);
    }
    async getOpportunitySQL(userId, search) {
        return this.opportunityRepo.getopportunitySQL(userId, search);
    }
    async getOpportunityAll(search) {
        return this.opportunityRepo.getopportunityAll(search);
    }
    async getOpportunityAllView() {
        return this.opportunityRepo.getopportunityAllView();
    }
}
exports.OpportunityService = OpportunityService;
//# sourceMappingURL=OpportunityService.js.map