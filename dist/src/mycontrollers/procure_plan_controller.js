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
exports.ProcurePlanController = void 0;
const common_1 = require("@nestjs/common");
const procure_plan_service_1 = require("../myservices/procure_plan_service");
const procure_plan_vo_1 = require("../myvo/procure_plan_vo");
let ProcurePlanController = class ProcurePlanController {
    constructor() {
        this.procurePlanService = new procure_plan_service_1.ProcurePlanService();
    }
    async createProcurePlan(procurePlanVo) {
        console.log('Body: ', procurePlanVo);
        return await this.procurePlanService.createProcurePlan(procurePlanVo);
    }
    async updateaProcurePlan(userToken, Id, procurePlanVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('ProcurePlanVo: ', procurePlanVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.procurePlanService.updateaProcurePlan(Id, userId, procurePlanVo);
    }
    async removeProcurePlan(Id) {
        return await this.procurePlanService.removeProcurePlan(Id);
    }
    async getProcurePlanById(Id) {
        return await this.procurePlanService.getProcurePlanById(Id);
    }
    async getProcurePlanList(query) {
        console.log('query: ', query);
        const search = new procure_plan_vo_1.ProcurePlanSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.procurePlanService.getProcurePlanList(search);
    }
    async getProcurePlanAll() {
        return await this.procurePlanService.getProcurePlanAll();
    }
    async getProcurePlanAllView() {
        return await this.procurePlanService.getProcurePlanAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createProcurePlan'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [procure_plan_vo_1.ProcurePlanVo]),
    __metadata("design:returntype", Promise)
], ProcurePlanController.prototype, "createProcurePlan", null);
__decorate([
    (0, common_1.Put)('/updateProcurePlan/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, procure_plan_vo_1.ProcurePlanVo]),
    __metadata("design:returntype", Promise)
], ProcurePlanController.prototype, "updateaProcurePlan", null);
__decorate([
    (0, common_1.Get)('/removeProcurePlan/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProcurePlanController.prototype, "removeProcurePlan", null);
__decorate([
    (0, common_1.Get)('/getProcurePlanById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProcurePlanController.prototype, "getProcurePlanById", null);
__decorate([
    (0, common_1.Get)('/getProcurePlan'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProcurePlanController.prototype, "getProcurePlanList", null);
__decorate([
    (0, common_1.Get)('/getProcurePlanAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProcurePlanController.prototype, "getProcurePlanAll", null);
__decorate([
    (0, common_1.Get)('/getProcurePlanAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProcurePlanController.prototype, "getProcurePlanAllView", null);
ProcurePlanController = __decorate([
    (0, common_1.Controller)('/procurePlan')
], ProcurePlanController);
exports.ProcurePlanController = ProcurePlanController;
//# sourceMappingURL=procure_plan_controller.js.map