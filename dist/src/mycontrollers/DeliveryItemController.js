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
exports.DeliveryItemController = void 0;
const common_1 = require("@nestjs/common");
const DeliveryItemService_1 = require("../myservices/DeliveryItemService");
const DeliveryItemVo_1 = require("../myvo/DeliveryItemVo");
let DeliveryItemController = class DeliveryItemController {
    constructor() {
        this.deliveryItemService = new DeliveryItemService_1.DeliveryItemService();
    }
    async createDeliveryItem(DeliveryItemVo) {
        return this.deliveryItemService.createDeliveryItem(DeliveryItemVo);
    }
    async updateaDeliveryItem(userToken, Id, DeliveryItemVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.deliveryItemService.updateaDeliveryItem(Id, userId, DeliveryItemVo);
    }
    async removeDeliveryItem(Id) {
        return this.deliveryItemService.removeDeliveryItem([Id]);
    }
    async getDeliveryItemById(Id) {
        return this.deliveryItemService.getDeliveryItemById(Id);
    }
    async getDeliveryItem(search) {
        return this.deliveryItemService.getDeliveryItem(search);
    }
    async getDeliveryItemAll(search) {
        return this.deliveryItemService.getDeliveryItemAll(search);
    }
    async getDeliveryItemAllView() {
        return this.deliveryItemService.getDeliveryItemAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createDeliveryItem'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DeliveryItemVo_1.DeliveryItemVo]),
    __metadata("design:returntype", Promise)
], DeliveryItemController.prototype, "createDeliveryItem", null);
__decorate([
    (0, common_1.Put)('/updateDeliveryItem/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, DeliveryItemVo_1.DeliveryItemVo]),
    __metadata("design:returntype", Promise)
], DeliveryItemController.prototype, "updateaDeliveryItem", null);
__decorate([
    (0, common_1.Get)('/removeDeliveryItem/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeliveryItemController.prototype, "removeDeliveryItem", null);
__decorate([
    (0, common_1.Get)('/getDeliveryItemById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeliveryItemController.prototype, "getDeliveryItemById", null);
__decorate([
    (0, common_1.Get)('/getDeliveryItem'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DeliveryItemVo_1.DeliveryItemSearchVo]),
    __metadata("design:returntype", Promise)
], DeliveryItemController.prototype, "getDeliveryItem", null);
__decorate([
    (0, common_1.Get)('/getDeliveryItemAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DeliveryItemVo_1.DeliveryItemSearchVo]),
    __metadata("design:returntype", Promise)
], DeliveryItemController.prototype, "getDeliveryItemAll", null);
__decorate([
    (0, common_1.Get)('/getDeliveryItemAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DeliveryItemController.prototype, "getDeliveryItemAllView", null);
DeliveryItemController = __decorate([
    (0, common_1.Controller)('/deliveryItem')
], DeliveryItemController);
exports.DeliveryItemController = DeliveryItemController;
//# sourceMappingURL=DeliveryItemController.js.map