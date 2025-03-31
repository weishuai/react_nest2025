"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductItemService = void 0;
const myrepositories_1 = require("../myrepositories");
class ProductItemService {
    constructor() {
        this.ProductItemRepo = new myrepositories_1.ProductItemRepo();
    }
    async findOneProductItem(Id) {
        return this.ProductItemRepo.getproductItemsById(Id);
    }
    async createProductItem(productItemVo) {
        return this.ProductItemRepo.create(productItemVo);
    }
    async updateaProductItem(Id, user_id, productItemVo) {
        productItemVo.updatedAt = new Date();
        productItemVo.updatedUid = user_id;
        return this.ProductItemRepo.update(Id, user_id, productItemVo);
    }
    async removeProductItem(Ids) {
        return this.ProductItemRepo.remove(Ids);
    }
    async getProductItemById(id) {
        return this.ProductItemRepo.getproductItemsById(id);
    }
    async getProductItem(search) {
        return this.ProductItemRepo.getproductItem(search);
    }
    async getProductItemAll(search) {
        return this.ProductItemRepo.getproductItemAll(search);
    }
    async getProductItemAllView() {
        return this.ProductItemRepo.getproductItemAllView();
    }
}
exports.ProductItemService = ProductItemService;
//# sourceMappingURL=ProductItemService.js.map