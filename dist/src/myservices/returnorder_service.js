"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnorderService = void 0;
const returnorder_repo_1 = require("../myrepositories/returnorder_repo");
class ReturnorderService {
    constructor() {
        this.returnorderRepo = new returnorder_repo_1.ReturnorderRepo();
    }
    async findOneReturnorder(Id) {
        return await this.returnorderRepo.getReturnordersById(Id);
    }
    async createReturnorder(returnorderVo) {
        return await this.returnorderRepo.create(returnorderVo);
    }
    async updateaReturnorder(Id, user_id, returnorderVo) {
        return await this.returnorderRepo.update(Id, user_id, returnorderVo);
    }
    async removeReturnorder(Ids) {
        console.log(Ids);
        return await this.returnorderRepo.remove([Ids]);
    }
    async getReturnorderById(id) {
        return await this.returnorderRepo.getReturnordersById(id);
    }
    async getReturnorderList(search) {
        return await this.returnorderRepo.getReturnorderList(search);
    }
    async getReturnorderAll() {
        return await this.returnorderRepo.getReturnorderAll();
    }
    async getReturnorderAllView() {
        return await this.returnorderRepo.getReturnorderAllView();
    }
}
exports.ReturnorderService = ReturnorderService;
//# sourceMappingURL=returnorder_service.js.map