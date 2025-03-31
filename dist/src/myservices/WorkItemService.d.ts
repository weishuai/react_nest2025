import { WorkItemSearchVo, WorkItemVo } from '../myvo/WorkItemVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class WorkItemService {
    private workItemRepo;
    findOneWorkItem(Id: string): Promise<any>;
    createWorkItem(workItemVo: WorkItemVo): Promise<import("typeorm").InsertResult>;
    removeToWorkItem(mid: string): Promise<string>;
    WorkItemUpdateMid(mid: string, MID: string): Promise<string>;
    updateaWorkItem(Id: string, user_id: string, workItemVo: WorkItemVo): Promise<import("typeorm").UpdateResult>;
    removeWorkItem(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getWorkItemById(id: string): Promise<any>;
    getWorkItem(search: WorkItemSearchVo): Promise<any[]>;
    getWorkItemAll(search: WorkItemSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getWorkItemAllView(): Promise<any[]>;
}
