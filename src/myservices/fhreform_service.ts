import { FhreformRepo } from '../myrepositories/fhreform_repo';
import { FhreformSearchVo, FhreformVo } from '../myvo/fhreform_vo';
export class FhreformService {
  private fhreformRepo = new FhreformRepo();
  async findOneFhreform(Id: string) {
    return await this.fhreformRepo.getFhreformsById(Id);
  }

  async createFhreform(fhreformVo: FhreformVo) {
    return await this.fhreformRepo.create(fhreformVo);
  }

  async updateaFhreform(
    Id: string,
    user_id: string,
    fhreformVo: FhreformVo,
  ) {
    return await this.fhreformRepo.update(Id, user_id, fhreformVo);
  }

  async removeFhreform(Ids: string) {
    console.log(Ids);
    return await this.fhreformRepo.remove([Ids]);
  }

  async getFhreformById(id: string) {
    return await this.fhreformRepo.getFhreformsById(id);
  }

  async getFhreformList(search: FhreformSearchVo) {
    return await this.fhreformRepo.getFhreformList(search);
  }

  async getFhreformAll() {
    return await this.fhreformRepo.getFhreformAll();
  }

  async getFhreformAllView() {
    return await this.fhreformRepo.getFhreformAllView();
  }
  // async getFhreformSearch(search: FhreformSearchVo) {
  //   return await this.fhreformRepo.getFhreformSearch(search);
  // }
}
