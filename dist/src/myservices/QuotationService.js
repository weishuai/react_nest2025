"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotationService = void 0;
const myrepositories_1 = require("../myrepositories");
class QuotationService {
    constructor() {
        this.quotationRepo = new myrepositories_1.QuotationRepo();
        this.quotationItemRepo = new myrepositories_1.QuotationItemRepo();
        this.customizationRepo = new myrepositories_1.CustomizationRepo();
    }
    async findOneQuotation(Id) {
        return this.quotationRepo.getquotationsById(Id);
    }
    async createQuotation(quotationVo) {
        const mid = quotationVo.id;
        const refNumber = 'QN-';
        return this.quotationRepo.create(quotationVo);
    }
    async updateaQuotation(Id, user_id, quotationVo) {
        quotationVo.updatedAt = new Date();
        quotationVo.updatedUid = user_id;
        return this.quotationRepo.update(Id, user_id, quotationVo);
    }
    async removeQuotation(Ids) {
        return this.quotationRepo.remove(Ids);
    }
    async getQuotationById(id) {
        return this.quotationRepo.getquotationsById(id);
    }
    async getQuotation(userId, search) {
        return this.quotationRepo.getquotation(userId, search);
    }
    async getQuotationSQL(userId, search) {
        return this.quotationRepo.getquotationSQL(userId, search);
    }
    async getquotationSQLList(userId, search) {
        return this.quotationRepo.getquotationSQLList(userId, search);
    }
    async getQuotationAll(search) {
        return this.quotationRepo.getquotationAll(search);
    }
    async getQuotationAllView() {
        return this.quotationRepo.getquotationAllView();
    }
}
exports.QuotationService = QuotationService;
//# sourceMappingURL=QuotationService.js.map