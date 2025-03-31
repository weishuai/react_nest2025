import { FhrunningSearchVo, FhrunningVo } from '../myvo/fhrunning_vo';
export declare class FhrunningRepo {
    create(fhrunningVo: FhrunningVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, fhrunningVo: FhrunningVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getFhrunningsById(id: string): Promise<any>;
    getFhrunningAll(): Promise<any[]>;
    getFhrunningAllView(): Promise<any[]>;
    getFhrunningList(search: FhrunningSearchVo): Promise<any[]>;
}
