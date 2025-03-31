import { FhfaultRepo } from '../myrepositories/fhfault_repo';
import { FhfaultSearchVo, FhfaultVo } from '../myvo/fhfault_vo';
export class FhfaultService {
  private fhfaultRepo = new FhfaultRepo();
  async findOneFhfault(Id: string) {
    return await this.fhfaultRepo.getFhfaultsById(Id);
  }

  async createFhfault(fhfaultVo: FhfaultVo) {
    return await this.fhfaultRepo.create(fhfaultVo);
  }

  async updateaFhfault(
    Id: string,
    user_id: string,
    fhfaultVo: FhfaultVo,
  ) {
    return await this.fhfaultRepo.update(Id, user_id, fhfaultVo);
  }

  async removeFhfault(Ids: string) {
    console.log(Ids);
    return await this.fhfaultRepo.remove([Ids]);
  }

  async getFhfaultById(id: string) {
    return await this.fhfaultRepo.getFhfaultsById(id);
  }

  async getFhfaultList(search: FhfaultSearchVo) {
    return await this.fhfaultRepo.getFhfaultList(search);
  }

  async getFhfaultAll() {
    return await this.fhfaultRepo.getFhfaultAll();
  }

  async getFhfaultAllView() {
    return await this.fhfaultRepo.getFhfaultAllView();
  }
  // async getFhfaultSearch(search: FhfaultSearchVo) {
  //   return await this.fhfaultRepo.getFhfaultSearch(search);
  // }
}
