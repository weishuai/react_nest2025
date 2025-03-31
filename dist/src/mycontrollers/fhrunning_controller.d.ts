import { FhrunningVo } from '../myvo/fhrunning_vo';
export declare class FhrunningController {
    private fhrunningService;
    createFhrunning(fhrunningVo: FhrunningVo): Promise<import("typeorm").InsertResult>;
    updateaFhrunning(userToken: string, Id: string, fhrunningVo: FhrunningVo): Promise<import("typeorm").UpdateResult>;
    removeFhrunning(Id: string): Promise<import("typeorm").UpdateResult>;
    getFhrunningById(Id: string): Promise<any>;
    getFhrunningList(query: any): Promise<any[]>;
    getFhrunningAll(): Promise<any[]>;
    getFhrunningAllView(): Promise<any[]>;
}
