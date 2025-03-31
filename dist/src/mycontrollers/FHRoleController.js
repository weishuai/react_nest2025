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
exports.FHRoleController = void 0;
const common_1 = require("@nestjs/common");
const FHRoleService_1 = require("../myservices/FHRoleService");
const FHRoleVo_1 = require("../myvo/FHRoleVo");
let FHRoleController = class FHRoleController {
    constructor() {
        this.fhroleService = new FHRoleService_1.FHRoleService();
    }
    async createFHRole(FHRoleVo) {
        return this.fhroleService.createFHRole(FHRoleVo);
    }
    async updateaFHRole(userToken, Id, FHRoleVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.fhroleService.updateaFHRole(Id, userId, FHRoleVo);
    }
    async removeFHRole(Id) {
        return this.fhroleService.removeFHRole([Id]);
    }
    async getFHRoleById(Id) {
        return this.fhroleService.getFHRoleById(Id);
    }
    async getFHRole(search) {
        return this.fhroleService.getFHRole(search);
    }
    async getFHRoleAll(search) {
        return this.fhroleService.getFHRoleAll(search);
    }
    async getFHRoleAllView() {
        return this.fhroleService.getFHRoleAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createFHRole'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FHRoleVo_1.FHRoleVo]),
    __metadata("design:returntype", Promise)
], FHRoleController.prototype, "createFHRole", null);
__decorate([
    (0, common_1.Put)('/updateFHRole/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, FHRoleVo_1.FHRoleVo]),
    __metadata("design:returntype", Promise)
], FHRoleController.prototype, "updateaFHRole", null);
__decorate([
    (0, common_1.Get)('/removeFHRole/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FHRoleController.prototype, "removeFHRole", null);
__decorate([
    (0, common_1.Get)('/getFHRoleById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FHRoleController.prototype, "getFHRoleById", null);
__decorate([
    (0, common_1.Get)('/getFHRole'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FHRoleVo_1.FHRoleSearchVo]),
    __metadata("design:returntype", Promise)
], FHRoleController.prototype, "getFHRole", null);
__decorate([
    (0, common_1.Get)('/getFHRoleAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FHRoleVo_1.FHRoleSearchVo]),
    __metadata("design:returntype", Promise)
], FHRoleController.prototype, "getFHRoleAll", null);
__decorate([
    (0, common_1.Get)('/getFHRoleAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FHRoleController.prototype, "getFHRoleAllView", null);
FHRoleController = __decorate([
    (0, common_1.Controller)('/fhrole')
], FHRoleController);
exports.FHRoleController = FHRoleController;
//# sourceMappingURL=FHRoleController.js.map