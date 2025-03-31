import { TaskSearchVo, TaskVo } from '../myvo/TaskVo';
export declare class TaskController {
    private taskService;
    createTask(TaskVo: TaskVo): Promise<import("typeorm").InsertResult>;
    updateaTask(userToken: string, Id: string, taskVo: TaskVo): Promise<import("typeorm").UpdateResult>;
    updateaTaskStatus(Id: string): Promise<void>;
    removeTask(Id: string): Promise<import("typeorm").UpdateResult>;
    getTaskById(Id: string): Promise<any>;
    getTask(search: TaskSearchVo): Promise<any[]>;
    getTaskAll(search: TaskSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTaskAllView(): Promise<any[]>;
}
