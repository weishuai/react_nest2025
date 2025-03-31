import { StockQuantRepo } from '../myrepositories/stock_quant_repo';
import { StockQuantSearchVo, StockQuantVo } from '../myvo/stock_quant_vo';
export class StockQuantService {
  private stockQuantRepo = new StockQuantRepo();
  async findOneStockQuant(Id: string) {
    return await this.stockQuantRepo.getStockQuantsById(Id);
  }

  async createStockQuant(stockQuantVo: StockQuantVo) {
    return await this.stockQuantRepo.create(stockQuantVo);
  }

  async updateaStockQuant(
    Id: string,
    user_id: string,
    stockQuantVo: StockQuantVo,
  ) {
    return await this.stockQuantRepo.update(Id, user_id, stockQuantVo);
  }

  async removeStockQuant(Ids: string) {
    console.log(Ids);
    return await this.stockQuantRepo.remove([Ids]);
  }

  async getStockQuantById(id: string) {
    return await this.stockQuantRepo.getStockQuantsById(id);
  }

  async getStockQuantList(search: StockQuantSearchVo) {
    return await this.stockQuantRepo.getStockQuantList(search);
  }

  async getStockQuantAll() {
    return await this.stockQuantRepo.getStockQuantAll();
  }

  async getStockQuantAllView() {
    return await this.stockQuantRepo.getStockQuantAllView();
  }
}
