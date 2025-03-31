"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mybomService = void 0;
const mybom_repo_1 = require("../myrepositories/mybom_repo");
class mybomService {
    constructor() {
        this.mybomRepo = new mybom_repo_1.mybomRepo();
    }
    async findOnemybom(Id) {
        return await this.mybomRepo.getmybomsById(Id);
    }
    async createmybom(mybomVo) {
        return await this.mybomRepo.create(mybomVo);
    }
    async updateamybom(Id, user_id, mybomVo) {
        return await this.mybomRepo.update(Id, user_id, mybomVo);
    }
    async removemybom(Ids) {
        console.log(Ids);
        return await this.mybomRepo.remove([Ids]);
    }
    async getmybomById(id) {
        return await this.mybomRepo.getmybomsById(id);
    }
    async getmybomList(search) {
        return await this.mybomRepo.getmybomList(search);
    }
    async getmybomAll() {
        return await this.mybomRepo.getmybomAll();
    }
    async getmybomAllView() {
        return await this.mybomRepo.getmybomAllView();
    }
}
exports.mybomService = mybomService;
//# sourceMappingURL=mybom_service.js.map