import { LeadpoolsSearchVo, LeadpoolsVo } from '../myvo/LeadpoolsVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class LeadpoolsService {
    private leadpoolsRepo;
    findOneleadpools(Id: string): Promise<any>;
    createLeadpools(leadpoolsVo: LeadpoolsVo): Promise<import("typeorm").InsertResult>;
    updateaLeadpools(Id: string, user_id: string, leadpoolsVo: LeadpoolsVo): Promise<import("typeorm").UpdateResult>;
    removeLeadpools(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getLeadpoolsById(id: string): Promise<any>;
    getLeadpools(search: LeadpoolsSearchVo): Promise<any[]>;
    getLeadpoolsAll(search: LeadpoolsSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getLeadpoolsAllView(): Promise<{
        fhok: any[];
    }>;
}
