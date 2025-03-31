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
exports.JobController = void 0;
const common_1 = require("@nestjs/common");
const JobService_1 = require("../myservices/JobService");
const JobVo_1 = require("../myvo/JobVo");
let JobController = class JobController {
    constructor() {
        this.jobService = new JobService_1.JobService();
    }
    async createJob(JobVo) {
        return this.jobService.createJob(JobVo);
    }
    async updateaJob(userToken, Id, JobVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.jobService.updateaJob(Id, userId, JobVo);
    }
    async removeJob(Id) {
        return this.jobService.removeJob([Id]);
    }
    async getJobById(Id) {
        return this.jobService.getJobById(Id);
    }
    async getJob(userToken, search) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.jobService.getJob(userId, search);
    }
    async getJobAll(search) {
        return this.jobService.getJobAll(search);
    }
    async getJobAllView() {
        return this.jobService.getJobAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createJob'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [JobVo_1.JobVo]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "createJob", null);
__decorate([
    (0, common_1.Put)('/updateJob/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, JobVo_1.JobVo]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "updateaJob", null);
__decorate([
    (0, common_1.Get)('/removeJob/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "removeJob", null);
__decorate([
    (0, common_1.Get)('/getJobById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "getJobById", null);
__decorate([
    (0, common_1.Get)('/getJob'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, JobVo_1.JobSearchVo]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "getJob", null);
__decorate([
    (0, common_1.Get)('/getJobAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [JobVo_1.JobSearchVo]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "getJobAll", null);
__decorate([
    (0, common_1.Get)('/getJobAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JobController.prototype, "getJobAllView", null);
JobController = __decorate([
    (0, common_1.Controller)('/job')
], JobController);
exports.JobController = JobController;
//# sourceMappingURL=JobController.js.map