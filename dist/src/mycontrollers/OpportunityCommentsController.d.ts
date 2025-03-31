import { OpportunityCommentsSearchVo, OpportunityCommentsVo } from '../myvo/OpportunityCommentsVo';
export declare class OpportunityCommentsController {
    private opportunityCommentsService;
    createOpportunityComments(OpportunityCommentsVo: OpportunityCommentsVo): Promise<import("typeorm").InsertResult>;
    updateaOpportunityComments(userToken: string, Id: string, OpportunityCommentsVo: OpportunityCommentsVo): Promise<import("typeorm").UpdateResult>;
    removeOpportunityComments(Id: string): Promise<import("typeorm").UpdateResult>;
    getOpportunityCommentsById(Id: string): Promise<any>;
    getOpportunityComments(search: OpportunityCommentsSearchVo): Promise<any[]>;
    getOpportunityCommentsAll(search: OpportunityCommentsSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
}
