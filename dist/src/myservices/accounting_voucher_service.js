"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountingVoucherService = void 0;
const accounting_voucher_repo_1 = require("../myrepositories/accounting_voucher_repo");
class AccountingVoucherService {
    constructor() {
        this.accountingVoucherRepo = new accounting_voucher_repo_1.AccountingVoucherRepo();
    }
    async findOneAccountingVoucher(Id) {
        return await this.accountingVoucherRepo.getAccountingVouchersById(Id);
    }
    async createAccountingVoucher(accountingVoucherVo) {
        return await this.accountingVoucherRepo.create(accountingVoucherVo);
    }
    async updateaAccountingVoucher(Id, user_id, accountingVoucherVo) {
        return await this.accountingVoucherRepo.update(Id, user_id, accountingVoucherVo);
    }
    async removeAccountingVoucher(Ids) {
        console.log(Ids);
        return await this.accountingVoucherRepo.remove([Ids]);
    }
    async getAccountingVoucherById(id) {
        return await this.accountingVoucherRepo.getAccountingVouchersById(id);
    }
    async getAccountingVoucherList(search) {
        return await this.accountingVoucherRepo.getAccountingVoucherList(search);
    }
    async getAccountingVoucherAll() {
        return await this.accountingVoucherRepo.getAccountingVoucherAll();
    }
    async getAccountingVoucherAllView() {
        return await this.accountingVoucherRepo.getAccountingVoucherAllView();
    }
}
exports.AccountingVoucherService = AccountingVoucherService;
//# sourceMappingURL=accounting_voucher_service.js.map