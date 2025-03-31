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
exports.InvoiceItemController = void 0;
const common_1 = require("@nestjs/common");
const InvoiceItemService_1 = require("../myservices/InvoiceItemService");
const InvoiceItemVo_1 = require("../myvo/InvoiceItemVo");
let InvoiceItemController = class InvoiceItemController {
    constructor() {
        this.invoiceItemService = new InvoiceItemService_1.InvoiceItemService();
    }
    async createInvoiceItem(InvoiceItemVo) {
        return this.invoiceItemService.createInvoiceItem(InvoiceItemVo);
    }
    async updateaInvoiceItem(userToken, Id, InvoiceItemVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.invoiceItemService.updateaInvoiceItem(Id, userId, InvoiceItemVo);
    }
    async removeInvoiceItem(Id) {
        return this.invoiceItemService.removeInvoiceItem([Id]);
    }
    async removeToInvoiceItem(Id) {
        return this.invoiceItemService.removeToInvoiceItem(Id);
    }
    async getInvoiceItemById(Id) {
        return this.invoiceItemService.getInvoiceItemById(Id);
    }
    async getInvoiceItem(search) {
        return this.invoiceItemService.getInvoiceItem(search);
    }
    async getInvoiceItemAll(search) {
        return this.invoiceItemService.getInvoiceItemAll(search);
    }
    async getInvoiceItemAllView() {
        return this.invoiceItemService.getInvoiceItemAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createInvoiceItem'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InvoiceItemVo_1.InvoiceItemVo]),
    __metadata("design:returntype", Promise)
], InvoiceItemController.prototype, "createInvoiceItem", null);
__decorate([
    (0, common_1.Put)('/updateInvoiceItem/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, InvoiceItemVo_1.InvoiceItemVo]),
    __metadata("design:returntype", Promise)
], InvoiceItemController.prototype, "updateaInvoiceItem", null);
__decorate([
    (0, common_1.Get)('/removeInvoiceItem/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvoiceItemController.prototype, "removeInvoiceItem", null);
__decorate([
    (0, common_1.Get)('/removeToInvoiceItem/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvoiceItemController.prototype, "removeToInvoiceItem", null);
__decorate([
    (0, common_1.Get)('/getInvoiceItemById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvoiceItemController.prototype, "getInvoiceItemById", null);
__decorate([
    (0, common_1.Get)('/getInvoiceItem'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InvoiceItemVo_1.InvoiceItemSearchVo]),
    __metadata("design:returntype", Promise)
], InvoiceItemController.prototype, "getInvoiceItem", null);
__decorate([
    (0, common_1.Get)('/getInvoiceItemAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InvoiceItemVo_1.InvoiceItemSearchVo]),
    __metadata("design:returntype", Promise)
], InvoiceItemController.prototype, "getInvoiceItemAll", null);
__decorate([
    (0, common_1.Get)('/getInvoiceItemAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InvoiceItemController.prototype, "getInvoiceItemAllView", null);
InvoiceItemController = __decorate([
    (0, common_1.Controller)('/invoiceItem')
], InvoiceItemController);
exports.InvoiceItemController = InvoiceItemController;
//# sourceMappingURL=InvoiceItemController.js.map