import { AttenceSearchVo, AttenceVo } from '../myvo/AttenceVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class AttenceService {
    private attenceRepo;
    findOneAttence(Id: string): Promise<any>;
    createAttence(attenceVo: AttenceVo): Promise<import("typeorm").InsertResult>;
    updateaAttence(Id: string, user_id: string, attenceVo: AttenceVo): Promise<import("typeorm").UpdateResult>;
    removeAttence(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getAttenceById(id: string): Promise<any>;
    getAttence(search: AttenceSearchVo): Promise<any[]>;
    getAttenceAll(search: AttenceSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getAttenceAllView(): Promise<any[]>;
}
