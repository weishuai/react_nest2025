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
exports.WarehouseController = void 0;
const common_1 = require("@nestjs/common");
const warehouse_service_1 = require("../myservices/warehouse_service");
const warehouse_vo_1 = require("../myvo/warehouse_vo");
let WarehouseController = class WarehouseController {
    constructor() {
        this.warehouseService = new warehouse_service_1.WarehouseService();
    }
    async createWarehouse(warehouseVo) {
        console.log('Body: ', warehouseVo);
        return await this.warehouseService.createWarehouse(warehouseVo);
    }
    async updateaWarehouse(userToken, Id, warehouseVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('WarehouseVo: ', warehouseVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.warehouseService.updateaWarehouse(Id, userId, warehouseVo);
    }
    async removeWarehouse(Id) {
        return await this.warehouseService.removeWarehouse(Id);
    }
    async getWarehouseById(Id) {
        return await this.warehouseService.getWarehouseById(Id);
    }
    async getWarehouseList(query) {
        console.log('query: ', query);
        const search = new warehouse_vo_1.WarehouseSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.warehouseService.getWarehouseList(search);
    }
    async getWarehouseAll() {
        return await this.warehouseService.getWarehouseAll();
    }
    async getWarehouseAllView() {
        return await this.warehouseService.getWarehouseAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createWarehouse'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [warehouse_vo_1.WarehouseVo]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "createWarehouse", null);
__decorate([
    (0, common_1.Put)('/updateWarehouse/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, warehouse_vo_1.WarehouseVo]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "updateaWarehouse", null);
__decorate([
    (0, common_1.Get)('/removeWarehouse/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "removeWarehouse", null);
__decorate([
    (0, common_1.Get)('/getWarehouseById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "getWarehouseById", null);
__decorate([
    (0, common_1.Get)('/getWarehouse'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "getWarehouseList", null);
__decorate([
    (0, common_1.Get)('/getWarehouseAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "getWarehouseAll", null);
__decorate([
    (0, common_1.Get)('/getWarehouseAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "getWarehouseAllView", null);
WarehouseController = __decorate([
    (0, common_1.Controller)('/warehouse')
], WarehouseController);
exports.WarehouseController = WarehouseController;
//# sourceMappingURL=warehouse_controller.js.map