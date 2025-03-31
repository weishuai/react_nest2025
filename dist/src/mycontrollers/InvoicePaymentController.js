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
exports.InvoicePaymentController = void 0;
const common_1 = require("@nestjs/common");
const InvoicePaymentService_1 = require("../myservices/InvoicePaymentService");
const InvoicePaymentVo_1 = require("../myvo/InvoicePaymentVo");
let InvoicePaymentController = class InvoicePaymentController {
    constructor() {
        this.invoicePaymentService = new InvoicePaymentService_1.InvoicePaymentService();
    }
    async createInvoicePayment(InvoicePaymentVo) {
        return this.invoicePaymentService.createInvoicePayment(InvoicePaymentVo);
    }
    async updateaInvoicePayment(userToken, Id, InvoicePaymentVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.invoicePaymentService.updateaInvoicePayment(Id, userId, InvoicePaymentVo);
    }
    async removeInvoicePayment(Id) {
        return this.invoicePaymentService.removeInvoicePayment([Id]);
    }
    async getInvoicePaymentById(Id) {
        return this.invoicePaymentService.getInvoicePaymentById(Id);
    }
    async getInvoicePayment(search) {
        return this.invoicePaymentService.getInvoicePayment(search);
    }
    async getInvoicePaymentAll(search) {
        return this.invoicePaymentService.getInvoicePaymentAll(search);
    }
    async getInvoicePaymentAllView() {
        return this.invoicePaymentService.getInvoicePaymentAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createInvoicePayment'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InvoicePaymentVo_1.InvoicePaymentVo]),
    __metadata("design:returntype", Promise)
], InvoicePaymentController.prototype, "createInvoicePayment", null);
__decorate([
    (0, common_1.Put)('/updateInvoicePayment/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, InvoicePaymentVo_1.InvoicePaymentVo]),
    __metadata("design:returntype", Promise)
], InvoicePaymentController.prototype, "updateaInvoicePayment", null);
__decorate([
    (0, common_1.Get)('/removeInvoicePayment/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvoicePaymentController.prototype, "removeInvoicePayment", null);
__decorate([
    (0, common_1.Get)('/getInvoicePaymentById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvoicePaymentController.prototype, "getInvoicePaymentById", null);
__decorate([
    (0, common_1.Get)('/getInvoicePayment'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InvoicePaymentVo_1.InvoicePaymentSearchVo]),
    __metadata("design:returntype", Promise)
], InvoicePaymentController.prototype, "getInvoicePayment", null);
__decorate([
    (0, common_1.Get)('/getInvoicePaymentAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InvoicePaymentVo_1.InvoicePaymentSearchVo]),
    __metadata("design:returntype", Promise)
], InvoicePaymentController.prototype, "getInvoicePaymentAll", null);
__decorate([
    (0, common_1.Get)('/getInvoicePaymentAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InvoicePaymentController.prototype, "getInvoicePaymentAllView", null);
InvoicePaymentController = __decorate([
    (0, common_1.Controller)('/invoicePayment')
], InvoicePaymentController);
exports.InvoicePaymentController = InvoicePaymentController;
//# sourceMappingURL=InvoicePaymentController.js.map