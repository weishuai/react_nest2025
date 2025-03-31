"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myBomProductService = void 0;
const mybom_product_repo_1 = require("../myrepositories/mybom_product_repo");
class myBomProductService {
    constructor() {
        this.mybomProductRepo = new mybom_product_repo_1.myBomProductRepo();
    }
    async findOnemyBomProduct(Id) {
        return await this.mybomProductRepo.getmyBomProductsById(Id);
    }
    async createmyBomProduct(mybomProductVo) {
        return await this.mybomProductRepo.create(mybomProductVo);
    }
    async updateamyBomProduct(Id, user_id, mybomProductVo) {
        return await this.mybomProductRepo.update(Id, user_id, mybomProductVo);
    }
    async removemyBomProduct(Ids) {
        console.log(Ids);
        return await this.mybomProductRepo.remove([Ids]);
    }
    async getmyBomProductById(id) {
        return await this.mybomProductRepo.getmyBomProductsById(id);
    }
    async getmyBomProductList(search) {
        return await this.mybomProductRepo.getmyBomProductList(search);
    }
    async getmyBomProductAll() {
        return await this.mybomProductRepo.getmyBomProductAll();
    }
    async getmyBomProductAllView() {
        return await this.mybomProductRepo.getmyBomProductAllView();
    }
}
exports.myBomProductService = myBomProductService;
//# sourceMappingURL=mybom_product_service.js.map