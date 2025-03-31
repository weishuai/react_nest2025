"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnorderSearchVo = exports.ReturnorderVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class ReturnorderVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.project = null;
        this.custom = null;
        this.Invoice = null;
        this.contractNumber = null;
        this.contractQuantity = 0;
        this.product = null;
        this.shipper = null;
        this.deliveryQuantity = 0;
        this.outageQuantity = 0;
        this.deliveryType = null;
        this.trackingNumber = null;
        this.recipient = null;
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.ReturnorderVo = ReturnorderVo;
class ReturnorderSearchVo extends searchvo_1.SearchVo {
}
exports.ReturnorderSearchVo = ReturnorderSearchVo;
//# sourceMappingURL=returnorder_vo.js.map