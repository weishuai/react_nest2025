"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseOrderService = void 0;
const myrepositories_1 = require("../myrepositories");
class PurchaseOrderService {
    constructor() {
        this.purchaseOrderRepo = new myrepositories_1.PurchaseOrderRepo();
        this.purchaseOrdertemRepo = new myrepositories_1.PurchaseItemRepo();
        this.customizationRepo = new myrepositories_1.CustomizationRepo();
    }
    async findOnePurchaseOrder(Id) {
        return this.purchaseOrderRepo.getpurchaseOrdersById(Id);
    }
    async createPurchaseOrder(purchaseOrderVo) {
        const mid = purchaseOrderVo.id;
        const refNumber = 'PO-';
        this.purchaseOrdertemRepo.updatepurchaseItemVoByMid(mid, purchaseOrderVo.id);
        return this.purchaseOrderRepo.create(purchaseOrderVo);
    }
    async updateaPurchaseOrder(Id, user_id, purchaseOrderVo) {
        purchaseOrderVo.updatedAt = new Date();
        purchaseOrderVo.updatedUid = user_id;
        return this.purchaseOrderRepo.update(Id, user_id, purchaseOrderVo);
    }
    async removePurchaseOrder(Ids) {
        return this.purchaseOrderRepo.remove(Ids);
    }
    async getPurchaseOrderById(id) {
        return this.purchaseOrderRepo.getpurchaseOrdersById(id);
    }
    async getPurchaseOrder(userId, search) {
        return this.purchaseOrderRepo.getpurchaseOrder(userId, search);
    }
    async getPurchaseOrderAll(search) {
        return this.purchaseOrderRepo.getpurchaseOrderAll(search);
    }
    async getPurchaseOrderAllView() {
        return this.purchaseOrderRepo.getpurchaseOrderAllView();
    }
}
exports.PurchaseOrderService = PurchaseOrderService;
//# sourceMappingURL=PurchaseOrderService.js.map