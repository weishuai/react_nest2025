"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageService = void 0;
const myrepositories_1 = require("../myrepositories");
class LanguageService {
    constructor() {
        this.languageRepo = new myrepositories_1.LanguageRepo();
    }
    async findOneLanguage(Id) {
        return this.languageRepo.getLanguagesById(Id);
    }
    async createLanguage(languageVo) {
        return this.languageRepo.create(languageVo);
    }
    async updateaLanguage(Id, user_id, languageVo) {
        languageVo.updatedAt = new Date();
        languageVo.updatedUid = user_id;
        return this.languageRepo.update(Id, user_id, languageVo);
    }
    async removeLanguage(Ids) {
        return this.languageRepo.remove(Ids);
    }
    async getLanguageById(id) {
        return this.languageRepo.getLanguagesById(id);
    }
    async getLanguage(search) {
        return this.languageRepo.getLanguage(search);
    }
    async getLanguageAll(search) {
        return this.languageRepo.getLanguageAll(search);
    }
    async getLanguageAllView() {
        return this.languageRepo.getLanguageAllView();
    }
}
exports.LanguageService = LanguageService;
//# sourceMappingURL=LanguageService.js.map