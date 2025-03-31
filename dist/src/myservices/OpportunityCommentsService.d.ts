import { OpportunityCommentsSearchVo, OpportunityCommentsVo } from '../myvo/OpportunityCommentsVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class OpportunityCommentsService {
    private opportunityCommentsRepo;
    findOneOpportunityComments(Id: string): Promise<any>;
    createOpportunityComments(opportunityCommentsVo: OpportunityCommentsVo): Promise<import("typeorm").InsertResult>;
    updateaOpportunityComments(Id: string, user_id: string, opportunityCommentsVo: OpportunityCommentsVo): Promise<import("typeorm").UpdateResult>;
    removeOpportunityComments(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getOpportunityCommentsById(id: string): Promise<any>;
    getOpportunityComments(search: OpportunityCommentsSearchVo): Promise<any[]>;
    getOpportunityCommentsAll(search: OpportunityCommentsSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
}
