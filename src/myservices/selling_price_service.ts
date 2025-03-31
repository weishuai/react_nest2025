import { SellingPriceRepo } from '../myrepositories/selling_price_repo';
import { SellingPriceSearchVo, SellingPriceVo } from '../myvo/selling_price_vo';
export class SellingPriceService {
  private sellingPriceRepo = new SellingPriceRepo();
  async findOneSellingPrice(Id: string) {
    return await this.sellingPriceRepo.getSellingPricesById(Id);
  }

  async createSellingPrice(sellingPriceVo: SellingPriceVo) {
    return await this.sellingPriceRepo.create(sellingPriceVo);
  }

  async updateaSellingPrice(
    Id: string,
    user_id: string,
    sellingPriceVo: SellingPriceVo,
  ) {
    return await this.sellingPriceRepo.update(Id, user_id, sellingPriceVo);
  }

  async removeSellingPrice(Ids: string) {
    console.log(Ids);
    return await this.sellingPriceRepo.remove([Ids]);
  }

  async getSellingPriceById(id: string) {
    return await this.sellingPriceRepo.getSellingPricesById(id);
  }

  async getSellingPriceList(search: SellingPriceSearchVo) {
    return await this.sellingPriceRepo.getSellingPriceList(search);
  }

  async getSellingPriceAll() {
    return await this.sellingPriceRepo.getSellingPriceAll();
  }

  async getSellingPriceAllView() {
    return await this.sellingPriceRepo.getSellingPriceAllView();
  }
  // async getSellingPriceSearch(search: SellingPriceSearchVo) {
  //   return await this.sellingPriceRepo.getSellingPriceSearch(search);
  // }
}
