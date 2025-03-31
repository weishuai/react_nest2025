"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankCashService = void 0;
const bank_cash_repo_1 = require("../myrepositories/bank_cash_repo");
class BankCashService {
    constructor() {
        this.bankCashRepo = new bank_cash_repo_1.BankCashRepo();
    }
    async findOneBankCash(Id) {
        return await this.bankCashRepo.getBankCashsById(Id);
    }
    async createBankCash(bankCashVo) {
        return await this.bankCashRepo.create(bankCashVo);
    }
    async updateaBankCash(Id, user_id, bankCashVo) {
        return await this.bankCashRepo.update(Id, user_id, bankCashVo);
    }
    async removeBankCash(Ids) {
        console.log(Ids);
        return await this.bankCashRepo.remove([Ids]);
    }
    async getBankCashById(id) {
        return await this.bankCashRepo.getBankCashsById(id);
    }
    async getBankCashList(search) {
        return await this.bankCashRepo.getBankCashList(search);
    }
    async getBankCashAll() {
        return await this.bankCashRepo.getBankCashAll();
    }
    async getBankCashAllView() {
        return await this.bankCashRepo.getBankCashAllView();
    }
}
exports.BankCashService = BankCashService;
//# sourceMappingURL=bank_cash_service.js.map