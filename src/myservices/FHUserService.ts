import { FHUserRepo } from '../myrepositories/FHUserRepo';
import { FHUserSearchVo, FHUserVo } from '../myvo/FHUserVo';

export class FHUserService {
  private fhuserRepo = new FHUserRepo();

  async findOneFHUser(Id: string) {
    ///const issue = new Fhtest();
    return this.fhuserRepo.getFHUsersById(Id);
  }

  async UsersLogin(email: string, password: string) {
    ///const issue = new Fhtest();
    return this.fhuserRepo.UsersLogin(email, password);
  }

  async createFHUser(fhuserVo: FHUserVo) {
    ///fhuserVo.id = id();
    ///return this.fhuserRepo.insert(fhuserVo);
  }

  async updateaFHUser(Id: string, user_id: string, fhuserVo: FHUserVo) {
    //return this.fhuserRepo.update(Id, fhuserVo);
  }

  async removeFHUser(Ids: string[]) {
    //return this.fhuserRepo.update(Ids, {});
  }

  async getFHUserById(id: string) {
    return this.fhuserRepo.getFHUsersById(id);
  }

  async getFHUser(search: FHUserSearchVo) {
    return this.fhuserRepo.getFHUser(search);
  }

  async getFHUserAll() {
    return this.fhuserRepo.getFHUserAll();
  }

  async getFHUserAll002(search:  FHUserSearchVo) {
    return this.fhuserRepo.getFHUserAll002(search);
  }


  async getFHUserAllView() {
    return this.fhuserRepo.getFHUserAllView();
  }
}
