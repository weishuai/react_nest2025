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
exports.JobItemController = void 0;
const common_1 = require("@nestjs/common");
const JobItemService_1 = require("../myservices/JobItemService");
const JobItemVo_1 = require("../myvo/JobItemVo");
let JobItemController = class JobItemController {
    constructor() {
        this.jobItemService = new JobItemService_1.JobItemService();
    }
    async createJobItem(JobItemVo) {
        return this.jobItemService.createJobItem(JobItemVo);
    }
    async updateJobItemVoByMid(mid, Id) {
        return this.jobItemService.updateJobItemVoByMid(mid, Id);
    }
    async updateaJobItem(userToken, Id, JobItemVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.jobItemService.updateaJobItem(Id, userId, JobItemVo);
    }
    async removeJobItem(Id) {
        return this.jobItemService.removeJobItem([Id]);
    }
    async getJobItemById(Id) {
        return this.jobItemService.getJobItemById(Id);
    }
    async getJobItem(search) {
        return this.jobItemService.getJobItem(search);
    }
    async getJobItemAPP(search) {
        return this.jobItemService.getJobItemAPP(search);
    }
    async getJobItemAll(search) {
        return this.jobItemService.getJobItemAll(search);
    }
    async getJobItemAllView() {
        return this.jobItemService.getJobItemAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createJobItem'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [JobItemVo_1.JobItemVo]),
    __metadata("design:returntype", Promise)
], JobItemController.prototype, "createJobItem", null);
__decorate([
    (0, common_1.Get)('/updateJobItemVoByMid/:mid/:Id'),
    __param(0, (0, common_1.Param)('mid')),
    __param(1, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], JobItemController.prototype, "updateJobItemVoByMid", null);
__decorate([
    (0, common_1.Put)('/updateJobItem/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, JobItemVo_1.JobItemVo]),
    __metadata("design:returntype", Promise)
], JobItemController.prototype, "updateaJobItem", null);
__decorate([
    (0, common_1.Get)('/removeJobItem/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobItemController.prototype, "removeJobItem", null);
__decorate([
    (0, common_1.Get)('/getJobItemById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobItemController.prototype, "getJobItemById", null);
__decorate([
    (0, common_1.Get)('/getJobItem'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [JobItemVo_1.JobItemSearchVo]),
    __metadata("design:returntype", Promise)
], JobItemController.prototype, "getJobItem", null);
__decorate([
    (0, common_1.Get)('/getJobItemAPP'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [JobItemVo_1.JobItemSearchVo]),
    __metadata("design:returntype", Promise)
], JobItemController.prototype, "getJobItemAPP", null);
__decorate([
    (0, common_1.Get)('/getJobItemAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [JobItemVo_1.JobItemSearchVo]),
    __metadata("design:returntype", Promise)
], JobItemController.prototype, "getJobItemAll", null);
__decorate([
    (0, common_1.Get)('/getJobItemAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JobItemController.prototype, "getJobItemAllView", null);
JobItemController = __decorate([
    (0, common_1.Controller)('/jobItem')
], JobItemController);
exports.JobItemController = JobItemController;
//# sourceMappingURL=JobItemController.js.map