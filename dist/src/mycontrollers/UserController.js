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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const UserService_1 = require("../myservices/UserService");
let UserController = class UserController {
    constructor() {
        this.userService = new UserService_1.UserService();
    }
    async getUserBaseAll() {
        return this.userService.getUserBaseAll();
    }
    async getUserBaseAllView() {
        return this.userService.getUserBaseAllView();
    }
    async getUserBaseById(Id) {
        return this.userService.getUserBaseById(Id);
    }
};
__decorate([
    (0, common_1.Get)('/getUserBaseAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserBaseAll", null);
__decorate([
    (0, common_1.Get)('/getUserBaseAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserBaseAllView", null);
__decorate([
    (0, common_1.Get)('/getUserBaseById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserBaseById", null);
UserController = __decorate([
    (0, common_1.Controller)('/user')
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map