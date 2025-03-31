import { AttenceRepo } from '../myrepositories';
import { AttenceSearchVo, AttenceVo } from '../myvo/AttenceVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class AttenceService {
  private attenceRepo = new AttenceRepo();

  async findOneAttence(Id: string) {
    ///const issue = new Fhtest();
    return this.attenceRepo.getAttencesById(Id);
  }

  async createAttence(attenceVo: AttenceVo) {
    //attenceVo.id = id();
    return this.attenceRepo.create(attenceVo);
  }

  async updateaAttence(Id: string, user_id: string, attenceVo: AttenceVo) {
    attenceVo.updatedAt = new Date();
    attenceVo.updatedUid = user_id;
    return this.attenceRepo.update(Id, user_id, attenceVo);
  }

  async removeAttence(Ids: string[]) {
    return this.attenceRepo.remove(Ids);
  }

  async getAttenceById(id: string) {
    return this.attenceRepo.getAttencesById(id);
  }

  async getAttence(search: AttenceSearchVo) {
    return this.attenceRepo.getAttence(search);
  }

  async getAttenceAll(search: AttenceSearchVo) {
    return this.attenceRepo.getAttenceAll(search);
  }

  async getAttenceAllView() {
    return this.attenceRepo.getAttenceAllView();
  }
}
