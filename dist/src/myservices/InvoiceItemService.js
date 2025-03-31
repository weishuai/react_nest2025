"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceItemService = void 0;
const myrepositories_1 = require("../myrepositories");
class InvoiceItemService {
    constructor() {
        this.invoiceItemRepo = new myrepositories_1.InvoiceItemRepo();
    }
    async findOneInvoiceItem(Id) {
        return this.invoiceItemRepo.getinvoiceItemsById(Id);
    }
    async createInvoiceItem(invoiceItemVo) {
        return this.invoiceItemRepo.create(invoiceItemVo);
    }
    async updateaInvoiceItem(Id, user_id, invoiceItemVo) {
        invoiceItemVo.updatedAt = new Date();
        invoiceItemVo.updatedUid = user_id;
        return this.invoiceItemRepo.update(Id, user_id, invoiceItemVo);
    }
    async removeInvoiceItem(Ids) {
        return this.invoiceItemRepo.remove(Ids);
    }
    async removeToInvoiceItem(Id) {
        return this.invoiceItemRepo.updateToInvoiceItemVoByMid(Id);
    }
    async getInvoiceItemById(id) {
        return this.invoiceItemRepo.getinvoiceItemsById(id);
    }
    async getInvoiceItem(search) {
        return this.invoiceItemRepo.getinvoiceItem(search);
    }
    async getInvoiceItemAll(search) {
        return this.invoiceItemRepo.getinvoiceItemAll(search);
    }
    async getInvoiceItemAllView() {
        return this.invoiceItemRepo.getinvoiceItemAllView();
    }
}
exports.InvoiceItemService = InvoiceItemService;
//# sourceMappingURL=InvoiceItemService.js.map