import { StageRepo } from '../myrepositories';
import { StageSearchVo, StageVo } from '../myvo/StageVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class StageService {
  private stageRepo = new StageRepo();
  async findOneStage(Id: string) {
    ///const issue = new Fhtest();
    return this.stageRepo.getStagesById(Id);
  }

  async createStage(stageVo: StageVo) {
    ///stageVo.id = id();
    return this.stageRepo.create(stageVo);
  }

  async updateaStage(Id: string, user_id: string, stageVo: StageVo) {
    stageVo.updatedAt = new Date();

    stageVo.updatedUid = user_id;
    return this.stageRepo.update(Id, user_id, stageVo);
  }

  async removeStage(Ids: string[]) {
    return this.stageRepo.remove(Ids);
  }

  async getStageById(id: string) {
    return this.stageRepo.getStagesById(id);
  }

  async getStage(search: StageSearchVo) {
    return this.stageRepo.getStage(search);
  }

  async getStageAll(search: StageSearchVo) {
    return this.stageRepo.getStageAll(search);
  }

  async getStageAllView() {
    return this.stageRepo.getStageAllView();
  }
}
