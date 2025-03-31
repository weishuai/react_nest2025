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
exports.FhservicePlanController = void 0;
const common_1 = require("@nestjs/common");
const fhservice_plan_service_1 = require("../myservices/fhservice_plan_service");
const fhservice_plan_vo_1 = require("../myvo/fhservice_plan_vo");
let FhservicePlanController = class FhservicePlanController {
    constructor() {
        this.fhservicePlanService = new fhservice_plan_service_1.FhservicePlanService();
    }
    async createFhservicePlan(fhservicePlanVo) {
        console.log('Body: ', fhservicePlanVo);
        return await this.fhservicePlanService.createFhservicePlan(fhservicePlanVo);
    }
    async updateaFhservicePlan(userToken, Id, fhservicePlanVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('FhservicePlanVo: ', fhservicePlanVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.fhservicePlanService.updateaFhservicePlan(Id, userId, fhservicePlanVo);
    }
    async removeFhservicePlan(Id) {
        return await this.fhservicePlanService.removeFhservicePlan(Id);
    }
    async getFhservicePlanById(Id) {
        return await this.fhservicePlanService.getFhservicePlanById(Id);
    }
    async getFhservicePlanList(query) {
        console.log('query: ', query);
        const search = new fhservice_plan_vo_1.FhservicePlanSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.fhservicePlanService.getFhservicePlanList(search);
    }
    async getFhservicePlanAll() {
        return await this.fhservicePlanService.getFhservicePlanAll();
    }
    async getFhservicePlanAllView() {
        return await this.fhservicePlanService.getFhservicePlanAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createFhservicePlan'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fhservice_plan_vo_1.FhservicePlanVo]),
    __metadata("design:returntype", Promise)
], FhservicePlanController.prototype, "createFhservicePlan", null);
__decorate([
    (0, common_1.Put)('/updateFhservicePlan/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, fhservice_plan_vo_1.FhservicePlanVo]),
    __metadata("design:returntype", Promise)
], FhservicePlanController.prototype, "updateaFhservicePlan", null);
__decorate([
    (0, common_1.Get)('/removeFhservicePlan/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FhservicePlanController.prototype, "removeFhservicePlan", null);
__decorate([
    (0, common_1.Get)('/getFhservicePlanById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FhservicePlanController.prototype, "getFhservicePlanById", null);
__decorate([
    (0, common_1.Get)('/getFhservicePlan'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FhservicePlanController.prototype, "getFhservicePlanList", null);
__decorate([
    (0, common_1.Get)('/getFhservicePlanAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FhservicePlanController.prototype, "getFhservicePlanAll", null);
__decorate([
    (0, common_1.Get)('/getFhservicePlanAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FhservicePlanController.prototype, "getFhservicePlanAllView", null);
FhservicePlanController = __decorate([
    (0, common_1.Controller)('/fhservicePlan')
], FhservicePlanController);
exports.FhservicePlanController = FhservicePlanController;
//# sourceMappingURL=fhservice_plan_controller.js.map