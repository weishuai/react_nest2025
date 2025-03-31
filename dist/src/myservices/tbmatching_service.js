"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbmatchingService = void 0;
const tbmatching_repo_1 = require("../myrepositories/tbmatching_repo");
class TbmatchingService {
    constructor() {
        this.tbmatchingRepo = new tbmatching_repo_1.TbmatchingRepo();
    }
    async findOneTbmatching(Id) {
        return await this.tbmatchingRepo.getTbmatchingsById(Id);
    }
    async createTbmatching(tbmatchingVo) {
        return await this.tbmatchingRepo.create(tbmatchingVo);
    }
    async updateaTbmatching(Id, user_id, tbmatchingVo) {
        return await this.tbmatchingRepo.update(Id, user_id, tbmatchingVo);
    }
    async removeTbmatching(Ids) {
        console.log(Ids);
        return await this.tbmatchingRepo.remove([Ids]);
    }
    async getTbmatchingById(id) {
        return await this.tbmatchingRepo.getTbmatchingsById(id);
    }
    async getTbmatchingList(search) {
        return await this.tbmatchingRepo.getTbmatchingList(search);
    }
    async getTbmatchingAll() {
        return await this.tbmatchingRepo.getTbmatchingAll();
    }
    async getTbmatchingAllView() {
        return await this.tbmatchingRepo.getTbmatchingAllView();
    }
}
exports.TbmatchingService = TbmatchingService;
//# sourceMappingURL=tbmatching_service.js.map