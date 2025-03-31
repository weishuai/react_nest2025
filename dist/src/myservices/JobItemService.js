"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobItemService = void 0;
const myrepositories_1 = require("../myrepositories");
class JobItemService {
    constructor() {
        this.jobItemRepo = new myrepositories_1.JobItemRepo();
    }
    async findOneJobItem(Id) {
        return this.jobItemRepo.getJobItemsById(Id);
    }
    async createJobItem(jobItemVo) {
        return this.jobItemRepo.create(jobItemVo);
    }
    async updateaJobItem(Id, user_id, jobItemVo) {
        jobItemVo.updatedAt = new Date();
        jobItemVo.updatedUid = user_id;
        return this.jobItemRepo.update(Id, user_id, jobItemVo);
    }
    async removeJobItem(Ids) {
        return this.jobItemRepo.remove(Ids);
    }
    async updateJobItemVoByMid(mid, id) {
        return this.jobItemRepo.updateJobItemVoByMid(mid, id);
    }
    async getJobItemById(id) {
        return this.jobItemRepo.getJobItemsById(id);
    }
    async getJobItem(search) {
        return this.jobItemRepo.getJobItem(search);
    }
    async getJobItemAPP(search) {
        return this.jobItemRepo.getJobItemAPP(search);
    }
    async getJobItemAll(search) {
        return this.jobItemRepo.getJobItemAll(search);
    }
    async getJobItemAllView() {
        return this.jobItemRepo.getJobItemAllView();
    }
}
exports.JobItemService = JobItemService;
//# sourceMappingURL=JobItemService.js.map