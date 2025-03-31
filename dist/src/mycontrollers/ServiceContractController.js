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
exports.ServiceContractController = void 0;
const common_1 = require("@nestjs/common");
const ServiceContractService_1 = require("../myservices/ServiceContractService");
const ServiceContractVo_1 = require("../myvo/ServiceContractVo");
let ServiceContractController = class ServiceContractController {
    constructor() {
        this.serviceContractService = new ServiceContractService_1.ServiceContractService();
    }
    async createServiceContract(ServiceContractVo) {
        return this.serviceContractService.createServiceContract(ServiceContractVo);
    }
    async updateaServiceContract(userToken, Id, ServiceContractVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.serviceContractService.updateaServiceContract(Id, userId, ServiceContractVo);
    }
    async removeServiceContract(Id) {
        return this.serviceContractService.removeServiceContract([Id]);
    }
    async getServiceContractById(Id) {
        return this.serviceContractService.getServiceContractById(Id);
    }
    async getServiceContract(userToken, search) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.serviceContractService.getServiceContract(userId, search);
    }
    async getServiceContractAll(search) {
        return this.serviceContractService.getServiceContractAll(search);
    }
    async getServiceContractAllView() {
        return this.serviceContractService.getServiceContractAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createServiceContract'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ServiceContractVo_1.ServiceContractVo]),
    __metadata("design:returntype", Promise)
], ServiceContractController.prototype, "createServiceContract", null);
__decorate([
    (0, common_1.Put)('/updateServiceContract/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, ServiceContractVo_1.ServiceContractVo]),
    __metadata("design:returntype", Promise)
], ServiceContractController.prototype, "updateaServiceContract", null);
__decorate([
    (0, common_1.Get)('/removeServiceContract/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiceContractController.prototype, "removeServiceContract", null);
__decorate([
    (0, common_1.Get)('/getServiceContractById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiceContractController.prototype, "getServiceContractById", null);
__decorate([
    (0, common_1.Get)('/getServiceContract'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ServiceContractVo_1.ServiceContractSearchVo]),
    __metadata("design:returntype", Promise)
], ServiceContractController.prototype, "getServiceContract", null);
__decorate([
    (0, common_1.Get)('/getServiceContractAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ServiceContractVo_1.ServiceContractSearchVo]),
    __metadata("design:returntype", Promise)
], ServiceContractController.prototype, "getServiceContractAll", null);
__decorate([
    (0, common_1.Get)('/getServiceContractAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ServiceContractController.prototype, "getServiceContractAllView", null);
ServiceContractController = __decorate([
    (0, common_1.Controller)('/serviceContract')
], ServiceContractController);
exports.ServiceContractController = ServiceContractController;
//# sourceMappingURL=ServiceContractController.js.map