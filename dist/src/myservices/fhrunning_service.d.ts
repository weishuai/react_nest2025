import { FhrunningSearchVo, FhrunningVo } from '../myvo/fhrunning_vo';
export declare class FhrunningService {
    private fhrunningRepo;
    findOneFhrunning(Id: string): Promise<any>;
    createFhrunning(fhrunningVo: FhrunningVo): Promise<import("typeorm").InsertResult>;
    updateaFhrunning(Id: string, user_id: string, fhrunningVo: FhrunningVo): Promise<import("typeorm").UpdateResult>;
    removeFhrunning(Ids: string): Promise<import("typeorm").UpdateResult>;
    getFhrunningById(id: string): Promise<any>;
    getFhrunningList(search: FhrunningSearchVo): Promise<any[]>;
    getFhrunningAll(): Promise<any[]>;
    getFhrunningAllView(): Promise<any[]>;
}
