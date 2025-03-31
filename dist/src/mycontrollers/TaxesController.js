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
exports.TaxesController = void 0;
const common_1 = require("@nestjs/common");
const TaxesService_1 = require("../myservices/TaxesService");
const TaxesVo_1 = require("../myvo/TaxesVo");
let TaxesController = class TaxesController {
    constructor() {
        this.taxesService = new TaxesService_1.TaxesService();
    }
    async createTaxes(TaxesVo) {
        return this.taxesService.createTaxes(TaxesVo);
    }
    async updateaTaxes(userToken, Id, TaxesVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.taxesService.updateaTaxes(Id, userId, TaxesVo);
    }
    async removeTaxes(Id) {
        return this.taxesService.removeTaxes([Id]);
    }
    async getTaxesById(Id) {
        return this.taxesService.getTaxesById(Id);
    }
    async getTaxes(search) {
        return this.taxesService.getTaxes(search);
    }
    async getTaxesAll(search) {
        return this.taxesService.getTaxesAll(search);
    }
    async getTaxesAllView() {
        return this.taxesService.getTaxesAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createTaxes'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TaxesVo_1.TaxesVo]),
    __metadata("design:returntype", Promise)
], TaxesController.prototype, "createTaxes", null);
__decorate([
    (0, common_1.Put)('/updateTaxes/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, TaxesVo_1.TaxesVo]),
    __metadata("design:returntype", Promise)
], TaxesController.prototype, "updateaTaxes", null);
__decorate([
    (0, common_1.Get)('/removeTaxes/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaxesController.prototype, "removeTaxes", null);
__decorate([
    (0, common_1.Get)('/getTaxesById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaxesController.prototype, "getTaxesById", null);
__decorate([
    (0, common_1.Get)('/getTaxes'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TaxesVo_1.TaxesSearchVo]),
    __metadata("design:returntype", Promise)
], TaxesController.prototype, "getTaxes", null);
__decorate([
    (0, common_1.Get)('/getTaxesAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TaxesVo_1.TaxesSearchVo]),
    __metadata("design:returntype", Promise)
], TaxesController.prototype, "getTaxesAll", null);
__decorate([
    (0, common_1.Get)('/getTaxesAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaxesController.prototype, "getTaxesAllView", null);
TaxesController = __decorate([
    (0, common_1.Controller)('/taxes')
], TaxesController);
exports.TaxesController = TaxesController;
//# sourceMappingURL=TaxesController.js.map