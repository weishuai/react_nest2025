import { FhservicePlanSearchVo, FhservicePlanVo } from '../myvo/fhservice_plan_vo';
export declare class FhservicePlanService {
    private fhservicePlanRepo;
    findOneFhservicePlan(Id: string): Promise<any>;
    createFhservicePlan(fhservicePlanVo: FhservicePlanVo): Promise<import("typeorm").InsertResult>;
    updateaFhservicePlan(Id: string, user_id: string, fhservicePlanVo: FhservicePlanVo): Promise<import("typeorm").UpdateResult>;
    removeFhservicePlan(Ids: string): Promise<import("typeorm").UpdateResult>;
    getFhservicePlanById(id: string): Promise<any>;
    getFhservicePlanList(search: FhservicePlanSearchVo): Promise<any[]>;
    getFhservicePlanAll(): Promise<any[]>;
    getFhservicePlanAllView(): Promise<any[]>;
}
