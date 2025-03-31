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
exports.PurchaseOrderController = void 0;
const common_1 = require("@nestjs/common");
const PurchaseOrderService_1 = require("../myservices/PurchaseOrderService");
const PurchaseOrderVo_1 = require("../myvo/PurchaseOrderVo");
let PurchaseOrderController = class PurchaseOrderController {
    constructor() {
        this.purchaseOrderService = new PurchaseOrderService_1.PurchaseOrderService();
    }
    async createPurchaseOrder(PurchaseOrderVo) {
        return this.purchaseOrderService.createPurchaseOrder(PurchaseOrderVo);
    }
    async updateaPurchaseOrder(userToken, Id, PurchaseOrderVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.purchaseOrderService.updateaPurchaseOrder(Id, userId, PurchaseOrderVo);
    }
    async removePurchaseOrder(Id) {
        return this.purchaseOrderService.removePurchaseOrder([Id]);
    }
    async getPurchaseOrderById(Id) {
        return this.purchaseOrderService.getPurchaseOrderById(Id);
    }
    async getPurchaseOrder(userToken, search) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.purchaseOrderService.getPurchaseOrder(userId, search);
    }
    async getPurchaseOrderAll(search) {
        return this.purchaseOrderService.getPurchaseOrderAll(search);
    }
    async getPurchaseOrderAllView() {
        return this.purchaseOrderService.getPurchaseOrderAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createPurchaseOrder'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PurchaseOrderVo_1.PurchaseOrderVo]),
    __metadata("design:returntype", Promise)
], PurchaseOrderController.prototype, "createPurchaseOrder", null);
__decorate([
    (0, common_1.Put)('/updatePurchaseOrder/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, PurchaseOrderVo_1.PurchaseOrderVo]),
    __metadata("design:returntype", Promise)
], PurchaseOrderController.prototype, "updateaPurchaseOrder", null);
__decorate([
    (0, common_1.Get)('/removePurchaseOrder/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PurchaseOrderController.prototype, "removePurchaseOrder", null);
__decorate([
    (0, common_1.Get)('/getPurchaseOrderById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PurchaseOrderController.prototype, "getPurchaseOrderById", null);
__decorate([
    (0, common_1.Get)('/getPurchaseOrder'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, PurchaseOrderVo_1.PurchaseOrderSearchVo]),
    __metadata("design:returntype", Promise)
], PurchaseOrderController.prototype, "getPurchaseOrder", null);
__decorate([
    (0, common_1.Get)('/getPurchaseOrderAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PurchaseOrderVo_1.PurchaseOrderSearchVo]),
    __metadata("design:returntype", Promise)
], PurchaseOrderController.prototype, "getPurchaseOrderAll", null);
__decorate([
    (0, common_1.Get)('/getPurchaseOrderAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PurchaseOrderController.prototype, "getPurchaseOrderAllView", null);
PurchaseOrderController = __decorate([
    (0, common_1.Controller)('/purchaseOrder')
], PurchaseOrderController);
exports.PurchaseOrderController = PurchaseOrderController;
//# sourceMappingURL=PurchaseOrderController.js.map