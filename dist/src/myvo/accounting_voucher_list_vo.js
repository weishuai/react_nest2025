"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountingVoucherListSearchVo = exports.AccountingVoucherListVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class AccountingVoucherListVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.mid = null;
        this.product = null;
        this.note = null;
        this.landedCost = null;
        this.type = null;
        this.subject = null;
        this.analysis = null;
        this.number = 0;
        this.unit = null;
        this.price = 0;
        this.tax = 0;
        this.subtotal = 0;
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.AccountingVoucherListVo = AccountingVoucherListVo;
class AccountingVoucherListSearchVo extends searchvo_1.SearchVo {
}
exports.AccountingVoucherListSearchVo = AccountingVoucherListSearchVo;
//# sourceMappingURL=accounting_voucher_list_vo.js.map