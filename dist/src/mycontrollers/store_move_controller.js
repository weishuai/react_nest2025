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
exports.StoreMoveController = void 0;
const common_1 = require("@nestjs/common");
const store_move_service_1 = require("../myservices/store_move_service");
const store_move_vo_1 = require("../myvo/store_move_vo");
let StoreMoveController = class StoreMoveController {
    constructor() {
        this.storeMoveService = new store_move_service_1.StoreMoveService();
    }
    async createStoreMove(storeMoveVo) {
        console.log('Body: ', storeMoveVo);
        return await this.storeMoveService.createStoreMove(storeMoveVo);
    }
    async updateaStoreMove(userToken, Id, storeMoveVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('StoreMoveVo: ', storeMoveVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.storeMoveService.updateaStoreMove(Id, userId, storeMoveVo);
    }
    async removeStoreMove(Id) {
        return await this.storeMoveService.removeStoreMove(Id);
    }
    async getStoreMoveById(Id) {
        return await this.storeMoveService.getStoreMoveById(Id);
    }
    async getStoreMoveList(query) {
        console.log('query: ', query);
        const search = new store_move_vo_1.StoreMoveSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.storeMoveService.getStoreMoveList(search);
    }
    async getStoreMoveAll() {
        return await this.storeMoveService.getStoreMoveAll();
    }
    async getStoreMoveAllView() {
        return await this.storeMoveService.getStoreMoveAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createStoreMove'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [store_move_vo_1.StoreMoveVo]),
    __metadata("design:returntype", Promise)
], StoreMoveController.prototype, "createStoreMove", null);
__decorate([
    (0, common_1.Put)('/updateStoreMove/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, store_move_vo_1.StoreMoveVo]),
    __metadata("design:returntype", Promise)
], StoreMoveController.prototype, "updateaStoreMove", null);
__decorate([
    (0, common_1.Get)('/removeStoreMove/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoreMoveController.prototype, "removeStoreMove", null);
__decorate([
    (0, common_1.Get)('/getStoreMoveById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoreMoveController.prototype, "getStoreMoveById", null);
__decorate([
    (0, common_1.Get)('/getStoreMove'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StoreMoveController.prototype, "getStoreMoveList", null);
__decorate([
    (0, common_1.Get)('/getStoreMoveAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StoreMoveController.prototype, "getStoreMoveAll", null);
__decorate([
    (0, common_1.Get)('/getStoreMoveAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StoreMoveController.prototype, "getStoreMoveAllView", null);
StoreMoveController = __decorate([
    (0, common_1.Controller)('/storeMove')
], StoreMoveController);
exports.StoreMoveController = StoreMoveController;
//# sourceMappingURL=store_move_controller.js.map