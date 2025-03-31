"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarrantyService = void 0;
const myrepositories_1 = require("../myrepositories");
class WarrantyService {
    constructor() {
        this.warrantyRepo = new myrepositories_1.WarrantyRepo();
    }
    async findOneWarranty(Id) {
        return this.warrantyRepo.getWarrantysById(Id);
    }
    async createWarranty(warrantyVo) {
        return this.warrantyRepo.create(warrantyVo);
    }
    async updateaWarranty(Id, user_id, warrantyVo) {
        warrantyVo.updatedAt = new Date();
        warrantyVo.updatedUid = user_id;
        return this.warrantyRepo.update(Id, user_id, warrantyVo);
    }
    async removeWarranty(Ids) {
        return this.warrantyRepo.remove(Ids);
    }
    async getWarrantyById(id) {
        return this.warrantyRepo.getWarrantysById(id);
    }
    async getWarranty(search) {
        return this.warrantyRepo.getWarranty(search);
    }
    async getWarrantyAll(search) {
        return this.warrantyRepo.getWarrantyAll(search);
    }
    async getWarrantyAllView() {
        return this.warrantyRepo.getWarrantyAllView();
    }
}
exports.WarrantyService = WarrantyService;
//# sourceMappingURL=WarrantyService.js.map