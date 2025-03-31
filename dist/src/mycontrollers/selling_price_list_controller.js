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
exports.SellingPriceListController = void 0;
const common_1 = require("@nestjs/common");
const selling_price_list_service_1 = require("../myservices/selling_price_list_service");
const selling_price_list_vo_1 = require("../myvo/selling_price_list_vo");
let SellingPriceListController = class SellingPriceListController {
    constructor() {
        this.sellingPriceListService = new selling_price_list_service_1.SellingPriceListService();
    }
    async createSellingPriceList(sellingPriceListVo) {
        console.log('Body: ', sellingPriceListVo);
        return await this.sellingPriceListService.createSellingPriceList(sellingPriceListVo);
    }
    async updateaSellingPriceList(userToken, Id, sellingPriceListVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('SellingPriceListVo: ', sellingPriceListVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.sellingPriceListService.updateaSellingPriceList(Id, userId, sellingPriceListVo);
    }
    async removeSellingPriceList(Id) {
        return await this.sellingPriceListService.removeSellingPriceList(Id);
    }
    async getSellingPriceListById(Id) {
        return await this.sellingPriceListService.getSellingPriceListById(Id);
    }
    async getSellingPriceListList(query) {
        console.log('query: ', query);
        const search = new selling_price_list_vo_1.SellingPriceListSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.sellingPriceListService.getSellingPriceListList(search);
    }
    async getSellingPriceListAll() {
        return await this.sellingPriceListService.getSellingPriceListAll();
    }
    async getSellingPriceListAllView() {
        return await this.sellingPriceListService.getSellingPriceListAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createSellingPriceList'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [selling_price_list_vo_1.SellingPriceListVo]),
    __metadata("design:returntype", Promise)
], SellingPriceListController.prototype, "createSellingPriceList", null);
__decorate([
    (0, common_1.Put)('/updateSellingPriceList/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, selling_price_list_vo_1.SellingPriceListVo]),
    __metadata("design:returntype", Promise)
], SellingPriceListController.prototype, "updateaSellingPriceList", null);
__decorate([
    (0, common_1.Get)('/removeSellingPriceList/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SellingPriceListController.prototype, "removeSellingPriceList", null);
__decorate([
    (0, common_1.Get)('/getSellingPriceListById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SellingPriceListController.prototype, "getSellingPriceListById", null);
__decorate([
    (0, common_1.Get)('/getSellingPriceList'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SellingPriceListController.prototype, "getSellingPriceListList", null);
__decorate([
    (0, common_1.Get)('/getSellingPriceListAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SellingPriceListController.prototype, "getSellingPriceListAll", null);
__decorate([
    (0, common_1.Get)('/getSellingPriceListAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SellingPriceListController.prototype, "getSellingPriceListAllView", null);
SellingPriceListController = __decorate([
    (0, common_1.Controller)('/sellingPriceList')
], SellingPriceListController);
exports.SellingPriceListController = SellingPriceListController;
//# sourceMappingURL=selling_price_list_controller.js.map