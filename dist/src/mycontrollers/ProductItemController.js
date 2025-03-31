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
exports.ProductItemController = void 0;
const common_1 = require("@nestjs/common");
const ProductItemService_1 = require("../myservices/ProductItemService");
const ProductItemVo_1 = require("../myvo/ProductItemVo");
let ProductItemController = class ProductItemController {
    constructor() {
        this.productItemService = new ProductItemService_1.ProductItemService();
    }
    async createProductItem(ProductItemVo) {
        return this.productItemService.createProductItem(ProductItemVo);
    }
    async updateaProductItem(userToken, Id, ProductItemVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.productItemService.updateaProductItem(Id, userId, ProductItemVo);
    }
    async removeProductItem(Id) {
        return this.productItemService.removeProductItem([Id]);
    }
    async getProductItemById(Id) {
        return this.productItemService.getProductItemById(Id);
    }
    async getProductItem(search) {
        return this.productItemService.getProductItem(search);
    }
    async getProductItemAll(search) {
        return this.productItemService.getProductItemAll(search);
    }
    async getProductItemAllView() {
        return this.productItemService.getProductItemAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createProductItem'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductItemVo_1.ProductItemVo]),
    __metadata("design:returntype", Promise)
], ProductItemController.prototype, "createProductItem", null);
__decorate([
    (0, common_1.Put)('/updateProductItem/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, ProductItemVo_1.ProductItemVo]),
    __metadata("design:returntype", Promise)
], ProductItemController.prototype, "updateaProductItem", null);
__decorate([
    (0, common_1.Get)('/removeProductItem/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductItemController.prototype, "removeProductItem", null);
__decorate([
    (0, common_1.Get)('/getProductItemById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductItemController.prototype, "getProductItemById", null);
__decorate([
    (0, common_1.Get)('/getProductItem'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductItemVo_1.ProductItemSearchVo]),
    __metadata("design:returntype", Promise)
], ProductItemController.prototype, "getProductItem", null);
__decorate([
    (0, common_1.Get)('/getProductItemAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductItemVo_1.ProductItemSearchVo]),
    __metadata("design:returntype", Promise)
], ProductItemController.prototype, "getProductItemAll", null);
__decorate([
    (0, common_1.Get)('/getProductItemAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductItemController.prototype, "getProductItemAllView", null);
ProductItemController = __decorate([
    (0, common_1.Controller)('/productItem')
], ProductItemController);
exports.ProductItemController = ProductItemController;
//# sourceMappingURL=ProductItemController.js.map