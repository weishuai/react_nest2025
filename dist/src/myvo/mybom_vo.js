"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mybomSearchVo = exports.mybomVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class mybomVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.product = null;
        this.code = null;
        this.productTelm = null;
        this.bomType = null;
        this.number = 0;
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.mybomVo = mybomVo;
class mybomSearchVo extends searchvo_1.SearchVo {
}
exports.mybomSearchVo = mybomSearchVo;
//# sourceMappingURL=mybom_vo.js.map