"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkItemService = void 0;
const myrepositories_1 = require("../myrepositories");
class WorkItemService {
    constructor() {
        this.workItemRepo = new myrepositories_1.WorkItemRepo();
    }
    async findOneWorkItem(Id) {
        return this.workItemRepo.getWorkItemsById(Id);
    }
    async createWorkItem(workItemVo) {
        return this.workItemRepo.create(workItemVo);
    }
    async removeToWorkItem(mid) {
        return this.workItemRepo.updateToWorkItemsVoByMid(mid);
    }
    async WorkItemUpdateMid(mid, MID) {
        return this.workItemRepo.WorkItemUpdateMid(mid, MID);
    }
    async updateaWorkItem(Id, user_id, workItemVo) {
        workItemVo.updatedAt = new Date();
        workItemVo.updatedUid = user_id;
        return this.workItemRepo.update(Id, user_id, workItemVo);
    }
    async removeWorkItem(Ids) {
        return this.workItemRepo.remove(Ids);
    }
    async getWorkItemById(id) {
        return this.workItemRepo.getWorkItemsById(id);
    }
    async getWorkItem(search) {
        return this.workItemRepo.getWorkItem(search);
    }
    async getWorkItemAll(search) {
        return this.workItemRepo.getWorkItemAll(search);
    }
    async getWorkItemAllView() {
        return this.workItemRepo.getWorkItemAllView();
    }
}
exports.WorkItemService = WorkItemService;
//# sourceMappingURL=WorkItemService.js.map