import { FhservicetbRepo } from '../myrepositories/fhservicetb_repo';
import { FhservicetbSearchVo, FhservicetbVo } from '../myvo/fhservicetb_vo';
export class FhservicetbService {
  private fhservicetbRepo = new FhservicetbRepo();
  async findOneFhservicetb(Id: string) {
    return await this.fhservicetbRepo.getFhservicetbsById(Id);
  }

  async createFhservicetb(fhservicetbVo: FhservicetbVo) {
    return await this.fhservicetbRepo.create(fhservicetbVo);
  }

  async updateaFhservicetb(
    Id: string,
    user_id: string,
    fhservicetbVo: FhservicetbVo,
  ) {
    return await this.fhservicetbRepo.update(Id, user_id, fhservicetbVo);
  }

  async removeFhservicetb(Ids: string) {
    console.log(Ids);
    return await this.fhservicetbRepo.remove([Ids]);
  }

  async getFhservicetbById(id: string) {
    return await this.fhservicetbRepo.getFhservicetbsById(id);
  }

  async getFhservicetbList(search: FhservicetbSearchVo) {
    return await this.fhservicetbRepo.getFhservicetbList(search);
  }

  async getFhservicetbAll() {
    return await this.fhservicetbRepo.getFhservicetbAll();
  }

  async getFhservicetbAllView() {
    return await this.fhservicetbRepo.getFhservicetbAllView();
  }
  // async getFhservicetbSearch(search: FhservicetbSearchVo) {
  //   return await this.fhservicetbRepo.getFhservicetbSearch(search);
  // }
}
