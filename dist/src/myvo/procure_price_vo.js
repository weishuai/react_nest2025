"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcurePriceSearchVo = exports.ProcurePriceVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class ProcurePriceVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.supplier = null;
        this.product = null;
        this.productCode = null;
        this.deliveryLeadTime = null;
        this.product2 = null;
        this.productTemlp = null;
        this.number = null;
        this.unitPrice = 0;
        this.ative = null;
        this.company = null;
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.ProcurePriceVo = ProcurePriceVo;
class ProcurePriceSearchVo extends searchvo_1.SearchVo {
}
exports.ProcurePriceSearchVo = ProcurePriceSearchVo;
//# sourceMappingURL=procure_price_vo.js.map