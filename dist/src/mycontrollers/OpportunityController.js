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
exports.OpportunityController = void 0;
const common_1 = require("@nestjs/common");
const OpportunityService_1 = require("../myservices/OpportunityService");
const OpportunityVo_1 = require("../myvo/OpportunityVo");
let OpportunityController = class OpportunityController {
    constructor() {
        this.opportunityService = new OpportunityService_1.OpportunityService();
    }
    async createOpportunity(OpportunityVo) {
        return this.opportunityService.createOpportunity(OpportunityVo);
    }
    async updateaOpportunity(userToken, Id, OpportunityVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.opportunityService.updateaOpportunity(Id, userId, OpportunityVo);
    }
    async removeOpportunity(Id) {
        return this.opportunityService.removeOpportunity([Id]);
    }
    async getOpportunityById(Id) {
        return this.opportunityService.getOpportunityById(Id);
    }
    async getOpportunitysCountBystageName(stageName) {
    }
    async getOpportunity(userToken, search) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.opportunityService.getOpportunity(userId, search);
    }
    async getOpportunitySQL(userToken, search) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.opportunityService.getOpportunitySQL(userId, search);
    }
    async getOpportunityAll(search) {
        return this.opportunityService.getOpportunityAll(search);
    }
    async getOpportunityAllView() {
        return this.opportunityService.getOpportunityAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createOpportunity'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [OpportunityVo_1.OpportunityVo]),
    __metadata("design:returntype", Promise)
], OpportunityController.prototype, "createOpportunity", null);
__decorate([
    (0, common_1.Put)('/updateOpportunity/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, OpportunityVo_1.OpportunityVo]),
    __metadata("design:returntype", Promise)
], OpportunityController.prototype, "updateaOpportunity", null);
__decorate([
    (0, common_1.Get)('/removeOpportunity/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OpportunityController.prototype, "removeOpportunity", null);
__decorate([
    (0, common_1.Get)('/getOpportunityById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OpportunityController.prototype, "getOpportunityById", null);
__decorate([
    (0, common_1.Get)('/getOpportunitysCountBystageName/:stageName'),
    __param(0, (0, common_1.Param)('stageName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OpportunityController.prototype, "getOpportunitysCountBystageName", null);
__decorate([
    (0, common_1.Get)('/getOpportunity'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, OpportunityVo_1.OpportunitySearchVo]),
    __metadata("design:returntype", Promise)
], OpportunityController.prototype, "getOpportunity", null);
__decorate([
    (0, common_1.Get)('/getOpportunitySQL'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, OpportunityVo_1.FHOpportunitySearchVo]),
    __metadata("design:returntype", Promise)
], OpportunityController.prototype, "getOpportunitySQL", null);
__decorate([
    (0, common_1.Get)('/getOpportunityAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [OpportunityVo_1.OpportunitySearchVo]),
    __metadata("design:returntype", Promise)
], OpportunityController.prototype, "getOpportunityAll", null);
__decorate([
    (0, common_1.Get)('/getOpportunityAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OpportunityController.prototype, "getOpportunityAllView", null);
OpportunityController = __decorate([
    (0, common_1.Controller)('/opportunity')
], OpportunityController);
exports.OpportunityController = OpportunityController;
//# sourceMappingURL=OpportunityController.js.map