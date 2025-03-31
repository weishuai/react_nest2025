import { TermConditionRepo } from '../myrepositories';
import {
  TermConditionSearchVo,
  TermConditionVo,
} from '../myvo/TermConditionVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class TermConditionService {
  private termConditionRepo = new TermConditionRepo();

  async findOneTermCondition(Id: string) {
    ///const issue = new Fhtest();
    return this.termConditionRepo.getTermConditionsById(Id);
  }

  async createTermCondition(termConditionVo: TermConditionVo) {
    //termConditionVo.id = id();
    return this.termConditionRepo.create(termConditionVo);
  }

  async updateaTermCondition(
    Id: string,
    user_id: string,
    termConditionVo: TermConditionVo,
  ) {
    termConditionVo.updatedAt = new Date();

    termConditionVo.updatedUid = user_id;
    return this.termConditionRepo.update(Id, user_id, termConditionVo);
  }

  async removeTermCondition(Ids: string[]) {
    return this.termConditionRepo.remove(Ids);
  }

  async getTermConditionById(id: string) {
    return this.termConditionRepo.getTermConditionsById(id);
  }

  async getTermCondition(search: TermConditionSearchVo) {
    return this.termConditionRepo.getTermCondition(search);
  }

  async getTermConditionAll(search: TermConditionSearchVo) {
    return this.termConditionRepo.getTermConditionAll(search);
  }

  async getTermConditionAllView() {
    return this.termConditionRepo.getTermConditionAllView();
  }
}
