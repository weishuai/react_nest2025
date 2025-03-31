"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskAttachmentService = void 0;
const myrepositories_1 = require("../myrepositories");
class TaskAttachmentService {
    constructor() {
        this.taskAttachmentRepo = new myrepositories_1.TaskAttachmentRepo();
    }
    async findOneTaskAttachment(Id) {
        return this.taskAttachmentRepo.getTaskAttachmentsById(Id);
    }
    async createTaskAttachment(taskAttachmentVo) {
        return this.taskAttachmentRepo.create(taskAttachmentVo);
    }
    async updateaTaskAttachment(Id, user_id, taskAttachmentVo) {
        taskAttachmentVo.updatedAt = new Date();
        taskAttachmentVo.updatedUid = user_id;
        return this.taskAttachmentRepo.update(Id, user_id, taskAttachmentVo);
    }
    async removeTaskAttachment(Ids) {
        return this.taskAttachmentRepo.remove(Ids);
    }
    async getTaskAttachmentById(id) {
        return this.taskAttachmentRepo.getTaskAttachmentsById(id);
    }
    async getTaskAttachment(search) {
        return this.taskAttachmentRepo.getTaskAttachment(search);
    }
    async getTaskAttachmentAll(search) {
        return this.taskAttachmentRepo.getTaskAttachmentAll(search);
    }
    async getTaskAttachmentAllView() {
        return this.taskAttachmentRepo.getTaskAttachmentAllView();
    }
}
exports.TaskAttachmentService = TaskAttachmentService;
//# sourceMappingURL=TaskAttachmentService.js.map