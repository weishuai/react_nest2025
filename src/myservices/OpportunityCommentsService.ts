import { OpportunityCommentsRepo } from '../myrepositories';
import {
  OpportunityCommentsSearchVo,
  OpportunityCommentsVo,
} from '../myvo/OpportunityCommentsVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class OpportunityCommentsService {
  private opportunityCommentsRepo = new OpportunityCommentsRepo();

  async findOneOpportunityComments(Id: string) {
    ///const issue = new Fhtest();
    return this.opportunityCommentsRepo.getOpportunityCommentssById(Id);
  }

  async createOpportunityComments(
    opportunityCommentsVo: OpportunityCommentsVo,
  ) {
    ///opportunityCommentsVo.id = id();
    return this.opportunityCommentsRepo.create(opportunityCommentsVo);
  }

  async updateaOpportunityComments(
    Id: string,
    user_id: string,
    opportunityCommentsVo: OpportunityCommentsVo,
  ) {
    opportunityCommentsVo.updatedAt = new Date();

    opportunityCommentsVo.updatedUid = user_id;
    return this.opportunityCommentsRepo.update(
      Id,
      user_id,
      opportunityCommentsVo,
    );
  }

  async removeOpportunityComments(Ids: string[]) {
    return this.opportunityCommentsRepo.remove(Ids);
  }

  async getOpportunityCommentsById(id: string) {
    return this.opportunityCommentsRepo.getOpportunityCommentssById(id);
  }

  async getOpportunityComments(search: OpportunityCommentsSearchVo) {
    return this.opportunityCommentsRepo.getOpportunityComments(search);
  }

  async getOpportunityCommentsAll(search: OpportunityCommentsSearchVo) {
    return this.opportunityCommentsRepo.getOpportunityCommentsAll(search);
  }
}
