"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountingVoucherSearchVo = exports.AccountingVoucherVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class AccountingVoucherVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.title = null;
        this.accountNumber = null;
        this.type = null;
        this.billReference = null;
        this.statementDate = null;
        this.accountingDate = null;
        this.paymentReference = '';
        this.payeeBank = null;
        this.paymentTerms = null;
        this.journal = null;
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.AccountingVoucherVo = AccountingVoucherVo;
class AccountingVoucherSearchVo extends searchvo_1.SearchVo {
}
exports.AccountingVoucherSearchVo = AccountingVoucherSearchVo;
//# sourceMappingURL=accounting_voucher_vo.js.map