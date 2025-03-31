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
exports.WorkNoteController = void 0;
const common_1 = require("@nestjs/common");
const WorkNoteService_1 = require("../myservices/WorkNoteService");
const WorkNoteVo_1 = require("../myvo/WorkNoteVo");
let WorkNoteController = class WorkNoteController {
    constructor() {
        this.workNoteService = new WorkNoteService_1.WorkNoteService();
    }
    async createWorkNote(WorkNoteVo) {
        return this.workNoteService.createWorkNote(WorkNoteVo);
    }
    async updateaWorkNote(userToken, Id, WorkNoteVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.workNoteService.updateaWorkNote(Id, userId, WorkNoteVo);
    }
    async removeWorkNote(Id) {
        return this.workNoteService.removeWorkNote([Id]);
    }
    async getWorkNoteById(Id) {
        return this.workNoteService.getWorkNoteById(Id);
    }
    async getWorkNote(search) {
        return this.workNoteService.getWorkNote(search);
    }
    async getWorkNoteAll(search) {
        return this.workNoteService.getWorkNoteAll(search);
    }
    async getWorkNoteAllView() {
        return this.workNoteService.getWorkNoteAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createWorkNote'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WorkNoteVo_1.WorkNoteVo]),
    __metadata("design:returntype", Promise)
], WorkNoteController.prototype, "createWorkNote", null);
__decorate([
    (0, common_1.Put)('/updateWorkNote/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, WorkNoteVo_1.WorkNoteVo]),
    __metadata("design:returntype", Promise)
], WorkNoteController.prototype, "updateaWorkNote", null);
__decorate([
    (0, common_1.Get)('/removeWorkNote/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WorkNoteController.prototype, "removeWorkNote", null);
__decorate([
    (0, common_1.Get)('/getWorkNoteById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WorkNoteController.prototype, "getWorkNoteById", null);
__decorate([
    (0, common_1.Get)('/getWorkNote'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WorkNoteVo_1.WorkNoteSearchVo]),
    __metadata("design:returntype", Promise)
], WorkNoteController.prototype, "getWorkNote", null);
__decorate([
    (0, common_1.Get)('/getWorkNoteAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WorkNoteVo_1.WorkNoteSearchVo]),
    __metadata("design:returntype", Promise)
], WorkNoteController.prototype, "getWorkNoteAll", null);
__decorate([
    (0, common_1.Get)('/getWorkNoteAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WorkNoteController.prototype, "getWorkNoteAllView", null);
WorkNoteController = __decorate([
    (0, common_1.Controller)('/workNote')
], WorkNoteController);
exports.WorkNoteController = WorkNoteController;
//# sourceMappingURL=WorkNoteController.js.map