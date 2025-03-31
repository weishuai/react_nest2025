"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotationCommentsService = void 0;
const myrepositories_1 = require("../myrepositories");
class QuotationCommentsService {
    constructor() {
        this.quotationCommentsRepo = new myrepositories_1.QuotationCommentsRepo();
    }
    async findOneQuotationComments(Id) {
        return this.quotationCommentsRepo.getQuotationCommentssById(Id);
    }
    async createQuotationComments(quotationCommentsVo) {
        return this.quotationCommentsRepo.create(quotationCommentsVo);
    }
    async updateaQuotationComments(Id, user_id, quotationCommentsVo) {
        quotationCommentsVo.updatedAt = new Date();
        quotationCommentsVo.updatedUid = user_id;
        return this.quotationCommentsRepo.update(Id, user_id, quotationCommentsVo);
    }
    async removeQuotationComments(Ids) {
        return this.quotationCommentsRepo.remove(Ids);
    }
    async getQuotationCommentsById(id) {
        return this.quotationCommentsRepo.getQuotationCommentssById(id);
    }
    async getQuotationComments(search) {
        return this.quotationCommentsRepo.getQuotationComments(search);
    }
    async getQuotationCommentsAll(search) {
        return this.quotationCommentsRepo.getQuotationCommentsAll(search);
    }
    async getQuotationCommentsAllView() {
        return this.quotationCommentsRepo.getQuotationCommentsAllView();
    }
}
exports.QuotationCommentsService = QuotationCommentsService;
//# sourceMappingURL=QuotationCommentsService.js.map