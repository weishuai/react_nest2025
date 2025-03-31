import { StockWarehouseOrderpointRepo } from '../myrepositories/stock_warehouse_orderpoint_repo';
import { StockWarehouseOrderpointSearchVo, StockWarehouseOrderpointVo } from '../myvo/stock_warehouse_orderpoint_vo';
export class StockWarehouseOrderpointService {
  private stockWarehouseOrderpointRepo = new StockWarehouseOrderpointRepo();
  async findOneStockWarehouseOrderpoint(Id: string) {
    return await this.stockWarehouseOrderpointRepo.getStockWarehouseOrderpointsById(Id);
  }

  async createStockWarehouseOrderpoint(stockWarehouseOrderpointVo: StockWarehouseOrderpointVo) {
    return await this.stockWarehouseOrderpointRepo.create(stockWarehouseOrderpointVo);
  }

  async updateaStockWarehouseOrderpoint(
    Id: string,
    user_id: string,
    stockWarehouseOrderpointVo: StockWarehouseOrderpointVo,
  ) {
    return await this.stockWarehouseOrderpointRepo.update(Id, user_id, stockWarehouseOrderpointVo);
  }

  async removeStockWarehouseOrderpoint(Ids: string) {
    console.log(Ids);
    return await this.stockWarehouseOrderpointRepo.remove([Ids]);
  }

  async getStockWarehouseOrderpointById(id: string) {
    return await this.stockWarehouseOrderpointRepo.getStockWarehouseOrderpointsById(id);
  }

  async getStockWarehouseOrderpointList(search: StockWarehouseOrderpointSearchVo) {
    return await this.stockWarehouseOrderpointRepo.getStockWarehouseOrderpointList(search);
  }

  async getStockWarehouseOrderpointAll() {
    return await this.stockWarehouseOrderpointRepo.getStockWarehouseOrderpointAll();
  }

  async getStockWarehouseOrderpointAllView() {
    return await this.stockWarehouseOrderpointRepo.getStockWarehouseOrderpointAllView();
  }
}
