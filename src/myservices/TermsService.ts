import { TermsRepo } from '../myrepositories';
import { TermsSearchVo, TermsVo } from '../myvo/TermsVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class TermsService {
  private TermsRepo = new TermsRepo();
  async findOneTerms(Id: string) {
    ///const issue = new Fhtest();
    return this.TermsRepo.gettermssById(Id);
  }

  async createTerms(TermsVo: TermsVo) {
    //TermsVo.id = id();
    return this.TermsRepo.create(TermsVo);
  }

  async updateaTerms(Id: string, user_id: string, termsVo: TermsVo) {
    termsVo.updatedAt = new Date();

    termsVo.updatedUid = user_id;
    return this.TermsRepo.update(Id, user_id, termsVo);
  }

  async removeTerms(Ids: string[]) {
    return this.TermsRepo.remove(Ids);
  }

  async getTermsById(id: string) {
    return this.TermsRepo.gettermssById(id);
  }

  async getTerms(search: TermsSearchVo) {
    return this.TermsRepo.getterms(search);
  }

  async getTermsAll(search: TermsSearchVo) {
    return this.TermsRepo.gettermsAll(search);
  }

  async getTermsAllView() {
    return this.TermsRepo.gettermsAllView();
  }
}
