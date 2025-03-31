"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockQuantService = void 0;
const stock_quant_repo_1 = require("../myrepositories/stock_quant_repo");
class StockQuantService {
    constructor() {
        this.stockQuantRepo = new stock_quant_repo_1.StockQuantRepo();
    }
    async findOneStockQuant(Id) {
        return await this.stockQuantRepo.getStockQuantsById(Id);
    }
    async createStockQuant(stockQuantVo) {
        return await this.stockQuantRepo.create(stockQuantVo);
    }
    async updateaStockQuant(Id, user_id, stockQuantVo) {
        return await this.stockQuantRepo.update(Id, user_id, stockQuantVo);
    }
    async removeStockQuant(Ids) {
        console.log(Ids);
        return await this.stockQuantRepo.remove([Ids]);
    }
    async getStockQuantById(id) {
        return await this.stockQuantRepo.getStockQuantsById(id);
    }
    async getStockQuantList(search) {
        return await this.stockQuantRepo.getStockQuantList(search);
    }
    async getStockQuantAll() {
        return await this.stockQuantRepo.getStockQuantAll();
    }
    async getStockQuantAllView() {
        return await this.stockQuantRepo.getStockQuantAllView();
    }
}
exports.StockQuantService = StockQuantService;
//# sourceMappingURL=stock_quant_service.js.map