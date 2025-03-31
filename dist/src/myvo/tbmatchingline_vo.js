"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbmatchinglineSearchVo = exports.TbmatchinglineVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class TbmatchinglineVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.mid = null;
        this.rawMaterial = null;
        this.batchNumber = null;
        this.number = 0;
        this.notes = '';
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.TbmatchinglineVo = TbmatchinglineVo;
class TbmatchinglineSearchVo extends searchvo_1.SearchVo {
}
exports.TbmatchinglineSearchVo = TbmatchinglineSearchVo;
//# sourceMappingURL=tbmatchingline_vo.js.map