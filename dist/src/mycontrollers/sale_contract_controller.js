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
exports.SaleContractController = void 0;
const common_1 = require("@nestjs/common");
const sale_contract_service_1 = require("../myservices/sale_contract_service");
const sale_contract_vo_1 = require("../myvo/sale_contract_vo");
let SaleContractController = class SaleContractController {
    constructor() {
        this.saleContractService = new sale_contract_service_1.SaleContractService();
    }
    async createSaleContract(saleContractVo) {
        console.log('Body: ', saleContractVo);
        return await this.saleContractService.createSaleContract(saleContractVo);
    }
    async updateaSaleContract(userToken, Id, saleContractVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('SaleContractVo: ', saleContractVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.saleContractService.updateaSaleContract(Id, userId, saleContractVo);
    }
    async removeSaleContract(Id) {
        return await this.saleContractService.removeSaleContract(Id);
    }
    async getSaleContractById(Id) {
        return await this.saleContractService.getSaleContractById(Id);
    }
    async getSaleContractList(query) {
        console.log('query: ', query);
        const search = new sale_contract_vo_1.SaleContractSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.saleContractService.getSaleContractList(search);
    }
    async getSaleContractAll() {
        return await this.saleContractService.getSaleContractAll();
    }
    async getSaleContractAllView() {
        return await this.saleContractService.getSaleContractAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createSaleContract'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sale_contract_vo_1.SaleContractVo]),
    __metadata("design:returntype", Promise)
], SaleContractController.prototype, "createSaleContract", null);
__decorate([
    (0, common_1.Put)('/updateSaleContract/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, sale_contract_vo_1.SaleContractVo]),
    __metadata("design:returntype", Promise)
], SaleContractController.prototype, "updateaSaleContract", null);
__decorate([
    (0, common_1.Get)('/removeSaleContract/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SaleContractController.prototype, "removeSaleContract", null);
__decorate([
    (0, common_1.Get)('/getSaleContractById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SaleContractController.prototype, "getSaleContractById", null);
__decorate([
    (0, common_1.Get)('/getSaleContract'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SaleContractController.prototype, "getSaleContractList", null);
__decorate([
    (0, common_1.Get)('/getSaleContractAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SaleContractController.prototype, "getSaleContractAll", null);
__decorate([
    (0, common_1.Get)('/getSaleContractAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SaleContractController.prototype, "getSaleContractAllView", null);
SaleContractController = __decorate([
    (0, common_1.Controller)('/saleContract')
], SaleContractController);
exports.SaleContractController = SaleContractController;
//# sourceMappingURL=sale_contract_controller.js.map