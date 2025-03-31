"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QualityInspectionService = void 0;
const quality_inspection_repo_1 = require("../myrepositories/quality_inspection_repo");
class QualityInspectionService {
    constructor() {
        this.qualityInspectionRepo = new quality_inspection_repo_1.QualityInspectionRepo();
    }
    async findOneQualityInspection(Id) {
        return await this.qualityInspectionRepo.getQualityInspectionsById(Id);
    }
    async createQualityInspection(qualityInspectionVo) {
        return await this.qualityInspectionRepo.create(qualityInspectionVo);
    }
    async updateaQualityInspection(Id, user_id, qualityInspectionVo) {
        return await this.qualityInspectionRepo.update(Id, user_id, qualityInspectionVo);
    }
    async removeQualityInspection(Ids) {
        console.log(Ids);
        return await this.qualityInspectionRepo.remove([Ids]);
    }
    async getQualityInspectionById(id) {
        return await this.qualityInspectionRepo.getQualityInspectionsById(id);
    }
    async getQualityInspectionList(search) {
        return await this.qualityInspectionRepo.getQualityInspectionList(search);
    }
    async getQualityInspectionAll() {
        return await this.qualityInspectionRepo.getQualityInspectionAll();
    }
    async getQualityInspectionAllView() {
        return await this.qualityInspectionRepo.getQualityInspectionAllView();
    }
}
exports.QualityInspectionService = QualityInspectionService;
//# sourceMappingURL=quality_inspection_service.js.map