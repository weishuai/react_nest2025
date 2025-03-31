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
exports.ProductTypeController = void 0;
const common_1 = require("@nestjs/common");
const ProductTypeService_1 = require("../myservices/ProductTypeService");
const ProductTypeVo_1 = require("../myvo/ProductTypeVo");
let ProductTypeController = class ProductTypeController {
    constructor() {
        this.productTypeService = new ProductTypeService_1.ProductTypeService();
    }
    async createProductType(ProductTypeVo) {
        return this.productTypeService.createProductType(ProductTypeVo);
    }
    async updateaProductType(userToken, Id, ProductTypeVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.productTypeService.updateaProductType(Id, userId, ProductTypeVo);
    }
    async removeProductType(Id) {
        return this.productTypeService.removeProductType([Id]);
    }
    async getProductTypeById(Id) {
        return this.productTypeService.getProductTypeById(Id);
    }
    async getProductType(search) {
        return this.productTypeService.getProductType(search);
    }
    async getProductTypeAll(search) {
        return this.productTypeService.getProductTypeAll(search);
    }
    async getProductTypeAllView() {
        return this.productTypeService.getProductTypeAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createProductType'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductTypeVo_1.ProductTypeVo]),
    __metadata("design:returntype", Promise)
], ProductTypeController.prototype, "createProductType", null);
__decorate([
    (0, common_1.Put)('/updateProductType/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, ProductTypeVo_1.ProductTypeVo]),
    __metadata("design:returntype", Promise)
], ProductTypeController.prototype, "updateaProductType", null);
__decorate([
    (0, common_1.Get)('/removeProductType/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductTypeController.prototype, "removeProductType", null);
__decorate([
    (0, common_1.Get)('/getProductTypeById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductTypeController.prototype, "getProductTypeById", null);
__decorate([
    (0, common_1.Get)('/getProductType'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductTypeVo_1.ProductTypeSearchVo]),
    __metadata("design:returntype", Promise)
], ProductTypeController.prototype, "getProductType", null);
__decorate([
    (0, common_1.Get)('/getProductTypeAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductTypeVo_1.ProductTypeSearchVo]),
    __metadata("design:returntype", Promise)
], ProductTypeController.prototype, "getProductTypeAll", null);
__decorate([
    (0, common_1.Get)('/getProductTypeAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductTypeController.prototype, "getProductTypeAllView", null);
ProductTypeController = __decorate([
    (0, common_1.Controller)('/productType')
], ProductTypeController);
exports.ProductTypeController = ProductTypeController;
//# sourceMappingURL=ProductTypeController.js.map