import { HrContractRepo } from '../myrepositories/hr.contract_repo';
import { HrContractSearchVo, HrContractVo } from '../myvo/hr.contract_vo';
export class HrContractService {
  private hrContractRepo = new HrContractRepo();
  async findOneHrContract(Id: string) {
    return await this.hrContractRepo.getHrContractsById(Id);
  }

  async createHrContract(hrContractVo: HrContractVo) {
    return await this.hrContractRepo.create(hrContractVo);
  }

  async updateaHrContract(
    Id: string,
    user_id: string,
    hrContractVo: HrContractVo,
  ) {
    return await this.hrContractRepo.update(Id, user_id, hrContractVo);
  }

  async removeHrContract(Ids: string) {
    console.log(Ids);
    return await this.hrContractRepo.remove([Ids]);
  }

  async getHrContractById(id: string) {
    return await this.hrContractRepo.getHrContractsById(id);
  }

  async getHrContractList(search: HrContractSearchVo) {
    return await this.hrContractRepo.getHrContractList(search);
  }

  async getHrContractAll() {
    return await this.hrContractRepo.getHrContractAll();
  }

  async getHrContractAllView() {
    return await this.hrContractRepo.getHrContractAllView();
  }
  // async getHrContractSearch(search: HrContractSearchVo) {
  //   return await this.hrContractRepo.getHrContractSearch(search);
  // }
}
