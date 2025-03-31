import { AttenceSearchVo, AttenceVo } from '../myvo/AttenceVo';
export declare class AttenceRepo {
    create(accountTagVo: AttenceVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: AttenceVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getAttencesById(id: string): Promise<any>;
    getAttenceAll(search: AttenceSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getAttenceAllView(): Promise<any[]>;
    getAttence(search: AttenceSearchVo): Promise<any[]>;
}
