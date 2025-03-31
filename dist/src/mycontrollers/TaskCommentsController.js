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
exports.TaskCommentsController = void 0;
const common_1 = require("@nestjs/common");
const TaskCommentsService_1 = require("../myservices/TaskCommentsService");
const TaskCommentsVo_1 = require("../myvo/TaskCommentsVo");
let TaskCommentsController = class TaskCommentsController {
    constructor() {
        this.taskCommentsService = new TaskCommentsService_1.TaskCommentsService();
    }
    async createTaskComments(TaskCommentsVo) {
        return this.taskCommentsService.createTaskComments(TaskCommentsVo);
    }
    async updateaTaskComments(userToken, Id, TaskCommentsVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.taskCommentsService.updateaTaskComments(Id, userId, TaskCommentsVo);
    }
    async removeTaskComments(Id) {
        return this.taskCommentsService.removeTaskComments([Id]);
    }
    async getTaskCommentsById(Id) {
        return this.taskCommentsService.getTaskCommentsById(Id);
    }
    async getTaskComments(search) {
        return this.taskCommentsService.getTaskComments(search);
    }
    async getTaskCommentsAll(search) {
        return this.taskCommentsService.getTaskCommentseAll(search);
    }
    async getTaskCommentsAllView() {
        return this.taskCommentsService.getTaskCommentseAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createTaskComments'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TaskCommentsVo_1.TaskCommentsVo]),
    __metadata("design:returntype", Promise)
], TaskCommentsController.prototype, "createTaskComments", null);
__decorate([
    (0, common_1.Put)('/updateTaskComments/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, TaskCommentsVo_1.TaskCommentsVo]),
    __metadata("design:returntype", Promise)
], TaskCommentsController.prototype, "updateaTaskComments", null);
__decorate([
    (0, common_1.Get)('/removeTaskComments/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskCommentsController.prototype, "removeTaskComments", null);
__decorate([
    (0, common_1.Get)('/getTaskCommentsById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskCommentsController.prototype, "getTaskCommentsById", null);
__decorate([
    (0, common_1.Get)('/getTaskComments'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TaskCommentsVo_1.TaskCommentsSearchVo]),
    __metadata("design:returntype", Promise)
], TaskCommentsController.prototype, "getTaskComments", null);
__decorate([
    (0, common_1.Get)('/getTaskCommentsAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TaskCommentsVo_1.TaskCommentsSearchVo]),
    __metadata("design:returntype", Promise)
], TaskCommentsController.prototype, "getTaskCommentsAll", null);
__decorate([
    (0, common_1.Get)('/getTaskCommentsAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskCommentsController.prototype, "getTaskCommentsAllView", null);
TaskCommentsController = __decorate([
    (0, common_1.Controller)('/taskComments')
], TaskCommentsController);
exports.TaskCommentsController = TaskCommentsController;
//# sourceMappingURL=TaskCommentsController.js.map