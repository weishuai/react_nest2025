"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhrunningService = void 0;
const fhrunning_repo_1 = require("../myrepositories/fhrunning_repo");
class FhrunningService {
    constructor() {
        this.fhrunningRepo = new fhrunning_repo_1.FhrunningRepo();
    }
    async findOneFhrunning(Id) {
        return await this.fhrunningRepo.getFhrunningsById(Id);
    }
    async createFhrunning(fhrunningVo) {
        return await this.fhrunningRepo.create(fhrunningVo);
    }
    async updateaFhrunning(Id, user_id, fhrunningVo) {
        return await this.fhrunningRepo.update(Id, user_id, fhrunningVo);
    }
    async removeFhrunning(Ids) {
        console.log(Ids);
        return await this.fhrunningRepo.remove([Ids]);
    }
    async getFhrunningById(id) {
        return await this.fhrunningRepo.getFhrunningsById(id);
    }
    async getFhrunningList(search) {
        return await this.fhrunningRepo.getFhrunningList(search);
    }
    async getFhrunningAll() {
        return await this.fhrunningRepo.getFhrunningAll();
    }
    async getFhrunningAllView() {
        return await this.fhrunningRepo.getFhrunningAllView();
    }
}
exports.FhrunningService = FhrunningService;
//# sourceMappingURL=fhrunning_service.js.map