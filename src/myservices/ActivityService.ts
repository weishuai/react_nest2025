import { ActivityRepo } from '../myrepositories';
import {
  ActivitySearchVo,
  ActivityVo,
  FHActivitySearchVo,
} from '../myvo/ActivityVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class ActivityService {
  private activityRepo = new ActivityRepo();

  async findOneActivity(Id: string) {
    ///const issue = new Fhtest();
    return this.activityRepo.getActivitysById(Id);
  }

  async createActivity(activityVo: ActivityVo) {
    return this.activityRepo.create(activityVo);
  }

  async updateaActivity(Id: string, user_id: string, activityVo: ActivityVo) {
    activityVo.updatedAt = new Date();

    activityVo.updatedUid = user_id;
    return this.activityRepo.update(Id, user_id, activityVo);
  }

  async removeActivity(Ids: string[]) {
    return this.activityRepo.remove(Ids);
  }

  async getActivityById(id: string) {
    return this.activityRepo.getActivitysById(id);
  }

  async getActivity(userId: string, search: ActivitySearchVo) {
    return this.activityRepo.getActivity(userId, search);
  }

  async getActivitSQL(userId: string, search: FHActivitySearchVo) {
    return this.activityRepo.getActivitSQL(userId, search);
  }

  async getActivityTask(userId: string, search: ActivitySearchVo) {
    return this.activityRepo.getActivitTask(userId, search);
  }

  async getActivityNote(userId: string, search: ActivitySearchVo) {
    return this.activityRepo.getActivitNote(userId, search);
  }

  async getActivityAll(search: ActivitySearchVo) {
    return this.activityRepo.getActivityAll(search);
  }

  async getActivityAllView() {
    return this.activityRepo.getActivityAllView();
  }

  async getActivityEventsAll() {
    return this.activityRepo.getActivityEventsAll();
  }
}
