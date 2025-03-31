"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentService = void 0;
const myrepositories_1 = require("../myrepositories");
const AttachmentVo_1 = require("../myvo/AttachmentVo");
class AttachmentService {
    constructor() {
        this.attachmentRepo = new myrepositories_1.AttachmentRepo();
    }
    async getAttachments(issueId) {
    }
    async addAttachment(attachmentVo, userId) {
        attachmentVo.ownerType = AttachmentVo_1.OwnerTypes.Issue;
        await this.attachmentRepo.addAttachment(attachmentVo);
    }
    async removeAttachment(id) {
        await this.attachmentRepo.removeAttachment(id);
    }
    async removeAttachments(ids) {
        await this.attachmentRepo.removeAttachments(ids);
    }
    async queryTaskAttachments(when, mid) {
        return this.attachmentRepo.getAttachment(when, mid);
    }
    async addTaskAttachment(attachmentVo) {
        return this.attachmentRepo.create(attachmentVo);
    }
}
exports.AttachmentService = AttachmentService;
//# sourceMappingURL=AttachmentService.js.map