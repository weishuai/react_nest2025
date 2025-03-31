import { ProcurePlanSearchVo, ProcurePlanVo } from '../myvo/procure_plan_vo';
export declare class ProcurePlanService {
    private procurePlanRepo;
    findOneProcurePlan(Id: string): Promise<any>;
    createProcurePlan(procurePlanVo: ProcurePlanVo): Promise<import("typeorm").InsertResult>;
    updateaProcurePlan(Id: string, user_id: string, procurePlanVo: ProcurePlanVo): Promise<import("typeorm").UpdateResult>;
    removeProcurePlan(Ids: string): Promise<import("typeorm").UpdateResult>;
    getProcurePlanById(id: string): Promise<any>;
    getProcurePlanList(search: ProcurePlanSearchVo): Promise<any[]>;
    getProcurePlanAll(): Promise<any[]>;
    getProcurePlanAllView(): Promise<any[]>;
}
