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
exports.TaskAttachmentController = void 0;
const common_1 = require("@nestjs/common");
const TaskAttachmentService_1 = require("../myservices/TaskAttachmentService");
const TaskAttachmentVo_1 = require("../myvo/TaskAttachmentVo");
let TaskAttachmentController = class TaskAttachmentController {
    constructor() {
        this.taskAttachmentService = new TaskAttachmentService_1.TaskAttachmentService();
    }
    async createTaskAttachment(TaskAttachmentVo) {
        return this.taskAttachmentService.createTaskAttachment(TaskAttachmentVo);
    }
    async updateaTaskAttachment(userToken, Id, TaskAttachmentVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.taskAttachmentService.updateaTaskAttachment(Id, userId, TaskAttachmentVo);
    }
    async removeTaskAttachment(Id) {
        return this.taskAttachmentService.removeTaskAttachment([Id]);
    }
    async getTaskAttachmentById(Id) {
        return this.taskAttachmentService.getTaskAttachmentById(Id);
    }
    async getTaskAttachment(search) {
        return this.taskAttachmentService.getTaskAttachment(search);
    }
    async getTaskAttachmentAll(search) {
        return this.taskAttachmentService.getTaskAttachmentAll(search);
    }
    async getTaskAttachmentAllView() {
        return this.taskAttachmentService.getTaskAttachmentAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createTaskAttachment'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TaskAttachmentVo_1.TaskAttachmentVo]),
    __metadata("design:returntype", Promise)
], TaskAttachmentController.prototype, "createTaskAttachment", null);
__decorate([
    (0, common_1.Put)('/updateTaskAttachment/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, TaskAttachmentVo_1.TaskAttachmentVo]),
    __metadata("design:returntype", Promise)
], TaskAttachmentController.prototype, "updateaTaskAttachment", null);
__decorate([
    (0, common_1.Get)('/removeTaskAttachment/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskAttachmentController.prototype, "removeTaskAttachment", null);
__decorate([
    (0, common_1.Get)('/getTaskAttachmentById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskAttachmentController.prototype, "getTaskAttachmentById", null);
__decorate([
    (0, common_1.Get)('/getTaskAttachment'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TaskAttachmentVo_1.TaskAttachmentSearchVo]),
    __metadata("design:returntype", Promise)
], TaskAttachmentController.prototype, "getTaskAttachment", null);
__decorate([
    (0, common_1.Get)('/getTaskAttachmentAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TaskAttachmentVo_1.TaskAttachmentSearchVo]),
    __metadata("design:returntype", Promise)
], TaskAttachmentController.prototype, "getTaskAttachmentAll", null);
__decorate([
    (0, common_1.Get)('/getTaskAttachmentAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskAttachmentController.prototype, "getTaskAttachmentAllView", null);
TaskAttachmentController = __decorate([
    (0, common_1.Controller)('/taskAttachment')
], TaskAttachmentController);
exports.TaskAttachmentController = TaskAttachmentController;
//# sourceMappingURL=TaskAttachmentController.js.map