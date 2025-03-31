"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleContractService = void 0;
const sale_contract_repo_1 = require("../myrepositories/sale_contract_repo");
class SaleContractService {
    constructor() {
        this.saleContractRepo = new sale_contract_repo_1.SaleContractRepo();
    }
    async findOneSaleContract(Id) {
        return await this.saleContractRepo.getSaleContractsById(Id);
    }
    async createSaleContract(saleContractVo) {
        return await this.saleContractRepo.create(saleContractVo);
    }
    async updateaSaleContract(Id, user_id, saleContractVo) {
        return await this.saleContractRepo.update(Id, user_id, saleContractVo);
    }
    async removeSaleContract(Ids) {
        console.log(Ids);
        return await this.saleContractRepo.remove([Ids]);
    }
    async getSaleContractById(id) {
        return await this.saleContractRepo.getSaleContractsById(id);
    }
    async getSaleContractList(search) {
        return await this.saleContractRepo.getSaleContractList(search);
    }
    async getSaleContractAll() {
        return await this.saleContractRepo.getSaleContractAll();
    }
    async getSaleContractAllView() {
        return await this.saleContractRepo.getSaleContractAllView();
    }
}
exports.SaleContractService = SaleContractService;
//# sourceMappingURL=sale_contract_service.js.map