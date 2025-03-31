import { ProcurePlanListSearchVo, ProcurePlanListVo } from '../myvo/procure_plan_list_vo';
export declare class ProcurePlanListRepo {
    create(procurePlanListVo: ProcurePlanListVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, procurePlanListVo: ProcurePlanListVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getProcurePlanListsById(id: string): Promise<any>;
    getProcurePlanListAll(): Promise<any[]>;
    getProcurePlanListAllView(): Promise<any[]>;
    getProcurePlanListList(search: ProcurePlanListSearchVo): Promise<any[]>;
}
