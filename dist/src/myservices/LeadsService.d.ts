import { LeadsSearchVo, LeadsVo } from '../myvo/LeadsVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class LeadsService {
    private leadsRepo;
    findOneleads(Id: string): Promise<any>;
    createLeads(leadsVo: LeadsVo): Promise<import("typeorm").InsertResult>;
    updateaLeads(Id: string, user_id: string, leadsVo: LeadsVo): Promise<import("typeorm").UpdateResult>;
    removeLeads(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getLeadsById(id: string): Promise<any>;
    getLeads(userId: string, search: LeadsSearchVo): Promise<any[]>;
    getLeadsAll(search: LeadsSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getLeadsAllView(): Promise<any[]>;
}
