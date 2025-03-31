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
exports.SellingPriceController = void 0;
const common_1 = require("@nestjs/common");
const selling_price_service_1 = require("../myservices/selling_price_service");
const selling_price_vo_1 = require("../myvo/selling_price_vo");
let SellingPriceController = class SellingPriceController {
    constructor() {
        this.sellingPriceService = new selling_price_service_1.SellingPriceService();
    }
    async createSellingPrice(sellingPriceVo) {
        console.log('Body: ', sellingPriceVo);
        return await this.sellingPriceService.createSellingPrice(sellingPriceVo);
    }
    async updateaSellingPrice(userToken, Id, sellingPriceVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('SellingPriceVo: ', sellingPriceVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.sellingPriceService.updateaSellingPrice(Id, userId, sellingPriceVo);
    }
    async removeSellingPrice(Id) {
        return await this.sellingPriceService.removeSellingPrice(Id);
    }
    async getSellingPriceById(Id) {
        return await this.sellingPriceService.getSellingPriceById(Id);
    }
    async getSellingPriceList(query) {
        console.log('query: ', query);
        const search = new selling_price_vo_1.SellingPriceSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.sellingPriceService.getSellingPriceList(search);
    }
    async getSellingPriceAll() {
        return await this.sellingPriceService.getSellingPriceAll();
    }
    async getSellingPriceAllView() {
        return await this.sellingPriceService.getSellingPriceAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createSellingPrice'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [selling_price_vo_1.SellingPriceVo]),
    __metadata("design:returntype", Promise)
], SellingPriceController.prototype, "createSellingPrice", null);
__decorate([
    (0, common_1.Put)('/updateSellingPrice/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, selling_price_vo_1.SellingPriceVo]),
    __metadata("design:returntype", Promise)
], SellingPriceController.prototype, "updateaSellingPrice", null);
__decorate([
    (0, common_1.Get)('/removeSellingPrice/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SellingPriceController.prototype, "removeSellingPrice", null);
__decorate([
    (0, common_1.Get)('/getSellingPriceById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SellingPriceController.prototype, "getSellingPriceById", null);
__decorate([
    (0, common_1.Get)('/getSellingPrice'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SellingPriceController.prototype, "getSellingPriceList", null);
__decorate([
    (0, common_1.Get)('/getSellingPriceAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SellingPriceController.prototype, "getSellingPriceAll", null);
__decorate([
    (0, common_1.Get)('/getSellingPriceAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SellingPriceController.prototype, "getSellingPriceAllView", null);
SellingPriceController = __decorate([
    (0, common_1.Controller)('/sellingPrice')
], SellingPriceController);
exports.SellingPriceController = SellingPriceController;
//# sourceMappingURL=selling_price_controller.js.map