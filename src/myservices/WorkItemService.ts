import { WorkItemRepo } from '../myrepositories';
import { WorkItemSearchVo, WorkItemVo } from '../myvo/WorkItemVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class WorkItemService {
  private workItemRepo = new WorkItemRepo();
  async findOneWorkItem(Id: string) {
    ///const issue = new Fhtest();
    return this.workItemRepo.getWorkItemsById(Id);
  }

  async createWorkItem(workItemVo: WorkItemVo) {
    ///workItemVo.id = id();
    return this.workItemRepo.create(workItemVo);
  }

  async removeToWorkItem(mid: string) {
    return this.workItemRepo.updateToWorkItemsVoByMid(mid);
  }

  async WorkItemUpdateMid(mid: string, MID: string) {
    return this.workItemRepo.WorkItemUpdateMid(mid, MID);
  }

  async updateaWorkItem(Id: string, user_id: string, workItemVo: WorkItemVo) {
    workItemVo.updatedAt = new Date();

    workItemVo.updatedUid = user_id;
    return this.workItemRepo.update(Id, user_id, workItemVo);
  }

  async removeWorkItem(Ids: string[]) {
    return this.workItemRepo.remove(Ids);
  }

  async getWorkItemById(id: string) {
    return this.workItemRepo.getWorkItemsById(id);
  }

  async getWorkItem(search: WorkItemSearchVo) {
    return this.workItemRepo.getWorkItem(search);
  }

  async getWorkItemAll(search: WorkItemSearchVo) {
    return this.workItemRepo.getWorkItemAll(search);
  }

  async getWorkItemAllView() {
    return this.workItemRepo.getWorkItemAllView();
  }
}
