import { TaskCommentsSearchVo, TaskCommentsVo } from '../myvo/TaskCommentsVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class TaskCommentsService {
    private taskCommentsRepo;
    findOneTaskComments(Id: string): Promise<any>;
    createTaskComments(taskCommentsVo: TaskCommentsVo): Promise<import("typeorm").InsertResult>;
    updateaTaskComments(Id: string, user_id: string, taskCommentsVo: TaskCommentsVo): Promise<import("typeorm").UpdateResult>;
    removeTaskComments(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getTaskCommentsById(id: string): Promise<any>;
    getTaskComments(search: TaskCommentsSearchVo): Promise<any[]>;
    getTaskCommentseAll(search: TaskCommentsSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTaskCommentseAllView(): Promise<any[]>;
}
