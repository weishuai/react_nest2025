"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTypeService = void 0;
const myrepositories_1 = require("../myrepositories");
class ProductTypeService {
    constructor() {
        this.productTypeRepo = new myrepositories_1.ProductTypeRepo();
    }
    async findOneProductType(Id) {
        return this.productTypeRepo.getProductTypesById(Id);
    }
    async createProductType(productTypeVo) {
        return this.productTypeRepo.create(productTypeVo);
    }
    async updateaProductType(Id, user_id, productTypeVo) {
        productTypeVo.updatedAt = new Date();
        productTypeVo.updatedUid = user_id;
        return this.productTypeRepo.update(Id, user_id, productTypeVo);
    }
    async removeProductType(Ids) {
        return this.productTypeRepo.remove(Ids);
    }
    async getProductTypeById(id) {
        return this.productTypeRepo.getProductTypesById(id);
    }
    async getProductType(search) {
        return this.productTypeRepo.getProductType(search);
    }
    async getProductTypeAll(search) {
        return this.productTypeRepo.getProductTypeAll(search);
    }
    async getProductTypeAllView() {
        return this.productTypeRepo.getProductTypeAllView();
    }
}
exports.ProductTypeService = ProductTypeService;
//# sourceMappingURL=ProductTypeService.js.map