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
exports.StockWarehouseOrderpointController = void 0;
const common_1 = require("@nestjs/common");
const stock_warehouse_orderpoint_service_1 = require("../myservices/stock_warehouse_orderpoint_service");
const stock_warehouse_orderpoint_vo_1 = require("../myvo/stock_warehouse_orderpoint_vo");
let StockWarehouseOrderpointController = class StockWarehouseOrderpointController {
    constructor() {
        this.stockWarehouseOrderpointService = new stock_warehouse_orderpoint_service_1.StockWarehouseOrderpointService();
    }
    async createStockWarehouseOrderpoint(stockWarehouseOrderpointVo) {
        console.log('Body: ', stockWarehouseOrderpointVo);
        return await this.stockWarehouseOrderpointService.createStockWarehouseOrderpoint(stockWarehouseOrderpointVo);
    }
    async updateaStockWarehouseOrderpoint(userToken, Id, stockWarehouseOrderpointVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('StockWarehouseOrderpointVo: ', stockWarehouseOrderpointVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.stockWarehouseOrderpointService.updateaStockWarehouseOrderpoint(Id, userId, stockWarehouseOrderpointVo);
    }
    async removeStockWarehouseOrderpoint(Id) {
        return await this.stockWarehouseOrderpointService.removeStockWarehouseOrderpoint(Id);
    }
    async getStockWarehouseOrderpointById(Id) {
        return await this.stockWarehouseOrderpointService.getStockWarehouseOrderpointById(Id);
    }
    async getStockWarehouseOrderpointList(query) {
        console.log('query: ', query);
        const search = new stock_warehouse_orderpoint_vo_1.StockWarehouseOrderpointSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.stockWarehouseOrderpointService.getStockWarehouseOrderpointList(search);
    }
    async getStockWarehouseOrderpointAll() {
        return await this.stockWarehouseOrderpointService.getStockWarehouseOrderpointAll();
    }
    async getStockWarehouseOrderpointAllView() {
        return await this.stockWarehouseOrderpointService.getStockWarehouseOrderpointAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createStockWarehouseOrderpoint'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stock_warehouse_orderpoint_vo_1.StockWarehouseOrderpointVo]),
    __metadata("design:returntype", Promise)
], StockWarehouseOrderpointController.prototype, "createStockWarehouseOrderpoint", null);
__decorate([
    (0, common_1.Put)('/updateStockWarehouseOrderpoint/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, stock_warehouse_orderpoint_vo_1.StockWarehouseOrderpointVo]),
    __metadata("design:returntype", Promise)
], StockWarehouseOrderpointController.prototype, "updateaStockWarehouseOrderpoint", null);
__decorate([
    (0, common_1.Get)('/removeStockWarehouseOrderpoint/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StockWarehouseOrderpointController.prototype, "removeStockWarehouseOrderpoint", null);
__decorate([
    (0, common_1.Get)('/getStockWarehouseOrderpointById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StockWarehouseOrderpointController.prototype, "getStockWarehouseOrderpointById", null);
__decorate([
    (0, common_1.Get)('/getStockWarehouseOrderpoint'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StockWarehouseOrderpointController.prototype, "getStockWarehouseOrderpointList", null);
__decorate([
    (0, common_1.Get)('/getStockWarehouseOrderpointAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StockWarehouseOrderpointController.prototype, "getStockWarehouseOrderpointAll", null);
__decorate([
    (0, common_1.Get)('/getStockWarehouseOrderpointAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StockWarehouseOrderpointController.prototype, "getStockWarehouseOrderpointAllView", null);
StockWarehouseOrderpointController = __decorate([
    (0, common_1.Controller)('/stockWarehouseOrderpoint')
], StockWarehouseOrderpointController);
exports.StockWarehouseOrderpointController = StockWarehouseOrderpointController;
//# sourceMappingURL=stock_warehouse_orderpoint_controller.js.map