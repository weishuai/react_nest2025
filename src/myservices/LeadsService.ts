import { LeadsRepo } from '../myrepositories';
import { LeadsSearchVo, LeadsVo } from '../myvo/LeadsVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class LeadsService {
  private leadsRepo = new LeadsRepo();

  async findOneleads(Id: string) {
    ///const issue = new Fhtest();
    return this.leadsRepo.getleadssById(Id);
  }

  async createLeads(leadsVo: LeadsVo) {
    ///leadsVo.id = id();
    return this.leadsRepo.create(leadsVo);
  }

  async updateaLeads(Id: string, user_id: string, leadsVo: LeadsVo) {
    leadsVo.updatedAt = new Date();

    leadsVo.updatedUid = user_id;
    return this.leadsRepo.update(Id, user_id, leadsVo);
  }

  async removeLeads(Ids: string[]) {
    return this.leadsRepo.remove(Ids);
  }

  async getLeadsById(id: string) {
    return this.leadsRepo.getleadssById(id);
  }

  async getLeads(userId: string, search: LeadsSearchVo) {
    return this.leadsRepo.getleads(userId, search);
  }

  async getLeadsAll(search: LeadsSearchVo) {
    return this.leadsRepo.getLeadsAll(search);
  }

  async getLeadsAllView() {
    return this.leadsRepo.getLeadsAllView();
  }
}
