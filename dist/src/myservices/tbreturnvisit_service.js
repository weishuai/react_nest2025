"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbreturnvisitService = void 0;
const tbreturnvisit_repo_1 = require("../myrepositories/tbreturnvisit_repo");
class TbreturnvisitService {
    constructor() {
        this.tbreturnvisitRepo = new tbreturnvisit_repo_1.TbreturnvisitRepo();
    }
    async findOneTbreturnvisit(Id) {
        return await this.tbreturnvisitRepo.getTbreturnvisitsById(Id);
    }
    async createTbreturnvisit(tbreturnvisitVo) {
        return await this.tbreturnvisitRepo.create(tbreturnvisitVo);
    }
    async updateaTbreturnvisit(Id, user_id, tbreturnvisitVo) {
        return await this.tbreturnvisitRepo.update(Id, user_id, tbreturnvisitVo);
    }
    async removeTbreturnvisit(Ids) {
        console.log(Ids);
        return await this.tbreturnvisitRepo.remove([Ids]);
    }
    async getTbreturnvisitById(id) {
        return await this.tbreturnvisitRepo.getTbreturnvisitsById(id);
    }
    async getTbreturnvisitList(search) {
        return await this.tbreturnvisitRepo.getTbreturnvisitList(search);
    }
    async getTbreturnvisitAll() {
        return await this.tbreturnvisitRepo.getTbreturnvisitAll();
    }
    async getTbreturnvisitAllView() {
        return await this.tbreturnvisitRepo.getTbreturnvisitAllView();
    }
}
exports.TbreturnvisitService = TbreturnvisitService;
//# sourceMappingURL=tbreturnvisit_service.js.map