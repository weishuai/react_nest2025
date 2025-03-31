"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhservicetbService = void 0;
const fhservicetb_repo_1 = require("../myrepositories/fhservicetb_repo");
class FhservicetbService {
    constructor() {
        this.fhservicetbRepo = new fhservicetb_repo_1.FhservicetbRepo();
    }
    async findOneFhservicetb(Id) {
        return await this.fhservicetbRepo.getFhservicetbsById(Id);
    }
    async createFhservicetb(fhservicetbVo) {
        return await this.fhservicetbRepo.create(fhservicetbVo);
    }
    async updateaFhservicetb(Id, user_id, fhservicetbVo) {
        return await this.fhservicetbRepo.update(Id, user_id, fhservicetbVo);
    }
    async removeFhservicetb(Ids) {
        console.log(Ids);
        return await this.fhservicetbRepo.remove([Ids]);
    }
    async getFhservicetbById(id) {
        return await this.fhservicetbRepo.getFhservicetbsById(id);
    }
    async getFhservicetbList(search) {
        return await this.fhservicetbRepo.getFhservicetbList(search);
    }
    async getFhservicetbAll() {
        return await this.fhservicetbRepo.getFhservicetbAll();
    }
    async getFhservicetbAllView() {
        return await this.fhservicetbRepo.getFhservicetbAllView();
    }
}
exports.FhservicetbService = FhservicetbService;
//# sourceMappingURL=fhservicetb_service.js.map