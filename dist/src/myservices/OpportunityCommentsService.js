"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpportunityCommentsService = void 0;
const myrepositories_1 = require("../myrepositories");
class OpportunityCommentsService {
    constructor() {
        this.opportunityCommentsRepo = new myrepositories_1.OpportunityCommentsRepo();
    }
    async findOneOpportunityComments(Id) {
        return this.opportunityCommentsRepo.getOpportunityCommentssById(Id);
    }
    async createOpportunityComments(opportunityCommentsVo) {
        return this.opportunityCommentsRepo.create(opportunityCommentsVo);
    }
    async updateaOpportunityComments(Id, user_id, opportunityCommentsVo) {
        opportunityCommentsVo.updatedAt = new Date();
        opportunityCommentsVo.updatedUid = user_id;
        return this.opportunityCommentsRepo.update(Id, user_id, opportunityCommentsVo);
    }
    async removeOpportunityComments(Ids) {
        return this.opportunityCommentsRepo.remove(Ids);
    }
    async getOpportunityCommentsById(id) {
        return this.opportunityCommentsRepo.getOpportunityCommentssById(id);
    }
    async getOpportunityComments(search) {
        return this.opportunityCommentsRepo.getOpportunityComments(search);
    }
    async getOpportunityCommentsAll(search) {
        return this.opportunityCommentsRepo.getOpportunityCommentsAll(search);
    }
}
exports.OpportunityCommentsService = OpportunityCommentsService;
//# sourceMappingURL=OpportunityCommentsService.js.map