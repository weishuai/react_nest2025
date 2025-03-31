import { TaskAttachmentSearchVo, TaskAttachmentVo } from '../myvo/TaskAttachmentVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class TaskAttachmentService {
    private taskAttachmentRepo;
    findOneTaskAttachment(Id: string): Promise<any>;
    createTaskAttachment(taskAttachmentVo: TaskAttachmentVo): Promise<import("typeorm").InsertResult>;
    updateaTaskAttachment(Id: string, user_id: string, taskAttachmentVo: TaskAttachmentVo): Promise<import("typeorm").UpdateResult>;
    removeTaskAttachment(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getTaskAttachmentById(id: string): Promise<any>;
    getTaskAttachment(search: TaskAttachmentSearchVo): Promise<any[]>;
    getTaskAttachmentAll(search: TaskAttachmentSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTaskAttachmentAllView(): Promise<any[]>;
}
