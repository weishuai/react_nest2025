import { JobItemRepo, JobRepo } from '../myrepositories';
import { JobSearchVo, JobVo } from '../myvo/JobVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class JobService {
  private jobRepo = new JobRepo();
  private jobItemRepo = new JobItemRepo();
  async findOneJob(Id: string) {
    ///const issue = new Fhtest();
    return this.jobRepo.getJobsById(Id);
  }

  async createJob(jobVo: JobVo) {
    const mid = jobVo.id;

    this.jobItemRepo.updateJobItemVoByMid(mid, jobVo.id);
    return this.jobRepo.create(jobVo);
  }

  async updateaJob(Id: string, user_id: string, jobVo: JobVo) {
    jobVo.updatedAt = new Date();

    jobVo.updatedUid = user_id;
    return this.jobRepo.update(Id, user_id, jobVo);
  }

  async removeJob(Ids: string[]) {
    return this.jobRepo.remove(Ids);
  }

  async getJobById(id: string) {
    return this.jobRepo.getJobsById(id);
  }

  async getJob(userId: string, search: JobSearchVo) {
    return this.jobRepo.getJob(userId, search);
  }

  async getJobAll(search: JobSearchVo) {
    return this.jobRepo.getJobAll(search);
  }

  async getJobAllView() {
    return this.jobRepo.getJobAllView();
  }
}
