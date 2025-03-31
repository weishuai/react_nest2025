import { TaskCommentsSearchVo, TaskCommentsVo } from '../myvo/TaskCommentsVo';
export declare class TaskCommentsController {
    private taskCommentsService;
    createTaskComments(TaskCommentsVo: TaskCommentsVo): Promise<import("typeorm").InsertResult>;
    updateaTaskComments(userToken: string, Id: string, TaskCommentsVo: TaskCommentsVo): Promise<import("typeorm").UpdateResult>;
    removeTaskComments(Id: string): Promise<import("typeorm").UpdateResult>;
    getTaskCommentsById(Id: string): Promise<any>;
    getTaskComments(search: TaskCommentsSearchVo): Promise<any[]>;
    getTaskCommentsAll(search: TaskCommentsSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTaskCommentsAllView(): Promise<any[]>;
}
