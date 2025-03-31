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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const ProductService_1 = require("../myservices/ProductService");
const ProductVo_1 = require("../myvo/ProductVo");
let ProductController = class ProductController {
    constructor() {
        this.productService = new ProductService_1.ProductService();
    }
    async createProduct(ProductVo) {
        return this.productService.createProduct(ProductVo);
    }
    async updateaProduct(userToken, Id, ProductVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.productService.updateaProduct(Id, userId, ProductVo);
    }
    async removeProduct(Id) {
        return this.productService.removeProduct([Id]);
    }
    async getProductById(Id) {
        return this.productService.getProductById(Id);
    }
    async getProduct(search) {
        return this.productService.getProduct(search);
    }
    async getProductAll(search) {
        return this.productService.getProductAll(search);
    }
    async getProductAllView() {
        return this.productService.getProductAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createProduct'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductVo_1.ProductVo]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Put)('/updateProduct/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, ProductVo_1.ProductVo]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateaProduct", null);
__decorate([
    (0, common_1.Get)('/removeProduct/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "removeProduct", null);
__decorate([
    (0, common_1.Get)('/getProductById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductById", null);
__decorate([
    (0, common_1.Get)('/getProduct'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductVo_1.ProductSearchVo]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProduct", null);
__decorate([
    (0, common_1.Get)('/getProductAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductVo_1.ProductSearchVo]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductAll", null);
__decorate([
    (0, common_1.Get)('/getFHProductAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductAllView", null);
ProductController = __decorate([
    (0, common_1.Controller)('/Product')
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=ProductController.js.map