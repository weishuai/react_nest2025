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
exports.InvoiceDetailsController = void 0;
const common_1 = require("@nestjs/common");
const InvoiceDetailsService_1 = require("../myservices/InvoiceDetailsService");
const InvoiceDetailsVo_1 = require("../myvo/InvoiceDetailsVo");
let InvoiceDetailsController = class InvoiceDetailsController {
    constructor() {
        this.invoiceDetailsService = new InvoiceDetailsService_1.InvoiceDetailsService();
    }
    async createInvoiceDetails(InvoiceDetailsVo) {
        return this.invoiceDetailsService.createInvoiceDetails(InvoiceDetailsVo);
    }
    async updateaInvoiceDetails(userToken, Id, InvoiceDetailsVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.invoiceDetailsService.updateaInvoiceDetails(Id, userId, InvoiceDetailsVo);
    }
    async removeInvoiceDetails(Id) {
        return this.invoiceDetailsService.removeInvoiceDetails([Id]);
    }
    async getInvoiceDetailsById(Id) {
        return this.invoiceDetailsService.getInvoiceDetailsById(Id);
    }
    async getInvoiceDetails(userToken, search) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.invoiceDetailsService.getInvoiceDetails(userId, search);
    }
    async getInvoiceDetailsAll(search) {
        return this.invoiceDetailsService.getInvoiceDetailsAll(search);
    }
    async getInvoiceDetailsAllView() {
        return this.invoiceDetailsService.getInvoiceDetailsAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createInvoiceDetails'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InvoiceDetailsVo_1.InvoiceDetailsVo]),
    __metadata("design:returntype", Promise)
], InvoiceDetailsController.prototype, "createInvoiceDetails", null);
__decorate([
    (0, common_1.Put)('/updateInvoiceDetails/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, InvoiceDetailsVo_1.InvoiceDetailsVo]),
    __metadata("design:returntype", Promise)
], InvoiceDetailsController.prototype, "updateaInvoiceDetails", null);
__decorate([
    (0, common_1.Get)('/removeInvoiceDetails/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvoiceDetailsController.prototype, "removeInvoiceDetails", null);
__decorate([
    (0, common_1.Get)('/getInvoiceDetailsById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvoiceDetailsController.prototype, "getInvoiceDetailsById", null);
__decorate([
    (0, common_1.Get)('/getInvoiceDetails'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, InvoiceDetailsVo_1.InvoiceDetailsSearchVo]),
    __metadata("design:returntype", Promise)
], InvoiceDetailsController.prototype, "getInvoiceDetails", null);
__decorate([
    (0, common_1.Get)('/getInvoiceDetailsAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InvoiceDetailsVo_1.InvoiceDetailsSearchVo]),
    __metadata("design:returntype", Promise)
], InvoiceDetailsController.prototype, "getInvoiceDetailsAll", null);
__decorate([
    (0, common_1.Get)('/getInvoiceDetailsAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InvoiceDetailsController.prototype, "getInvoiceDetailsAllView", null);
InvoiceDetailsController = __decorate([
    (0, common_1.Controller)('/invoiceDetails')
], InvoiceDetailsController);
exports.InvoiceDetailsController = InvoiceDetailsController;
//# sourceMappingURL=InvoiceDetailsController.js.map