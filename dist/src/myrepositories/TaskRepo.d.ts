import { TaskSearchVo, TaskVo } from '../myvo/TaskVo';
export declare class TaskRepo {
    create(accountTagVo: TaskVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: TaskVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    gettasksById(id: string): Promise<any>;
    gettaskAll(search: TaskSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    gettaskAllView(): Promise<any[]>;
    gettask(search: TaskSearchVo): Promise<any[]>;
}
