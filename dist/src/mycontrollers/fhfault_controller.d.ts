import { FhfaultVo } from '../myvo/fhfault_vo';
export declare class FhfaultController {
    private fhfaultService;
    createFhfault(fhfaultVo: FhfaultVo): Promise<import("typeorm").InsertResult>;
    updateaFhfault(userToken: string, Id: string, fhfaultVo: FhfaultVo): Promise<import("typeorm").UpdateResult>;
    removeFhfault(Id: string): Promise<import("typeorm").UpdateResult>;
    getFhfaultById(Id: string): Promise<any>;
    getFhfaultList(query: any): Promise<any[]>;
    getFhfaultAll(): Promise<any[]>;
    getFhfaultAllView(): Promise<any[]>;
}
