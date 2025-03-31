import { StockValuationLayerRepo } from '../myrepositories/stock_valuation_layer_repo';
import { StockValuationLayerSearchVo, StockValuationLayerVo } from '../myvo/stock_valuation_layer_vo';
export class StockValuationLayerService {
  private stockValuationLayerRepo = new StockValuationLayerRepo();
  async findOneStockValuationLayer(Id: string) {
    return await this.stockValuationLayerRepo.getStockValuationLayersById(Id);
  }

  async createStockValuationLayer(stockValuationLayerVo: StockValuationLayerVo) {
    return await this.stockValuationLayerRepo.create(stockValuationLayerVo);
  }

  async updateaStockValuationLayer(
    Id: string,
    user_id: string,
    stockValuationLayerVo: StockValuationLayerVo,
  ) {
    return await this.stockValuationLayerRepo.update(Id, user_id, stockValuationLayerVo);
  }

  async removeStockValuationLayer(Ids: string) {
    console.log(Ids);
    return await this.stockValuationLayerRepo.remove([Ids]);
  }

  async getStockValuationLayerById(id: string) {
    return await this.stockValuationLayerRepo.getStockValuationLayersById(id);
  }

  async getStockValuationLayerList(search: StockValuationLayerSearchVo) {
    return await this.stockValuationLayerRepo.getStockValuationLayerList(search);
  }

  async getStockValuationLayerAll() {
    return await this.stockValuationLayerRepo.getStockValuationLayerAll();
  }

  async getStockValuationLayerAllView() {
    return await this.stockValuationLayerRepo.getStockValuationLayerAllView();
  }
}
