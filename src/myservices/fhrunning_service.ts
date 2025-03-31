import { FhrunningRepo } from '../myrepositories/fhrunning_repo';
import { FhrunningSearchVo, FhrunningVo } from '../myvo/fhrunning_vo';
export class FhrunningService {
  private fhrunningRepo = new FhrunningRepo();
  async findOneFhrunning(Id: string) {
    return await this.fhrunningRepo.getFhrunningsById(Id);
  }

  async createFhrunning(fhrunningVo: FhrunningVo) {
    return await this.fhrunningRepo.create(fhrunningVo);
  }

  async updateaFhrunning(
    Id: string,
    user_id: string,
    fhrunningVo: FhrunningVo,
  ) {
    return await this.fhrunningRepo.update(Id, user_id, fhrunningVo);
  }

  async removeFhrunning(Ids: string) {
    console.log(Ids);
    return await this.fhrunningRepo.remove([Ids]);
  }

  async getFhrunningById(id: string) {
    return await this.fhrunningRepo.getFhrunningsById(id);
  }

  async getFhrunningList(search: FhrunningSearchVo) {
    return await this.fhrunningRepo.getFhrunningList(search);
  }

  async getFhrunningAll() {
    return await this.fhrunningRepo.getFhrunningAll();
  }

  async getFhrunningAllView() {
    return await this.fhrunningRepo.getFhrunningAllView();
  }
  // async getFhrunningSearch(search: FhrunningSearchVo) {
  //   return await this.fhrunningRepo.getFhrunningSearch(search);
  // }
}
