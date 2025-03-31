import { ContacPersonSearchVo, ContacPersonVo } from '../myvo/ContacPersonVo';
export declare class ContacPersonRepo {
    create(accountTagVo: ContacPersonVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: ContacPersonVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getContacPersonAllBydueDate(): Promise<any[]>;
    getContacPersonById(id: string): Promise<any>;
    getContacPersonAllView(): Promise<{
        fhok: any[];
    }>;
    getContacPersonAll(search: ContacPersonSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getContacPerson(userId: string, search: ContacPersonSearchVo): Promise<any[]>;
}
