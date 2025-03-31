import { FhservicetbSearchVo, FhservicetbVo } from '../myvo/fhservicetb_vo';
export declare class FhservicetbService {
    private fhservicetbRepo;
    findOneFhservicetb(Id: string): Promise<any>;
    createFhservicetb(fhservicetbVo: FhservicetbVo): Promise<import("typeorm").InsertResult>;
    updateaFhservicetb(Id: string, user_id: string, fhservicetbVo: FhservicetbVo): Promise<import("typeorm").UpdateResult>;
    removeFhservicetb(Ids: string): Promise<import("typeorm").UpdateResult>;
    getFhservicetbById(id: string): Promise<any>;
    getFhservicetbList(search: FhservicetbSearchVo): Promise<any[]>;
    getFhservicetbAll(): Promise<any[]>;
    getFhservicetbAllView(): Promise<any[]>;
}
