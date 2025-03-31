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
exports.ProcurePriceController = void 0;
const common_1 = require("@nestjs/common");
const procure_price_service_1 = require("../myservices/procure_price_service");
const procure_price_vo_1 = require("../myvo/procure_price_vo");
let ProcurePriceController = class ProcurePriceController {
    constructor() {
        this.procurePriceService = new procure_price_service_1.ProcurePriceService();
    }
    async createProcurePrice(procurePriceVo) {
        console.log('Body: ', procurePriceVo);
        return await this.procurePriceService.createProcurePrice(procurePriceVo);
    }
    async updateaProcurePrice(userToken, Id, procurePriceVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('ProcurePriceVo: ', procurePriceVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.procurePriceService.updateaProcurePrice(Id, userId, procurePriceVo);
    }
    async removeProcurePrice(Id) {
        return await this.procurePriceService.removeProcurePrice(Id);
    }
    async getProcurePriceById(Id) {
        return await this.procurePriceService.getProcurePriceById(Id);
    }
    async getProcurePriceList(query) {
        console.log('query: ', query);
        const search = new procure_price_vo_1.ProcurePriceSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.procurePriceService.getProcurePriceList(search);
    }
    async getProcurePriceAll() {
        return await this.procurePriceService.getProcurePriceAll();
    }
    async getProcurePriceAllView() {
        return await this.procurePriceService.getProcurePriceAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createProcurePrice'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [procure_price_vo_1.ProcurePriceVo]),
    __metadata("design:returntype", Promise)
], ProcurePriceController.prototype, "createProcurePrice", null);
__decorate([
    (0, common_1.Put)('/updateProcurePrice/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, procure_price_vo_1.ProcurePriceVo]),
    __metadata("design:returntype", Promise)
], ProcurePriceController.prototype, "updateaProcurePrice", null);
__decorate([
    (0, common_1.Get)('/removeProcurePrice/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProcurePriceController.prototype, "removeProcurePrice", null);
__decorate([
    (0, common_1.Get)('/getProcurePriceById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProcurePriceController.prototype, "getProcurePriceById", null);
__decorate([
    (0, common_1.Get)('/getProcurePrice'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProcurePriceController.prototype, "getProcurePriceList", null);
__decorate([
    (0, common_1.Get)('/getProcurePriceAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProcurePriceController.prototype, "getProcurePriceAll", null);
__decorate([
    (0, common_1.Get)('/getProcurePriceAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProcurePriceController.prototype, "getProcurePriceAllView", null);
ProcurePriceController = __decorate([
    (0, common_1.Controller)('/procurePrice')
], ProcurePriceController);
exports.ProcurePriceController = ProcurePriceController;
//# sourceMappingURL=procure_price_controller.js.map