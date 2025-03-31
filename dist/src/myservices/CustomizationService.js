"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomizationService = void 0;
const myrepositories_1 = require("../myrepositories");
class CustomizationService {
    constructor() {
        this.customizationRepo = new myrepositories_1.CustomizationRepo();
    }
    async findOneCustomization(Id) {
        return this.customizationRepo.getCustomizationsById(Id);
    }
    async createCustomization(customizationVo) {
    }
    async updateaCustomization(Id, user_id, customizationVo) {
        customizationVo.updatedAt = new Date();
        customizationVo.updatedUid = user_id;
    }
    async removeCustomization(Ids) {
    }
    async getCustomizationById(id) {
        return this.customizationRepo.getCustomizationsById(id);
    }
    async getCustomization(search) {
        return this.customizationRepo.getCustomization(search);
    }
    async getCustomizationAll(search) {
        return this.customizationRepo.getCustomizationAll(search);
    }
    async getCustomizationAllView() {
        return this.customizationRepo.getCustomizationAllView();
    }
}
exports.CustomizationService = CustomizationService;
//# sourceMappingURL=CustomizationService.js.map