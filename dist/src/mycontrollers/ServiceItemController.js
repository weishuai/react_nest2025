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
exports.ServiceItemController = void 0;
const common_1 = require("@nestjs/common");
const ServiceItemService_1 = require("../myservices/ServiceItemService");
const ServiceItemVo_1 = require("../myvo/ServiceItemVo");
let ServiceItemController = class ServiceItemController {
    constructor() {
        this.serviceItemService = new ServiceItemService_1.ServiceItemService();
    }
    async createServiceItem(ServiceItemVo) {
        return this.serviceItemService.createServiceItem(ServiceItemVo);
    }
    async updateaServiceItem(userToken, Id, ServiceItemVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.serviceItemService.updateaServiceItem(Id, userId, ServiceItemVo);
    }
    async removeServiceItem(Id) {
        return this.serviceItemService.removeServiceItem([Id]);
    }
    async getServiceItemById(Id) {
        return this.serviceItemService.getServiceItemById(Id);
    }
    async getServiceItem(search) {
        return this.serviceItemService.getServiceItem(search);
    }
    async getServiceItemAll(search) {
        return this.serviceItemService.getServiceItemAll(search);
    }
    async getServiceItemAllView() {
        return this.serviceItemService.getServiceItemAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createServiceItem'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ServiceItemVo_1.ServiceItemVo]),
    __metadata("design:returntype", Promise)
], ServiceItemController.prototype, "createServiceItem", null);
__decorate([
    (0, common_1.Put)('/updateServiceItem/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, ServiceItemVo_1.ServiceItemVo]),
    __metadata("design:returntype", Promise)
], ServiceItemController.prototype, "updateaServiceItem", null);
__decorate([
    (0, common_1.Get)('/removeServiceItem/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiceItemController.prototype, "removeServiceItem", null);
__decorate([
    (0, common_1.Get)('/getServiceItemById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiceItemController.prototype, "getServiceItemById", null);
__decorate([
    (0, common_1.Get)('/getServiceItem'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ServiceItemVo_1.ServiceItemSearchVo]),
    __metadata("design:returntype", Promise)
], ServiceItemController.prototype, "getServiceItem", null);
__decorate([
    (0, common_1.Get)('/getServiceItemAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ServiceItemVo_1.ServiceItemSearchVo]),
    __metadata("design:returntype", Promise)
], ServiceItemController.prototype, "getServiceItemAll", null);
__decorate([
    (0, common_1.Get)('/getServiceItemAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ServiceItemController.prototype, "getServiceItemAllView", null);
ServiceItemController = __decorate([
    (0, common_1.Controller)('/serviceItem')
], ServiceItemController);
exports.ServiceItemController = ServiceItemController;
//# sourceMappingURL=ServiceItemController.js.map