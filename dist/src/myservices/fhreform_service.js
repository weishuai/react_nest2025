"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhreformService = void 0;
const fhreform_repo_1 = require("../myrepositories/fhreform_repo");
class FhreformService {
    constructor() {
        this.fhreformRepo = new fhreform_repo_1.FhreformRepo();
    }
    async findOneFhreform(Id) {
        return await this.fhreformRepo.getFhreformsById(Id);
    }
    async createFhreform(fhreformVo) {
        return await this.fhreformRepo.create(fhreformVo);
    }
    async updateaFhreform(Id, user_id, fhreformVo) {
        return await this.fhreformRepo.update(Id, user_id, fhreformVo);
    }
    async removeFhreform(Ids) {
        console.log(Ids);
        return await this.fhreformRepo.remove([Ids]);
    }
    async getFhreformById(id) {
        return await this.fhreformRepo.getFhreformsById(id);
    }
    async getFhreformList(search) {
        return await this.fhreformRepo.getFhreformList(search);
    }
    async getFhreformAll() {
        return await this.fhreformRepo.getFhreformAll();
    }
    async getFhreformAllView() {
        return await this.fhreformRepo.getFhreformAllView();
    }
}
exports.FhreformService = FhreformService;
//# sourceMappingURL=fhreform_service.js.map