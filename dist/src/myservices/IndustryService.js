"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndustryService = void 0;
const myrepositories_1 = require("../myrepositories");
class IndustryService {
    constructor() {
        this.industryRepo = new myrepositories_1.IndustryRepo();
    }
    async findOneindustry(Id) {
        return this.industryRepo.getIndustryById(Id);
    }
    async createIndustry(industryVo) {
        return this.industryRepo.create(industryVo);
    }
    async updateaIndustry(Id, user_id, industryVo) {
        industryVo.updatedAt = new Date();
        industryVo.updatedUid = user_id;
        return this.industryRepo.update(Id, user_id, industryVo);
    }
    async removeIndustry(Ids) {
        return this.industryRepo.remove(Ids);
    }
    async getIndustryById(id) {
        return this.industryRepo.getIndustryById(id);
    }
    async getIndustry(search) {
        return this.industryRepo.getIndustry(search);
    }
    async getIndustryAll(search) {
        return this.industryRepo.getIndustryAll(search);
    }
    async getIndustryAllView() {
        return this.industryRepo.getIndustryAllView();
    }
}
exports.IndustryService = IndustryService;
//# sourceMappingURL=IndustryService.js.map