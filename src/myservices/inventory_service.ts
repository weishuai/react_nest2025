import { InventoryRepo } from '../myrepositories/inventory_repo';
import { InventorySearchVo, InventoryVo } from '../myvo/inventory_vo';
export class InventoryService {
  private inventoryRepo = new InventoryRepo();
  async findOneInventory(Id: string) {
    return await this.inventoryRepo.getInventorysById(Id);
  }

  async createInventory(inventoryVo: InventoryVo) {
    return await this.inventoryRepo.create(inventoryVo);
  }

  async updateaInventory(
    Id: string,
    user_id: string,
    inventoryVo: InventoryVo,
  ) {
    return await this.inventoryRepo.update(Id, user_id, inventoryVo);
  }

  async removeInventory(Ids: string) {
    console.log(Ids);
    return await this.inventoryRepo.remove([Ids]);
  }

  async getInventoryById(id: string) {
    return await this.inventoryRepo.getInventorysById(id);
  }

  async getInventoryList(search: InventorySearchVo) {
    return await this.inventoryRepo.getInventoryList(search);
  }

  async getInventoryAll() {
    return await this.inventoryRepo.getInventoryAll();
  }

  async getInventoryAllView() {
    return await this.inventoryRepo.getInventoryAllView();
  }
}
