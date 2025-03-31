import { WorkItemSearchVo, WorkItemVo } from '../myvo/WorkItemVo';
export declare class WorkItemController {
    private workItemService;
    createWorkItem(WorkItemVo: WorkItemVo): Promise<import("typeorm").InsertResult>;
    removeToToWorkItem(mid: string): Promise<string>;
    WorkItemUpdateMid(mid: string, MID: string): Promise<string>;
    updateaWorkItem(userToken: string, Id: string, WorkItemVo: WorkItemVo): Promise<import("typeorm").UpdateResult>;
    removeWorkItem(Id: string): Promise<import("typeorm").UpdateResult>;
    getWorkItemById(Id: string): Promise<any>;
    getWorkItem(search: WorkItemSearchVo): Promise<any[]>;
    getWorkItemAll(search: WorkItemSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getWorkItemAllView(): Promise<any[]>;
}
