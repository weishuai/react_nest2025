"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCommentsService = void 0;
const myrepositories_1 = require("../myrepositories");
class TaskCommentsService {
    constructor() {
        this.taskCommentsRepo = new myrepositories_1.TaskCommentsRepo();
    }
    async findOneTaskComments(Id) {
        return this.taskCommentsRepo.getTaskCommentssById(Id);
    }
    async createTaskComments(taskCommentsVo) {
        return this.taskCommentsRepo.create(taskCommentsVo);
    }
    async updateaTaskComments(Id, user_id, taskCommentsVo) {
        taskCommentsVo.updatedAt = new Date();
        taskCommentsVo.updatedUid = user_id;
        return this.taskCommentsRepo.update(Id, user_id, taskCommentsVo);
    }
    async removeTaskComments(Ids) {
        return this.taskCommentsRepo.remove(Ids);
    }
    async getTaskCommentsById(id) {
        return this.taskCommentsRepo.getTaskCommentssById(id);
    }
    async getTaskComments(search) {
        return this.taskCommentsRepo.getTaskComments(search);
    }
    async getTaskCommentseAll(search) {
        return this.taskCommentsRepo.getTaskCommentsAll(search);
    }
    async getTaskCommentseAllView() {
        return this.taskCommentsRepo.getTaskCommentsAllView();
    }
}
exports.TaskCommentsService = TaskCommentsService;
//# sourceMappingURL=TaskCommentsService.js.map