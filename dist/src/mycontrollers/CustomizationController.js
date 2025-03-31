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
exports.CustomizationController = void 0;
const common_1 = require("@nestjs/common");
const CustomizationService_1 = require("../myservices/CustomizationService");
const CustomizationVo_1 = require("../myvo/CustomizationVo");
let CustomizationController = class CustomizationController {
    constructor() {
        this.customizationService = new CustomizationService_1.CustomizationService();
    }
    async createCustomization(CustomizationVo) {
        return this.customizationService.createCustomization(CustomizationVo);
    }
    async updateaCustomization(userToken, Id, CustomizationVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.customizationService.updateaCustomization(Id, userId, CustomizationVo);
    }
    async removeCustomization(Id) {
        return this.customizationService.removeCustomization([Id]);
    }
    async getCustomizationById(Id) {
        return this.customizationService.getCustomizationById(Id);
    }
    async getCustomization(search) {
        return this.customizationService.getCustomization(search);
    }
    async getCustomizationAll(search) {
        return this.customizationService.getCustomizationAll(search);
    }
    async getCustomizationAllView() {
        return this.customizationService.getCustomizationAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createCustomization'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomizationVo_1.CustomizationVo]),
    __metadata("design:returntype", Promise)
], CustomizationController.prototype, "createCustomization", null);
__decorate([
    (0, common_1.Put)('/updateCustomization/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, CustomizationVo_1.CustomizationVo]),
    __metadata("design:returntype", Promise)
], CustomizationController.prototype, "updateaCustomization", null);
__decorate([
    (0, common_1.Get)('/removeCustomization/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomizationController.prototype, "removeCustomization", null);
__decorate([
    (0, common_1.Get)('/getCustomizationById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomizationController.prototype, "getCustomizationById", null);
__decorate([
    (0, common_1.Get)('/getCustomization'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomizationVo_1.CustomizationSearchVo]),
    __metadata("design:returntype", Promise)
], CustomizationController.prototype, "getCustomization", null);
__decorate([
    (0, common_1.Get)('/getCustomizationAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomizationVo_1.CustomizationSearchVo]),
    __metadata("design:returntype", Promise)
], CustomizationController.prototype, "getCustomizationAll", null);
__decorate([
    (0, common_1.Get)('/getCustomizationAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CustomizationController.prototype, "getCustomizationAllView", null);
CustomizationController = __decorate([
    (0, common_1.Controller)('/customization')
], CustomizationController);
exports.CustomizationController = CustomizationController;
//# sourceMappingURL=CustomizationController.js.map