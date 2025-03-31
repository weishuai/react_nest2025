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
exports.AccountingVoucherController = void 0;
const common_1 = require("@nestjs/common");
const accounting_voucher_service_1 = require("../myservices/accounting_voucher_service");
const accounting_voucher_vo_1 = require("../myvo/accounting_voucher_vo");
let AccountingVoucherController = class AccountingVoucherController {
    constructor() {
        this.accountingVoucherService = new accounting_voucher_service_1.AccountingVoucherService();
    }
    async createAccountingVoucher(accountingVoucherVo) {
        console.log('Body: ', accountingVoucherVo);
        return await this.accountingVoucherService.createAccountingVoucher(accountingVoucherVo);
    }
    async updateaAccountingVoucher(userToken, Id, accountingVoucherVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('AccountingVoucherVo: ', accountingVoucherVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.accountingVoucherService.updateaAccountingVoucher(Id, userId, accountingVoucherVo);
    }
    async removeAccountingVoucher(Id) {
        return await this.accountingVoucherService.removeAccountingVoucher(Id);
    }
    async getAccountingVoucherById(Id) {
        return await this.accountingVoucherService.getAccountingVoucherById(Id);
    }
    async getAccountingVoucherList(query) {
        console.log('query: ', query);
        const search = new accounting_voucher_vo_1.AccountingVoucherSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.accountingVoucherService.getAccountingVoucherList(search);
    }
    async getAccountingVoucherAll() {
        return await this.accountingVoucherService.getAccountingVoucherAll();
    }
    async getAccountingVoucherAllView() {
        return await this.accountingVoucherService.getAccountingVoucherAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createAccountingVoucher'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [accounting_voucher_vo_1.AccountingVoucherVo]),
    __metadata("design:returntype", Promise)
], AccountingVoucherController.prototype, "createAccountingVoucher", null);
__decorate([
    (0, common_1.Put)('/updateAccountingVoucher/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, accounting_voucher_vo_1.AccountingVoucherVo]),
    __metadata("design:returntype", Promise)
], AccountingVoucherController.prototype, "updateaAccountingVoucher", null);
__decorate([
    (0, common_1.Get)('/removeAccountingVoucher/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccountingVoucherController.prototype, "removeAccountingVoucher", null);
__decorate([
    (0, common_1.Get)('/getAccountingVoucherById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccountingVoucherController.prototype, "getAccountingVoucherById", null);
__decorate([
    (0, common_1.Get)('/getAccountingVoucher'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AccountingVoucherController.prototype, "getAccountingVoucherList", null);
__decorate([
    (0, common_1.Get)('/getAccountingVoucherAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccountingVoucherController.prototype, "getAccountingVoucherAll", null);
__decorate([
    (0, common_1.Get)('/getAccountingVoucherAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccountingVoucherController.prototype, "getAccountingVoucherAllView", null);
AccountingVoucherController = __decorate([
    (0, common_1.Controller)('/accountingVoucher')
], AccountingVoucherController);
exports.AccountingVoucherController = AccountingVoucherController;
//# sourceMappingURL=accounting_voucher_controller.js.map