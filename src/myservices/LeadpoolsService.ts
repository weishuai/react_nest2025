import { LeadpoolsRepo } from '../myrepositories';
import { LeadpoolsSearchVo, LeadpoolsVo } from '../myvo/LeadpoolsVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class LeadpoolsService {
  private leadpoolsRepo = new LeadpoolsRepo();

  async findOneleadpools(Id: string) {
    ///const issue = new Fhtest();
    return this.leadpoolsRepo.getLeadpoolsById(Id);
  }

  async createLeadpools(leadpoolsVo: LeadpoolsVo) {
    ///leadpoolsVo.id = id();
    return this.leadpoolsRepo.create(leadpoolsVo);
  }

  async updateaLeadpools(
    Id: string,
    user_id: string,
    leadpoolsVo: LeadpoolsVo,
  ) {
    leadpoolsVo.updatedAt = new Date();

    leadpoolsVo.updatedUid = user_id;
    return this.leadpoolsRepo.update(Id, user_id, leadpoolsVo);
  }

  async removeLeadpools(Ids: string[]) {
    return this.leadpoolsRepo.remove(Ids);
  }

  async getLeadpoolsById(id: string) {
    return this.leadpoolsRepo.getLeadpoolsById(id);
  }

  async getLeadpools(search: LeadpoolsSearchVo) {
    return this.leadpoolsRepo.getLeadpools(search);
  }

  async getLeadpoolsAll(search: LeadpoolsSearchVo) {
    return this.leadpoolsRepo.getLeadpoolsAll(search);
  }

  async getLeadpoolsAllView() {
    return this.leadpoolsRepo.getLeadpoolsAllView();
  }
}
