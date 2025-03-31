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
exports.TranslateController = void 0;
const common_1 = require("@nestjs/common");
const TranslateService_1 = require("../myservices/TranslateService");
const TranslateVo_1 = require("../myvo/TranslateVo");
let TranslateController = class TranslateController {
    constructor() {
        this.translateService = new TranslateService_1.TranslateService();
    }
    async createTranslate(TranslateVo) {
        return this.translateService.createTranslate(TranslateVo);
    }
    async updateaTranslate(userToken, Id, TranslateVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.translateService.updateaTranslate(Id, userId, TranslateVo);
    }
    async removeTranslate(Id) {
        return this.translateService.removeTranslate([Id]);
    }
    async getTranslateById(Id) {
        return this.translateService.getTranslateById(Id);
    }
    async getTranslate(search) {
        return this.translateService.getTranslate(search);
    }
    async getTranslateAll(search) {
        return this.translateService.getTranslateAll(search);
    }
    async getTranslateAllView() {
        return this.translateService.getTranslateAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createTranslate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TranslateVo_1.TranslateVo]),
    __metadata("design:returntype", Promise)
], TranslateController.prototype, "createTranslate", null);
__decorate([
    (0, common_1.Put)('/updateTranslate/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, TranslateVo_1.TranslateVo]),
    __metadata("design:returntype", Promise)
], TranslateController.prototype, "updateaTranslate", null);
__decorate([
    (0, common_1.Get)('/removeTranslate/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TranslateController.prototype, "removeTranslate", null);
__decorate([
    (0, common_1.Get)('/getTranslateById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TranslateController.prototype, "getTranslateById", null);
__decorate([
    (0, common_1.Get)('/getTranslate'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TranslateVo_1.TranslateSearchVo]),
    __metadata("design:returntype", Promise)
], TranslateController.prototype, "getTranslate", null);
__decorate([
    (0, common_1.Get)('/getTranslateAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TranslateVo_1.TranslateSearchVo]),
    __metadata("design:returntype", Promise)
], TranslateController.prototype, "getTranslateAll", null);
__decorate([
    (0, common_1.Get)('/getTranslateAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TranslateController.prototype, "getTranslateAllView", null);
TranslateController = __decorate([
    (0, common_1.Controller)('/translate')
], TranslateController);
exports.TranslateController = TranslateController;
//# sourceMappingURL=TranslateController.js.map