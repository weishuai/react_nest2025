"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellingPriceListService = void 0;
const selling_price_list_repo_1 = require("../myrepositories/selling_price_list_repo");
class SellingPriceListService {
    constructor() {
        this.sellingPriceListRepo = new selling_price_list_repo_1.SellingPriceListRepo();
    }
    async findOneSellingPriceList(Id) {
        return await this.sellingPriceListRepo.getSellingPriceListsById(Id);
    }
    async createSellingPriceList(sellingPriceListVo) {
        return await this.sellingPriceListRepo.create(sellingPriceListVo);
    }
    async updateaSellingPriceList(Id, user_id, sellingPriceListVo) {
        return await this.sellingPriceListRepo.update(Id, user_id, sellingPriceListVo);
    }
    async removeSellingPriceList(Ids) {
        console.log(Ids);
        return await this.sellingPriceListRepo.remove([Ids]);
    }
    async getSellingPriceListById(id) {
        return await this.sellingPriceListRepo.getSellingPriceListsById(id);
    }
    async getSellingPriceListList(search) {
        return await this.sellingPriceListRepo.getSellingPriceListList(search);
    }
    async getSellingPriceListAll() {
        return await this.sellingPriceListRepo.getSellingPriceListAll();
    }
    async getSellingPriceListAllView() {
        return await this.sellingPriceListRepo.getSellingPriceListAllView();
    }
}
exports.SellingPriceListService = SellingPriceListService;
//# sourceMappingURL=selling_price_list_service.js.map