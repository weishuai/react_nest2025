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
exports.AccountingVoucherListController = void 0;
const common_1 = require("@nestjs/common");
const accounting_voucher_list_service_1 = require("../myservices/accounting_voucher_list_service");
const accounting_voucher_list_vo_1 = require("../myvo/accounting_voucher_list_vo");
let AccountingVoucherListController = class AccountingVoucherListController {
    constructor() {
        this.accountingVoucherListService = new accounting_voucher_list_service_1.AccountingVoucherListService();
    }
    async createAccountingVoucherList(accountingVoucherListVo) {
        console.log('Body: ', accountingVoucherListVo);
        return await this.accountingVoucherListService.createAccountingVoucherList(accountingVoucherListVo);
    }
    async updateaAccountingVoucherList(userToken, Id, accountingVoucherListVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('AccountingVoucherListVo: ', accountingVoucherListVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.accountingVoucherListService.updateaAccountingVoucherList(Id, userId, accountingVoucherListVo);
    }
    async removeAccountingVoucherList(Id) {
        return await this.accountingVoucherListService.removeAccountingVoucherList(Id);
    }
    async getAccountingVoucherListById(Id) {
        return await this.accountingVoucherListService.getAccountingVoucherListById(Id);
    }
    async getAccountingVoucherListList(query) {
        console.log('query: ', query);
        const search = new accounting_voucher_list_vo_1.AccountingVoucherListSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.accountingVoucherListService.getAccountingVoucherListList(search);
    }
    async getAccountingVoucherListAll() {
        return await this.accountingVoucherListService.getAccountingVoucherListAll();
    }
    async getAccountingVoucherListAllView() {
        return await this.accountingVoucherListService.getAccountingVoucherListAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createAccountingVoucherList'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [accounting_voucher_list_vo_1.AccountingVoucherListVo]),
    __metadata("design:returntype", Promise)
], AccountingVoucherListController.prototype, "createAccountingVoucherList", null);
__decorate([
    (0, common_1.Put)('/updateAccountingVoucherList/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, accounting_voucher_list_vo_1.AccountingVoucherListVo]),
    __metadata("design:returntype", Promise)
], AccountingVoucherListController.prototype, "updateaAccountingVoucherList", null);
__decorate([
    (0, common_1.Get)('/removeAccountingVoucherList/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccountingVoucherListController.prototype, "removeAccountingVoucherList", null);
__decorate([
    (0, common_1.Get)('/getAccountingVoucherListById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccountingVoucherListController.prototype, "getAccountingVoucherListById", null);
__decorate([
    (0, common_1.Get)('/getAccountingVoucherList'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AccountingVoucherListController.prototype, "getAccountingVoucherListList", null);
__decorate([
    (0, common_1.Get)('/getAccountingVoucherListAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccountingVoucherListController.prototype, "getAccountingVoucherListAll", null);
__decorate([
    (0, common_1.Get)('/getAccountingVoucherListAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccountingVoucherListController.prototype, "getAccountingVoucherListAllView", null);
AccountingVoucherListController = __decorate([
    (0, common_1.Controller)('/accountingVoucherList')
], AccountingVoucherListController);
exports.AccountingVoucherListController = AccountingVoucherListController;
//# sourceMappingURL=accounting_voucher_list_controller.js.map