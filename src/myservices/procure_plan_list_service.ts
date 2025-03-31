import { ProcurePlanListRepo } from '../myrepositories/procure_plan_list_repo';
import { ProcurePlanListSearchVo, ProcurePlanListVo } from '../myvo/procure_plan_list_vo';
export class ProcurePlanListService {
  private procurePlanListRepo = new ProcurePlanListRepo();
  async findOneProcurePlanList(Id: string) {
    return await this.procurePlanListRepo.getProcurePlanListsById(Id);
  }

  async createProcurePlanList(procurePlanListVo: ProcurePlanListVo) {
    return await this.procurePlanListRepo.create(procurePlanListVo);
  }

  async updateaProcurePlanList(
    Id: string,
    user_id: string,
    procurePlanListVo: ProcurePlanListVo,
  ) {
    return await this.procurePlanListRepo.update(Id, user_id, procurePlanListVo);
  }

  async removeProcurePlanList(Ids: string) {
    console.log(Ids);
    return await this.procurePlanListRepo.remove([Ids]);
  }

  async getProcurePlanListById(id: string) {
    return await this.procurePlanListRepo.getProcurePlanListsById(id);
  }

  async getProcurePlanListList(search: ProcurePlanListSearchVo) {
    return await this.procurePlanListRepo.getProcurePlanListList(search);
  }

  async getProcurePlanListAll() {
    return await this.procurePlanListRepo.getProcurePlanListAll();
  }

  async getProcurePlanListAllView() {
    return await this.procurePlanListRepo.getProcurePlanListAllView();
  }
  // async getProcurePlanListSearch(search: ProcurePlanListSearchVo) {
  //   return await this.procurePlanListRepo.getProcurePlanListSearch(search);
  // }
}
