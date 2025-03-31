import { FhreformSearchVo, FhreformVo } from '../myvo/fhreform_vo';
export declare class FhreformRepo {
    create(fhreformVo: FhreformVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, fhreformVo: FhreformVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getFhreformsById(id: string): Promise<any>;
    getFhreformAll(): Promise<any[]>;
    getFhreformAllView(): Promise<any[]>;
    getFhreformList(search: FhreformSearchVo): Promise<any[]>;
}
