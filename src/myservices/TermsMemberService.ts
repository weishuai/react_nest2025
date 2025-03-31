import { TermsMemberRepo } from '../myrepositories';
import { TermsMemberSearchVo, TermsMemberVo } from '../myvo/TermsMemberVo';

export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class TermsMemberService {
  private termsMemberRepo = new TermsMemberRepo();
  async findOneTermsMember(Id: string) {
    ///const issue = new Fhtest();
    return this.termsMemberRepo.getTermsMembersById(Id);
  }

  async createTermsMember(termsMemberVo: TermsMemberVo) {
    ///termsMemberVo.id = id();
    return this.termsMemberRepo.create(termsMemberVo);
  }

  async updateaTermsMember(
    Id: string,
    user_id: string,
    termsMemberVo: TermsMemberVo,
  ) {
    termsMemberVo.updatedAt = new Date();

    termsMemberVo.updatedUid = user_id;
    return this.termsMemberRepo.update(Id, user_id, termsMemberVo);
  }

  async removeTermsMember(Ids: string[]) {
    return this.termsMemberRepo.remove(Ids);
  }

  async getTermsMemberById(id: string) {
    return this.termsMemberRepo.getTermsMembersById(id);
  }

  async getTermsMember(search: TermsMemberSearchVo) {
    return this.termsMemberRepo.getTermsMember(search);
  }

  async getTermsMemberAll(search: TermsMemberSearchVo) {
    return this.termsMemberRepo.getTermsMemberAll(search);
  }

  async getTermsMemberAllView() {
    return this.termsMemberRepo.getTermsMemberAllView();
  }
}
