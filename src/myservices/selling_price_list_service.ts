import { SellingPriceListRepo } from '../myrepositories/selling_price_list_repo';
import { SellingPriceListSearchVo, SellingPriceListVo } from '../myvo/selling_price_list_vo';
export class SellingPriceListService {
  private sellingPriceListRepo = new SellingPriceListRepo();
  async findOneSellingPriceList(Id: string) {
    return await this.sellingPriceListRepo.getSellingPriceListsById(Id);
  }

  async createSellingPriceList(sellingPriceListVo: SellingPriceListVo) {
    return await this.sellingPriceListRepo.create(sellingPriceListVo);
  }

  async updateaSellingPriceList(
    Id: string,
    user_id: string,
    sellingPriceListVo: SellingPriceListVo,
  ) {
    return await this.sellingPriceListRepo.update(Id, user_id, sellingPriceListVo);
  }

  async removeSellingPriceList(Ids: string) {
    console.log(Ids);
    return await this.sellingPriceListRepo.remove([Ids]);
  }

  async getSellingPriceListById(id: string) {
    return await this.sellingPriceListRepo.getSellingPriceListsById(id);
  }

  async getSellingPriceListList(search: SellingPriceListSearchVo) {
    return await this.sellingPriceListRepo.getSellingPriceListList(search);
  }

  async getSellingPriceListAll() {
    return await this.sellingPriceListRepo.getSellingPriceListAll();
  }

  async getSellingPriceListAllView() {
    return await this.sellingPriceListRepo.getSellingPriceListAllView();
  }
  // async getSellingPriceListSearch(search: SellingPriceListSearchVo) {
  //   return await this.sellingPriceListRepo.getSellingPriceListSearch(search);
  // }
}
