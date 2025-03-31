import { FhservicetbSearchVo, FhservicetbVo } from '../myvo/fhservicetb_vo';
export declare class FhservicetbRepo {
    create(fhservicetbVo: FhservicetbVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, fhservicetbVo: FhservicetbVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getFhservicetbsById(id: string): Promise<any>;
    getFhservicetbAll(): Promise<any[]>;
    getFhservicetbAllView(): Promise<any[]>;
    getFhservicetbList(search: FhservicetbSearchVo): Promise<any[]>;
}
