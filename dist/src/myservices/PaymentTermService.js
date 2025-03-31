"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTermService = void 0;
const myrepositories_1 = require("../myrepositories");
class PaymentTermService {
    constructor() {
        this.paymentTermRepo = new myrepositories_1.PaymentTermRepo();
    }
    async findOnePaymentTerm(Id) {
        return this.paymentTermRepo.getPaymentTermsById(Id);
    }
    async createPaymentTerm(paymentTermVo) {
        return this.paymentTermRepo.create(paymentTermVo);
    }
    async updateaPaymentTerm(Id, user_id, paymentTermVo) {
        paymentTermVo.updatedAt = new Date();
        paymentTermVo.updatedUid = user_id;
        return this.paymentTermRepo.update(Id, user_id, paymentTermVo);
    }
    async removePaymentTerm(Ids) {
        return this.paymentTermRepo.remove(Ids);
    }
    async getPaymentTermById(id) {
        return this.paymentTermRepo.getPaymentTermsById(id);
    }
    async getPaymentTerm(search) {
        return this.paymentTermRepo.getPaymentTerm(search);
    }
    async getPaymentTermAll(search) {
        return this.paymentTermRepo.getPaymentTermAll(search);
    }
    async getPaymentTermAllView() {
        return this.paymentTermRepo.getPaymentTermAllView();
    }
}
exports.PaymentTermService = PaymentTermService;
//# sourceMappingURL=PaymentTermService.js.map