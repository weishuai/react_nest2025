import { TaskAttachmentSearchVo, TaskAttachmentVo } from '../myvo/TaskAttachmentVo';
export declare class TaskAttachmentController {
    private taskAttachmentService;
    createTaskAttachment(TaskAttachmentVo: TaskAttachmentVo): Promise<import("typeorm").InsertResult>;
    updateaTaskAttachment(userToken: string, Id: string, TaskAttachmentVo: TaskAttachmentVo): Promise<import("typeorm").UpdateResult>;
    removeTaskAttachment(Id: string): Promise<import("typeorm").UpdateResult>;
    getTaskAttachmentById(Id: string): Promise<any>;
    getTaskAttachment(search: TaskAttachmentSearchVo): Promise<any[]>;
    getTaskAttachmentAll(search: TaskAttachmentSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTaskAttachmentAllView(): Promise<any[]>;
}
