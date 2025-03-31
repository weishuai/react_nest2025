"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockWarehouseOrderpointService = void 0;
const stock_warehouse_orderpoint_repo_1 = require("../myrepositories/stock_warehouse_orderpoint_repo");
class StockWarehouseOrderpointService {
    constructor() {
        this.stockWarehouseOrderpointRepo = new stock_warehouse_orderpoint_repo_1.StockWarehouseOrderpointRepo();
    }
    async findOneStockWarehouseOrderpoint(Id) {
        return await this.stockWarehouseOrderpointRepo.getStockWarehouseOrderpointsById(Id);
    }
    async createStockWarehouseOrderpoint(stockWarehouseOrderpointVo) {
        return await this.stockWarehouseOrderpointRepo.create(stockWarehouseOrderpointVo);
    }
    async updateaStockWarehouseOrderpoint(Id, user_id, stockWarehouseOrderpointVo) {
        return await this.stockWarehouseOrderpointRepo.update(Id, user_id, stockWarehouseOrderpointVo);
    }
    async removeStockWarehouseOrderpoint(Ids) {
        console.log(Ids);
        return await this.stockWarehouseOrderpointRepo.remove([Ids]);
    }
    async getStockWarehouseOrderpointById(id) {
        return await this.stockWarehouseOrderpointRepo.getStockWarehouseOrderpointsById(id);
    }
    async getStockWarehouseOrderpointList(search) {
        return await this.stockWarehouseOrderpointRepo.getStockWarehouseOrderpointList(search);
    }
    async getStockWarehouseOrderpointAll() {
        return await this.stockWarehouseOrderpointRepo.getStockWarehouseOrderpointAll();
    }
    async getStockWarehouseOrderpointAllView() {
        return await this.stockWarehouseOrderpointRepo.getStockWarehouseOrderpointAllView();
    }
}
exports.StockWarehouseOrderpointService = StockWarehouseOrderpointService;
//# sourceMappingURL=stock_warehouse_orderpoint_service.js.map