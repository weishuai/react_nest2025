import { TaskSearchVo, TaskVo } from '../myvo/TaskVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class TaskService {
    private taskRepo;
    private taskAttachmentRepo;
    private taskCommentsRepo;
    findOneTask(Id: string): Promise<any>;
    createTask(taskVo: TaskVo): Promise<import("typeorm").InsertResult>;
    updateaTask(Id: string, user_id: string, taskVo: TaskVo): Promise<import("typeorm").UpdateResult>;
    updateaTaskStatus(Id: string): Promise<void>;
    removeTask(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getTaskById(id: string): Promise<any>;
    getTask(search: TaskSearchVo): Promise<any[]>;
    getTaskAll(search: TaskSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTaskAllView(): Promise<any[]>;
}
