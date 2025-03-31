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
exports.FHUserController = void 0;
const common_1 = require("@nestjs/common");
const FHUserService_1 = require("../myservices/FHUserService");
const FHUserVo_1 = require("../myvo/FHUserVo");
let FHUserController = class FHUserController {
    constructor() {
        this.fhuserService = new FHUserService_1.FHUserService();
    }
    async createFHUser(FHUserVo) {
        return this.fhuserService.createFHUser(FHUserVo);
    }
    async UsersLogin(query) {
        const email = query.email;
        const password = query.password;
        return this.fhuserService.UsersLogin(email, password);
    }
    async updateaFHUser(userToken, Id, FHUserVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.fhuserService.updateaFHUser(Id, userId, FHUserVo);
    }
    async removeFHUser(Id) {
        return this.fhuserService.removeFHUser([Id]);
    }
    async getFHUserById(Id) {
        return this.fhuserService.getFHUserById(Id);
    }
    async getFHUser(search) {
        return this.fhuserService.getFHUser(search);
    }
    async getFHUserAll() {
        return this.fhuserService.getFHUserAll();
    }
    async getFHUserAll002(search) {
        return this.fhuserService.getFHUserAll002(search);
    }
    async getFHUserAllView() {
        return this.fhuserService.getFHUserAllView();
    }
};
__decorate([
    (0, common_1.Post)('/FHUserLog'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FHUserController.prototype, "UsersLogin", null);
__decorate([
    (0, common_1.Get)('/getFHUserById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FHUserController.prototype, "getFHUserById", null);
__decorate([
    (0, common_1.Get)('/getFHUserAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FHUserController.prototype, "getFHUserAll", null);
__decorate([
    (0, common_1.Get)('/getFHUserAll002'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FHUserVo_1.FHUserSearchVo]),
    __metadata("design:returntype", Promise)
], FHUserController.prototype, "getFHUserAll002", null);
FHUserController = __decorate([
    (0, common_1.Controller)('/FHUser')
], FHUserController);
exports.FHUserController = FHUserController;
//# sourceMappingURL=FHUserController.js.map