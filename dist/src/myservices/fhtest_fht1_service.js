"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhtestFht1Service = void 0;
const fhtest_fht1_repo_1 = require("../myrepositories/fhtest_fht1_repo");
class FhtestFht1Service {
    constructor() {
        this.fhtestFht1Repo = new fhtest_fht1_repo_1.FhtestFht1Repo();
    }
    async findOneFhtestFht1(Id) {
        return await this.fhtestFht1Repo.getFhtestFht1sById(Id);
    }
    async createFhtestFht1(fhtestFht1Vo) {
        return await this.fhtestFht1Repo.create(fhtestFht1Vo);
    }
    async updateaFhtestFht1(Id, user_id, fhtestFht1Vo) {
        return await this.fhtestFht1Repo.update(Id, user_id, fhtestFht1Vo);
    }
    async removeFhtestFht1(Ids) {
        console.log(Ids);
        return await this.fhtestFht1Repo.remove([Ids]);
    }
    async getFhtestFht1ById(id) {
        return await this.fhtestFht1Repo.getFhtestFht1sById(id);
    }
    async getFhtestFht1List(search) {
        return await this.fhtestFht1Repo.getFhtestFht1List(search);
    }
    async getFhtestFht1All() {
        return await this.fhtestFht1Repo.getFhtestFht1All();
    }
    async getFhtestFht1AllView() {
        return await this.fhtestFht1Repo.getFhtestFht1AllView();
    }
}
exports.FhtestFht1Service = FhtestFht1Service;
//# sourceMappingURL=fhtest_fht1_service.js.map