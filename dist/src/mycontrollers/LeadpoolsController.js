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
exports.LeadpoolsController = void 0;
const common_1 = require("@nestjs/common");
const LeadpoolsService_1 = require("../myservices/LeadpoolsService");
const LeadpoolsVo_1 = require("../myvo/LeadpoolsVo");
let LeadpoolsController = class LeadpoolsController {
    constructor() {
        this.leadpoolsService = new LeadpoolsService_1.LeadpoolsService();
    }
    async createLeadPools(LeadpoolsVo) {
        return this.leadpoolsService.createLeadpools(LeadpoolsVo);
    }
    async updateaLeadpools(userToken, Id, LeadpoolsVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.leadpoolsService.updateaLeadpools(Id, userId, LeadpoolsVo);
    }
    async removeLeadPools(Id) {
        return this.leadpoolsService.removeLeadpools([Id]);
    }
    async getLeadpoolsById(Id) {
        return this.leadpoolsService.getLeadpoolsById(Id);
    }
    async getLeadpools(search) {
        return this.leadpoolsService.getLeadpools(search);
    }
    async getLeadpoolsAll(search) {
        return this.leadpoolsService.getLeadpoolsAll(search);
    }
    async getLeadpoolsAllView() {
        return this.leadpoolsService.getLeadpoolsAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createLeadPools'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LeadpoolsVo_1.LeadpoolsVo]),
    __metadata("design:returntype", Promise)
], LeadpoolsController.prototype, "createLeadPools", null);
__decorate([
    (0, common_1.Put)('/updateLeadpools/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, LeadpoolsVo_1.LeadpoolsVo]),
    __metadata("design:returntype", Promise)
], LeadpoolsController.prototype, "updateaLeadpools", null);
__decorate([
    (0, common_1.Get)('/removeLeadPools/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadpoolsController.prototype, "removeLeadPools", null);
__decorate([
    (0, common_1.Get)('/getLeadpoolsById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadpoolsController.prototype, "getLeadpoolsById", null);
__decorate([
    (0, common_1.Get)('/getLeadpools'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LeadpoolsVo_1.LeadpoolsSearchVo]),
    __metadata("design:returntype", Promise)
], LeadpoolsController.prototype, "getLeadpools", null);
__decorate([
    (0, common_1.Get)('/getLeadpoolsAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LeadpoolsVo_1.LeadpoolsSearchVo]),
    __metadata("design:returntype", Promise)
], LeadpoolsController.prototype, "getLeadpoolsAll", null);
__decorate([
    (0, common_1.Get)('/getLeadpoolsAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LeadpoolsController.prototype, "getLeadpoolsAllView", null);
LeadpoolsController = __decorate([
    (0, common_1.Controller)('/leadpools')
], LeadpoolsController);
exports.LeadpoolsController = LeadpoolsController;
//# sourceMappingURL=LeadpoolsController.js.map