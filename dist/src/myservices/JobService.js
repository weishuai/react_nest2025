"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobService = void 0;
const myrepositories_1 = require("../myrepositories");
class JobService {
    constructor() {
        this.jobRepo = new myrepositories_1.JobRepo();
        this.jobItemRepo = new myrepositories_1.JobItemRepo();
    }
    async findOneJob(Id) {
        return this.jobRepo.getJobsById(Id);
    }
    async createJob(jobVo) {
        const mid = jobVo.id;
        this.jobItemRepo.updateJobItemVoByMid(mid, jobVo.id);
        return this.jobRepo.create(jobVo);
    }
    async updateaJob(Id, user_id, jobVo) {
        jobVo.updatedAt = new Date();
        jobVo.updatedUid = user_id;
        return this.jobRepo.update(Id, user_id, jobVo);
    }
    async removeJob(Ids) {
        return this.jobRepo.remove(Ids);
    }
    async getJobById(id) {
        return this.jobRepo.getJobsById(id);
    }
    async getJob(userId, search) {
        return this.jobRepo.getJob(userId, search);
    }
    async getJobAll(search) {
        return this.jobRepo.getJobAll(search);
    }
    async getJobAllView() {
        return this.jobRepo.getJobAllView();
    }
}
exports.JobService = JobService;
//# sourceMappingURL=JobService.js.map