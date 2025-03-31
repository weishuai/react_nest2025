import { ProcurePlanListSearchVo, ProcurePlanListVo } from '../myvo/procure_plan_list_vo';
export declare class ProcurePlanListService {
    private procurePlanListRepo;
    findOneProcurePlanList(Id: string): Promise<any>;
    createProcurePlanList(procurePlanListVo: ProcurePlanListVo): Promise<import("typeorm").InsertResult>;
    updateaProcurePlanList(Id: string, user_id: string, procurePlanListVo: ProcurePlanListVo): Promise<import("typeorm").UpdateResult>;
    removeProcurePlanList(Ids: string): Promise<import("typeorm").UpdateResult>;
    getProcurePlanListById(id: string): Promise<any>;
    getProcurePlanListList(search: ProcurePlanListSearchVo): Promise<any[]>;
    getProcurePlanListAll(): Promise<any[]>;
    getProcurePlanListAllView(): Promise<any[]>;
}
