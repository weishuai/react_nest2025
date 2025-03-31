import { AttachmentVo } from '../myvo/AttachmentVo';
export declare class AttachmentService {
    private attachmentRepo;
    private userRepo;
    getAttachments(issueId: string): Promise<void>;
    addAttachment(attachmentVo: AttachmentVo, userId: string): Promise<void>;
    removeAttachment(id: string): Promise<void>;
    removeAttachments(ids: string[]): Promise<void>;
    queryTaskAttachments(when: string, mid: string): Promise<import("../myentities").Attachment>;
    addTaskAttachment(attachmentVo: AttachmentVo): Promise<import("typeorm").InsertResult>;
}
