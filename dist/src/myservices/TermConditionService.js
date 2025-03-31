"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermConditionService = void 0;
const myrepositories_1 = require("../myrepositories");
class TermConditionService {
    constructor() {
        this.termConditionRepo = new myrepositories_1.TermConditionRepo();
    }
    async findOneTermCondition(Id) {
        return this.termConditionRepo.getTermConditionsById(Id);
    }
    async createTermCondition(termConditionVo) {
        return this.termConditionRepo.create(termConditionVo);
    }
    async updateaTermCondition(Id, user_id, termConditionVo) {
        termConditionVo.updatedAt = new Date();
        termConditionVo.updatedUid = user_id;
        return this.termConditionRepo.update(Id, user_id, termConditionVo);
    }
    async removeTermCondition(Ids) {
        return this.termConditionRepo.remove(Ids);
    }
    async getTermConditionById(id) {
        return this.termConditionRepo.getTermConditionsById(id);
    }
    async getTermCondition(search) {
        return this.termConditionRepo.getTermCondition(search);
    }
    async getTermConditionAll(search) {
        return this.termConditionRepo.getTermConditionAll(search);
    }
    async getTermConditionAllView() {
        return this.termConditionRepo.getTermConditionAllView();
    }
}
exports.TermConditionService = TermConditionService;
//# sourceMappingURL=TermConditionService.js.map