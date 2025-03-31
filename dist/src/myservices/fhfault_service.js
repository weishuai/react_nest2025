"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhfaultService = void 0;
const fhfault_repo_1 = require("../myrepositories/fhfault_repo");
class FhfaultService {
    constructor() {
        this.fhfaultRepo = new fhfault_repo_1.FhfaultRepo();
    }
    async findOneFhfault(Id) {
        return await this.fhfaultRepo.getFhfaultsById(Id);
    }
    async createFhfault(fhfaultVo) {
        return await this.fhfaultRepo.create(fhfaultVo);
    }
    async updateaFhfault(Id, user_id, fhfaultVo) {
        return await this.fhfaultRepo.update(Id, user_id, fhfaultVo);
    }
    async removeFhfault(Ids) {
        console.log(Ids);
        return await this.fhfaultRepo.remove([Ids]);
    }
    async getFhfaultById(id) {
        return await this.fhfaultRepo.getFhfaultsById(id);
    }
    async getFhfaultList(search) {
        return await this.fhfaultRepo.getFhfaultList(search);
    }
    async getFhfaultAll() {
        return await this.fhfaultRepo.getFhfaultAll();
    }
    async getFhfaultAllView() {
        return await this.fhfaultRepo.getFhfaultAllView();
    }
}
exports.FhfaultService = FhfaultService;
//# sourceMappingURL=fhfault_service.js.map