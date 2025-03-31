import { ContacPersonSearchVo, ContacPersonVo } from '../myvo/ContacPersonVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class ContacPersonService {
    private contacPersonRepo;
    findOneContacPerson(Id: string): Promise<any>;
    createContacPerson(contacPersonVo: ContacPersonVo): Promise<import("typeorm").InsertResult>;
    updateaContacPerson(Id: string, user_id: string, contacPersonVo: ContacPersonVo): Promise<import("typeorm").UpdateResult>;
    removeContacPerson(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getContacPersonById(id: string): Promise<any>;
    getContacPerson(userId: string, search: ContacPersonSearchVo): Promise<any[]>;
    getContacPersonAll(search: ContacPersonSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getContacPersonAllView(): Promise<{
        fhok: any[];
    }>;
}
