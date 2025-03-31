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
exports.FhfaultController = void 0;
const common_1 = require("@nestjs/common");
const fhfault_service_1 = require("../myservices/fhfault_service");
const fhfault_vo_1 = require("../myvo/fhfault_vo");
let FhfaultController = class FhfaultController {
    constructor() {
        this.fhfaultService = new fhfault_service_1.FhfaultService();
    }
    async createFhfault(fhfaultVo) {
        console.log('Body: ', fhfaultVo);
        return await this.fhfaultService.createFhfault(fhfaultVo);
    }
    async updateaFhfault(userToken, Id, fhfaultVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('FhfaultVo: ', fhfaultVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.fhfaultService.updateaFhfault(Id, userId, fhfaultVo);
    }
    async removeFhfault(Id) {
        return await this.fhfaultService.removeFhfault(Id);
    }
    async getFhfaultById(Id) {
        return await this.fhfaultService.getFhfaultById(Id);
    }
    async getFhfaultList(query) {
        console.log('query: ', query);
        const search = new fhfault_vo_1.FhfaultSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.fhfaultService.getFhfaultList(search);
    }
    async getFhfaultAll() {
        return await this.fhfaultService.getFhfaultAll();
    }
    async getFhfaultAllView() {
        return await this.fhfaultService.getFhfaultAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createFhfault'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fhfault_vo_1.FhfaultVo]),
    __metadata("design:returntype", Promise)
], FhfaultController.prototype, "createFhfault", null);
__decorate([
    (0, common_1.Put)('/updateFhfault/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, fhfault_vo_1.FhfaultVo]),
    __metadata("design:returntype", Promise)
], FhfaultController.prototype, "updateaFhfault", null);
__decorate([
    (0, common_1.Get)('/removeFhfault/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FhfaultController.prototype, "removeFhfault", null);
__decorate([
    (0, common_1.Get)('/getFhfaultById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FhfaultController.prototype, "getFhfaultById", null);
__decorate([
    (0, common_1.Get)('/getFhfault'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FhfaultController.prototype, "getFhfaultList", null);
__decorate([
    (0, common_1.Get)('/getFhfaultAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FhfaultController.prototype, "getFhfaultAll", null);
__decorate([
    (0, common_1.Get)('/getFhfaultAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FhfaultController.prototype, "getFhfaultAllView", null);
FhfaultController = __decorate([
    (0, common_1.Controller)('/fhfault')
], FhfaultController);
exports.FhfaultController = FhfaultController;
//# sourceMappingURL=fhfault_controller.js.map