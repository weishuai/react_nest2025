"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const myrepositories_1 = require("../myrepositories");
class ProductService {
    constructor() {
        this.productRepo = new myrepositories_1.ProductRepo();
    }
    async findOneProduct(Id) {
        return this.productRepo.getproductsById(Id);
    }
    async createProduct(productVo) {
        return this.productRepo.create(productVo);
    }
    async updateaProduct(Id, user_id, productVo) {
        productVo.updatedAt = new Date();
        productVo.updatedUid = user_id;
        return this.productRepo.update(Id, user_id, productVo);
    }
    async removeProduct(Ids) {
        return this.productRepo.remove(Ids);
    }
    async getProductById(id) {
        return this.productRepo.getproductsById(id);
    }
    async getProduct(search) {
        return this.productRepo.getproduct(search);
    }
    async getProductAll(search) {
        return this.productRepo.getproductAll(search);
    }
    async getProductAllView() {
        return this.productRepo.getproductAllView();
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=ProductService.js.map