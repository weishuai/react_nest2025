"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageService = void 0;
const myrepositories_1 = require("../myrepositories");
class StageService {
    constructor() {
        this.stageRepo = new myrepositories_1.StageRepo();
    }
    async findOneStage(Id) {
        return this.stageRepo.getStagesById(Id);
    }
    async createStage(stageVo) {
        return this.stageRepo.create(stageVo);
    }
    async updateaStage(Id, user_id, stageVo) {
        stageVo.updatedAt = new Date();
        stageVo.updatedUid = user_id;
        return this.stageRepo.update(Id, user_id, stageVo);
    }
    async removeStage(Ids) {
        return this.stageRepo.remove(Ids);
    }
    async getStageById(id) {
        return this.stageRepo.getStagesById(id);
    }
    async getStage(search) {
        return this.stageRepo.getStage(search);
    }
    async getStageAll(search) {
        return this.stageRepo.getStageAll(search);
    }
    async getStageAllView() {
        return this.stageRepo.getStageAllView();
    }
}
exports.StageService = StageService;
//# sourceMappingURL=StageService.js.map