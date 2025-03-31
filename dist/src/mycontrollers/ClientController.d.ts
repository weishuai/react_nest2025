import { ClientSearchVo, ClientVo, FHClientSearchVo } from '../myvo/ClientVo';
export declare class ClientController {
    private clientService;
    createClient(ClientVo: ClientVo): Promise<import("typeorm").InsertResult>;
    updateaClient(userToken: string, Id: string, ClientVo: ClientVo): Promise<import("typeorm").UpdateResult>;
    removeClient(Id: string): Promise<import("typeorm").UpdateResult>;
    getClientById(Id: string): Promise<any>;
    getClient(userToken: string, search: ClientSearchVo): Promise<any[]>;
    getClientv2(userToken: string, search: ClientSearchVo): Promise<any[]>;
    getClientv2SQL(userToken: string, search: FHClientSearchVo): Promise<{
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
