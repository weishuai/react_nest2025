"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HrContractService = void 0;
const hr_contract_repo_1 = require("../myrepositories/hr_contract_repo");
class HrContractService {
    constructor() {
        this.hrContractRepo = new hr_contract_repo_1.HrContractRepo();
    }
    async findOneHrContract(Id) {
        return await this.hrContractRepo.getHrContractsById(Id);
    }
    async createHrContract(hrContractVo) {
        return await this.hrContractRepo.create(hrContractVo);
    }
    async updateaHrContract(Id, user_id, hrContractVo) {
        return await this.hrContractRepo.update(Id, user_id, hrContractVo);
    }
    async removeHrContract(Ids) {
        console.log(Ids);
        return await this.hrContractRepo.remove([Ids]);
    }
    async getHrContractById(id) {
        return await this.hrContractRepo.getHrContractsById(id);
    }
    async getHrContractList(search) {
        return await this.hrContractRepo.getHrContractList(search);
    }
    async getHrContractAll() {
        return await this.hrContractRepo.getHrContractAll();
    }
    async getHrContractAllView() {
        return await this.hrContractRepo.getHrContractAllView();
    }
}
exports.HrContractService = HrContractService;
//# sourceMappingURL=hr_contract_service.js.map