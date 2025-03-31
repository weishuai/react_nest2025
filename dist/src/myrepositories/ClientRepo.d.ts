import { ClientSearchVo, ClientVo, FHClientSearchVo } from '../myvo/ClientVo';
export declare class ClientRepo {
    create(accountTagVo: ClientVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: ClientVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getClientById(id: string): Promise<any>;
    getClientAll(search: ClientSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getClientAllView(): Promise<{
        fhok: any[];
    }>;
    getClient(userId: string, search: ClientSearchVo): Promise<any[]>;
    getClientSQL(userId: string, search: FHClientSearchVo): Promise<{
        count: number;
        raws: any[];
    }>;
}
