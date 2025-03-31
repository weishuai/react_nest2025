"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseService = void 0;
const warehouse_repo_1 = require("../myrepositories/warehouse_repo");
class WarehouseService {
    constructor() {
        this.warehouseRepo = new warehouse_repo_1.WarehouseRepo();
    }
    async findOneWarehouse(Id) {
        return await this.warehouseRepo.getWarehousesById(Id);
    }
    async createWarehouse(warehouseVo) {
        return await this.warehouseRepo.create(warehouseVo);
    }
    async updateaWarehouse(Id, user_id, warehouseVo) {
        return await this.warehouseRepo.update(Id, user_id, warehouseVo);
    }
    async removeWarehouse(Ids) {
        console.log(Ids);
        return await this.warehouseRepo.remove([Ids]);
    }
    async getWarehouseById(id) {
        return await this.warehouseRepo.getWarehousesById(id);
    }
    async getWarehouseList(search) {
        return await this.warehouseRepo.getWarehouseList(search);
    }
    async getWarehouseAll() {
        return await this.warehouseRepo.getWarehouseAll();
    }
    async getWarehouseAllView() {
        return await this.warehouseRepo.getWarehouseAllView();
    }
}
exports.WarehouseService = WarehouseService;
//# sourceMappingURL=warehouse_service.js.map