"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkService = void 0;
const myrepositories_1 = require("../myrepositories");
class WorkService {
    constructor() {
        this.workRepo = new myrepositories_1.WorkRepo();
        this.workItemRepo = new myrepositories_1.WorkItemRepo();
        this.customizationRepo = new myrepositories_1.CustomizationRepo();
        this.workNoteRepo = new myrepositories_1.WorkNoteRepo();
    }
    async findOneWork(Id) {
        return this.workRepo.getWorksById(Id);
    }
    async createWork(workVo) {
        const mid = workVo.id;
        const refNumber = 'WO-';
        return this.workRepo.create(workVo);
    }
    async updateaWork(Id, user_id, workVo) {
        workVo.updatedAt = new Date();
        workVo.updatedUid = user_id;
        return this.workRepo.update(Id, user_id, workVo);
    }
    async removeWork(Ids) {
        return this.workRepo.remove(Ids);
    }
    async getWorkById(id) {
        return this.workRepo.getWorksById(id);
    }
    async getWork(userId, search) {
        return this.workRepo.getWork(userId, search);
    }
    async getWorkAPP(userId, search) {
        return this.workRepo.getWorkAPP(userId, search);
    }
    async getWorkAll(search) {
        return this.workRepo.getWorkAll(search);
    }
    async getWorkAllView() {
        return this.workRepo.getWorkAllView();
    }
    async getWorkOrderBySqlStartDate(SqlStartDate) {
        return this.workRepo.getWorkOrderBySqlStartDate(SqlStartDate);
    }
}
exports.WorkService = WorkService;
//# sourceMappingURL=WorkService.js.map