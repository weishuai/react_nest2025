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
exports.LanguageController = void 0;
const common_1 = require("@nestjs/common");
const LanguageService_1 = require("../myservices/LanguageService");
const LanguageVo_1 = require("../myvo/LanguageVo");
let LanguageController = class LanguageController {
    constructor() {
        this.languageService = new LanguageService_1.LanguageService();
    }
    async createLanguage(LanguageVo) {
        return this.languageService.createLanguage(LanguageVo);
    }
    async updateaLanguage(userToken, Id, LanguageVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.languageService.updateaLanguage(Id, userId, LanguageVo);
    }
    async removeLanguage(Id) {
        return this.languageService.removeLanguage([Id]);
    }
    async getLanguageById(Id) {
        return this.languageService.getLanguageById(Id);
    }
    async getLanguage(search) {
        return this.languageService.getLanguage(search);
    }
    async getLanguageAll(search) {
        return this.languageService.getLanguageAll(search);
    }
    async getLanguageAllView() {
        return this.languageService.getLanguageAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createLanguage'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LanguageVo_1.LanguageVo]),
    __metadata("design:returntype", Promise)
], LanguageController.prototype, "createLanguage", null);
__decorate([
    (0, common_1.Put)('/updateLanguage/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, LanguageVo_1.LanguageVo]),
    __metadata("design:returntype", Promise)
], LanguageController.prototype, "updateaLanguage", null);
__decorate([
    (0, common_1.Get)('/removeLanguage/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LanguageController.prototype, "removeLanguage", null);
__decorate([
    (0, common_1.Get)('/getLanguageById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LanguageController.prototype, "getLanguageById", null);
__decorate([
    (0, common_1.Get)('/getLanguage'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LanguageVo_1.LanguageSearchVo]),
    __metadata("design:returntype", Promise)
], LanguageController.prototype, "getLanguage", null);
__decorate([
    (0, common_1.Get)('/getLanguageAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LanguageVo_1.LanguageSearchVo]),
    __metadata("design:returntype", Promise)
], LanguageController.prototype, "getLanguageAll", null);
__decorate([
    (0, common_1.Get)('/getLanguageAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LanguageController.prototype, "getLanguageAllView", null);
LanguageController = __decorate([
    (0, common_1.Controller)('/language')
], LanguageController);
exports.LanguageController = LanguageController;
//# sourceMappingURL=LanguageController.js.map