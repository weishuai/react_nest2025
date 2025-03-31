import { FHOpportunitySearchVo, OpportunitySearchVo, OpportunityVo } from '../myvo/OpportunityVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class OpportunityService {
    private opportunityRepo;
    private opportunityCommentsRepo;
    private customizationRepo;
    findOneOpportunity(Id: string): Promise<any>;
    createOpportunity(opportunityVo: OpportunityVo): Promise<import("typeorm").InsertResult>;
    updateaOpportunity(Id: string, user_id: string, opportunityVo: OpportunityVo): Promise<import("typeorm").UpdateResult>;
    removeOpportunity(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getOpportunityById(id: string): Promise<any>;
    getOpportunitysCountBystageName(stageName: string): Promise<number>;
    getOpportunity(userId: string, search: OpportunitySearchVo): Promise<any[]>;
    getOpportunitySQL(userId: string, search: FHOpportunitySearchVo): Promise<{
        count: number;
        raws: any[];
    }>;
    getOpportunityAll(search: OpportunitySearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getOpportunityAllView(): Promise<any[]>;
}
