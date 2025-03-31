"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhinspectionService = void 0;
const fhinspection_repo_1 = require("../myrepositories/fhinspection_repo");
class FhinspectionService {
    constructor() {
        this.fhinspectionRepo = new fhinspection_repo_1.FhinspectionRepo();
    }
    async findOneFhinspection(Id) {
        return await this.fhinspectionRepo.getFhinspectionsById(Id);
    }
    async createFhinspection(fhinspectionVo) {
        return await this.fhinspectionRepo.create(fhinspectionVo);
    }
    async updateaFhinspection(Id, user_id, fhinspectionVo) {
        return await this.fhinspectionRepo.update(Id, user_id, fhinspectionVo);
    }
    async removeFhinspection(Ids) {
        console.log(Ids);
        return await this.fhinspectionRepo.remove([Ids]);
    }
    async getFhinspectionById(id) {
        return await this.fhinspectionRepo.getFhinspectionsById(id);
    }
    async getFhinspectionList(search) {
        return await this.fhinspectionRepo.getFhinspectionList(search);
    }
    async getFhinspectionAll() {
        return await this.fhinspectionRepo.getFhinspectionAll();
    }
    async getFhinspectionAllView() {
        return await this.fhinspectionRepo.getFhinspectionAllView();
    }
}
exports.FhinspectionService = FhinspectionService;
//# sourceMappingURL=fhinspection_service.js.map