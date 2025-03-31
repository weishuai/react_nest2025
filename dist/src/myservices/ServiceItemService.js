"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceItemService = void 0;
const myrepositories_1 = require("../myrepositories");
class ServiceItemService {
    constructor() {
        this.serviceItemRepo = new myrepositories_1.ServiceItemRepo();
    }
    async findOneServiceItem(Id) {
        return this.serviceItemRepo.getServiceItemsById(Id);
    }
    async createServiceItem(serviceItemVo) {
        return this.serviceItemRepo.create(serviceItemVo);
    }
    async updateaServiceItem(Id, user_id, serviceItemVo) {
        serviceItemVo.updatedAt = new Date();
        serviceItemVo.updatedUid = user_id;
        return this.serviceItemRepo.update(Id, user_id, serviceItemVo);
    }
    async removeServiceItem(Ids) {
        return this.serviceItemRepo.remove(Ids);
    }
    async getServiceItemById(id) {
        return this.serviceItemRepo.getServiceItemsById(id);
    }
    async getServiceItem(search) {
        return this.serviceItemRepo.getServiceItem(search);
    }
    async getServiceItemAll(search) {
        return this.serviceItemRepo.getServiceItemAll(search);
    }
    async getServiceItemAllView() {
        return this.serviceItemRepo.getServiceItemAllView();
    }
}
exports.ServiceItemService = ServiceItemService;
//# sourceMappingURL=ServiceItemService.js.map