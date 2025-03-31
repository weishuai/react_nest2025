"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbmatchingSearchVo = exports.TbmatchingVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class TbmatchingVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.fhname = null;
        this.fhdate = null;
        this.sampleDate = null;
        this.documentNumber = null;
        this.customerCode = null;
        this.customerName = 0;
        this.sampleName = null;
        this.numbe = 0;
        this.component = null;
        this.appearanceStyle = null;
        this.requirements = null;
        this.technology = null;
        this.mycheck = 0;
        this.registration = 0;
        this.quotation = 0;
        this.manufacturingOrders = 0;
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.TbmatchingVo = TbmatchingVo;
class TbmatchingSearchVo extends searchvo_1.SearchVo {
}
exports.TbmatchingSearchVo = TbmatchingSearchVo;
//# sourceMappingURL=tbmatching_vo.js.map