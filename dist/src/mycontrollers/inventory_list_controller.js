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
exports.InventoryListController = void 0;
const common_1 = require("@nestjs/common");
const inventory_list_service_1 = require("../myservices/inventory_list_service");
const inventory_list_vo_1 = require("../myvo/inventory_list_vo");
let InventoryListController = class InventoryListController {
    constructor() {
        this.inventoryListService = new inventory_list_service_1.InventoryListService();
    }
    async createInventoryList(inventoryListVo) {
        console.log('Body: ', inventoryListVo);
        return await this.inventoryListService.createInventoryList(inventoryListVo);
    }
    async updateaInventoryList(userToken, Id, inventoryListVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('InventoryListVo: ', inventoryListVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.inventoryListService.updateaInventoryList(Id, userId, inventoryListVo);
    }
    async removeInventoryList(Id) {
        return await this.inventoryListService.removeInventoryList(Id);
    }
    async getInventoryListById(Id) {
        return await this.inventoryListService.getInventoryListById(Id);
    }
    async getInventoryListList(query) {
        console.log('query: ', query);
        const search = new inventory_list_vo_1.InventoryListSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.inventoryListService.getInventoryListList(search);
    }
    async getInventoryListAll() {
        return await this.inventoryListService.getInventoryListAll();
    }
    async getInventoryListAllView() {
        return await this.inventoryListService.getInventoryListAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createInventoryList'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_list_vo_1.InventoryListVo]),
    __metadata("design:returntype", Promise)
], InventoryListController.prototype, "createInventoryList", null);
__decorate([
    (0, common_1.Put)('/updateInventoryList/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, inventory_list_vo_1.InventoryListVo]),
    __metadata("design:returntype", Promise)
], InventoryListController.prototype, "updateaInventoryList", null);
__decorate([
    (0, common_1.Get)('/removeInventoryList/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InventoryListController.prototype, "removeInventoryList", null);
__decorate([
    (0, common_1.Get)('/getInventoryListById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InventoryListController.prototype, "getInventoryListById", null);
__decorate([
    (0, common_1.Get)('/getInventoryList'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InventoryListController.prototype, "getInventoryListList", null);
__decorate([
    (0, common_1.Get)('/getInventoryListAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InventoryListController.prototype, "getInventoryListAll", null);
__decorate([
    (0, common_1.Get)('/getInventoryListAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InventoryListController.prototype, "getInventoryListAllView", null);
InventoryListController = __decorate([
    (0, common_1.Controller)('/inventoryList')
], InventoryListController);
exports.InventoryListController = InventoryListController;
//# sourceMappingURL=inventory_list_controller.js.map