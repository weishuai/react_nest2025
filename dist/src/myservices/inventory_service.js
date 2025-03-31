"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryService = void 0;
const inventory_repo_1 = require("../myrepositories/inventory_repo");
class InventoryService {
    constructor() {
        this.inventoryRepo = new inventory_repo_1.InventoryRepo();
    }
    async findOneInventory(Id) {
        return await this.inventoryRepo.getInventorysById(Id);
    }
    async createInventory(inventoryVo) {
        return await this.inventoryRepo.create(inventoryVo);
    }
    async updateaInventory(Id, user_id, inventoryVo) {
        return await this.inventoryRepo.update(Id, user_id, inventoryVo);
    }
    async removeInventory(Ids) {
        console.log(Ids);
        return await this.inventoryRepo.remove([Ids]);
    }
    async getInventoryById(id) {
        return await this.inventoryRepo.getInventorysById(id);
    }
    async getInventoryList(search) {
        return await this.inventoryRepo.getInventoryList(search);
    }
    async getInventoryAll() {
        return await this.inventoryRepo.getInventoryAll();
    }
    async getInventoryAllView() {
        return await this.inventoryRepo.getInventoryAllView();
    }
}
exports.InventoryService = InventoryService;
//# sourceMappingURL=inventory_service.js.map