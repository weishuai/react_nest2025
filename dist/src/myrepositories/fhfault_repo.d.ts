import { FhfaultSearchVo, FhfaultVo } from '../myvo/fhfault_vo';
export declare class FhfaultRepo {
    create(fhfaultVo: FhfaultVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, fhfaultVo: FhfaultVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getFhfaultsById(id: string): Promise<any>;
    getFhfaultAll(): Promise<any[]>;
    getFhfaultAllView(): Promise<any[]>;
    getFhfaultList(search: FhfaultSearchVo): Promise<any[]>;
}
