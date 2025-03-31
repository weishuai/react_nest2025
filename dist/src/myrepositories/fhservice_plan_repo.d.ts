import { FhservicePlanSearchVo, FhservicePlanVo } from '../myvo/fhservice_plan_vo';
export declare class FhservicePlanRepo {
    create(fhservicePlanVo: FhservicePlanVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, fhservicePlanVo: FhservicePlanVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getFhservicePlansById(id: string): Promise<any>;
    getFhservicePlanAll(): Promise<any[]>;
    getFhservicePlanAllView(): Promise<any[]>;
    getFhservicePlanList(search: FhservicePlanSearchVo): Promise<any[]>;
}
