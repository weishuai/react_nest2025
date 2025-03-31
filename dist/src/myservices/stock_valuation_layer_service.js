"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockValuationLayerService = void 0;
const stock_valuation_layer_repo_1 = require("../myrepositories/stock_valuation_layer_repo");
class StockValuationLayerService {
    constructor() {
        this.stockValuationLayerRepo = new stock_valuation_layer_repo_1.StockValuationLayerRepo();
    }
    async findOneStockValuationLayer(Id) {
        return await this.stockValuationLayerRepo.getStockValuationLayersById(Id);
    }
    async createStockValuationLayer(stockValuationLayerVo) {
        return await this.stockValuationLayerRepo.create(stockValuationLayerVo);
    }
    async updateaStockValuationLayer(Id, user_id, stockValuationLayerVo) {
        return await this.stockValuationLayerRepo.update(Id, user_id, stockValuationLayerVo);
    }
    async removeStockValuationLayer(Ids) {
        console.log(Ids);
        return await this.stockValuationLayerRepo.remove([Ids]);
    }
    async getStockValuationLayerById(id) {
        return await this.stockValuationLayerRepo.getStockValuationLayersById(id);
    }
    async getStockValuationLayerList(search) {
        return await this.stockValuationLayerRepo.getStockValuationLayerList(search);
    }
    async getStockValuationLayerAll() {
        return await this.stockValuationLayerRepo.getStockValuationLayerAll();
    }
    async getStockValuationLayerAllView() {
        return await this.stockValuationLayerRepo.getStockValuationLayerAllView();
    }
}
exports.StockValuationLayerService = StockValuationLayerService;
//# sourceMappingURL=stock_valuation_layer_service.js.map