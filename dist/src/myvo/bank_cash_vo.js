"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankCashSearchVo = exports.BankCashVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class BankCashVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.report = null;
        this.fhdate = null;
        this.lable = null;
        this.refer = null;
        this.partners = null;
        this.amountMoney = 0;
        this.serialNumber = null;
        this.notes = '';
        this.type = null;
        this.accountingVoucher = null;
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.BankCashVo = BankCashVo;
class BankCashSearchVo extends searchvo_1.SearchVo {
}
exports.BankCashSearchVo = BankCashSearchVo;
//# sourceMappingURL=bank_cash_vo.js.map