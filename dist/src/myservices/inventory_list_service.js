"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryListService = void 0;
const inventory_list_repo_1 = require("../myrepositories/inventory_list_repo");
class InventoryListService {
    constructor() {
        this.inventoryListRepo = new inventory_list_repo_1.InventoryListRepo();
    }
    async findOneInventoryList(Id) {
        return await this.inventoryListRepo.getInventoryListsById(Id);
    }
    async createInventoryList(inventoryListVo) {
        return await this.inventoryListRepo.create(inventoryListVo);
    }
    async updateaInventoryList(Id, user_id, inventoryListVo) {
        return await this.inventoryListRepo.update(Id, user_id, inventoryListVo);
    }
    async removeInventoryList(Ids) {
        console.log(Ids);
        return await this.inventoryListRepo.remove([Ids]);
    }
    async getInventoryListById(id) {
        return await this.inventoryListRepo.getInventoryListsById(id);
    }
    async getInventoryListList(search) {
        return await this.inventoryListRepo.getInventoryListList(search);
    }
    async getInventoryListAll() {
        return await this.inventoryListRepo.getInventoryListAll();
    }
    async getInventoryListAllView() {
        return await this.inventoryListRepo.getInventoryListAllView();
    }
}
exports.InventoryListService = InventoryListService;
//# sourceMappingURL=inventory_list_service.js.map