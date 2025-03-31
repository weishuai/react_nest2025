import { LeadsSearchVo, LeadsVo } from '../myvo/LeadsVo';
export declare class LeadsRepo {
    create(accountTagVo: LeadsVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: LeadsVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getleadssById(id: string): Promise<any>;
    getLeadsAll(search: LeadsSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getLeadsAllView(): Promise<any[]>;
    getleads(userId: string, search: LeadsSearchVo): Promise<any[]>;
}
