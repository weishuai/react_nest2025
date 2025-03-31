import { FeedbackSearchVo, FeedbackVo } from '../myvo/FeedbackVo';
export declare class FeedbackController {
    private feedbackService;
    createFeedback(FeedbackVo: FeedbackVo): Promise<import("typeorm").InsertResult>;
    updateaFeedback(userToken: string, Id: string, FeedbackVo: FeedbackVo): Promise<import("typeorm").UpdateResult>;
    removeFeedback(Id: string): Promise<import("typeorm").UpdateResult>;
    getFeedbackById(Id: string): Promise<any>;
    getFeedback(search: FeedbackSearchVo): Promise<any[]>;
    getFeedbackAll(search: FeedbackSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getFeedbackAllView(): Promise<any[]>;
}
