import { AttachmentRepo, TaskCommentsRepo, TaskRepo } from '../myrepositories';
import { TaskSearchVo, TaskVo } from '../myvo/TaskVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class TaskService {
  private taskRepo = new TaskRepo();
  private taskAttachmentRepo = new AttachmentRepo();
  private taskCommentsRepo = new TaskCommentsRepo();

  async findOneTask(Id: string) {
    ///const issue = new Fhtest();
    return this.taskRepo.gettasksById(Id);
  }

  async createTask(taskVo: TaskVo) {
    ///taskVo.id = id();
    const mid = taskVo.id;
    ///taskVo.id = id();
    this.taskAttachmentRepo.updateAttachmentByMid(mid, taskVo.id);
    this.taskCommentsRepo.updateTaskCommentsVoByMid(mid, taskVo.id);
    return this.taskRepo.create(taskVo);
  }

  async updateaTask(Id: string, user_id: string, taskVo: TaskVo) {
    taskVo.updatedAt = new Date();

    taskVo.updatedUid = user_id;
    return this.taskRepo.update(Id, user_id, taskVo);
  }

  async updateaTaskStatus(Id: string) {
    ///return this.taskRepo.update(Id, { status: '1' });
  }

  async removeTask(Ids: string[]) {
    return this.taskRepo.remove(Ids);
  }

  async getTaskById(id: string) {
    return this.taskRepo.gettasksById(id);
  }

  async getTask(search: TaskSearchVo) {
    return this.taskRepo.gettask(search);
  }

  async getTaskAll(search: TaskSearchVo) {
    return this.taskRepo.gettaskAll(search);
  }

  async getTaskAllView() {
    return this.taskRepo.gettaskAllView();
  }
}
