"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryOrderService = void 0;
const myrepositories_1 = require("../myrepositories");
class DeliveryOrderService {
    constructor() {
        this.deliveryOrderRepo = new myrepositories_1.DeliveryOrderRepo();
        this.DeliveryItemRepo = new myrepositories_1.DeliveryItemRepo();
        this.customizationRepo = new myrepositories_1.CustomizationRepo();
    }
    async findOneDeliveryOrder(Id) {
        return this.deliveryOrderRepo.getdeliveryOrdersById(Id);
    }
    async createDeliveryOrder(deliveryOrderVo) {
        return this.deliveryOrderRepo.create(deliveryOrderVo);
    }
    async updateaDeliveryOrder(Id, user_id, deliveryOrderVo) {
        deliveryOrderVo.updatedAt = new Date();
        deliveryOrderVo.updatedUid = user_id;
        return this.deliveryOrderRepo.update(Id, user_id, deliveryOrderVo);
    }
    async removeDeliveryOrder(Ids) {
        return this.deliveryOrderRepo.remove(Ids);
    }
    async getDeliveryOrderById(id) {
        return this.deliveryOrderRepo.getdeliveryOrdersById(id);
    }
    async getDeliveryOrder(userId, search) {
        return this.deliveryOrderRepo.getdeliveryOrder(userId, search);
    }
    async getDeliveryOrderAll(search) {
        return this.deliveryOrderRepo.getdeliveryOrderAll(search);
    }
    async getDeliveryOrderAllView() {
        return this.deliveryOrderRepo.getdeliveryOrderAllView();
    }
}
exports.DeliveryOrderService = DeliveryOrderService;
//# sourceMappingURL=DeliveryOrderService.js.map