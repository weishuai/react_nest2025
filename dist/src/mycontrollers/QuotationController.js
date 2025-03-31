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
exports.QuotationController = void 0;
const common_1 = require("@nestjs/common");
const QuotationService_1 = require("../myservices/QuotationService");
const QuotationVo_1 = require("../myvo/QuotationVo");
let QuotationController = class QuotationController {
    constructor() {
        this.quotationService = new QuotationService_1.QuotationService();
    }
    async createQuotation(QuotationVo) {
        return this.quotationService.createQuotation(QuotationVo);
    }
    async updateaQuotation(userToken, Id, QuotationVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.quotationService.updateaQuotation(Id, userId, QuotationVo);
    }
    async removeQuotation(Id) {
        return this.quotationService.removeQuotation([Id]);
    }
    async getQuotationById(Id) {
        return this.quotationService.getQuotationById(Id);
    }
    async getQuotation(userToken, search) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.quotationService.getQuotation(userId, search);
    }
    async getQuotationSQL(userToken, search) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.quotationService.getQuotationSQL(userId, search);
    }
    async getquotationSQLList(userToken, search) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.quotationService.getquotationSQLList(userId, search);
    }
    async getQuotationAll(search) {
        return this.quotationService.getQuotationAll(search);
    }
    async getQuotationAllView() {
        return this.quotationService.getQuotationAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createQuotation'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [QuotationVo_1.QuotationVo]),
    __metadata("design:returntype", Promise)
], QuotationController.prototype, "createQuotation", null);
__decorate([
    (0, common_1.Put)('/updateQuotation/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, QuotationVo_1.QuotationVo]),
    __metadata("design:returntype", Promise)
], QuotationController.prototype, "updateaQuotation", null);
__decorate([
    (0, common_1.Get)('/removeQuotation/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuotationController.prototype, "removeQuotation", null);
__decorate([
    (0, common_1.Get)('/getQuotationById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuotationController.prototype, "getQuotationById", null);
__decorate([
    (0, common_1.Get)('/getQuotation'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, QuotationVo_1.QuotationSearchVo]),
    __metadata("design:returntype", Promise)
], QuotationController.prototype, "getQuotation", null);
__decorate([
    (0, common_1.Get)('/getQuotationSQL'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, QuotationVo_1.FHQuotationSearchVo]),
    __metadata("design:returntype", Promise)
], QuotationController.prototype, "getQuotationSQL", null);
__decorate([
    (0, common_1.Get)('/getquotationSQLList'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, QuotationVo_1.QuotationSearchVo]),
    __metadata("design:returntype", Promise)
], QuotationController.prototype, "getquotationSQLList", null);
__decorate([
    (0, common_1.Get)('/getQuotationAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [QuotationVo_1.QuotationSearchVo]),
    __metadata("design:returntype", Promise)
], QuotationController.prototype, "getQuotationAll", null);
__decorate([
    (0, common_1.Get)('/getQuotationAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuotationController.prototype, "getQuotationAllView", null);
QuotationController = __decorate([
    (0, common_1.Controller)('/quotation')
], QuotationController);
exports.QuotationController = QuotationController;
//# sourceMappingURL=QuotationController.js.map