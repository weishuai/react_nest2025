import { FhfaultSearchVo, FhfaultVo } from '../myvo/fhfault_vo';
export declare class FhfaultService {
    private fhfaultRepo;
    findOneFhfault(Id: string): Promise<any>;
    createFhfault(fhfaultVo: FhfaultVo): Promise<import("typeorm").InsertResult>;
    updateaFhfault(Id: string, user_id: string, fhfaultVo: FhfaultVo): Promise<import("typeorm").UpdateResult>;
    removeFhfault(Ids: string): Promise<import("typeorm").UpdateResult>;
    getFhfaultById(id: string): Promise<any>;
    getFhfaultList(search: FhfaultSearchVo): Promise<any[]>;
    getFhfaultAll(): Promise<any[]>;
    getFhfaultAllView(): Promise<any[]>;
}
