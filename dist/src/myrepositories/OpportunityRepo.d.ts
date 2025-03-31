import { FHOpportunitySearchVo, OpportunitySearchVo, OpportunityVo } from '../myvo/OpportunityVo';
export declare class OpportunityRepo {
    create(accountTagVo: OpportunityVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: OpportunityVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getopportunitysById(id: string): Promise<any>;
    getOpportunitysCountBystageName(stageName: string): Promise<number>;
    getopportunityAll(search: OpportunitySearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getopportunityAllView(): Promise<any[]>;
    getopportunity(userId: string, search: OpportunitySearchVo): Promise<any[]>;
    getopportunitySQL(userId: string, search: FHOpportunitySearchVo): Promise<{
        count: number;
        raws: any[];
    }>;
}
