"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateService = void 0;
const myrepositories_1 = require("../myrepositories");
class TemplateService {
    constructor() {
        this.templateRepo = new myrepositories_1.TemplateRepo();
    }
    async findOneTemplate(Id) {
        return this.templateRepo.gettemplatesById(Id);
    }
    async createTemplate(templateVo) {
        return this.templateRepo.create(templateVo);
    }
    async updateaTemplate(Id, user_id, templateVo) {
        templateVo.updatedAt = new Date();
        templateVo.updatedUid = user_id;
        return this.templateRepo.update(Id, user_id, templateVo);
    }
    async removeTemplate(Ids) {
        return this.templateRepo.remove(Ids);
    }
    async getTemplateById(id) {
        return this.templateRepo.gettemplatesById(id);
    }
    async getTemplate(search) {
        return this.templateRepo.gettemplate(search);
    }
    async getTemplateAll(search) {
        return this.templateRepo.gettemplateAll(search);
    }
    async getTemplateAllView() {
        return this.templateRepo.gettemplateAllView();
    }
}
exports.TemplateService = TemplateService;
//# sourceMappingURL=TemplateService.js.map