import { ProcurePriceRepo } from '../myrepositories/procure_price_repo';
import { ProcurePriceSearchVo, ProcurePriceVo } from '../myvo/procure_price_vo';
export class ProcurePriceService {
  private procurePriceRepo = new ProcurePriceRepo();
  async findOneProcurePrice(Id: string) {
    return await this.procurePriceRepo.getProcurePricesById(Id);
  }

  async createProcurePrice(procurePriceVo: ProcurePriceVo) {
    return await this.procurePriceRepo.create(procurePriceVo);
  }

  async updateaProcurePrice(
    Id: string,
    user_id: string,
    procurePriceVo: ProcurePriceVo,
  ) {
    return await this.procurePriceRepo.update(Id, user_id, procurePriceVo);
  }

  async removeProcurePrice(Ids: string) {
    console.log(Ids);
    return await this.procurePriceRepo.remove([Ids]);
  }

  async getProcurePriceById(id: string) {
    return await this.procurePriceRepo.getProcurePricesById(id);
  }

  async getProcurePriceList(search: ProcurePriceSearchVo) {
    return await this.procurePriceRepo.getProcurePriceList(search);
  }

  async getProcurePriceAll() {
    return await this.procurePriceRepo.getProcurePriceAll();
  }

  async getProcurePriceAllView() {
    return await this.procurePriceRepo.getProcurePriceAllView();
  }
  // async getProcurePriceSearch(search: ProcurePriceSearchVo) {
  //   return await this.procurePriceRepo.getProcurePriceSearch(search);
  // }
}
