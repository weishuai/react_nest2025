import { FeedbackRepo } from '../myrepositories';
import { FeedbackSearchVo, FeedbackVo } from '../myvo/FeedbackVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class FeedbackService {
  private feedbackRepo = new FeedbackRepo();

  async findOneFeedback(Id: string) {
    ///const issue = new Fhtest();
    return this.feedbackRepo.getFeedbacksById(Id);
  }

  async createFeedback(feedbackVo: FeedbackVo) {
    return this.feedbackRepo.create(feedbackVo);
  }

  async updateaFeedback(Id: string, user_id: string, feedbackVo: FeedbackVo) {
    feedbackVo.updatedAt = new Date();

    feedbackVo.updatedUid = user_id;
    return this.feedbackRepo.update(Id, user_id, feedbackVo);
  }

  async removeFeedback(Ids: string[]) {
    return this.feedbackRepo.remove(Ids);
  }

  async getFeedbackById(id: string) {
    return this.feedbackRepo.getFeedbacksById(id);
  }

  async getFeedback(search: FeedbackSearchVo) {
    return this.feedbackRepo.getFeedback(search);
  }

  async getFeedbackAll(search: FeedbackSearchVo) {
    return this.feedbackRepo.getFeedbackAll(search);
  }

  async getFeedbackAllView() {
    return this.feedbackRepo.getFeedbackAllView();
  }
}
