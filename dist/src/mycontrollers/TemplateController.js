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
exports.TemplateController = void 0;
const common_1 = require("@nestjs/common");
const TemplateService_1 = require("../myservices/TemplateService");
const TemplateVo_1 = require("../myvo/TemplateVo");
let TemplateController = class TemplateController {
    constructor() {
        this.TemplateService = new TemplateService_1.TemplateService();
    }
    async createTemplate(TemplateVo) {
        return this.TemplateService.createTemplate(TemplateVo);
    }
    async updateaTemplate(userToken, Id, TemplateVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.TemplateService.updateaTemplate(Id, userId, TemplateVo);
    }
    async removeTemplate(Id) {
        return this.TemplateService.removeTemplate([Id]);
    }
    async getTemplateById(Id) {
        return this.TemplateService.getTemplateById(Id);
    }
    async getTemplate(search) {
        return this.TemplateService.getTemplate(search);
    }
    async getTemplateAll(search) {
        return this.TemplateService.getTemplateAll(search);
    }
    async getTemplateAllView() {
        return this.TemplateService.getTemplateAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createTemplate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TemplateVo_1.TemplateVo]),
    __metadata("design:returntype", Promise)
], TemplateController.prototype, "createTemplate", null);
__decorate([
    (0, common_1.Put)('/updateTemplate/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, TemplateVo_1.TemplateVo]),
    __metadata("design:returntype", Promise)
], TemplateController.prototype, "updateaTemplate", null);
__decorate([
    (0, common_1.Get)('/removeTemplate/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TemplateController.prototype, "removeTemplate", null);
__decorate([
    (0, common_1.Get)('/getTemplateById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TemplateController.prototype, "getTemplateById", null);
__decorate([
    (0, common_1.Get)('/getTemplate'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TemplateVo_1.TemplateSearchVo]),
    __metadata("design:returntype", Promise)
], TemplateController.prototype, "getTemplate", null);
__decorate([
    (0, common_1.Get)('/getTemplateAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TemplateVo_1.TemplateSearchVo]),
    __metadata("design:returntype", Promise)
], TemplateController.prototype, "getTemplateAll", null);
__decorate([
    (0, common_1.Get)('/getTemplateAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TemplateController.prototype, "getTemplateAllView", null);
TemplateController = __decorate([
    (0, common_1.Controller)('/template')
], TemplateController);
exports.TemplateController = TemplateController;
//# sourceMappingURL=TemplateController.js.map