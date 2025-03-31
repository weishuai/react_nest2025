"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillService = void 0;
const myrepositories_1 = require("../myrepositories");
class SkillService {
    constructor() {
        this.skillRepo = new myrepositories_1.SkillRepo();
    }
    async findOneSkill(Id) {
        return this.skillRepo.getSkillsById(Id);
    }
    async createSkill(skillVo) {
        return this.skillRepo.create(skillVo);
    }
    async updateaSkill(Id, user_id, skillVo) {
        skillVo.updatedAt = new Date();
        skillVo.updatedUid = user_id;
        return this.skillRepo.update(Id, user_id, skillVo);
    }
    async removeSkill(Ids) {
        return this.skillRepo.remove(Ids);
    }
    async getSkillById(id) {
        return this.skillRepo.getSkillsById(id);
    }
    async getSkill(search) {
        return this.skillRepo.getSkill(search);
    }
    async getSkillAll(search) {
        return this.skillRepo.getSkillAll(search);
    }
    async getSkillAllView() {
        return this.skillRepo.getSkillAllView();
    }
}
exports.SkillService = SkillService;
//# sourceMappingURL=SkillService.js.map