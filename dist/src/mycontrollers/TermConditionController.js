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
exports.TermConditionController = void 0;
const common_1 = require("@nestjs/common");
const TermConditionService_1 = require("../myservices/TermConditionService");
const TermConditionVo_1 = require("../myvo/TermConditionVo");
let TermConditionController = class TermConditionController {
    constructor() {
        this.termConditionService = new TermConditionService_1.TermConditionService();
    }
    async createTermCondition(TermConditionVo) {
        return this.termConditionService.createTermCondition(TermConditionVo);
    }
    async updateaTermCondition(userToken, Id, TermConditionVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.termConditionService.updateaTermCondition(Id, userId, TermConditionVo);
    }
    async removeTermCondition(Id) {
        return this.termConditionService.removeTermCondition([Id]);
    }
    async getTermConditionById(Id) {
        return this.termConditionService.getTermConditionById(Id);
    }
    async getTermCondition(search) {
        return this.termConditionService.getTermCondition(search);
    }
    async getTermConditionAll(search) {
        return this.termConditionService.getTermConditionAll(search);
    }
    async getTermConditionAllView() {
        return this.termConditionService.getTermConditionAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createTermCondition'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TermConditionVo_1.TermConditionVo]),
    __metadata("design:returntype", Promise)
], TermConditionController.prototype, "createTermCondition", null);
__decorate([
    (0, common_1.Put)('/updateTermCondition/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, TermConditionVo_1.TermConditionVo]),
    __metadata("design:returntype", Promise)
], TermConditionController.prototype, "updateaTermCondition", null);
__decorate([
    (0, common_1.Get)('/removeTermCondition/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TermConditionController.prototype, "removeTermCondition", null);
__decorate([
    (0, common_1.Get)('/getTermConditionById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TermConditionController.prototype, "getTermConditionById", null);
__decorate([
    (0, common_1.Get)('/getTermCondition'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TermConditionVo_1.TermConditionSearchVo]),
    __metadata("design:returntype", Promise)
], TermConditionController.prototype, "getTermCondition", null);
__decorate([
    (0, common_1.Get)('/getTermConditionAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TermConditionVo_1.TermConditionSearchVo]),
    __metadata("design:returntype", Promise)
], TermConditionController.prototype, "getTermConditionAll", null);
__decorate([
    (0, common_1.Get)('/getTermConditionAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TermConditionController.prototype, "getTermConditionAllView", null);
TermConditionController = __decorate([
    (0, common_1.Controller)('/termCondition')
], TermConditionController);
exports.TermConditionController = TermConditionController;
//# sourceMappingURL=TermConditionController.js.map