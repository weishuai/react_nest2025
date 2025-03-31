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
exports.myBomProductController = void 0;
const common_1 = require("@nestjs/common");
const mybom_product_service_1 = require("../myservices/mybom_product_service");
const mybom_product_vo_1 = require("../myvo/mybom_product_vo");
let myBomProductController = class myBomProductController {
    constructor() {
        this.mybomProductService = new mybom_product_service_1.myBomProductService();
    }
    async createmyBomProduct(mybomProductVo) {
        console.log('Body: ', mybomProductVo);
        return await this.mybomProductService.createmyBomProduct(mybomProductVo);
    }
    async updateamyBomProduct(userToken, Id, mybomProductVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('myBomProductVo: ', mybomProductVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.mybomProductService.updateamyBomProduct(Id, userId, mybomProductVo);
    }
    async removemyBomProduct(Id) {
        return await this.mybomProductService.removemyBomProduct(Id);
    }
    async getmyBomProductById(Id) {
        return await this.mybomProductService.getmyBomProductById(Id);
    }
    async getmyBomProductList(query) {
        console.log('query: ', query);
        const search = new mybom_product_vo_1.myBomProductSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.mybomProductService.getmyBomProductList(search);
    }
    async getmyBomProductAll() {
        return await this.mybomProductService.getmyBomProductAll();
    }
    async getmyBomProductAllView() {
        return await this.mybomProductService.getmyBomProductAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createmyBomProduct'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mybom_product_vo_1.myBomProductVo]),
    __metadata("design:returntype", Promise)
], myBomProductController.prototype, "createmyBomProduct", null);
__decorate([
    (0, common_1.Put)('/updatemyBomProduct/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, mybom_product_vo_1.myBomProductVo]),
    __metadata("design:returntype", Promise)
], myBomProductController.prototype, "updateamyBomProduct", null);
__decorate([
    (0, common_1.Get)('/removemyBomProduct/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], myBomProductController.prototype, "removemyBomProduct", null);
__decorate([
    (0, common_1.Get)('/getmyBomProductById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], myBomProductController.prototype, "getmyBomProductById", null);
__decorate([
    (0, common_1.Get)('/getmyBomProduct'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], myBomProductController.prototype, "getmyBomProductList", null);
__decorate([
    (0, common_1.Get)('/getmyBomProductAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], myBomProductController.prototype, "getmyBomProductAll", null);
__decorate([
    (0, common_1.Get)('/getmyBomProductAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], myBomProductController.prototype, "getmyBomProductAllView", null);
myBomProductController = __decorate([
    (0, common_1.Controller)('/mybomProduct')
], myBomProductController);
exports.myBomProductController = myBomProductController;
//# sourceMappingURL=mybom_product_controller.js.map