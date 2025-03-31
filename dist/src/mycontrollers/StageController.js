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
exports.StageController = void 0;
const common_1 = require("@nestjs/common");
const StageService_1 = require("../myservices/StageService");
const StageVo_1 = require("../myvo/StageVo");
let StageController = class StageController {
    constructor() {
        this.stageService = new StageService_1.StageService();
    }
    async createStage(StageVo) {
        return this.stageService.createStage(StageVo);
    }
    async updateaStage(userToken, Id, StageVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.stageService.updateaStage(Id, userId, StageVo);
    }
    async removeStage(Id) {
        return this.stageService.removeStage([Id]);
    }
    async getStageById(Id) {
        return this.stageService.getStageById(Id);
    }
    async getStage(search) {
        return this.stageService.getStage(search);
    }
    async getStageAll(search) {
        return this.stageService.getStageAll(search);
    }
    async getStageAllView() {
        return this.stageService.getStageAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createStage'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StageVo_1.StageVo]),
    __metadata("design:returntype", Promise)
], StageController.prototype, "createStage", null);
__decorate([
    (0, common_1.Put)('/updateStage/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, StageVo_1.StageVo]),
    __metadata("design:returntype", Promise)
], StageController.prototype, "updateaStage", null);
__decorate([
    (0, common_1.Get)('/removeStage/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StageController.prototype, "removeStage", null);
__decorate([
    (0, common_1.Get)('/getStageById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StageController.prototype, "getStageById", null);
__decorate([
    (0, common_1.Get)('/getStage'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StageVo_1.StageSearchVo]),
    __metadata("design:returntype", Promise)
], StageController.prototype, "getStage", null);
__decorate([
    (0, common_1.Get)('/getStageAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StageVo_1.StageSearchVo]),
    __metadata("design:returntype", Promise)
], StageController.prototype, "getStageAll", null);
__decorate([
    (0, common_1.Get)('/getStageAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StageController.prototype, "getStageAllView", null);
StageController = __decorate([
    (0, common_1.Controller)('/stage')
], StageController);
exports.StageController = StageController;
//# sourceMappingURL=StageController.js.map