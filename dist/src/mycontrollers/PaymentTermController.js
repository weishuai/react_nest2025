"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTermController = void 0;
const common_1 = require("@nestjs/common");
const PaymentTermService_1 = require("../myservices/PaymentTermService");
const PaymentTermVo_1 = require("../myvo/PaymentTermVo");
let PaymentTermController = class PaymentTermController {
    constructor() {
        this.paymentTermService = new PaymentTermService_1.PaymentTermService();
    }
    async createPaymentTerm(PaymentTermVo) {
        return this.paymentTermService.createPaymentTerm(PaymentTermVo);
    }
    async updateaPaymentTerm(userToken, Id, PaymentTermVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.paymentTermService.updateaPaymentTerm(Id, userId, PaymentTermVo);
    }
    async removePaymentTerm(Id) {
        return this.paymentTermService.removePaymentTerm([Id]);
    }
    async getPaymentTermById(Id) {
        return this.paymentTermService.getPaymentTermById(Id);
    }
    async getPaymentTerm(search) {
        return this.paymentTermService.getPaymentTerm(search);
    }
    async getPaymentTermAll(search) {
        return this.paymentTermService.getPaymentTermAll(search);
    }
    async getPaymentTermAllView() {
        return this.paymentTermService.getPaymentTermAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createPaymentTerm'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PaymentTermVo_1.PaymentTermVo]),
    __metadata("design:returntype", Promise)
], PaymentTermController.prototype, "createPaymentTerm", null);
__decorate([
    (0, common_1.Put)('/updatePaymentTerm/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, PaymentTermVo_1.PaymentTermVo]),
    __metadata("design:returntype", Promise)
], PaymentTermController.prototype, "updateaPaymentTerm", null);
__decorate([
    (0, common_1.Get)('/removePaymentTerm/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentTermController.prototype, "removePaymentTerm", null);
__decorate([
    (0, common_1.Get)('/getPaymentTermById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentTermController.prototype, "getPaymentTermById", null);
__decorate([
    (0, common_1.Get)('/getPaymentTerm'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PaymentTermVo_1.PaymentTermSearchVo]),
    __metadata("design:returntype", Promise)
], PaymentTermController.prototype, "getPaymentTerm", null);
__decorate([
    (0, common_1.Get)('/getPaymentTermAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PaymentTermVo_1.PaymentTermSearchVo]),
    __metadata("design:returntype", Promise)
], PaymentTermController.prototype, "getPaymentTermAll", null);
__decorate([
    (0, common_1.Get)('/getPaymentTermAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaymentTermController.prototype, "getPaymentTermAllView", null);
PaymentTermController = __decorate([
    (0, common_1.Controller)('/paymentTerm')
], PaymentTermController);
exports.PaymentTermController = PaymentTermController;
//# sourceMappingURL=PaymentTermController.js.map