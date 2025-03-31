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
exports.FhservicetbController = void 0;
const common_1 = require("@nestjs/common");
const fhservicetb_service_1 = require("../myservices/fhservicetb_service");
const fhservicetb_vo_1 = require("../myvo/fhservicetb_vo");
let FhservicetbController = class FhservicetbController {
    constructor() {
        this.fhservicetbService = new fhservicetb_service_1.FhservicetbService();
    }
    async createFhservicetb(fhservicetbVo) {
        console.log('Body: ', fhservicetbVo);
        return await this.fhservicetbService.createFhservicetb(fhservicetbVo);
    }
    async updateaFhservicetb(userToken, Id, fhservicetbVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('FhservicetbVo: ', fhservicetbVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.fhservicetbService.updateaFhservicetb(Id, userId, fhservicetbVo);
    }
    async removeFhservicetb(Id) {
        return await this.fhservicetbService.removeFhservicetb(Id);
    }
    async getFhservicetbById(Id) {
        return await this.fhservicetbService.getFhservicetbById(Id);
    }
    async getFhservicetbList(query) {
        console.log('query: ', query);
        const search = new fhservicetb_vo_1.FhservicetbSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.fhservicetbService.getFhservicetbList(search);
    }
    async getFhservicetbAll() {
        return await this.fhservicetbService.getFhservicetbAll();
    }
    async getFhservicetbAllView() {
        return await this.fhservicetbService.getFhservicetbAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createFhservicetb'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fhservicetb_vo_1.FhservicetbVo]),
    __metadata("design:returntype", Promise)
], FhservicetbController.prototype, "createFhservicetb", null);
__decorate([
    (0, common_1.Put)('/updateFhservicetb/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, fhservicetb_vo_1.FhservicetbVo]),
    __metadata("design:returntype", Promise)
], FhservicetbController.prototype, "updateaFhservicetb", null);
__decorate([
    (0, common_1.Get)('/removeFhservicetb/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FhservicetbController.prototype, "removeFhservicetb", null);
__decorate([
    (0, common_1.Get)('/getFhservicetbById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FhservicetbController.prototype, "getFhservicetbById", null);
__decorate([
    (0, common_1.Get)('/getFhservicetb'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FhservicetbController.prototype, "getFhservicetbList", null);
__decorate([
    (0, common_1.Get)('/getFhservicetbAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FhservicetbController.prototype, "getFhservicetbAll", null);
__decorate([
    (0, common_1.Get)('/getFhservicetbAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FhservicetbController.prototype, "getFhservicetbAllView", null);
FhservicetbController = __decorate([
    (0, common_1.Controller)('/fhservicetb')
], FhservicetbController);
exports.FhservicetbController = FhservicetbController;
//# sourceMappingURL=fhservicetb_controller.js.map