"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbaftersaleService = void 0;
const tbaftersale_repo_1 = require("../myrepositories/tbaftersale_repo");
class TbaftersaleService {
    constructor() {
        this.tbaftersaleRepo = new tbaftersale_repo_1.TbaftersaleRepo();
    }
    async findOneTbaftersale(Id) {
        return await this.tbaftersaleRepo.getTbaftersalesById(Id);
    }
    async createTbaftersale(tbaftersaleVo) {
        return await this.tbaftersaleRepo.create(tbaftersaleVo);
    }
    async updateaTbaftersale(Id, user_id, tbaftersaleVo) {
        return await this.tbaftersaleRepo.update(Id, user_id, tbaftersaleVo);
    }
    async removeTbaftersale(Ids) {
        console.log(Ids);
        return await this.tbaftersaleRepo.remove([Ids]);
    }
    async getTbaftersaleById(id) {
        return await this.tbaftersaleRepo.getTbaftersalesById(id);
    }
    async getTbaftersaleList(search) {
        return await this.tbaftersaleRepo.getTbaftersaleList(search);
    }
    async getTbaftersaleAll() {
        return await this.tbaftersaleRepo.getTbaftersaleAll();
    }
    async getTbaftersaleAllView() {
        return await this.tbaftersaleRepo.getTbaftersaleAllView();
    }
}
exports.TbaftersaleService = TbaftersaleService;
//# sourceMappingURL=tbaftersale_service.js.map