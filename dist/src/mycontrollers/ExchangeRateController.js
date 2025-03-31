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
exports.ExchangeRateController = void 0;
const common_1 = require("@nestjs/common");
const ExchangeRateService_1 = require("../myservices/ExchangeRateService");
const ExchangeRateVo_1 = require("../myvo/ExchangeRateVo");
let ExchangeRateController = class ExchangeRateController {
    constructor() {
        this.exchangeRateService = new ExchangeRateService_1.ExchangeRateService();
    }
    async createExchangeRate(ExchangeRateVo) {
        return this.exchangeRateService.createExchangeRate(ExchangeRateVo);
    }
    async updateaExchangeRate(userToken, Id, ExchangeRateVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.exchangeRateService.updateaExchangeRate(Id, userId, ExchangeRateVo);
    }
    async removeExchangeRate(Id) {
        return this.exchangeRateService.removeExchangeRate([Id]);
    }
    async getExchangeRateById(Id) {
        return this.exchangeRateService.getExchangeRateById(Id);
    }
    async getExchangeRate(search) {
        return this.exchangeRateService.getExchangeRate(search);
    }
    async getExchangeRateAll(search) {
        return this.exchangeRateService.getExchangeRateAll(search);
    }
    async getExchangeRateAllView() {
        return this.exchangeRateService.getExchangeRateAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createExchangeRate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ExchangeRateVo_1.ExchangeRateVo]),
    __metadata("design:returntype", Promise)
], ExchangeRateController.prototype, "createExchangeRate", null);
__decorate([
    (0, common_1.Put)('/updateExchangeRate/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, ExchangeRateVo_1.ExchangeRateVo]),
    __metadata("design:returntype", Promise)
], ExchangeRateController.prototype, "updateaExchangeRate", null);
__decorate([
    (0, common_1.Get)('/removeExchangeRate/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExchangeRateController.prototype, "removeExchangeRate", null);
__decorate([
    (0, common_1.Get)('/getExchangeRateById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExchangeRateController.prototype, "getExchangeRateById", null);
__decorate([
    (0, common_1.Get)('/getExchangeRate'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ExchangeRateVo_1.ExchangeRateSearchVo]),
    __metadata("design:returntype", Promise)
], ExchangeRateController.prototype, "getExchangeRate", null);
__decorate([
    (0, common_1.Get)('/getExchangeRateAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ExchangeRateVo_1.ExchangeRateSearchVo]),
    __metadata("design:returntype", Promise)
], ExchangeRateController.prototype, "getExchangeRateAll", null);
__decorate([
    (0, common_1.Get)('/getExchangeRateAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExchangeRateController.prototype, "getExchangeRateAllView", null);
ExchangeRateController = __decorate([
    (0, common_1.Controller)('/exchangeRate')
], ExchangeRateController);
exports.ExchangeRateController = ExchangeRateController;
//# sourceMappingURL=ExchangeRateController.js.map