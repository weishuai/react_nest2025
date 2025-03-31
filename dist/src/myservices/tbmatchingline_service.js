"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbmatchinglineService = void 0;
const tbmatchingline_repo_1 = require("../myrepositories/tbmatchingline_repo");
class TbmatchinglineService {
    constructor() {
        this.tbmatchinglineRepo = new tbmatchingline_repo_1.TbmatchinglineRepo();
    }
    async findOneTbmatchingline(Id) {
        return await this.tbmatchinglineRepo.getTbmatchinglinesById(Id);
    }
    async createTbmatchingline(tbmatchinglineVo) {
        return await this.tbmatchinglineRepo.create(tbmatchinglineVo);
    }
    async updateaTbmatchingline(Id, user_id, tbmatchinglineVo) {
        return await this.tbmatchinglineRepo.update(Id, user_id, tbmatchinglineVo);
    }
    async removeTbmatchingline(Ids) {
        console.log(Ids);
        return await this.tbmatchinglineRepo.remove([Ids]);
    }
    async getTbmatchinglineById(id) {
        return await this.tbmatchinglineRepo.getTbmatchinglinesById(id);
    }
    async getTbmatchinglineList(search) {
        return await this.tbmatchinglineRepo.getTbmatchinglineList(search);
    }
    async getTbmatchinglineAll() {
        return await this.tbmatchinglineRepo.getTbmatchinglineAll();
    }
    async getTbmatchinglineAllView() {
        return await this.tbmatchinglineRepo.getTbmatchinglineAllView();
    }
}
exports.TbmatchinglineService = TbmatchinglineService;
//# sourceMappingURL=tbmatchingline_service.js.map