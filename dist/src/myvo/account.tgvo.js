"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountTagSearchVo = exports.AccountTagVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class AccountTagVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.AccountTagVo = AccountTagVo;
class AccountTagSearchVo extends searchvo_1.SearchVo {
}
exports.AccountTagSearchVo = AccountTagSearchVo;
//# sourceMappingURL=account.tgvo.js.map