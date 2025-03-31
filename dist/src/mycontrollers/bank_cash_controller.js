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
exports.BankCashController = void 0;
const common_1 = require("@nestjs/common");
const bank_cash_service_1 = require("../myservices/bank_cash_service");
const bank_cash_vo_1 = require("../myvo/bank_cash_vo");
let BankCashController = class BankCashController {
    constructor() {
        this.bankCashService = new bank_cash_service_1.BankCashService();
    }
    async createBankCash(bankCashVo) {
        console.log('Body: ', bankCashVo);
        return await this.bankCashService.createBankCash(bankCashVo);
    }
    async updateaBankCash(userToken, Id, bankCashVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('BankCashVo: ', bankCashVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.bankCashService.updateaBankCash(Id, userId, bankCashVo);
    }
    async removeBankCash(Id) {
        return await this.bankCashService.removeBankCash(Id);
    }
    async getBankCashById(Id) {
        return await this.bankCashService.getBankCashById(Id);
    }
    async getBankCashList(query) {
        console.log('query: ', query);
        const search = new bank_cash_vo_1.BankCashSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.bankCashService.getBankCashList(search);
    }
    async getBankCashAll() {
        return await this.bankCashService.getBankCashAll();
    }
    async getBankCashAllView() {
        return await this.bankCashService.getBankCashAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createBankCash'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bank_cash_vo_1.BankCashVo]),
    __metadata("design:returntype", Promise)
], BankCashController.prototype, "createBankCash", null);
__decorate([
    (0, common_1.Put)('/updateBankCash/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, bank_cash_vo_1.BankCashVo]),
    __metadata("design:returntype", Promise)
], BankCashController.prototype, "updateaBankCash", null);
__decorate([
    (0, common_1.Get)('/removeBankCash/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BankCashController.prototype, "removeBankCash", null);
__decorate([
    (0, common_1.Get)('/getBankCashById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BankCashController.prototype, "getBankCashById", null);
__decorate([
    (0, common_1.Get)('/getBankCash'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BankCashController.prototype, "getBankCashList", null);
__decorate([
    (0, common_1.Get)('/getBankCashAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BankCashController.prototype, "getBankCashAll", null);
__decorate([
    (0, common_1.Get)('/getBankCashAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BankCashController.prototype, "getBankCashAllView", null);
BankCashController = __decorate([
    (0, common_1.Controller)('/bankCash')
], BankCashController);
exports.BankCashController = BankCashController;
//# sourceMappingURL=bank_cash_controller.js.map