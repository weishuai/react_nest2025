import {
  CustomizationRepo,
  WorkItemRepo,
  WorkNoteRepo,
  WorkRepo,
} from '../myrepositories';
import { WorkSearchVo, WorkVo } from '../myvo/WorkVo';

export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class WorkService {
  private workRepo = new WorkRepo();
  private workItemRepo = new WorkItemRepo();
  private customizationRepo = new CustomizationRepo();
  private workNoteRepo = new WorkNoteRepo();

  async findOneWork(Id: string) {
    ///const issue = new Fhtest();
    return this.workRepo.getWorksById(Id);
  }

  async createWork(workVo: WorkVo) {
    const mid = workVo.id;
    ///workVo.id = id();

    const refNumber = 'WO-';
    ///workVo.refNumber = String((await this.customizationRepo.nextGetNo(refNumber)).No);
    //this.workItemRepo.updateWorkItemVoByMid(mid, workVo.id);
    //this.workNoteRepo.updateWorkNoteVoByMid(mid, workVo.id);
    return this.workRepo.create(workVo);
  }

  async updateaWork(Id: string, user_id: string, workVo: WorkVo) {
    workVo.updatedAt = new Date();

    workVo.updatedUid = user_id;
    return this.workRepo.update(Id, user_id, workVo);
  }

  async removeWork(Ids: string[]) {
    return this.workRepo.remove(Ids);
  }

  async getWorkById(id: string) {
    return this.workRepo.getWorksById(id);
  }

  async getWork(userId: string, search: WorkSearchVo) {
    return this.workRepo.getWork(userId, search);
  }

  async getWorkAPP(userId: string, search: WorkSearchVo) {
    return this.workRepo.getWorkAPP(userId, search);
  }

  async getWorkAll(search: WorkSearchVo) {
    return this.workRepo.getWorkAll(search);
  }

  async getWorkAllView() {
    return this.workRepo.getWorkAllView();
  }

  async getWorkOrderBySqlStartDate(SqlStartDate: string) {
    return this.workRepo.getWorkOrderBySqlStartDate(SqlStartDate);
  }
}
