import { JobItemRepo } from '../myrepositories';
import { JobItemSearchVo, JobItemVo } from '../myvo/JobItemVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class JobItemService {
  private jobItemRepo = new JobItemRepo();

  async findOneJobItem(Id: string) {
    ///const issue = new Fhtest();
    return this.jobItemRepo.getJobItemsById(Id);
  }

  async createJobItem(jobItemVo: JobItemVo) {
    ///jobItemVo.id = id();
    return this.jobItemRepo.create(jobItemVo);
  }

  async updateaJobItem(Id: string, user_id: string, jobItemVo: JobItemVo) {
    jobItemVo.updatedAt = new Date();

    jobItemVo.updatedUid = user_id;
    return this.jobItemRepo.update(Id, user_id, jobItemVo);
  }

  async removeJobItem(Ids: string[]) {
    return this.jobItemRepo.remove(Ids);
  }

  async updateJobItemVoByMid(mid: string, id: string) {
    return this.jobItemRepo.updateJobItemVoByMid(mid, id);
  }

  async getJobItemById(id: string) {
    return this.jobItemRepo.getJobItemsById(id);
  }

  async getJobItem(search: JobItemSearchVo) {
    return this.jobItemRepo.getJobItem(search);
  }

  async getJobItemAPP(search: JobItemSearchVo) {
    return this.jobItemRepo.getJobItemAPP(search);
  }

  async getJobItemAll(search: JobItemSearchVo) {
    return this.jobItemRepo.getJobItemAll(search);
  }

  async getJobItemAllView() {
    return this.jobItemRepo.getJobItemAllView();
  }
}
