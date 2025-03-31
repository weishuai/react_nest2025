import { WarehouseRepo } from '../myrepositories/warehouse_repo';
import { WarehouseSearchVo, WarehouseVo } from '../myvo/warehouse_vo';
export class WarehouseService {
  private warehouseRepo = new WarehouseRepo();
  async findOneWarehouse(Id: string) {
    return await this.warehouseRepo.getWarehousesById(Id);
  }

  async createWarehouse(warehouseVo: WarehouseVo) {
    return await this.warehouseRepo.create(warehouseVo);
  }

  async updateaWarehouse(
    Id: string,
    user_id: string,
    warehouseVo: WarehouseVo,
  ) {
    return await this.warehouseRepo.update(Id, user_id, warehouseVo);
  }

  async removeWarehouse(Ids: string) {
    console.log(Ids);
    return await this.warehouseRepo.remove([Ids]);
  }

  async getWarehouseById(id: string) {
    return await this.warehouseRepo.getWarehousesById(id);
  }

  async getWarehouseList(search: WarehouseSearchVo) {
    return await this.warehouseRepo.getWarehouseList(search);
  }

  async getWarehouseAll() {
    return await this.warehouseRepo.getWarehouseAll();
  }

  async getWarehouseAllView() {
    return await this.warehouseRepo.getWarehouseAllView();
  }
}
