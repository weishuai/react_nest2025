import { LeadpoolsSearchVo, LeadpoolsVo } from '../myvo/LeadpoolsVo';
export declare class LeadpoolsRepo {
    create(accountTagVo: LeadpoolsVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: LeadpoolsVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getLeadpoolsById(id: string): Promise<any>;
    getLeadpoolsAll(search: LeadpoolsSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getLeadpoolsAllView(): Promise<{
        fhok: any[];
    }>;
    getLeadpools(search: LeadpoolsSearchVo): Promise<any[]>;
}
