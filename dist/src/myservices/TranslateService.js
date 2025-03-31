"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslateService = void 0;
const myrepositories_1 = require("../myrepositories");
class TranslateService {
    constructor() {
        this.translateRepo = new myrepositories_1.TranslateRepo();
    }
    async findOneTranslate(Id) {
        return this.translateRepo.getTranslatesById(Id);
    }
    async createTranslate(translateVo) {
        return this.translateRepo.create(translateVo);
    }
    async updateaTranslate(Id, user_id, translateVo) {
        translateVo.updatedAt = new Date();
        translateVo.updatedUid = user_id;
        return this.translateRepo.update(Id, user_id, translateVo);
    }
    async removeTranslate(Ids) {
        return this.translateRepo.remove(Ids);
    }
    async getTranslateById(id) {
        return this.translateRepo.getTranslatesById(id);
    }
    async getTranslate(search) {
        return this.translateRepo.getTranslate(search);
    }
    async getTranslateAll(search) {
        return this.translateRepo.getTranslateAll(search);
    }
    async getTranslateAllView() {
        return this.translateRepo.getTranslateAllView();
    }
}
exports.TranslateService = TranslateService;
//# sourceMappingURL=TranslateService.js.map