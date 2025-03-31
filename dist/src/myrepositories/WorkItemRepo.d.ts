import { WorkItemSearchVo, WorkItemVo } from '../myvo/WorkItemVo';
export declare class WorkItemRepo {
    create(accountTagVo: WorkItemVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: WorkItemVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    updateWorkItemVoByMid(mid: string, id: string): Promise<string>;
    updateToWorkItemsVoByMid(mid: string): Promise<string>;
    WorkItemUpdateMid(mid: string, MID: string): Promise<string>;
    getWorkItemsAllByMid(mid: string): Promise<any[]>;
    getWorkItemsById(id: string): Promise<any>;
    getWorkItemAll(search: WorkItemSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getWorkItemAllView(): Promise<any[]>;
    getWorkItemAllByMid(mid: string): Promise<any[]>;
    getWorkItem(search: WorkItemSearchVo): Promise<any[]>;
}
