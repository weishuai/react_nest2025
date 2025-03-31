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
exports.LeadsController = void 0;
const common_1 = require("@nestjs/common");
const LeadsService_1 = require("../myservices/LeadsService");
const LeadsVo_1 = require("../myvo/LeadsVo");
let LeadsController = class LeadsController {
    constructor() {
        this.leadsService = new LeadsService_1.LeadsService();
    }
    async createLeads(LeadsVo) {
        return this.leadsService.createLeads(LeadsVo);
    }
    async updateaLeads(userToken, Id, leadsVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.leadsService.updateaLeads(Id, userId, leadsVo);
    }
    async removeLeads(Id) {
        return this.leadsService.removeLeads([Id]);
    }
    async getLeadsById(Id) {
        return this.leadsService.getLeadsById(Id);
    }
    async getLeads(userToken, search) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.leadsService.getLeads(userId, search);
    }
    async getLeadsAll(search) {
        return this.leadsService.getLeadsAll(search);
    }
    async getLeadsAllView() {
        return this.leadsService.getLeadsAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createLeads'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LeadsVo_1.LeadsVo]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "createLeads", null);
__decorate([
    (0, common_1.Put)('/updateLeads/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, LeadsVo_1.LeadsVo]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "updateaLeads", null);
__decorate([
    (0, common_1.Get)('/removeLeads/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "removeLeads", null);
__decorate([
    (0, common_1.Get)('/getLeadsById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "getLeadsById", null);
__decorate([
    (0, common_1.Get)('/getLeads'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, LeadsVo_1.LeadsSearchVo]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "getLeads", null);
__decorate([
    (0, common_1.Get)('/getLeadsAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LeadsVo_1.LeadsSearchVo]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "getLeadsAll", null);
__decorate([
    (0, common_1.Get)('/getLeadsAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "getLeadsAllView", null);
LeadsController = __decorate([
    (0, common_1.Controller)('/leads')
], LeadsController);
exports.LeadsController = LeadsController;
//# sourceMappingURL=LeadsController.js.map