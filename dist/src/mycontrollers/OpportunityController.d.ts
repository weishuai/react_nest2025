import { FHOpportunitySearchVo, OpportunitySearchVo, OpportunityVo } from '../myvo/OpportunityVo';
export declare class OpportunityController {
    private opportunityService;
    createOpportunity(OpportunityVo: OpportunityVo): Promise<import("typeorm").InsertResult>;
    updateaOpportunity(userToken: string, Id: string, OpportunityVo: OpportunityVo): Promise<import("typeorm").UpdateResult>;
    removeOpportunity(Id: string): Promise<import("typeorm").UpdateResult>;
    getOpportunityById(Id: string): Promise<any>;
    getOpportunitysCountBystageName(stageName: string): Promise<void>;
    getOpportunity(userToken: string, search: OpportunitySearchVo): Promise<any[]>;
    getOpportunitySQL(userToken: string, search: FHOpportunitySearchVo): Promise<{
        count: number;
        raws: any[];
    }>;
    getOpportunityAll(search: OpportunitySearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getOpportunityAllView(): Promise<any[]>;
}
