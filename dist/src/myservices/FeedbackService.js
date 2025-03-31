"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackService = void 0;
const myrepositories_1 = require("../myrepositories");
class FeedbackService {
    constructor() {
        this.feedbackRepo = new myrepositories_1.FeedbackRepo();
    }
    async findOneFeedback(Id) {
        return this.feedbackRepo.getFeedbacksById(Id);
    }
    async createFeedback(feedbackVo) {
        return this.feedbackRepo.create(feedbackVo);
    }
    async updateaFeedback(Id, user_id, feedbackVo) {
        feedbackVo.updatedAt = new Date();
        feedbackVo.updatedUid = user_id;
        return this.feedbackRepo.update(Id, user_id, feedbackVo);
    }
    async removeFeedback(Ids) {
        return this.feedbackRepo.remove(Ids);
    }
    async getFeedbackById(id) {
        return this.feedbackRepo.getFeedbacksById(id);
    }
    async getFeedback(search) {
        return this.feedbackRepo.getFeedback(search);
    }
    async getFeedbackAll(search) {
        return this.feedbackRepo.getFeedbackAll(search);
    }
    async getFeedbackAllView() {
        return this.feedbackRepo.getFeedbackAllView();
    }
}
exports.FeedbackService = FeedbackService;
//# sourceMappingURL=FeedbackService.js.map