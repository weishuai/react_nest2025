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
exports.ParameterController = void 0;
const common_1 = require("@nestjs/common");
const ParameterService_1 = require("../myservices/ParameterService");
const ParameterVo_1 = require("../myvo/ParameterVo");
let ParameterController = class ParameterController {
    constructor() {
        this.parameterService = new ParameterService_1.ParameterService();
    }
    async createParameter(ParameterVo) {
        return this.parameterService.createParameter(ParameterVo);
    }
    async updateaParameter(userToken, Id, ParameterVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.parameterService.updateaParameter(Id, userId, ParameterVo);
    }
    async removeParameter(Id) {
        return this.parameterService.removeParameter([Id]);
    }
    async getParameterById(Id) {
        return this.parameterService.getParameterById(Id);
    }
    async getParameter(search) {
        return this.parameterService.getParameter(search);
    }
    async getParameterAll(search) {
        return await this.parameterService.getParameterAll(search);
    }
    async getParameterAllView() {
        return this.parameterService.getParameterAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createParameter'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ParameterVo_1.ParameterVo]),
    __metadata("design:returntype", Promise)
], ParameterController.prototype, "createParameter", null);
__decorate([
    (0, common_1.Put)('/updateParameter/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, ParameterVo_1.ParameterVo]),
    __metadata("design:returntype", Promise)
], ParameterController.prototype, "updateaParameter", null);
__decorate([
    (0, common_1.Get)('/removeParameter/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParameterController.prototype, "removeParameter", null);
__decorate([
    (0, common_1.Get)('/getParameterById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParameterController.prototype, "getParameterById", null);
__decorate([
    (0, common_1.Get)('/getParameter'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ParameterVo_1.ParameterSearchVo]),
    __metadata("design:returntype", Promise)
], ParameterController.prototype, "getParameter", null);
__decorate([
    (0, common_1.Get)('/getParameterAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ParameterVo_1.ParameterSearchVo]),
    __metadata("design:returntype", Promise)
], ParameterController.prototype, "getParameterAll", null);
__decorate([
    (0, common_1.Get)('/getParameterAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ParameterController.prototype, "getParameterAllView", null);
ParameterController = __decorate([
    (0, common_1.Controller)('/parameter')
], ParameterController);
exports.ParameterController = ParameterController;
//# sourceMappingURL=ParameterController.js.map