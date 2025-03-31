"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbpackagService = void 0;
const tbpackag_repo_1 = require("../myrepositories/tbpackag_repo");
class TbpackagService {
    constructor() {
        this.tbpackagRepo = new tbpackag_repo_1.TbpackagRepo();
    }
    async findOneTbpackag(Id) {
        return await this.tbpackagRepo.getTbpackagsById(Id);
    }
    async createTbpackag(tbpackagVo) {
        return await this.tbpackagRepo.create(tbpackagVo);
    }
    async updateaTbpackag(Id, user_id, tbpackagVo) {
        return await this.tbpackagRepo.update(Id, user_id, tbpackagVo);
    }
    async removeTbpackag(Ids) {
        console.log(Ids);
        return await this.tbpackagRepo.remove([Ids]);
    }
    async getTbpackagById(id) {
        return await this.tbpackagRepo.getTbpackagsById(id);
    }
    async getTbpackagList(search) {
        return await this.tbpackagRepo.getTbpackagList(search);
    }
    async getTbpackagAll() {
        return await this.tbpackagRepo.getTbpackagAll();
    }
    async getTbpackagAllView() {
        return await this.tbpackagRepo.getTbpackagAllView();
    }
}
exports.TbpackagService = TbpackagService;
//# sourceMappingURL=tbpackag_service.js.map