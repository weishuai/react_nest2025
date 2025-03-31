import { ProcurePlanListVo } from '../myvo/procure_plan_list_vo';
export declare class ProcurePlanListController {
    private procurePlanListService;
    createProcurePlanList(procurePlanListVo: ProcurePlanListVo): Promise<import("typeorm").InsertResult>;
    updateaProcurePlanList(userToken: string, Id: string, procurePlanListVo: ProcurePlanListVo): Promise<import("typeorm").UpdateResult>;
    removeProcurePlanList(Id: string): Promise<import("typeorm").UpdateResult>;
    getProcurePlanListById(Id: string): Promise<any>;
    getProcurePlanListList(query: any): Promise<any[]>;
    getProcurePlanListAll(): Promise<any[]>;
    getProcurePlanListAllView(): Promise<any[]>;
}
