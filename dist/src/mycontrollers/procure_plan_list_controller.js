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
exports.ProcurePlanListController = void 0;
const common_1 = require("@nestjs/common");
const procure_plan_list_service_1 = require("../myservices/procure_plan_list_service");
const procure_plan_list_vo_1 = require("../myvo/procure_plan_list_vo");
let ProcurePlanListController = class ProcurePlanListController {
    constructor() {
        this.procurePlanListService = new procure_plan_list_service_1.ProcurePlanListService();
    }
    async createProcurePlanList(procurePlanListVo) {
        console.log('Body: ', procurePlanListVo);
        return await this.procurePlanListService.createProcurePlanList(procurePlanListVo);
    }
    async updateaProcurePlanList(userToken, Id, procurePlanListVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('ProcurePlanListVo: ', procurePlanListVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.procurePlanListService.updateaProcurePlanList(Id, userId, procurePlanListVo);
    }
    async removeProcurePlanList(Id) {
        return await this.procurePlanListService.removeProcurePlanList(Id);
    }
    async getProcurePlanListById(Id) {
        return await this.procurePlanListService.getProcurePlanListById(Id);
    }
    async getProcurePlanListList(query) {
        console.log('query: ', query);
        const search = new procure_plan_list_vo_1.ProcurePlanListSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.procurePlanListService.getProcurePlanListList(search);
    }
    async getProcurePlanListAll() {
        return await this.procurePlanListService.getProcurePlanListAll();
    }
    async getProcurePlanListAllView() {
        return await this.procurePlanListService.getProcurePlanListAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createProcurePlanList'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [procure_plan_list_vo_1.ProcurePlanListVo]),
    __metadata("design:returntype", Promise)
], ProcurePlanListController.prototype, "createProcurePlanList", null);
__decorate([
    (0, common_1.Put)('/updateProcurePlanList/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, procure_plan_list_vo_1.ProcurePlanListVo]),
    __metadata("design:returntype", Promise)
], ProcurePlanListController.prototype, "updateaProcurePlanList", null);
__decorate([
    (0, common_1.Get)('/removeProcurePlanList/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProcurePlanListController.prototype, "removeProcurePlanList", null);
__decorate([
    (0, common_1.Get)('/getProcurePlanListById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProcurePlanListController.prototype, "getProcurePlanListById", null);
__decorate([
    (0, common_1.Get)('/getProcurePlanList'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProcurePlanListController.prototype, "getProcurePlanListList", null);
__decorate([
    (0, common_1.Get)('/getProcurePlanListAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProcurePlanListController.prototype, "getProcurePlanListAll", null);
__decorate([
    (0, common_1.Get)('/getProcurePlanListAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProcurePlanListController.prototype, "getProcurePlanListAllView", null);
ProcurePlanListController = __decorate([
    (0, common_1.Controller)('/procurePlanList')
], ProcurePlanListController);
exports.ProcurePlanListController = ProcurePlanListController;
//# sourceMappingURL=procure_plan_list_controller.js.map