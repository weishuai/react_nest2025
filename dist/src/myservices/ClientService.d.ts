import { ClientSearchVo, ClientVo, FHClientSearchVo } from '../myvo/ClientVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class ClientService {
    private clientRepo;
    findOneclient(Id: string): Promise<any>;
    createClient(clientVo: ClientVo): Promise<import("typeorm").InsertResult>;
    updateaClient(Id: string, user_id: string, clientVo: ClientVo): Promise<import("typeorm").UpdateResult>;
    removeClient(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getClientById(id: string): Promise<any>;
    getClient(userId: string, search: ClientSearchVo): Promise<any[]>;
    getClientSQL(userId: string, search: FHClientSearchVo): Promise<{
        count: number;
        raws: any[];
    }>;
    getClientAll(search: ClientSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getClientAllView(): Promise<{
        fhok: any[];
    }>;
}
