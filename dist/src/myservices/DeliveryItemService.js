"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryItemService = void 0;
const myrepositories_1 = require("../myrepositories");
class DeliveryItemService {
    constructor() {
        this.deliveryItemRepo = new myrepositories_1.DeliveryItemRepo();
    }
    async findOneDeliveryItem(Id) {
        return this.deliveryItemRepo.getdeliveryItemsById(Id);
    }
    async createDeliveryItem(deliveryItemVo) {
        return this.deliveryItemRepo.create(deliveryItemVo);
    }
    async updateaDeliveryItem(Id, user_id, deliveryItemVo) {
        deliveryItemVo.updatedAt = new Date();
        deliveryItemVo.updatedUid = user_id;
        return this.deliveryItemRepo.update(Id, user_id, deliveryItemVo);
    }
    async removeDeliveryItem(Ids) {
        return this.deliveryItemRepo.remove(Ids);
    }
    async getDeliveryItemById(id) {
        return this.deliveryItemRepo.getdeliveryItemsById(id);
    }
    async getDeliveryItem(search) {
        return this.deliveryItemRepo.getdeliveryItem(search);
    }
    async getDeliveryItemAll(search) {
        return this.deliveryItemRepo.getdeliveryItemAll(search);
    }
    async getDeliveryItemAllView() {
        return this.deliveryItemRepo.getdeliveryItemAllView();
    }
}
exports.DeliveryItemService = DeliveryItemService;
//# sourceMappingURL=DeliveryItemService.js.map