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
exports.StoreMoveListController = void 0;
const common_1 = require("@nestjs/common");
const store_move_list_service_1 = require("../myservices/store_move_list_service");
const store_move_list_vo_1 = require("../myvo/store_move_list_vo");
let StoreMoveListController = class StoreMoveListController {
    constructor() {
        this.storeMoveListService = new store_move_list_service_1.StoreMoveListService();
    }
    async createStoreMoveList(storeMoveListVo) {
        console.log('Body: ', storeMoveListVo);
        return await this.storeMoveListService.createStoreMoveList(storeMoveListVo);
    }
    async updateaStoreMoveList(userToken, Id, storeMoveListVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('StoreMoveListVo: ', storeMoveListVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.storeMoveListService.updateaStoreMoveList(Id, userId, storeMoveListVo);
    }
    async removeStoreMoveList(Id) {
        return await this.storeMoveListService.removeStoreMoveList(Id);
    }
    async getStoreMoveListById(Id) {
        return await this.storeMoveListService.getStoreMoveListById(Id);
    }
    async getStoreMoveListList(query) {
        console.log('query: ', query);
        const search = new store_move_list_vo_1.StoreMoveListSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.storeMoveListService.getStoreMoveListList(search);
    }
    async getStoreMoveListAll() {
        return await this.storeMoveListService.getStoreMoveListAll();
    }
    async getStoreMoveListAllView() {
        return await this.storeMoveListService.getStoreMoveListAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createStoreMoveList'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [store_move_list_vo_1.StoreMoveListVo]),
    __metadata("design:returntype", Promise)
], StoreMoveListController.prototype, "createStoreMoveList", null);
__decorate([
    (0, common_1.Put)('/updateStoreMoveList/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, store_move_list_vo_1.StoreMoveListVo]),
    __metadata("design:returntype", Promise)
], StoreMoveListController.prototype, "updateaStoreMoveList", null);
__decorate([
    (0, common_1.Get)('/removeStoreMoveList/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoreMoveListController.prototype, "removeStoreMoveList", null);
__decorate([
    (0, common_1.Get)('/getStoreMoveListById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoreMoveListController.prototype, "getStoreMoveListById", null);
__decorate([
    (0, common_1.Get)('/getStoreMoveList'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StoreMoveListController.prototype, "getStoreMoveListList", null);
__decorate([
    (0, common_1.Get)('/getStoreMoveListAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StoreMoveListController.prototype, "getStoreMoveListAll", null);
__decorate([
    (0, common_1.Get)('/getStoreMoveListAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StoreMoveListController.prototype, "getStoreMoveListAllView", null);
StoreMoveListController = __decorate([
    (0, common_1.Controller)('/storeMoveList')
], StoreMoveListController);
exports.StoreMoveListController = StoreMoveListController;
//# sourceMappingURL=store_move_list_controller.js.map