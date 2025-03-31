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
exports.DeliveryOrderController = void 0;
const common_1 = require("@nestjs/common");
const DeliveryOrderService_1 = require("../myservices/DeliveryOrderService");
const DeliveryOrderVo_1 = require("../myvo/DeliveryOrderVo");
let DeliveryOrderController = class DeliveryOrderController {
    constructor() {
        this.deliveryOrderService = new DeliveryOrderService_1.DeliveryOrderService();
    }
    async createDeliveryOrder(DeliveryOrderVo) {
        return this.deliveryOrderService.createDeliveryOrder(DeliveryOrderVo);
    }
    async updateaDeliveryOrder(userToken, Id, DeliveryOrderVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.deliveryOrderService.updateaDeliveryOrder(Id, userId, DeliveryOrderVo);
    }
    async removeDeliveryOrder(Id) {
        return this.deliveryOrderService.removeDeliveryOrder([Id]);
    }
    async getDeliveryOrderById(Id) {
        return this.deliveryOrderService.getDeliveryOrderById(Id);
    }
    async getDeliveryOrder(userToken, search) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.deliveryOrderService.getDeliveryOrder(userId, search);
    }
    async getDeliveryOrderAll(search) {
        return this.deliveryOrderService.getDeliveryOrderAll(search);
    }
    async getDeliveryOrderAllView() {
        return this.deliveryOrderService.getDeliveryOrderAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createDeliveryOrder'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DeliveryOrderVo_1.DeliveryOrderVo]),
    __metadata("design:returntype", Promise)
], DeliveryOrderController.prototype, "createDeliveryOrder", null);
__decorate([
    (0, common_1.Put)('/updateDeliveryOrder/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, DeliveryOrderVo_1.DeliveryOrderVo]),
    __metadata("design:returntype", Promise)
], DeliveryOrderController.prototype, "updateaDeliveryOrder", null);
__decorate([
    (0, common_1.Get)('/removeDeliveryOrder/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeliveryOrderController.prototype, "removeDeliveryOrder", null);
__decorate([
    (0, common_1.Get)('/getDeliveryOrderById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeliveryOrderController.prototype, "getDeliveryOrderById", null);
__decorate([
    (0, common_1.Get)('/getDeliveryOrder'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, DeliveryOrderVo_1.DeliveryOrderSearchVo]),
    __metadata("design:returntype", Promise)
], DeliveryOrderController.prototype, "getDeliveryOrder", null);
__decorate([
    (0, common_1.Get)('/getDeliveryOrderAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DeliveryOrderVo_1.DeliveryOrderSearchVo]),
    __metadata("design:returntype", Promise)
], DeliveryOrderController.prototype, "getDeliveryOrderAll", null);
__decorate([
    (0, common_1.Get)('/getDeliveryOrderAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DeliveryOrderController.prototype, "getDeliveryOrderAllView", null);
DeliveryOrderController = __decorate([
    (0, common_1.Controller)('/deliveryOrder')
], DeliveryOrderController);
exports.DeliveryOrderController = DeliveryOrderController;
//# sourceMappingURL=DeliveryOrderController.js.map