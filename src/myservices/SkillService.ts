import { SkillRepo } from '../myrepositories';
import { SkillSearchVo, SkillVo } from '../myvo/SkillVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class SkillService {
  private skillRepo = new SkillRepo();

  async findOneSkill(Id: string) {
    ///const issue = new Fhtest();
    return this.skillRepo.getSkillsById(Id);
  }

  async createSkill(skillVo: SkillVo) {
    ///skillVo.id = id();
    return this.skillRepo.create(skillVo);
  }

  async updateaSkill(Id: string, user_id: string, skillVo: SkillVo) {
    skillVo.updatedAt = new Date();

    skillVo.updatedUid = user_id;
    return this.skillRepo.update(Id, user_id, skillVo);
  }

  async removeSkill(Ids: string[]) {
    return this.skillRepo.remove(Ids);
  }

  async getSkillById(id: string) {
    return this.skillRepo.getSkillsById(id);
  }

  async getSkill(search: SkillSearchVo) {
    return this.skillRepo.getSkill(search);
  }

  async getSkillAll(search: SkillSearchVo) {
    return this.skillRepo.getSkillAll(search);
  }

  async getSkillAllView() {
    return this.skillRepo.getSkillAllView();
  }
}
