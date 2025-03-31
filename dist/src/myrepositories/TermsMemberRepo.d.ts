import { TermsMemberSearchVo, TermsMemberVo } from '../myvo/TermsMemberVo';
export declare class TermsMemberRepo {
    create(accountTagVo: TermsMemberVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: TermsMemberVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getTermsMembersById(id: string): Promise<any>;
    getTermsMemberAll(search: TermsMemberSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTermsMemberAllView(): Promise<any[]>;
    getTermsMember(search: TermsMemberSearchVo): Promise<any[]>;
}
