import { ProcurePlanRepo } from '../myrepositories/procure_plan_repo';
import { ProcurePlanSearchVo, ProcurePlanVo } from '../myvo/procure_plan_vo';
export class ProcurePlanService {
  private procurePlanRepo = new ProcurePlanRepo();
  async findOneProcurePlan(Id: string) {
    return await this.procurePlanRepo.getProcurePlansById(Id);
  }

  async createProcurePlan(procurePlanVo: ProcurePlanVo) {
    return await this.procurePlanRepo.create(procurePlanVo);
  }

  async updateaProcurePlan(
    Id: string,
    user_id: string,
    procurePlanVo: ProcurePlanVo,
  ) {
    return await this.procurePlanRepo.update(Id, user_id, procurePlanVo);
  }

  async removeProcurePlan(Ids: string) {
    console.log(Ids);
    return await this.procurePlanRepo.remove([Ids]);
  }

  async getProcurePlanById(id: string) {
    return await this.procurePlanRepo.getProcurePlansById(id);
  }

  async getProcurePlanList(search: ProcurePlanSearchVo) {
    return await this.procurePlanRepo.getProcurePlanList(search);
  }

  async getProcurePlanAll() {
    return await this.procurePlanRepo.getProcurePlanAll();
  }

  async getProcurePlanAllView() {
    return await this.procurePlanRepo.getProcurePlanAllView();
  }
  // async getProcurePlanSearch(search: ProcurePlanSearchVo) {
  //   return await this.procurePlanRepo.getProcurePlanSearch(search);
  // }
}
