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
exports.StockQuantController = void 0;
const common_1 = require("@nestjs/common");
const stock_quant_service_1 = require("../myservices/stock_quant_service");
const stock_quant_vo_1 = require("../myvo/stock_quant_vo");
let StockQuantController = class StockQuantController {
    constructor() {
        this.stockQuantService = new stock_quant_service_1.StockQuantService();
    }
    async createStockQuant(stockQuantVo) {
        console.log('Body: ', stockQuantVo);
        return await this.stockQuantService.createStockQuant(stockQuantVo);
    }
    async updateaStockQuant(userToken, Id, stockQuantVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('StockQuantVo: ', stockQuantVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.stockQuantService.updateaStockQuant(Id, userId, stockQuantVo);
    }
    async removeStockQuant(Id) {
        return await this.stockQuantService.removeStockQuant(Id);
    }
    async getStockQuantById(Id) {
        return await this.stockQuantService.getStockQuantById(Id);
    }
    async getStockQuantList(query) {
        console.log('query: ', query);
        const search = new stock_quant_vo_1.StockQuantSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.stockQuantService.getStockQuantList(search);
    }
    async getStockQuantAll() {
        return await this.stockQuantService.getStockQuantAll();
    }
    async getStockQuantAllView() {
        return await this.stockQuantService.getStockQuantAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createStockQuant'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stock_quant_vo_1.StockQuantVo]),
    __metadata("design:returntype", Promise)
], StockQuantController.prototype, "createStockQuant", null);
__decorate([
    (0, common_1.Put)('/updateStockQuant/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, stock_quant_vo_1.StockQuantVo]),
    __metadata("design:returntype", Promise)
], StockQuantController.prototype, "updateaStockQuant", null);
__decorate([
    (0, common_1.Get)('/removeStockQuant/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StockQuantController.prototype, "removeStockQuant", null);
__decorate([
    (0, common_1.Get)('/getStockQuantById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StockQuantController.prototype, "getStockQuantById", null);
__decorate([
    (0, common_1.Get)('/getStockQuant'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StockQuantController.prototype, "getStockQuantList", null);
__decorate([
    (0, common_1.Get)('/getStockQuantAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StockQuantController.prototype, "getStockQuantAll", null);
__decorate([
    (0, common_1.Get)('/getStockQuantAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StockQuantController.prototype, "getStockQuantAllView", null);
StockQuantController = __decorate([
    (0, common_1.Controller)('/stockQuant')
], StockQuantController);
exports.StockQuantController = StockQuantController;
//# sourceMappingURL=stock_quant_controller.js.map