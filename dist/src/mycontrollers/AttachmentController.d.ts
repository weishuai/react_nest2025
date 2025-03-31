import { AttachmentVo } from '../myvo/AttachmentVo';
export declare class AttachmentController {
    private attachmentService;
    getIssueAttachments(issueId: string): Promise<void>;
    addIssueAttachment(userToken: string, attachmentVo: AttachmentVo): Promise<void>;
    removeAttachment(id: string): Promise<void>;
    queryTaskAttachments(when: string, mid: string): Promise<import("../myentities").Attachment>;
    addTaskAttachment(attachmentVo: AttachmentVo): Promise<import("typeorm").InsertResult>;
}
