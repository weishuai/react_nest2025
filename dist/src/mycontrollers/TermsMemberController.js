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
exports.TermsMemberController = void 0;
const common_1 = require("@nestjs/common");
const TermsMemberService_1 = require("../myservices/TermsMemberService");
const TermsMemberVo_1 = require("../myvo/TermsMemberVo");
let TermsMemberController = class TermsMemberController {
    constructor() {
        this.termsMemberService = new TermsMemberService_1.TermsMemberService();
    }
    async createTermsMember(termsMemberVo) {
        return this.termsMemberService.createTermsMember(termsMemberVo);
    }
    async updateaTermsMember(userToken, Id, TermsMemberVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.termsMemberService.updateaTermsMember(Id, userId, TermsMemberVo);
    }
    async removeTermsMember(Id) {
        return this.termsMemberService.removeTermsMember([Id]);
    }
    async getTermsMemberById(Id) {
        return this.termsMemberService.getTermsMemberById(Id);
    }
    async getTermsMember(search) {
        return this.termsMemberService.getTermsMember(search);
    }
    async getTermsMemberAll(search) {
        return this.termsMemberService.getTermsMemberAll(search);
    }
    async getTermsMemberAllView() {
        return this.termsMemberService.getTermsMemberAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createTermsMember'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TermsMemberVo_1.TermsMemberVo]),
    __metadata("design:returntype", Promise)
], TermsMemberController.prototype, "createTermsMember", null);
__decorate([
    (0, common_1.Put)('/updateTermsMember/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, TermsMemberVo_1.TermsMemberVo]),
    __metadata("design:returntype", Promise)
], TermsMemberController.prototype, "updateaTermsMember", null);
__decorate([
    (0, common_1.Get)('/removeTermsMember/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TermsMemberController.prototype, "removeTermsMember", null);
__decorate([
    (0, common_1.Get)('/getTermsMemberById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TermsMemberController.prototype, "getTermsMemberById", null);
__decorate([
    (0, common_1.Get)('/getTermsMember'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TermsMemberVo_1.TermsMemberSearchVo]),
    __metadata("design:returntype", Promise)
], TermsMemberController.prototype, "getTermsMember", null);
__decorate([
    (0, common_1.Get)('/getTermsMemberAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TermsMemberVo_1.TermsMemberSearchVo]),
    __metadata("design:returntype", Promise)
], TermsMemberController.prototype, "getTermsMemberAll", null);
__decorate([
    (0, common_1.Get)('/getTermsMemberAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TermsMemberController.prototype, "getTermsMemberAllView", null);
TermsMemberController = __decorate([
    (0, common_1.Controller)('/termsmember')
], TermsMemberController);
exports.TermsMemberController = TermsMemberController;
//# sourceMappingURL=TermsMemberController.js.map