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
exports.AttenceController = void 0;
const common_1 = require("@nestjs/common");
const AttenceService_1 = require("../myservices/AttenceService");
const AttenceVo_1 = require("../myvo/AttenceVo");
let AttenceController = class AttenceController {
    constructor() {
        this.attenceService = new AttenceService_1.AttenceService();
    }
    async createAttence(AttenceVo) {
        return this.attenceService.createAttence(AttenceVo);
    }
    async updateaAttence(userToken, Id, AttenceVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.attenceService.updateaAttence(Id, userId, AttenceVo);
    }
    async removeAttence(Id) {
        return this.attenceService.removeAttence([Id]);
    }
    async getAttenceById(Id) {
        return this.attenceService.getAttenceById(Id);
    }
    async getAttence(search) {
        return this.attenceService.getAttence(search);
    }
    async getAttenceAll(search) {
        return this.attenceService.getAttenceAll(search);
    }
    async getAttenceAllView() {
        return this.attenceService.getAttenceAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createAttence'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AttenceVo_1.AttenceVo]),
    __metadata("design:returntype", Promise)
], AttenceController.prototype, "createAttence", null);
__decorate([
    (0, common_1.Put)('/updateAttence/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, AttenceVo_1.AttenceVo]),
    __metadata("design:returntype", Promise)
], AttenceController.prototype, "updateaAttence", null);
__decorate([
    (0, common_1.Get)('/removeAttence/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AttenceController.prototype, "removeAttence", null);
__decorate([
    (0, common_1.Get)('/getAttenceById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AttenceController.prototype, "getAttenceById", null);
__decorate([
    (0, common_1.Get)('/getAttence'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AttenceVo_1.AttenceSearchVo]),
    __metadata("design:returntype", Promise)
], AttenceController.prototype, "getAttence", null);
__decorate([
    (0, common_1.Get)('/getAttenceAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AttenceVo_1.AttenceSearchVo]),
    __metadata("design:returntype", Promise)
], AttenceController.prototype, "getAttenceAll", null);
__decorate([
    (0, common_1.Get)('/getAttenceAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AttenceController.prototype, "getAttenceAllView", null);
AttenceController = __decorate([
    (0, common_1.Controller)('/attence')
], AttenceController);
exports.AttenceController = AttenceController;
//# sourceMappingURL=AttenceController.js.map