import { InventoryListRepo } from '../myrepositories/inventory_list_repo';
import { InventoryListSearchVo, InventoryListVo } from '../myvo/inventory_list_vo';
export class InventoryListService {
  private inventoryListRepo = new InventoryListRepo();
  async findOneInventoryList(Id: string) {
    return await this.inventoryListRepo.getInventoryListsById(Id);
  }

  async createInventoryList(inventoryListVo: InventoryListVo) {
    return await this.inventoryListRepo.create(inventoryListVo);
  }

  async updateaInventoryList(
    Id: string,
    user_id: string,
    inventoryListVo: InventoryListVo,
  ) {
    return await this.inventoryListRepo.update(Id, user_id, inventoryListVo);
  }

  async removeInventoryList(Ids: string) {
    console.log(Ids);
    return await this.inventoryListRepo.remove([Ids]);
  }

  async getInventoryListById(id: string) {
    return await this.inventoryListRepo.getInventoryListsById(id);
  }

  async getInventoryListList(search: InventoryListSearchVo) {
    return await this.inventoryListRepo.getInventoryListList(search);
  }

  async getInventoryListAll() {
    return await this.inventoryListRepo.getInventoryListAll();
  }

  async getInventoryListAllView() {
    return await this.inventoryListRepo.getInventoryListAllView();
  }
}
