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
exports.OpportunityCommentsController = void 0;
const common_1 = require("@nestjs/common");
const OpportunityCommentsService_1 = require("../myservices/OpportunityCommentsService");
const OpportunityCommentsVo_1 = require("../myvo/OpportunityCommentsVo");
let OpportunityCommentsController = class OpportunityCommentsController {
    constructor() {
        this.opportunityCommentsService = new OpportunityCommentsService_1.OpportunityCommentsService();
    }
    async createOpportunityComments(OpportunityCommentsVo) {
        return this.opportunityCommentsService.createOpportunityComments(OpportunityCommentsVo);
    }
    async updateaOpportunityComments(userToken, Id, OpportunityCommentsVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.opportunityCommentsService.updateaOpportunityComments(Id, userId, OpportunityCommentsVo);
    }
    async removeOpportunityComments(Id) {
        return this.opportunityCommentsService.removeOpportunityComments([Id]);
    }
    async getOpportunityCommentsById(Id) {
        return this.opportunityCommentsService.getOpportunityCommentsById(Id);
    }
    async getOpportunityComments(search) {
        return this.opportunityCommentsService.getOpportunityComments(search);
    }
    async getOpportunityCommentsAll(search) {
        return this.opportunityCommentsService.getOpportunityCommentsAll(search);
    }
};
__decorate([
    (0, common_1.Post)('/createOpportunityComments'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [OpportunityCommentsVo_1.OpportunityCommentsVo]),
    __metadata("design:returntype", Promise)
], OpportunityCommentsController.prototype, "createOpportunityComments", null);
__decorate([
    (0, common_1.Put)('/updateOpportunityComments/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, OpportunityCommentsVo_1.OpportunityCommentsVo]),
    __metadata("design:returntype", Promise)
], OpportunityCommentsController.prototype, "updateaOpportunityComments", null);
__decorate([
    (0, common_1.Get)('/removeOpportunityComments/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OpportunityCommentsController.prototype, "removeOpportunityComments", null);
__decorate([
    (0, common_1.Get)('/getOpportunityCommentsById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OpportunityCommentsController.prototype, "getOpportunityCommentsById", null);
__decorate([
    (0, common_1.Get)('/getOpportunityComments'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [OpportunityCommentsVo_1.OpportunityCommentsSearchVo]),
    __metadata("design:returntype", Promise)
], OpportunityCommentsController.prototype, "getOpportunityComments", null);
__decorate([
    (0, common_1.Get)('/getOpportunityCommentsAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [OpportunityCommentsVo_1.OpportunityCommentsSearchVo]),
    __metadata("design:returntype", Promise)
], OpportunityCommentsController.prototype, "getOpportunityCommentsAll", null);
OpportunityCommentsController = __decorate([
    (0, common_1.Controller)('/opportunityComments')
], OpportunityCommentsController);
exports.OpportunityCommentsController = OpportunityCommentsController;
//# sourceMappingURL=OpportunityCommentsController.js.map