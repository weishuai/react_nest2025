"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentController = void 0;
const common_1 = require("@nestjs/common");
const AttachmentService_1 = require("../myservices/AttachmentService");
const AttachmentVo_1 = require("../myvo/AttachmentVo");
let AttachmentController = class AttachmentController {
    constructor() {
        this.attachmentService = new AttachmentService_1.AttachmentService();
    }
    async getIssueAttachments(issueId) {
        return this.attachmentService.getAttachments(issueId);
    }
    async addIssueAttachment(userToken, attachmentVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.attachmentService.addAttachment(attachmentVo, userId);
    }
    async removeAttachment(id) {
        return this.attachmentService.removeAttachment(id);
    }
    async queryTaskAttachments(when, mid) {
        return this.attachmentService.queryTaskAttachments(when, mid);
    }
    async addTaskAttachment(attachmentVo) {
        return this.attachmentService.addTaskAttachment(attachmentVo);
    }
};
__decorate([
    (0, common_1.Get)('/getIssueAttachments'),
    __param(0, (0, common_1.Query)('issueId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AttachmentController.prototype, "getIssueAttachments", null);
__decorate([
    (0, common_1.Post)('/addIssueAttachment'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, AttachmentVo_1.AttachmentVo]),
    __metadata("design:returntype", Promise)
], AttachmentController.prototype, "addIssueAttachment", null);
__decorate([
    (0, common_1.Get)('/removeAttachment/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AttachmentController.prototype, "removeAttachment", null);
__decorate([
    (0, common_1.Get)('/task/attachments'),
    __param(0, (0, common_1.Query)('when')),
    __param(1, (0, common_1.Query)('mid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AttachmentController.prototype, "queryTaskAttachments", null);
__decorate([
    (0, common_1.Post)('/taskAttachment'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AttachmentVo_1.AttachmentVo]),
    __metadata("design:returntype", Promise)
], AttachmentController.prototype, "addTaskAttachment", null);
AttachmentController = __decorate([
    (0, common_1.Controller)('/attachment')
], AttachmentController);
exports.AttachmentController = AttachmentController;
//# sourceMappingURL=AttachmentController.js.map