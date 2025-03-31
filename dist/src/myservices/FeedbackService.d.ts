import { FeedbackSearchVo, FeedbackVo } from '../myvo/FeedbackVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class FeedbackService {
    private feedbackRepo;
    findOneFeedback(Id: string): Promise<any>;
    createFeedback(feedbackVo: FeedbackVo): Promise<import("typeorm").InsertResult>;
    updateaFeedback(Id: string, user_id: string, feedbackVo: FeedbackVo): Promise<import("typeorm").UpdateResult>;
    removeFeedback(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getFeedbackById(id: string): Promise<any>;
    getFeedback(search: FeedbackSearchVo): Promise<any[]>;
    getFeedbackAll(search: FeedbackSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getFeedbackAllView(): Promise<any[]>;
}
