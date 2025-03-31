"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityService = void 0;
const myrepositories_1 = require("../myrepositories");
class ActivityService {
    constructor() {
        this.activityRepo = new myrepositories_1.ActivityRepo();
    }
    async findOneActivity(Id) {
        return this.activityRepo.getActivitysById(Id);
    }
    async createActivity(activityVo) {
        return this.activityRepo.create(activityVo);
    }
    async updateaActivity(Id, user_id, activityVo) {
        activityVo.updatedAt = new Date();
        activityVo.updatedUid = user_id;
        return this.activityRepo.update(Id, user_id, activityVo);
    }
    async removeActivity(Ids) {
        return this.activityRepo.remove(Ids);
    }
    async getActivityById(id) {
        return this.activityRepo.getActivitysById(id);
    }
    async getActivity(userId, search) {
        return this.activityRepo.getActivity(userId, search);
    }
    async getActivitSQL(userId, search) {
        return this.activityRepo.getActivitSQL(userId, search);
    }
    async getActivityTask(userId, search) {
        return this.activityRepo.getActivitTask(userId, search);
    }
    async getActivityNote(userId, search) {
        return this.activityRepo.getActivitNote(userId, search);
    }
    async getActivityAll(search) {
        return this.activityRepo.getActivityAll(search);
    }
    async getActivityAllView() {
        return this.activityRepo.getActivityAllView();
    }
    async getActivityEventsAll() {
        return this.activityRepo.getActivityEventsAll();
    }
}
exports.ActivityService = ActivityService;
//# sourceMappingURL=ActivityService.js.map