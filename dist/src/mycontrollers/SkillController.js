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
exports.SkillController = void 0;
const common_1 = require("@nestjs/common");
const SkillService_1 = require("../myservices/SkillService");
const SkillVo_1 = require("../myvo/SkillVo");
let SkillController = class SkillController {
    constructor() {
        this.skillService = new SkillService_1.SkillService();
    }
    async createSkill(SkillVo) {
        return this.skillService.createSkill(SkillVo);
    }
    async updateaSkill(userToken, Id, SkillVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.skillService.updateaSkill(Id, userId, SkillVo);
    }
    async removeSkill(Id) {
        return this.skillService.removeSkill([Id]);
    }
    async getSkillById(Id) {
        return this.skillService.getSkillById(Id);
    }
    async getSkill(search) {
        return this.skillService.getSkill(search);
    }
    async getSkillAll(search) {
        return this.skillService.getSkillAll(search);
    }
    async getSkillAllView() {
        return this.skillService.getSkillAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createSkill'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SkillVo_1.SkillVo]),
    __metadata("design:returntype", Promise)
], SkillController.prototype, "createSkill", null);
__decorate([
    (0, common_1.Put)('/updateSkill/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, SkillVo_1.SkillVo]),
    __metadata("design:returntype", Promise)
], SkillController.prototype, "updateaSkill", null);
__decorate([
    (0, common_1.Get)('/removeSkill/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SkillController.prototype, "removeSkill", null);
__decorate([
    (0, common_1.Get)('/getSkillById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SkillController.prototype, "getSkillById", null);
__decorate([
    (0, common_1.Get)('/getSkill'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SkillVo_1.SkillSearchVo]),
    __metadata("design:returntype", Promise)
], SkillController.prototype, "getSkill", null);
__decorate([
    (0, common_1.Get)('/getSkillAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SkillVo_1.SkillSearchVo]),
    __metadata("design:returntype", Promise)
], SkillController.prototype, "getSkillAll", null);
__decorate([
    (0, common_1.Get)('/getSkillAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SkillController.prototype, "getSkillAllView", null);
SkillController = __decorate([
    (0, common_1.Controller)('/skill')
], SkillController);
exports.SkillController = SkillController;
//# sourceMappingURL=SkillController.js.map