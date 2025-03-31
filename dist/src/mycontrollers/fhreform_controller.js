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
exports.FhreformController = void 0;
const common_1 = require("@nestjs/common");
const fhreform_service_1 = require("../myservices/fhreform_service");
const fhreform_vo_1 = require("../myvo/fhreform_vo");
let FhreformController = class FhreformController {
    constructor() {
        this.fhreformService = new fhreform_service_1.FhreformService();
    }
    async createFhreform(fhreformVo) {
        console.log('Body: ', fhreformVo);
        return await this.fhreformService.createFhreform(fhreformVo);
    }
    async updateaFhreform(userToken, Id, fhreformVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('FhreformVo: ', fhreformVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.fhreformService.updateaFhreform(Id, userId, fhreformVo);
    }
    async removeFhreform(Id) {
        return await this.fhreformService.removeFhreform(Id);
    }
    async getFhreformById(Id) {
        return await this.fhreformService.getFhreformById(Id);
    }
    async getFhreformList(query) {
        console.log('query: ', query);
        const search = new fhreform_vo_1.FhreformSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.fhreformService.getFhreformList(search);
    }
    async getFhreformAll() {
        return await this.fhreformService.getFhreformAll();
    }
    async getFhreformAllView() {
        return await this.fhreformService.getFhreformAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createFhreform'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fhreform_vo_1.FhreformVo]),
    __metadata("design:returntype", Promise)
], FhreformController.prototype, "createFhreform", null);
__decorate([
    (0, common_1.Put)('/updateFhreform/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, fhreform_vo_1.FhreformVo]),
    __metadata("design:returntype", Promise)
], FhreformController.prototype, "updateaFhreform", null);
__decorate([
    (0, common_1.Get)('/removeFhreform/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FhreformController.prototype, "removeFhreform", null);
__decorate([
    (0, common_1.Get)('/getFhreformById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FhreformController.prototype, "getFhreformById", null);
__decorate([
    (0, common_1.Get)('/getFhreform'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FhreformController.prototype, "getFhreformList", null);
__decorate([
    (0, common_1.Get)('/getFhreformAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FhreformController.prototype, "getFhreformAll", null);
__decorate([
    (0, common_1.Get)('/getFhreformAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FhreformController.prototype, "getFhreformAllView", null);
FhreformController = __decorate([
    (0, common_1.Controller)('/fhreform')
], FhreformController);
exports.FhreformController = FhreformController;
//# sourceMappingURL=fhreform_controller.js.map