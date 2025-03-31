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
exports.ContacPersonController = void 0;
const common_1 = require("@nestjs/common");
const ContacPersonService_1 = require("../myservices/ContacPersonService");
const ContacPersonVo_1 = require("../myvo/ContacPersonVo");
let ContacPersonController = class ContacPersonController {
    constructor() {
        this.contacPersonService = new ContacPersonService_1.ContacPersonService();
    }
    async createContacPerson(contacPersonVo) {
        return this.contacPersonService.createContacPerson(contacPersonVo);
    }
    async updateaContacPerson(userToken, Id, ContacPersonVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.contacPersonService.updateaContacPerson(Id, userId, ContacPersonVo);
    }
    async removeContacPerson(Id) {
        return this.contacPersonService.removeContacPerson([Id]);
    }
    async getContacPersonById(Id) {
        return this.contacPersonService.getContacPersonById(Id);
    }
    async getContacPerson(userToken, search) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.contacPersonService.getContacPerson(userId, search);
    }
    async getContacPersonAll(search) {
        return this.contacPersonService.getContacPersonAll(search);
    }
    async getContacPersonAllView() {
        return this.contacPersonService.getContacPersonAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createContacPerson'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ContacPersonVo_1.ContacPersonVo]),
    __metadata("design:returntype", Promise)
], ContacPersonController.prototype, "createContacPerson", null);
__decorate([
    (0, common_1.Put)('/updateContacPerson/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, ContacPersonVo_1.ContacPersonVo]),
    __metadata("design:returntype", Promise)
], ContacPersonController.prototype, "updateaContacPerson", null);
__decorate([
    (0, common_1.Get)('/removeContacPerson/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContacPersonController.prototype, "removeContacPerson", null);
__decorate([
    (0, common_1.Get)('/getContacPersonById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContacPersonController.prototype, "getContacPersonById", null);
__decorate([
    (0, common_1.Get)('/getContacPerson'),
    __param(0, (0, common_1.Headers)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ContacPersonVo_1.ContacPersonSearchVo]),
    __metadata("design:returntype", Promise)
], ContacPersonController.prototype, "getContacPerson", null);
__decorate([
    (0, common_1.Get)('/getContacPersonAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ContacPersonVo_1.ContacPersonSearchVo]),
    __metadata("design:returntype", Promise)
], ContacPersonController.prototype, "getContacPersonAll", null);
__decorate([
    (0, common_1.Get)('/getContacPersonAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContacPersonController.prototype, "getContacPersonAllView", null);
ContacPersonController = __decorate([
    (0, common_1.Controller)('/contacPerson')
], ContacPersonController);
exports.ContacPersonController = ContacPersonController;
//# sourceMappingURL=ContacPersonController.js.map