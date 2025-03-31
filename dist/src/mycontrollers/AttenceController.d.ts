import { AttenceSearchVo, AttenceVo } from '../myvo/AttenceVo';
export declare class AttenceController {
    private attenceService;
    createAttence(AttenceVo: AttenceVo): Promise<import("typeorm").InsertResult>;
    updateaAttence(userToken: string, Id: string, AttenceVo: AttenceVo): Promise<import("typeorm").UpdateResult>;
    removeAttence(Id: string): Promise<import("typeorm").UpdateResult>;
    getAttenceById(Id: string): Promise<any>;
    getAttence(search: AttenceSearchVo): Promise<any[]>;
    getAttenceAll(search: AttenceSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getAttenceAllView(): Promise<any[]>;
}
