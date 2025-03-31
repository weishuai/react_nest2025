import { FHRoleRepo } from '../myrepositories/FHRoleRepo';
import { FHRoleSearchVo, FHRoleVo } from '../myvo/FHRoleVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class FHRoleService {
  private fhroleRepo = new FHRoleRepo();

  async findOneFHRole(Id: string) {
    ///const issue = new Fhtest();
    return this.fhroleRepo.getFHRolesById(Id);
  }

  async createFHRole(fhroleVo: FHRoleVo) {
    return this.fhroleRepo.create(fhroleVo);
  }

  async updateaFHRole(Id: string, user_id: string, fhroleVo: FHRoleVo) {
    return this.fhroleRepo.update(Id, user_id, fhroleVo);
  }

  async removeFHRole(Ids: string[]) {
    return this.fhroleRepo.remove(Ids);
  }

  async getFHRoleById(id: string) {
    return this.fhroleRepo.getFHRolesById(id);
  }

  async getFHRole(search: FHRoleSearchVo) {
    return this.fhroleRepo.getFHRole(search);
  }

  async getFHRoleAll(search: FHRoleSearchVo) {
    return this.fhroleRepo.getFHRoleAll(search);
  }

  async getFHRoleAllView() {
    return this.fhroleRepo.getFHRoleAllView();
  }
}
