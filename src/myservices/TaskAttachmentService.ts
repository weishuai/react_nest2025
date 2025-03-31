import { TaskAttachmentRepo } from '../myrepositories';
import {
  TaskAttachmentSearchVo,
  TaskAttachmentVo,
} from '../myvo/TaskAttachmentVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class TaskAttachmentService {
  private taskAttachmentRepo = new TaskAttachmentRepo();

  async findOneTaskAttachment(Id: string) {
    ///const issue = new Fhtest();
    return this.taskAttachmentRepo.getTaskAttachmentsById(Id);
  }

  async createTaskAttachment(taskAttachmentVo: TaskAttachmentVo) {
    //taskAttachmentVo.id = id();
    return this.taskAttachmentRepo.create(taskAttachmentVo);
  }

  async updateaTaskAttachment(
    Id: string,
    user_id: string,
    taskAttachmentVo: TaskAttachmentVo,
  ) {
    taskAttachmentVo.updatedAt = new Date();

    taskAttachmentVo.updatedUid = user_id;
    return this.taskAttachmentRepo.update(Id, user_id, taskAttachmentVo);
  }

  async removeTaskAttachment(Ids: string[]) {
    return this.taskAttachmentRepo.remove(Ids);
  }

  async getTaskAttachmentById(id: string) {
    return this.taskAttachmentRepo.getTaskAttachmentsById(id);
  }

  async getTaskAttachment(search: TaskAttachmentSearchVo) {
    return this.taskAttachmentRepo.getTaskAttachment(search);
  }

  async getTaskAttachmentAll(search: TaskAttachmentSearchVo) {
    return this.taskAttachmentRepo.getTaskAttachmentAll(search);
  }

  async getTaskAttachmentAllView() {
    return this.taskAttachmentRepo.getTaskAttachmentAllView();
  }
}
