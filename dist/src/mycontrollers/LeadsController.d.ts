import { LeadsSearchVo, LeadsVo } from '../myvo/LeadsVo';
export declare class LeadsController {
    private leadsService;
    createLeads(LeadsVo: LeadsVo): Promise<import("typeorm").InsertResult>;
    updateaLeads(userToken: string, Id: string, leadsVo: LeadsVo): Promise<import("typeorm").UpdateResult>;
    removeLeads(Id: string): Promise<import("typeorm").UpdateResult>;
    getLeadsById(Id: string): Promise<any>;
    getLeads(userToken: string, search: LeadsSearchVo): Promise<any[]>;
    getLeadsAll(search: LeadsSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getLeadsAllView(): Promise<any[]>;
}
