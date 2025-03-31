"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhtestService = void 0;
const fhtest_repo_1 = require("../myrepositories/fhtest_repo");
class FhtestService {
    constructor() {
        this.fhtestRepo = new fhtest_repo_1.FhtestRepo();
    }
    async findOneFhtest(Id) {
        return await this.fhtestRepo.getFhtestsById(Id);
    }
    async createFhtest(fhtestVo) {
        return await this.fhtestRepo.create(fhtestVo);
    }
    async updateaFhtest(Id, user_id, fhtestVo) {
        return await this.fhtestRepo.update(Id, user_id, fhtestVo);
    }
    async removeFhtest(Ids) {
        console.log(Ids);
        return await this.fhtestRepo.remove([Ids]);
    }
    async getFhtestById(id) {
        return await this.fhtestRepo.getFhtestsById(id);
    }
    async getFhtestList(search) {
        return await this.fhtestRepo.getFhtestList(search);
    }
    async getFhtestAll() {
        return await this.fhtestRepo.getFhtestAll();
    }
    async getFhtestAllView() {
        return await this.fhtestRepo.getFhtestAllView();
    }
}
exports.FhtestService = FhtestService;
//# sourceMappingURL=fhtest_service.js.map