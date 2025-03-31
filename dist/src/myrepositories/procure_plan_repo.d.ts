import { ProcurePlanSearchVo, ProcurePlanVo } from '../myvo/procure_plan_vo';
export declare class ProcurePlanRepo {
    create(procurePlanVo: ProcurePlanVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, procurePlanVo: ProcurePlanVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getProcurePlansById(id: string): Promise<any>;
    getProcurePlanAll(): Promise<any[]>;
    getProcurePlanAllView(): Promise<any[]>;
    getProcurePlanList(search: ProcurePlanSearchVo): Promise<any[]>;
}
