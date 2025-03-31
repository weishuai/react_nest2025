"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleContractSearchVo = exports.SaleContractVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class SaleContractVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.fhname = null;
        this.releaseTime = null;
        this.project = null;
        this.version = null;
        this.custom = null;
        this.expectedCompletion = null;
        this.productionCompleted = null;
        this.deliveryCompleted = null;
        this.estimatedTime = null;
        this.contractAmount = 0;
        this.invoicingAmount = 0;
        this.collectionAmount = 0;
        this.completionProgress = null;
        this.specialRequirements = '';
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.SaleContractVo = SaleContractVo;
class SaleContractSearchVo extends searchvo_1.SearchVo {
}
exports.SaleContractSearchVo = SaleContractSearchVo;
//# sourceMappingURL=sale_contract_vo.js.map