"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellingPriceService = void 0;
const selling_price_repo_1 = require("../myrepositories/selling_price_repo");
class SellingPriceService {
    constructor() {
        this.sellingPriceRepo = new selling_price_repo_1.SellingPriceRepo();
    }
    async findOneSellingPrice(Id) {
        return await this.sellingPriceRepo.getSellingPricesById(Id);
    }
    async createSellingPrice(sellingPriceVo) {
        return await this.sellingPriceRepo.create(sellingPriceVo);
    }
    async updateaSellingPrice(Id, user_id, sellingPriceVo) {
        return await this.sellingPriceRepo.update(Id, user_id, sellingPriceVo);
    }
    async removeSellingPrice(Ids) {
        console.log(Ids);
        return await this.sellingPriceRepo.remove([Ids]);
    }
    async getSellingPriceById(id) {
        return await this.sellingPriceRepo.getSellingPricesById(id);
    }
    async getSellingPriceList(search) {
        return await this.sellingPriceRepo.getSellingPriceList(search);
    }
    async getSellingPriceAll() {
        return await this.sellingPriceRepo.getSellingPriceAll();
    }
    async getSellingPriceAllView() {
        return await this.sellingPriceRepo.getSellingPriceAllView();
    }
}
exports.SellingPriceService = SellingPriceService;
//# sourceMappingURL=selling_price_service.js.map