"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryService = void 0;
const myrepositories_1 = require("../myrepositories");
class CountryService {
    constructor() {
        this.countryRepo = new myrepositories_1.CountryRepo();
    }
    async findOnecountry(Id) {
        return this.countryRepo.getCountryById(Id);
    }
    async createCountry(countryVo) {
        return this.countryRepo.create(countryVo);
    }
    async updateaCountry(Id, user_id, countryVo) {
        countryVo.updatedAt = new Date();
        countryVo.updatedUid = user_id;
        return this.countryRepo.update(Id, user_id, countryVo);
    }
    async removeCountry(Ids) {
        return this.countryRepo.remove(Ids);
    }
    async getCountryById(id) {
        return this.countryRepo.getCountryById(id);
    }
    async getCountry(search) {
        return this.countryRepo.getCountry(search);
    }
    async getCountryAll(search) {
        return this.countryRepo.getCountryAll(search);
    }
    async getCountryAllView() {
        return this.countryRepo.getCountryAllView();
    }
}
exports.CountryService = CountryService;
//# sourceMappingURL=CountryService.js.map