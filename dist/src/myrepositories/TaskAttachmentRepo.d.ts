import { TaskAttachmentSearchVo, TaskAttachmentVo } from '../myvo/TaskAttachmentVo';
export declare class TaskAttachmentRepo {
    create(accountTagVo: TaskAttachmentVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: TaskAttachmentVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    updateTaskAttachmentsVoByMid(mid: string, id: string): Promise<string>;
    getTaskAttachmentsAllByMid(mid: string): Promise<any[]>;
    getTaskAttachmentsById(id: string): Promise<any>;
    getTaskAttachmentAll(search: TaskAttachmentSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTaskAttachmentAllView(): Promise<any[]>;
    getTaskAttachment(search: TaskAttachmentSearchVo): Promise<any[]>;
}
