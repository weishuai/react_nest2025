"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceContractService = void 0;
const myrepositories_1 = require("../myrepositories");
class ServiceContractService {
    constructor() {
        this.serviceContractRepo = new myrepositories_1.ServiceContractRepo();
        this.customizationRepo = new myrepositories_1.CustomizationRepo();
        this.serviceItemRepo = new myrepositories_1.ServiceItemRepo();
    }
    async findOneServiceContract(Id) {
        return this.serviceContractRepo.getserviceContractsById(Id);
    }
    async createServiceContract(serviceContractVo) {
        const mid = serviceContractVo.id;
        this.serviceItemRepo.updateServiceItemByMid(mid, serviceContractVo.id);
        const refNumber = 'SC-';
        return this.serviceContractRepo.create(serviceContractVo);
    }
    async updateaServiceContract(Id, user_id, serviceContractVo) {
        serviceContractVo.updatedAt = new Date();
        serviceContractVo.updatedUid = user_id;
        return this.serviceContractRepo.update(Id, user_id, serviceContractVo);
    }
    async removeServiceContract(Ids) {
        return this.serviceContractRepo.remove(Ids);
    }
    async getServiceContractById(id) {
        return this.serviceContractRepo.getserviceContractsById(id);
    }
    async getServiceContract(userId, search) {
        return this.serviceContractRepo.getserviceContract(userId, search);
    }
    async getServiceContractAll(search) {
        return this.serviceContractRepo.getserviceContractAll(search);
    }
    async getServiceContractAllView() {
        return this.serviceContractRepo.getserviceContractAllView();
    }
}
exports.ServiceContractService = ServiceContractService;
//# sourceMappingURL=ServiceContractService.js.map