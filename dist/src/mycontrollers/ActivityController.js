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
exports.ActivityController = void 0;
const common_1 = require("@nestjs/common");
const ActivityService_1 = require("../myservices/ActivityService");
const ActivityVo_1 = require("../myvo/ActivityVo");
let ActivityController = class ActivityController {
    constructor() {
        this.activityService = new ActivityService_1.ActivityService();
    }
    async createActivity(ActivityVo) {
        return this.activityService.createActivity(ActivityVo);
    }
    async updateaActivity(userToken, Id, ActivityVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.activityService.updateaActivity(Id, userId, ActivityVo);
    }
    async removeActivity(Id) {
        return this.activityService.removeActivity([Id]);
    }
    async getActivityById(Id) {
        return this.activityService.getActivityById(Id);
    }
    async getActivitSQL(userToken, search) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.activityService.getActivitSQL(userId, search);
    }
    async getActivity(userToken, search) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.activityService.getActivity(userId, search);
    }
    async getActivityTask(userToken, search) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.activityService.getActivityTask(userId, search);
    }
    async getActivityNote(userToken, search) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.activityService.getActivityNote(userId, search);
    }
    async getActivityAll(search) {
        return this.activityService.getActivityAll(search);
    }
    async getActivityAllView() {
        return this.activityService.getActivityAllView();
    }
    async getActivityEventsAll() {
        return this.activityService.getActivityEventsAll();
    }
};
__decorate([
    (0, common_1.Post)('/createActivity'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ActivityVo_1.ActivityVo]),
    __metadata("design:returntype", Promise)
], ActivityController.prototype, "createActivity", null);
__decorate([
    (0, common_1.Put)('/updateActivity/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, ActivityVo_1.ActivityVo]),
    __metadata("design:returntype", Promise)
], ActivityController.prototype, "updateaActivity", null);
__decorate([
    (0, common_1.Get)('/removeActivity/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ActivityController.prototype, "removeActivity", null);
__decorate([
    (0, common_1.Get)('/getActivityById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ActivityController.prototype, "getActivityById", null);
__decorate([
    (0, common_1.Get)('/getActivitSQL'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ActivityVo_1.FHActivitySearchVo]),
    __metadata("design:returntype", Promise)
], ActivityController.prototype, "getActivitSQL", null);
__decorate([
    (0, common_1.Get)('/getActivity'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ActivityVo_1.ActivitySearchVo]),
    __metadata("design:returntype", Promise)
], ActivityController.prototype, "getActivity", null);
__decorate([
    (0, common_1.Get)('/getActivityTask'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ActivityVo_1.ActivitySearchVo]),
    __metadata("design:returntype", Promise)
], ActivityController.prototype, "getActivityTask", null);
__decorate([
    (0, common_1.Get)('/getActivityNote'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ActivityVo_1.ActivitySearchVo]),
    __metadata("design:returntype", Promise)
], ActivityController.prototype, "getActivityNote", null);
__decorate([
    (0, common_1.Get)('/getActivityAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ActivityVo_1.ActivitySearchVo]),
    __metadata("design:returntype", Promise)
], ActivityController.prototype, "getActivityAll", null);
__decorate([
    (0, common_1.Get)('/getActivityAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ActivityController.prototype, "getActivityAllView", null);
__decorate([
    (0, common_1.Get)('/getActivityEventsAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ActivityController.prototype, "getActivityEventsAll", null);
ActivityController = __decorate([
    (0, common_1.Controller)('/activity')
], ActivityController);
exports.ActivityController = ActivityController;
//# sourceMappingURL=ActivityController.js.map