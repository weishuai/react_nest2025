import { FeedbackSearchVo, FeedbackVo } from '../myvo/FeedbackVo';
export declare class FeedbackRepo {
    create(accountTagVo: FeedbackVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: FeedbackVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getFeedbacksById(id: string): Promise<any>;
    getFeedbackAll(search: FeedbackSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getFeedbackAllView(): Promise<any[]>;
    getFeedback(search: FeedbackSearchVo): Promise<any[]>;
}
