"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FHcrmTable1Service = void 0;
const fhcrm_table1_repo_1 = require("../myrepositories/fhcrm_table1_repo");
class FHcrmTable1Service {
    constructor() {
        this.fhcrmTable1Repo = new fhcrm_table1_repo_1.FHcrmTable1Repo();
    }
    async findOneFHcrmTable1(Id) {
        return await this.fhcrmTable1Repo.getFHcrmTable1sById(Id);
    }
    async createFHcrmTable1(fhcrmTable1Vo) {
        return await this.fhcrmTable1Repo.create(fhcrmTable1Vo);
    }
    async updateaFHcrmTable1(Id, user_id, fhcrmTable1Vo) {
        return await this.fhcrmTable1Repo.update(Id, user_id, fhcrmTable1Vo);
    }
    async removeFHcrmTable1(Ids) {
        console.log(Ids);
        return await this.fhcrmTable1Repo.remove([Ids]);
    }
    async getFHcrmTable1ById(id) {
        return await this.fhcrmTable1Repo.getFHcrmTable1sById(id);
    }
    async getFHcrmTable1List(search) {
        return await this.fhcrmTable1Repo.getFHcrmTable1List(search);
    }
    async getFHcrmTable1All(search) {
        return await this.fhcrmTable1Repo.getFHcrmTable1All(search);
    }
    async getFHcrmTable1AllView() {
        return await this.fhcrmTable1Repo.getFHcrmTable1AllView();
    }
}
exports.FHcrmTable1Service = FHcrmTable1Service;
//# sourceMappingURL=fhcrm_table1_service.js.map