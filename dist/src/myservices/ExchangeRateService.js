"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRateService = void 0;
const myrepositories_1 = require("../myrepositories");
class ExchangeRateService {
    constructor() {
        this.exchangeRateRepo = new myrepositories_1.ExchangeRateRepo();
    }
    async findOneExchangeRate(Id) {
        return this.exchangeRateRepo.getExchangeRatesById(Id);
    }
    async createExchangeRate(exchangeRateVo) {
        return this.exchangeRateRepo.create(exchangeRateVo);
    }
    async updateaExchangeRate(Id, user_id, exchangeRateVo) {
        exchangeRateVo.updatedAt = new Date();
        exchangeRateVo.updatedUid = user_id;
        return this.exchangeRateRepo.update(Id, user_id, exchangeRateVo);
    }
    async removeExchangeRate(Ids) {
        return this.exchangeRateRepo.remove(Ids);
    }
    async getExchangeRateById(id) {
        return this.exchangeRateRepo.getExchangeRatesById(id);
    }
    async getExchangeRate(search) {
        return this.exchangeRateRepo.getExchangeRate(search);
    }
    async getExchangeRateAll(search) {
        return this.exchangeRateRepo.getExchangeRateAll(search);
    }
    async getExchangeRateAllView() {
        return this.exchangeRateRepo.getExchangeRateAllView();
    }
}
exports.ExchangeRateService = ExchangeRateService;
//# sourceMappingURL=ExchangeRateService.js.map