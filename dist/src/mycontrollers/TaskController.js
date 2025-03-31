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
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const TaskService_1 = require("../myservices/TaskService");
const TaskVo_1 = require("../myvo/TaskVo");
let TaskController = class TaskController {
    constructor() {
        this.taskService = new TaskService_1.TaskService();
    }
    async createTask(TaskVo) {
        return this.taskService.createTask(TaskVo);
    }
    async updateaTask(userToken, Id, taskVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.taskService.updateaTask(Id, userId, taskVo);
    }
    async updateaTaskStatus(Id) {
        return this.taskService.updateaTaskStatus(Id);
    }
    async removeTask(Id) {
        return this.taskService.removeTask([Id]);
    }
    async getTaskById(Id) {
        return this.taskService.getTaskById(Id);
    }
    async getTask(search) {
        return this.taskService.getTask(search);
    }
    async getTaskAll(search) {
        return this.taskService.getTaskAll(search);
    }
    async getTaskAllView() {
        return this.taskService.getTaskAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createTask'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TaskVo_1.TaskVo]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "createTask", null);
__decorate([
    (0, common_1.Put)('/updateTask/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, TaskVo_1.TaskVo]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "updateaTask", null);
__decorate([
    (0, common_1.Put)('/updateTaskStatus/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "updateaTaskStatus", null);
__decorate([
    (0, common_1.Get)('/removeTask/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "removeTask", null);
__decorate([
    (0, common_1.Get)('/getTaskById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTaskById", null);
__decorate([
    (0, common_1.Get)('/getTask'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TaskVo_1.TaskSearchVo]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTask", null);
__decorate([
    (0, common_1.Get)('/getTaskAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TaskVo_1.TaskSearchVo]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTaskAll", null);
__decorate([
    (0, common_1.Get)('/getTaskAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTaskAllView", null);
TaskController = __decorate([
    (0, common_1.Controller)('/task')
], TaskController);
exports.TaskController = TaskController;
//# sourceMappingURL=TaskController.js.map