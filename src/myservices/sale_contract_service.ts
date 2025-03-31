import { SaleContractRepo } from '../myrepositories/sale_contract_repo';
import { SaleContractSearchVo, SaleContractVo } from '../myvo/sale_contract_vo';
export class SaleContractService {
  private saleContractRepo = new SaleContractRepo();
  async findOneSaleContract(Id: string) {
    return await this.saleContractRepo.getSaleContractsById(Id);
  }

  async createSaleContract(saleContractVo: SaleContractVo) {
    return await this.saleContractRepo.create(saleContractVo);
  }

  async updateaSaleContract(
    Id: string,
    user_id: string,
    saleContractVo: SaleContractVo,
  ) {
    return await this.saleContractRepo.update(Id, user_id, saleContractVo);
  }

  async removeSaleContract(Ids: string) {
    console.log(Ids);
    return await this.saleContractRepo.remove([Ids]);
  }

  async getSaleContractById(id: string) {
    return await this.saleContractRepo.getSaleContractsById(id);
  }

  async getSaleContractList(search: SaleContractSearchVo) {
    return await this.saleContractRepo.getSaleContractList(search);
  }

  async getSaleContractAll() {
    return await this.saleContractRepo.getSaleContractAll();
  }

  async getSaleContractAllView() {
    return await this.saleContractRepo.getSaleContractAllView();
  }
  // async getSaleContractSearch(search: SaleContractSearchVo) {
  //   return await this.saleContractRepo.getSaleContractSearch(search);
  // }
}
