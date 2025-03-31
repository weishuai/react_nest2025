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
exports.TermsController = void 0;
const common_1 = require("@nestjs/common");
const TermsService_1 = require("../myservices/TermsService");
const TermsVo_1 = require("../myvo/TermsVo");
let TermsController = class TermsController {
    constructor() {
        this.termsService = new TermsService_1.TermsService();
    }
    async createTerms(TermsVo) {
        return this.termsService.createTerms(TermsVo);
    }
    async updateaTerms(userToken, Id, TermsVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.termsService.updateaTerms(Id, userId, TermsVo);
    }
    async removeTerms(Id) {
        return this.termsService.removeTerms([Id]);
    }
    async getTermsById(Id) {
        return this.termsService.getTermsById(Id);
    }
    async getTerms(search) {
        return this.termsService.getTerms(search);
    }
    async getTermsAll(search) {
        return this.termsService.getTermsAll(search);
    }
    async getTermsAllView() {
        return this.termsService.getTermsAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createTerms'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TermsVo_1.TermsVo]),
    __metadata("design:returntype", Promise)
], TermsController.prototype, "createTerms", null);
__decorate([
    (0, common_1.Put)('/updateTerms/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, TermsVo_1.TermsVo]),
    __metadata("design:returntype", Promise)
], TermsController.prototype, "updateaTerms", null);
__decorate([
    (0, common_1.Get)('/removeTerms/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TermsController.prototype, "removeTerms", null);
__decorate([
    (0, common_1.Get)('/getTermsById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TermsController.prototype, "getTermsById", null);
__decorate([
    (0, common_1.Get)('/getTerms'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TermsVo_1.TermsSearchVo]),
    __metadata("design:returntype", Promise)
], TermsController.prototype, "getTerms", null);
__decorate([
    (0, common_1.Get)('/getTermsAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TermsVo_1.TermsSearchVo]),
    __metadata("design:returntype", Promise)
], TermsController.prototype, "getTermsAll", null);
__decorate([
    (0, common_1.Get)('/getTermsAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TermsController.prototype, "getTermsAllView", null);
TermsController = __decorate([
    (0, common_1.Controller)('/terms')
], TermsController);
exports.TermsController = TermsController;
//# sourceMappingURL=TermsController.js.map