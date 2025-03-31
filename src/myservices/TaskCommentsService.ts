import { TaskCommentsRepo } from '../myrepositories';
import { TaskCommentsSearchVo, TaskCommentsVo } from '../myvo/TaskCommentsVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class TaskCommentsService {
  private taskCommentsRepo = new TaskCommentsRepo();

  async findOneTaskComments(Id: string) {
    ///const issue = new Fhtest();
    return this.taskCommentsRepo.getTaskCommentssById(Id);
  }

  async createTaskComments(taskCommentsVo: TaskCommentsVo) {
    //taskCommentsVo.id = id();
    return this.taskCommentsRepo.create(taskCommentsVo);
  }

  async updateaTaskComments(
    Id: string,
    user_id: string,
    taskCommentsVo: TaskCommentsVo,
  ) {
    taskCommentsVo.updatedAt = new Date();

    taskCommentsVo.updatedUid = user_id;
    return this.taskCommentsRepo.update(Id, user_id, taskCommentsVo);
  }

  async removeTaskComments(Ids: string[]) {
    return this.taskCommentsRepo.remove(Ids);
  }

  async getTaskCommentsById(id: string) {
    return this.taskCommentsRepo.getTaskCommentssById(id);
  }

  async getTaskComments(search: TaskCommentsSearchVo) {
    return this.taskCommentsRepo.getTaskComments(search);
  }

  async getTaskCommentseAll(search: TaskCommentsSearchVo) {
    return this.taskCommentsRepo.getTaskCommentsAll(search);
  }

  async getTaskCommentseAllView() {
    return this.taskCommentsRepo.getTaskCommentsAllView();
  }
}
