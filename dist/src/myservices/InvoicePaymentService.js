"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicePaymentService = void 0;
const myrepositories_1 = require("../myrepositories");
class InvoicePaymentService {
    constructor() {
        this.invoicePaymentRepo = new myrepositories_1.InvoicePaymentRepo();
    }
    async findOneInvoicePayment(Id) {
        return this.invoicePaymentRepo.getInvoicePaymentsById(Id);
    }
    async createInvoicePayment(invoicePaymentVo) {
        return this.invoicePaymentRepo.create(invoicePaymentVo);
    }
    async updateaInvoicePayment(Id, user_id, invoicePaymentVo) {
        invoicePaymentVo.updatedAt = new Date();
        invoicePaymentVo.updatedUid = user_id;
        return this.invoicePaymentRepo.update(Id, user_id, invoicePaymentVo);
    }
    async removeInvoicePayment(Ids) {
        return this.invoicePaymentRepo.remove(Ids);
    }
    async getInvoicePaymentById(id) {
        return this.invoicePaymentRepo.getInvoicePaymentsById(id);
    }
    async getInvoicePayment(search) {
        return this.invoicePaymentRepo.getinvoicePayment(search);
    }
    async getInvoicePaymentAll(search) {
        return this.invoicePaymentRepo.getinvoicePaymentAll(search);
    }
    async getInvoicePaymentAllView() {
        return this.invoicePaymentRepo.getinvoicePaymentAllView();
    }
}
exports.InvoicePaymentService = InvoicePaymentService;
//# sourceMappingURL=InvoicePaymentService.js.map