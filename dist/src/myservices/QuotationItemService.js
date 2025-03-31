"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotationItemService = void 0;
const myrepositories_1 = require("../myrepositories");
class QuotationItemService {
    constructor() {
        this.quotationItemRepo = new myrepositories_1.QuotationItemRepo();
    }
    async findOneQuotationItem(Id) {
        return this.quotationItemRepo.getQuotationItemsById(Id);
    }
    async createQuotationItem(quotationItemVo) {
        return this.quotationItemRepo.create(quotationItemVo);
    }
    async updateaQuotationItem(Id, user_id, quotationItemVo) {
        quotationItemVo.updatedAt = new Date();
        quotationItemVo.updatedUid = user_id;
        return this.quotationItemRepo.update(Id, user_id, quotationItemVo);
    }
    async removeQuotationItem(Ids) {
        return this.quotationItemRepo.remove(Ids);
    }
    async getQuotationItemById(id) {
        return this.quotationItemRepo.getQuotationItemsById(id);
    }
    async getQuotationItemsAllByMid(mid) {
        return this.quotationItemRepo.getQuotationItemsAllByMid(mid);
    }
    async getQuotationItem(search) {
        return this.quotationItemRepo.getQuotationItem(search);
    }
    async getQuotationItemAll(search) {
        return this.quotationItemRepo.getQuotationItemAll(search);
    }
    async getQuotationItemAllView() {
        return this.quotationItemRepo.getQuotationItemAllView();
    }
}
exports.QuotationItemService = QuotationItemService;
//# sourceMappingURL=QuotationItemService.js.map