import { LeadpoolsSearchVo, LeadpoolsVo } from '../myvo/LeadpoolsVo';
export declare class LeadpoolsController {
    private leadpoolsService;
    createLeadPools(LeadpoolsVo: LeadpoolsVo): Promise<import("typeorm").InsertResult>;
    updateaLeadpools(userToken: string, Id: string, LeadpoolsVo: LeadpoolsVo): Promise<import("typeorm").UpdateResult>;
    removeLeadPools(Id: string): Promise<import("typeorm").UpdateResult>;
    getLeadpoolsById(Id: string): Promise<any>;
    getLeadpools(search: LeadpoolsSearchVo): Promise<any[]>;
    getLeadpoolsAll(search: LeadpoolsSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getLeadpoolsAllView(): Promise<{
        fhok: any[];
    }>;
}
