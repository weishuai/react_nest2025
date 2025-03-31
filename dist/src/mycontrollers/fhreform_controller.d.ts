import { FhreformVo } from '../myvo/fhreform_vo';
export declare class FhreformController {
    private fhreformService;
    createFhreform(fhreformVo: FhreformVo): Promise<import("typeorm").InsertResult>;
    updateaFhreform(userToken: string, Id: string, fhreformVo: FhreformVo): Promise<import("typeorm").UpdateResult>;
    removeFhreform(Id: string): Promise<import("typeorm").UpdateResult>;
    getFhreformById(Id: string): Promise<any>;
    getFhreformList(query: any): Promise<any[]>;
    getFhreformAll(): Promise<any[]>;
    getFhreformAllView(): Promise<any[]>;
}
