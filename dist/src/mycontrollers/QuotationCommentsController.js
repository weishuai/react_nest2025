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
exports.QuotationCommentsController = void 0;
const common_1 = require("@nestjs/common");
const QuotationCommentsService_1 = require("../myservices/QuotationCommentsService");
const QuotationCommentsVo_1 = require("../myvo/QuotationCommentsVo");
let QuotationCommentsController = class QuotationCommentsController {
    constructor() {
        this.quotationCommentsService = new QuotationCommentsService_1.QuotationCommentsService();
    }
    async createQuotationComments(quotationCommentsVo) {
        return this.quotationCommentsService.createQuotationComments(quotationCommentsVo);
    }
    async updateaQuotationComments(userToken, Id, QuotationCommentsVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.quotationCommentsService.updateaQuotationComments(Id, userId, QuotationCommentsVo);
    }
    async removeQuotationComments(Id) {
        return this.quotationCommentsService.removeQuotationComments([Id]);
    }
    async getQuotationCommentsById(Id) {
        return this.quotationCommentsService.getQuotationCommentsById(Id);
    }
    async getQuotationComments(search) {
        return this.quotationCommentsService.getQuotationComments(search);
    }
    async getQuotationCommentsAll(search) {
        return this.quotationCommentsService.getQuotationCommentsAll(search);
    }
    async getQuotationCommentsAllView() {
        return this.quotationCommentsService.getQuotationCommentsAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createQuotationComments'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [QuotationCommentsVo_1.QuotationCommentsVo]),
    __metadata("design:returntype", Promise)
], QuotationCommentsController.prototype, "createQuotationComments", null);
__decorate([
    (0, common_1.Put)('/updateQuotationComments/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, QuotationCommentsVo_1.QuotationCommentsVo]),
    __metadata("design:returntype", Promise)
], QuotationCommentsController.prototype, "updateaQuotationComments", null);
__decorate([
    (0, common_1.Get)('/removeQuotationComments/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuotationCommentsController.prototype, "removeQuotationComments", null);
__decorate([
    (0, common_1.Get)('/getQuotationCommentsById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuotationCommentsController.prototype, "getQuotationCommentsById", null);
__decorate([
    (0, common_1.Get)('/getQuotationComments'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [QuotationCommentsVo_1.QuotationCommentsSearchVo]),
    __metadata("design:returntype", Promise)
], QuotationCommentsController.prototype, "getQuotationComments", null);
__decorate([
    (0, common_1.Get)('/getQuotationCommentsAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [QuotationCommentsVo_1.QuotationCommentsSearchVo]),
    __metadata("design:returntype", Promise)
], QuotationCommentsController.prototype, "getQuotationCommentsAll", null);
__decorate([
    (0, common_1.Get)('/getQuotationCommentsAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuotationCommentsController.prototype, "getQuotationCommentsAllView", null);
QuotationCommentsController = __decorate([
    (0, common_1.Controller)('/quotationComments')
], QuotationCommentsController);
exports.QuotationCommentsController = QuotationCommentsController;
//# sourceMappingURL=QuotationCommentsController.js.map