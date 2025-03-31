"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxesService = void 0;
const myrepositories_1 = require("../myrepositories");
class TaxesService {
    constructor() {
        this.taxesRepo = new myrepositories_1.TaxesRepo();
    }
    async findOneTaxes(Id) {
        return this.taxesRepo.getTaxessById(Id);
    }
    async createTaxes(taxesVo) {
        return this.taxesRepo.create(taxesVo);
    }
    async updateaTaxes(Id, user_id, taxesVo) {
        taxesVo.updatedAt = new Date();
        taxesVo.updatedUid = user_id;
        return this.taxesRepo.update(Id, user_id, taxesVo);
    }
    async removeTaxes(Ids) {
        return this.taxesRepo.remove(Ids);
    }
    async getTaxesById(id) {
        return this.taxesRepo.getTaxessById(id);
    }
    async getTaxes(search) {
        return this.taxesRepo.getTaxes(search);
    }
    async getTaxesAll(search) {
        return this.taxesRepo.getTaxesAll(search);
    }
    async getTaxesAllView() {
        return this.taxesRepo.getTaxesAllView();
    }
}
exports.TaxesService = TaxesService;
//# sourceMappingURL=TaxesService.js.map