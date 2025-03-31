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
exports.WarrantyController = void 0;
const common_1 = require("@nestjs/common");
const WarrantyService_1 = require("../myservices/WarrantyService");
const WarrantyVo_1 = require("../myvo/WarrantyVo");
let WarrantyController = class WarrantyController {
    constructor() {
        this.warrantyService = new WarrantyService_1.WarrantyService();
    }
    async createWarranty(WarrantyVo) {
        return this.warrantyService.createWarranty(WarrantyVo);
    }
    async updateaWarranty(userToken, Id, WarrantyVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.warrantyService.updateaWarranty(Id, userId, WarrantyVo);
    }
    async removeWarranty(Id) {
        return this.warrantyService.removeWarranty([Id]);
    }
    async getWarrantyById(Id) {
        return this.warrantyService.getWarrantyById(Id);
    }
    async getWarranty(search) {
        return this.warrantyService.getWarranty(search);
    }
    async getWarrantyAll(search) {
        return this.warrantyService.getWarrantyAll(search);
    }
    async getWarrantyAllView() {
        return this.warrantyService.getWarrantyAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createWarranty'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WarrantyVo_1.WarrantyVo]),
    __metadata("design:returntype", Promise)
], WarrantyController.prototype, "createWarranty", null);
__decorate([
    (0, common_1.Put)('/updateWarranty/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, WarrantyVo_1.WarrantyVo]),
    __metadata("design:returntype", Promise)
], WarrantyController.prototype, "updateaWarranty", null);
__decorate([
    (0, common_1.Get)('/removeWarranty/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WarrantyController.prototype, "removeWarranty", null);
__decorate([
    (0, common_1.Get)('/getWarrantyById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WarrantyController.prototype, "getWarrantyById", null);
__decorate([
    (0, common_1.Get)('/getWarranty'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WarrantyVo_1.WarrantySearchVo]),
    __metadata("design:returntype", Promise)
], WarrantyController.prototype, "getWarranty", null);
__decorate([
    (0, common_1.Get)('/getWarrantyAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WarrantyVo_1.WarrantySearchVo]),
    __metadata("design:returntype", Promise)
], WarrantyController.prototype, "getWarrantyAll", null);
__decorate([
    (0, common_1.Get)('/getWarrantyAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WarrantyController.prototype, "getWarrantyAllView", null);
WarrantyController = __decorate([
    (0, common_1.Controller)('/warranty')
], WarrantyController);
exports.WarrantyController = WarrantyController;
//# sourceMappingURL=WarrantyController.js.map