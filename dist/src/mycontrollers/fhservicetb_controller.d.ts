import { FhservicetbVo } from '../myvo/fhservicetb_vo';
export declare class FhservicetbController {
    private fhservicetbService;
    createFhservicetb(fhservicetbVo: FhservicetbVo): Promise<import("typeorm").InsertResult>;
    updateaFhservicetb(userToken: string, Id: string, fhservicetbVo: FhservicetbVo): Promise<import("typeorm").UpdateResult>;
    removeFhservicetb(Id: string): Promise<import("typeorm").UpdateResult>;
    getFhservicetbById(Id: string): Promise<any>;
    getFhservicetbList(query: any): Promise<any[]>;
    getFhservicetbAll(): Promise<any[]>;
    getFhservicetbAllView(): Promise<any[]>;
}
