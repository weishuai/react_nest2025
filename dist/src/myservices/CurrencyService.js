"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyService = void 0;
const myrepositories_1 = require("../myrepositories");
class CurrencyService {
    constructor() {
        this.currencyRepo = new myrepositories_1.CurrencyRepo();
    }
    async findOneCurrency(Id) {
        return this.currencyRepo.getcurrencysById(Id);
    }
    async createCurrency(currencyVo) {
        return this.currencyRepo.create(currencyVo);
    }
    async updateaCurrency(Id, user_id, currencyVo) {
        currencyVo.updatedAt = new Date();
        currencyVo.updatedUid = user_id;
        return this.currencyRepo.update(Id, user_id, currencyVo);
    }
    async removeCurrency(Ids) {
        return this.currencyRepo.remove(Ids);
    }
    async getCurrencyById(id) {
        return this.currencyRepo.getcurrencysById(id);
    }
    async getCurrency(search) {
        return this.currencyRepo.getcurrency(search);
    }
    async getCurrencyAll(search) {
        return this.currencyRepo.getcurrencyAll(search);
    }
    async getCurrencyAllView() {
        return this.currencyRepo.getcurrencyAllView();
    }
}
exports.CurrencyService = CurrencyService;
//# sourceMappingURL=CurrencyService.js.map