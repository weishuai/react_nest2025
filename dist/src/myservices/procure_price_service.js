"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcurePriceService = void 0;
const procure_price_repo_1 = require("../myrepositories/procure_price_repo");
class ProcurePriceService {
    constructor() {
        this.procurePriceRepo = new procure_price_repo_1.ProcurePriceRepo();
    }
    async findOneProcurePrice(Id) {
        return await this.procurePriceRepo.getProcurePricesById(Id);
    }
    async createProcurePrice(procurePriceVo) {
        return await this.procurePriceRepo.create(procurePriceVo);
    }
    async updateaProcurePrice(Id, user_id, procurePriceVo) {
        return await this.procurePriceRepo.update(Id, user_id, procurePriceVo);
    }
    async removeProcurePrice(Ids) {
        console.log(Ids);
        return await this.procurePriceRepo.remove([Ids]);
    }
    async getProcurePriceById(id) {
        return await this.procurePriceRepo.getProcurePricesById(id);
    }
    async getProcurePriceList(search) {
        return await this.procurePriceRepo.getProcurePriceList(search);
    }
    async getProcurePriceAll() {
        return await this.procurePriceRepo.getProcurePriceAll();
    }
    async getProcurePriceAllView() {
        return await this.procurePriceRepo.getProcurePriceAllView();
    }
}
exports.ProcurePriceService = ProcurePriceService;
//# sourceMappingURL=procure_price_service.js.map