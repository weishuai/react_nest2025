import { FhreformSearchVo, FhreformVo } from '../myvo/fhreform_vo';
export declare class FhreformService {
    private fhreformRepo;
    findOneFhreform(Id: string): Promise<any>;
    createFhreform(fhreformVo: FhreformVo): Promise<import("typeorm").InsertResult>;
    updateaFhreform(Id: string, user_id: string, fhreformVo: FhreformVo): Promise<import("typeorm").UpdateResult>;
    removeFhreform(Ids: string): Promise<import("typeorm").UpdateResult>;
    getFhreformById(id: string): Promise<any>;
    getFhreformList(search: FhreformSearchVo): Promise<any[]>;
    getFhreformAll(): Promise<any[]>;
    getFhreformAllView(): Promise<any[]>;
}
