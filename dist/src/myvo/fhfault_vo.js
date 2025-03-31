"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhfaultSearchVo = exports.FhfaultVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class FhfaultVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.fhname = null;
        this.fhF1 = 0;
        this.fhF2 = 0;
        this.fhF3 = null;
        this.fhF4 = null;
        this.fhF5 = 0;
        this.fhF6 = null;
        this.fhF7 = null;
        this.fhF8 = 0;
        this.fhF9 = null;
        this.fhF10 = '';
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.FhfaultVo = FhfaultVo;
class FhfaultSearchVo extends searchvo_1.SearchVo {
}
exports.FhfaultSearchVo = FhfaultSearchVo;
//# sourceMappingURL=fhfault_vo.js.map