import { FhservicePlanVo } from '../myvo/fhservice_plan_vo';
export declare class FhservicePlanController {
    private fhservicePlanService;
    createFhservicePlan(fhservicePlanVo: FhservicePlanVo): Promise<import("typeorm").InsertResult>;
    updateaFhservicePlan(userToken: string, Id: string, fhservicePlanVo: FhservicePlanVo): Promise<import("typeorm").UpdateResult>;
    removeFhservicePlan(Id: string): Promise<import("typeorm").UpdateResult>;
    getFhservicePlanById(Id: string): Promise<any>;
    getFhservicePlanList(query: any): Promise<any[]>;
    getFhservicePlanAll(): Promise<any[]>;
    getFhservicePlanAllView(): Promise<any[]>;
}
