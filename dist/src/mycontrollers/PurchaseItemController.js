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
exports.PurchaseItemController = void 0;
const common_1 = require("@nestjs/common");
const PurchaseItemService_1 = require("../myservices/PurchaseItemService");
const PurchaseItemVo_1 = require("../myvo/PurchaseItemVo");
let PurchaseItemController = class PurchaseItemController {
    constructor() {
        this.purchaseItemService = new PurchaseItemService_1.PurchaseItemService();
    }
    async createPurchaseItem(PurchaseItemVo) {
        return this.purchaseItemService.createPurchaseItem(PurchaseItemVo);
    }
    async updateaPurchaseItem(userToken, Id, PurchaseItemVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.purchaseItemService.updateaPurchaseItem(Id, userId, PurchaseItemVo);
    }
    async removePurchaseItem(Id) {
        return this.purchaseItemService.removePurchaseItem([Id]);
    }
    async getPurchaseItemById(Id) {
        return this.purchaseItemService.getPurchaseItemById(Id);
    }
    async getPurchaseItem(search) {
        return this.purchaseItemService.getPurchaseItem(search);
    }
    async getPurchaseItemAll(search) {
        return this.purchaseItemService.getPurchaseItemAll(search);
    }
    async getPurchaseItemAllView() {
        return this.purchaseItemService.getPurchaseItemAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createPurchaseItem'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PurchaseItemVo_1.PurchaseItemVo]),
    __metadata("design:returntype", Promise)
], PurchaseItemController.prototype, "createPurchaseItem", null);
__decorate([
    (0, common_1.Put)('/updatePurchaseItem/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, PurchaseItemVo_1.PurchaseItemVo]),
    __metadata("design:returntype", Promise)
], PurchaseItemController.prototype, "updateaPurchaseItem", null);
__decorate([
    (0, common_1.Get)('/removePurchaseItem/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PurchaseItemController.prototype, "removePurchaseItem", null);
__decorate([
    (0, common_1.Get)('/getPurchaseItemById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PurchaseItemController.prototype, "getPurchaseItemById", null);
__decorate([
    (0, common_1.Get)('/getPurchaseItem'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PurchaseItemVo_1.PurchaseItemSearchVo]),
    __metadata("design:returntype", Promise)
], PurchaseItemController.prototype, "getPurchaseItem", null);
__decorate([
    (0, common_1.Get)('/getPurchaseItemAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PurchaseItemVo_1.PurchaseItemSearchVo]),
    __metadata("design:returntype", Promise)
], PurchaseItemController.prototype, "getPurchaseItemAll", null);
__decorate([
    (0, common_1.Get)('/getPurchaseItemAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PurchaseItemController.prototype, "getPurchaseItemAllView", null);
PurchaseItemController = __decorate([
    (0, common_1.Controller)('/purchaseItem')
], PurchaseItemController);
exports.PurchaseItemController = PurchaseItemController;
//# sourceMappingURL=PurchaseItemController.js.map