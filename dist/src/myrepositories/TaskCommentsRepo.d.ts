import { TaskCommentsSearchVo, TaskCommentsVo } from '../myvo/TaskCommentsVo';
export declare class TaskCommentsRepo {
    create(accountTagVo: TaskCommentsVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: TaskCommentsVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    updateTaskCommentsVoByMid(mid: string, id: string): Promise<string>;
    getTaskCommentsAllByMid(mid: string): Promise<any[]>;
    getTaskCommentssById(id: string): Promise<any>;
    getTaskCommentsAll(search: TaskCommentsSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTaskCommentsAllView(): Promise<any[]>;
    getTaskComments(search: TaskCommentsSearchVo): Promise<any[]>;
}
