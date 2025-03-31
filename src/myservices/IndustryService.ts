import { IndustryRepo } from '../myrepositories';
import { IndustrySearchVo, IndustryVo } from '../myvo/IndustryVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class IndustryService {
  private industryRepo = new IndustryRepo();

  async findOneindustry(Id: string) {
    ///const issue = new Fhtest();
    return this.industryRepo.getIndustryById(Id);
  }

  async createIndustry(industryVo: IndustryVo) {
    ///industryVo.id = id();

    return this.industryRepo.create(industryVo);
  }

  async updateaIndustry(Id: string, user_id: string, industryVo: IndustryVo) {
    industryVo.updatedAt = new Date();

    industryVo.updatedUid = user_id;
    return this.industryRepo.update(Id, user_id, industryVo);
  }

  async removeIndustry(Ids: string[]) {
    return this.industryRepo.remove(Ids);
  }

  async getIndustryById(id: string) {
    return this.industryRepo.getIndustryById(id);
  }

  async getIndustry(search: IndustrySearchVo) {
    return this.industryRepo.getIndustry(search);
  }

  async getIndustryAll(search: IndustrySearchVo) {
    return this.industryRepo.getIndustryAll(search);
  }

  async getIndustryAllView() {
    return this.industryRepo.getIndustryAllView();
  }
}
