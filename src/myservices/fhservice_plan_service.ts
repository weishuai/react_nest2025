import { FhservicePlanRepo } from '../myrepositories/fhservice_plan_repo';
import { FhservicePlanSearchVo, FhservicePlanVo } from '../myvo/fhservice_plan_vo';
export class FhservicePlanService {
  private fhservicePlanRepo = new FhservicePlanRepo();
  async findOneFhservicePlan(Id: string) {
    return await this.fhservicePlanRepo.getFhservicePlansById(Id);
  }

  async createFhservicePlan(fhservicePlanVo: FhservicePlanVo) {
    return await this.fhservicePlanRepo.create(fhservicePlanVo);
  }

  async updateaFhservicePlan(
    Id: string,
    user_id: string,
    fhservicePlanVo: FhservicePlanVo,
  ) {
    return await this.fhservicePlanRepo.update(Id, user_id, fhservicePlanVo);
  }

  async removeFhservicePlan(Ids: string) {
    console.log(Ids);
    return await this.fhservicePlanRepo.remove([Ids]);
  }

  async getFhservicePlanById(id: string) {
    return await this.fhservicePlanRepo.getFhservicePlansById(id);
  }

  async getFhservicePlanList(search: FhservicePlanSearchVo) {
    return await this.fhservicePlanRepo.getFhservicePlanList(search);
  }

  async getFhservicePlanAll() {
    return await this.fhservicePlanRepo.getFhservicePlanAll();
  }

  async getFhservicePlanAllView() {
    return await this.fhservicePlanRepo.getFhservicePlanAllView();
  }
  // async getFhservicePlanSearch(search: FhservicePlanSearchVo) {
  //   return await this.fhservicePlanRepo.getFhservicePlanSearch(search);
  // }
}
