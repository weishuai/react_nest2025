"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseItemService = void 0;
const myrepositories_1 = require("../myrepositories");
class PurchaseItemService {
    constructor() {
        this.purchaseItemRepo = new myrepositories_1.PurchaseItemRepo();
    }
    async findOnePurchaseItem(Id) {
        return this.purchaseItemRepo.getpurchaseItemsById(Id);
    }
    async createPurchaseItem(purchaseItemVo) {
        return this.purchaseItemRepo.create(purchaseItemVo);
    }
    async updateaPurchaseItem(Id, user_id, purchaseItemVo) {
        purchaseItemVo.updatedAt = new Date();
        purchaseItemVo.updatedUid = user_id;
        return this.purchaseItemRepo.update(Id, user_id, purchaseItemVo);
    }
    async removePurchaseItem(Ids) {
        return this.purchaseItemRepo.remove(Ids);
    }
    async getPurchaseItemById(id) {
        return this.purchaseItemRepo.getpurchaseItemsById(id);
    }
    async getPurchaseItem(search) {
        return this.purchaseItemRepo.getpurchaseItem(search);
    }
    async getPurchaseItemAll(search) {
        return this.purchaseItemRepo.getpurchaseItemAll(search);
    }
    async getPurchaseItemAllView() {
        return this.purchaseItemRepo.getpurchaseItemAllView();
    }
}
exports.PurchaseItemService = PurchaseItemService;
//# sourceMappingURL=PurchaseItemService.js.map