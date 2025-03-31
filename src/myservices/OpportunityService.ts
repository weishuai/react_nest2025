import {
  CustomizationRepo,
  OpportunityCommentsRepo,
  OpportunityRepo,
} from '../myrepositories';
import {
  FHOpportunitySearchVo,
  OpportunitySearchVo,
  OpportunityVo,
} from '../myvo/OpportunityVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class OpportunityService {
  private opportunityRepo = new OpportunityRepo();
  private opportunityCommentsRepo = new OpportunityCommentsRepo();
  private customizationRepo = new CustomizationRepo();

  async findOneOpportunity(Id: string) {
    ///const issue = new Fhtest();
    return this.opportunityRepo.getopportunitysById(Id);
  }

  async createOpportunity(opportunityVo: OpportunityVo) {
    ///opportunityVo.id = id();

    const mid = opportunityVo.id;
    ///opportunityVo.id = id();

    const refNumber = 'OP-';

    ///opportunityVo.refNumber = String((await this.customizationRepo.nextGetNo(refNumber)).No);

    this.opportunityCommentsRepo.updateOpportunityCommentsVoByMid(
      mid,
      opportunityVo.id,
    );

    return this.opportunityRepo.create(opportunityVo);
  }

  async updateaOpportunity(
    Id: string,
    user_id: string,
    opportunityVo: OpportunityVo,
  ) {
    opportunityVo.updatedAt = new Date();

    opportunityVo.updatedUid = user_id;
    return this.opportunityRepo.update(Id, user_id, opportunityVo);
  }

  async removeOpportunity(Ids: string[]) {
    return this.opportunityRepo.remove(Ids);
  }

  async getOpportunityById(id: string) {
    return this.opportunityRepo.getopportunitysById(id);
  }

  async getOpportunitysCountBystageName(stageName: string) {
    return this.opportunityRepo.getOpportunitysCountBystageName(stageName);
  }

  async getOpportunity(userId: string, search: OpportunitySearchVo) {
    return this.opportunityRepo.getopportunity(userId, search);
  }

  async getOpportunitySQL(userId: string, search: FHOpportunitySearchVo) {
    return this.opportunityRepo.getopportunitySQL(userId, search);
  }

  async getOpportunityAll(search: OpportunitySearchVo) {
    return this.opportunityRepo.getopportunityAll(search);
  }

  async getOpportunityAllView() {
    return this.opportunityRepo.getopportunityAllView();
  }
}
