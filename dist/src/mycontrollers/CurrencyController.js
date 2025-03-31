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
exports.CurrencyController = void 0;
const common_1 = require("@nestjs/common");
const CurrencyService_1 = require("../myservices/CurrencyService");
const CurrencyVo_1 = require("../myvo/CurrencyVo");
let CurrencyController = class CurrencyController {
    constructor() {
        this.currencyService = new CurrencyService_1.CurrencyService();
    }
    async createCurrency(CurrencyVo) {
        return this.currencyService.createCurrency(CurrencyVo);
    }
    async updateaCurrency(userToken, Id, CurrencyVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.currencyService.updateaCurrency(Id, userId, CurrencyVo);
    }
    async removeCurrency(Id) {
        return this.currencyService.removeCurrency([Id]);
    }
    async getCurrencyById(Id) {
        return this.currencyService.getCurrencyById(Id);
    }
    async getCurrency(search) {
        return this.currencyService.getCurrency(search);
    }
    async getCurrencyAll(search) {
        return this.currencyService.getCurrencyAll(search);
    }
    async getCurrencyAllView() {
        return this.currencyService.getCurrencyAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createCurrency'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CurrencyVo_1.CurrencyVo]),
    __metadata("design:returntype", Promise)
], CurrencyController.prototype, "createCurrency", null);
__decorate([
    (0, common_1.Put)('/updateCurrency/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, CurrencyVo_1.CurrencyVo]),
    __metadata("design:returntype", Promise)
], CurrencyController.prototype, "updateaCurrency", null);
__decorate([
    (0, common_1.Get)('/removeCurrency/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CurrencyController.prototype, "removeCurrency", null);
__decorate([
    (0, common_1.Get)('/getCurrencyById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CurrencyController.prototype, "getCurrencyById", null);
__decorate([
    (0, common_1.Get)('/getCurrency'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CurrencyVo_1.CurrencySearchVo]),
    __metadata("design:returntype", Promise)
], CurrencyController.prototype, "getCurrency", null);
__decorate([
    (0, common_1.Get)('/getCurrencyAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CurrencyVo_1.CurrencySearchVo]),
    __metadata("design:returntype", Promise)
], CurrencyController.prototype, "getCurrencyAll", null);
__decorate([
    (0, common_1.Get)('/getCurrencyAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CurrencyController.prototype, "getCurrencyAllView", null);
CurrencyController = __decorate([
    (0, common_1.Controller)('/currency')
], CurrencyController);
exports.CurrencyController = CurrencyController;
//# sourceMappingURL=CurrencyController.js.map