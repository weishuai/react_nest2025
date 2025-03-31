import { OpportunityCommentsSearchVo, OpportunityCommentsVo } from '../myvo/OpportunityCommentsVo';
export declare class OpportunityCommentsRepo {
    create(accountTagVo: OpportunityCommentsVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: OpportunityCommentsVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    updateOpportunityCommentsVoByMid(mid: string, id: string): Promise<string>;
    getOpportunityCommentsAllByMid(mid: string): Promise<any[]>;
    getOpportunityCommentssById(id: string): Promise<any>;
    getOpportunityCommentsAll(search: OpportunityCommentsSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getOpportunityComments(search: OpportunityCommentsSearchVo): Promise<any[]>;
}
