"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceDetailsService = void 0;
const myrepositories_1 = require("../myrepositories");
class InvoiceDetailsService {
    constructor() {
        this.invoiceDetailsRepo = new myrepositories_1.InvoiceDetailsRepo();
        this.customizationRepo = new myrepositories_1.CustomizationRepo();
        this.invoiceItemRepo = new myrepositories_1.InvoiceItemRepo();
        this.invoicePaymentRepo = new myrepositories_1.InvoicePaymentRepo();
    }
    async findOneInvoiceDetails(Id) {
        return this.invoiceDetailsRepo.getinvoiceDetailssById(Id);
    }
    async createInvoiceDetails(invoiceDetailsVo) {
        const mid = invoiceDetailsVo.id;
        const refNumber = 'INV-';
        this.invoiceItemRepo.updateInvoiceItemVoByMid(mid, invoiceDetailsVo.id);
        this.invoicePaymentRepo.updateInvoicePaymentVoByMid(mid, invoiceDetailsVo.id);
        return this.invoiceDetailsRepo.create(invoiceDetailsVo);
    }
    async updateaInvoiceDetails(Id, user_id, invoiceDetailsVo) {
        invoiceDetailsVo.updatedAt = new Date();
        invoiceDetailsVo.updatedUid = user_id;
        return this.invoiceDetailsRepo.update(Id, user_id, invoiceDetailsVo);
    }
    async removeInvoiceDetails(Ids) {
        return this.invoiceDetailsRepo.remove(Ids);
    }
    async isAlertInvoiceDetails() {
    }
    async getInvoiceDetailsById(id) {
        return this.invoiceDetailsRepo.getinvoiceDetailssById(id);
    }
    async getInvoiceDetails(userId, search) {
        return this.invoiceDetailsRepo.getinvoiceDetails(userId, search);
    }
    async getInvoiceDetailsAll(search) {
        return this.invoiceDetailsRepo.getinvoiceDetailsAll(search);
    }
    async getInvoiceDetailsAllView() {
        return this.invoiceDetailsRepo.getinvoiceDetailsAllView();
    }
}
exports.InvoiceDetailsService = InvoiceDetailsService;
//# sourceMappingURL=InvoiceDetailsService.js.map