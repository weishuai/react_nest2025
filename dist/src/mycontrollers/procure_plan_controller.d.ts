import { ProcurePlanVo } from '../myvo/procure_plan_vo';
export declare class ProcurePlanController {
    private procurePlanService;
    createProcurePlan(procurePlanVo: ProcurePlanVo): Promise<import("typeorm").InsertResult>;
    updateaProcurePlan(userToken: string, Id: string, procurePlanVo: ProcurePlanVo): Promise<import("typeorm").UpdateResult>;
    removeProcurePlan(Id: string): Promise<import("typeorm").UpdateResult>;
    getProcurePlanById(Id: string): Promise<any>;
    getProcurePlanList(query: any): Promise<any[]>;
    getProcurePlanAll(): Promise<any[]>;
    getProcurePlanAllView(): Promise<any[]>;
}
