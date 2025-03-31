"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountingVoucherListService = void 0;
const accounting_voucher_list_repo_1 = require("../myrepositories/accounting_voucher_list_repo");
class AccountingVoucherListService {
    constructor() {
        this.accountingVoucherListRepo = new accounting_voucher_list_repo_1.AccountingVoucherListRepo();
    }
    async findOneAccountingVoucherList(Id) {
        return await this.accountingVoucherListRepo.getAccountingVoucherListsById(Id);
    }
    async createAccountingVoucherList(accountingVoucherListVo) {
        return await this.accountingVoucherListRepo.create(accountingVoucherListVo);
    }
    async updateaAccountingVoucherList(Id, user_id, accountingVoucherListVo) {
        return await this.accountingVoucherListRepo.update(Id, user_id, accountingVoucherListVo);
    }
    async removeAccountingVoucherList(Ids) {
        console.log(Ids);
        return await this.accountingVoucherListRepo.remove([Ids]);
    }
    async getAccountingVoucherListById(id) {
        return await this.accountingVoucherListRepo.getAccountingVoucherListsById(id);
    }
    async getAccountingVoucherListList(search) {
        return await this.accountingVoucherListRepo.getAccountingVoucherListList(search);
    }
    async getAccountingVoucherListAll() {
        return await this.accountingVoucherListRepo.getAccountingVoucherListAll();
    }
    async getAccountingVoucherListAllView() {
        return await this.accountingVoucherListRepo.getAccountingVoucherListAllView();
    }
}
exports.AccountingVoucherListService = AccountingVoucherListService;
//# sourceMappingURL=accounting_voucher_list_service.js.map