"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchSearchVo = exports.BatchVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class BatchVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.titel = null;
        this.product = null;
        this.number = null;
        this.code = null;
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.BatchVo = BatchVo;
class BatchSearchVo extends searchvo_1.SearchVo {
}
exports.BatchSearchVo = BatchSearchVo;
//# sourceMappingURL=batch_vo.js.map