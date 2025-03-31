import { ContacPersonSearchVo, ContacPersonVo } from '../myvo/ContacPersonVo';
export declare class ContacPersonController {
    private contacPersonService;
    createContacPerson(contacPersonVo: ContacPersonVo): Promise<import("typeorm").InsertResult>;
    updateaContacPerson(userToken: string, Id: string, ContacPersonVo: ContacPersonVo): Promise<import("typeorm").UpdateResult>;
    removeContacPerson(Id: string): Promise<import("typeorm").UpdateResult>;
    getContacPersonById(Id: string): Promise<any>;
    getContacPerson(userToken: string, search: ContacPersonSearchVo): Promise<any[]>;
    getContacPersonAll(search: ContacPersonSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getContacPersonAllView(): Promise<{
        fhok: any[];
    }>;
}
