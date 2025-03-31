import { Attachment } from '../myentities/Attachment';
import { AttachmentVo } from '../myvo/AttachmentVo';
export declare class AttachmentRepo {
    create(accountTagVo: AttachmentVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: AttachmentVo): Promise<import("typeorm").UpdateResult>;
    updateAttachmentByMid(mid: string, id: string): Promise<string>;
    getAttachmentAllByMid(mid: string): Promise<any[]>;
    getAttachments(ownerId: string, ownerType: number): Promise<any[]>;
    addAttachment(attachment: Attachment): Promise<import("typeorm").InsertResult>;
    removeAttachment(id: string): Promise<import("typeorm").UpdateResult>;
    removeAttachments(ids: string[]): Promise<import("typeorm").UpdateResult>;
    getAttachmentsByUserId(ownerId: string, ownerType: number, uploadUserId: string): Promise<any[]>;
    getVendorAttachments(names: string[], ownerType: number): Promise<any[]>;
    getAttachment(when: string, mid: string): Promise<Attachment>;
}
