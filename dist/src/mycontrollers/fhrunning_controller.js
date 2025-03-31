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
exports.FhrunningController = void 0;
const common_1 = require("@nestjs/common");
const fhrunning_service_1 = require("../myservices/fhrunning_service");
const fhrunning_vo_1 = require("../myvo/fhrunning_vo");
let FhrunningController = class FhrunningController {
    constructor() {
        this.fhrunningService = new fhrunning_service_1.FhrunningService();
    }
    async createFhrunning(fhrunningVo) {
        console.log('Body: ', fhrunningVo);
        return await this.fhrunningService.createFhrunning(fhrunningVo);
    }
    async updateaFhrunning(userToken, Id, fhrunningVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('FhrunningVo: ', fhrunningVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.fhrunningService.updateaFhrunning(Id, userId, fhrunningVo);
    }
    async removeFhrunning(Id) {
        return await this.fhrunningService.removeFhrunning(Id);
    }
    async getFhrunningById(Id) {
        return await this.fhrunningService.getFhrunningById(Id);
    }
    async getFhrunningList(query) {
        console.log('query: ', query);
        const search = new fhrunning_vo_1.FhrunningSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.fhrunningService.getFhrunningList(search);
    }
    async getFhrunningAll() {
        return await this.fhrunningService.getFhrunningAll();
    }
    async getFhrunningAllView() {
        return await this.fhrunningService.getFhrunningAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createFhrunning'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fhrunning_vo_1.FhrunningVo]),
    __metadata("design:returntype", Promise)
], FhrunningController.prototype, "createFhrunning", null);
__decorate([
    (0, common_1.Put)('/updateFhrunning/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, fhrunning_vo_1.FhrunningVo]),
    __metadata("design:returntype", Promise)
], FhrunningController.prototype, "updateaFhrunning", null);
__decorate([
    (0, common_1.Get)('/removeFhrunning/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FhrunningController.prototype, "removeFhrunning", null);
__decorate([
    (0, common_1.Get)('/getFhrunningById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FhrunningController.prototype, "getFhrunningById", null);
__decorate([
    (0, common_1.Get)('/getFhrunning'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FhrunningController.prototype, "getFhrunningList", null);
__decorate([
    (0, common_1.Get)('/getFhrunningAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FhrunningController.prototype, "getFhrunningAll", null);
__decorate([
    (0, common_1.Get)('/getFhrunningAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FhrunningController.prototype, "getFhrunningAllView", null);
FhrunningController = __decorate([
    (0, common_1.Controller)('/fhrunning')
], FhrunningController);
exports.FhrunningController = FhrunningController;
//# sourceMappingURL=fhrunning_controller.js.map