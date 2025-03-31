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
exports.InventoryController = void 0;
const common_1 = require("@nestjs/common");
const inventory_service_1 = require("../myservices/inventory_service");
const inventory_vo_1 = require("../myvo/inventory_vo");
let InventoryController = class InventoryController {
    constructor() {
        this.inventoryService = new inventory_service_1.InventoryService();
    }
    async createInventory(inventoryVo) {
        console.log('Body: ', inventoryVo);
        return await this.inventoryService.createInventory(inventoryVo);
    }
    async updateaInventory(userToken, Id, inventoryVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('InventoryVo: ', inventoryVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.inventoryService.updateaInventory(Id, userId, inventoryVo);
    }
    async removeInventory(Id) {
        return await this.inventoryService.removeInventory(Id);
    }
    async getInventoryById(Id) {
        return await this.inventoryService.getInventoryById(Id);
    }
    async getInventoryList(query) {
        console.log('query: ', query);
        const search = new inventory_vo_1.InventorySearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.inventoryService.getInventoryList(search);
    }
    async getInventoryAll() {
        return await this.inventoryService.getInventoryAll();
    }
    async getInventoryAllView() {
        return await this.inventoryService.getInventoryAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createInventory'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_vo_1.InventoryVo]),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "createInventory", null);
__decorate([
    (0, common_1.Put)('/updateInventory/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, inventory_vo_1.InventoryVo]),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "updateaInventory", null);
__decorate([
    (0, common_1.Get)('/removeInventory/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "removeInventory", null);
__decorate([
    (0, common_1.Get)('/getInventoryById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "getInventoryById", null);
__decorate([
    (0, common_1.Get)('/getInventory'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "getInventoryList", null);
__decorate([
    (0, common_1.Get)('/getInventoryAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "getInventoryAll", null);
__decorate([
    (0, common_1.Get)('/getInventoryAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "getInventoryAllView", null);
InventoryController = __decorate([
    (0, common_1.Controller)('/inventory')
], InventoryController);
exports.InventoryController = InventoryController;
//# sourceMappingURL=inventory_controller.js.map