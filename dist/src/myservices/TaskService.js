"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const myrepositories_1 = require("../myrepositories");
class TaskService {
    constructor() {
        this.taskRepo = new myrepositories_1.TaskRepo();
        this.taskAttachmentRepo = new myrepositories_1.AttachmentRepo();
        this.taskCommentsRepo = new myrepositories_1.TaskCommentsRepo();
    }
    async findOneTask(Id) {
        return this.taskRepo.gettasksById(Id);
    }
    async createTask(taskVo) {
        const mid = taskVo.id;
        this.taskAttachmentRepo.updateAttachmentByMid(mid, taskVo.id);
        this.taskCommentsRepo.updateTaskCommentsVoByMid(mid, taskVo.id);
        return this.taskRepo.create(taskVo);
    }
    async updateaTask(Id, user_id, taskVo) {
        taskVo.updatedAt = new Date();
        taskVo.updatedUid = user_id;
        return this.taskRepo.update(Id, user_id, taskVo);
    }
    async updateaTaskStatus(Id) {
    }
    async removeTask(Ids) {
        return this.taskRepo.remove(Ids);
    }
    async getTaskById(id) {
        return this.taskRepo.gettasksById(id);
    }
    async getTask(search) {
        return this.taskRepo.gettask(search);
    }
    async getTaskAll(search) {
        return this.taskRepo.gettaskAll(search);
    }
    async getTaskAllView() {
        return this.taskRepo.gettaskAllView();
    }
}
exports.TaskService = TaskService;
//# sourceMappingURL=TaskService.js.map