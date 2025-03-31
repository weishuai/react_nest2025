import { AttachmentRepo, UserRepo } from '../myrepositories';
import { AttachmentVo, OwnerTypes } from '../myvo/AttachmentVo';

export class AttachmentService {
  private attachmentRepo = new AttachmentRepo();

  private userRepo: UserRepo;

  async getAttachments(issueId: string) {
    //const raws = await this.attachmentRepo.getAttachments(issueId, OwnerTypes.Issue);
    //return raws;
  }

  async addAttachment(attachmentVo: AttachmentVo, userId: string) {
    attachmentVo.ownerType = OwnerTypes.Issue;
    await this.attachmentRepo.addAttachment(attachmentVo);
  }

  async removeAttachment(id: string) {
    await this.attachmentRepo.removeAttachment(id);
  }

  async removeAttachments(ids: string[]) {
    await this.attachmentRepo.removeAttachments(ids);
  }

  async queryTaskAttachments(when: string, mid: string) {
    return this.attachmentRepo.getAttachment(when, mid);
  }

  async addTaskAttachment(attachmentVo: AttachmentVo) {
    ///const attachment = new Attachment();
    //attachmentVo.id = id();
    return this.attachmentRepo.create(attachmentVo);
  }
}
