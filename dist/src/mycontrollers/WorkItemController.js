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
exports.WorkItemController = void 0;
const common_1 = require("@nestjs/common");
const WorkItemService_1 = require("../myservices/WorkItemService");
const WorkItemVo_1 = require("../myvo/WorkItemVo");
let WorkItemController = class WorkItemController {
    constructor() {
        this.workItemService = new WorkItemService_1.WorkItemService();
    }
    async createWorkItem(WorkItemVo) {
        return this.workItemService.createWorkItem(WorkItemVo);
    }
    async removeToToWorkItem(mid) {
        return this.workItemService.removeToWorkItem(mid);
    }
    async WorkItemUpdateMid(mid, MID) {
        return this.workItemService.WorkItemUpdateMid(mid, MID);
    }
    async updateaWorkItem(userToken, Id, WorkItemVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.workItemService.updateaWorkItem(Id, userId, WorkItemVo);
    }
    async removeWorkItem(Id) {
        return this.workItemService.removeWorkItem([Id]);
    }
    async getWorkItemById(Id) {
        return this.workItemService.getWorkItemById(Id);
    }
    async getWorkItem(search) {
        return this.workItemService.getWorkItem(search);
    }
    async getWorkItemAll(search) {
        return this.workItemService.getWorkItemAll(search);
    }
    async getWorkItemAllView() {
        return this.workItemService.getWorkItemAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createWorkItem'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WorkItemVo_1.WorkItemVo]),
    __metadata("design:returntype", Promise)
], WorkItemController.prototype, "createWorkItem", null);
__decorate([
    (0, common_1.Get)('/removeToWorkItem/:mid'),
    __param(0, (0, common_1.Param)('mid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WorkItemController.prototype, "removeToToWorkItem", null);
__decorate([
    (0, common_1.Put)('/WorkItemUpdateMid/:mid/:MID'),
    __param(0, (0, common_1.Param)('mid')),
    __param(1, (0, common_1.Param)('MID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WorkItemController.prototype, "WorkItemUpdateMid", null);
__decorate([
    (0, common_1.Put)('/updateWorkItem/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, WorkItemVo_1.WorkItemVo]),
    __metadata("design:returntype", Promise)
], WorkItemController.prototype, "updateaWorkItem", null);
__decorate([
    (0, common_1.Get)('/removeWorkItem/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WorkItemController.prototype, "removeWorkItem", null);
__decorate([
    (0, common_1.Get)('/getWorkItemById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WorkItemController.prototype, "getWorkItemById", null);
__decorate([
    (0, common_1.Get)('/getWorkItem'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WorkItemVo_1.WorkItemSearchVo]),
    __metadata("design:returntype", Promise)
], WorkItemController.prototype, "getWorkItem", null);
__decorate([
    (0, common_1.Get)('/getWorkItemAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WorkItemVo_1.WorkItemSearchVo]),
    __metadata("design:returntype", Promise)
], WorkItemController.prototype, "getWorkItemAll", null);
__decorate([
    (0, common_1.Get)('/getWorkItemAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WorkItemController.prototype, "getWorkItemAllView", null);
WorkItemController = __decorate([
    (0, common_1.Controller)('/WorkItem')
], WorkItemController);
exports.WorkItemController = WorkItemController;
//# sourceMappingURL=WorkItemController.js.map