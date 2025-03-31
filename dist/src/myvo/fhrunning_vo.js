"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhrunningSearchVo = exports.FhrunningVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class FhrunningVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.fhname = null;
        this.fhF1 = null;
        this.fhF2 = null;
        this.fhF3 = null;
        this.fhF4 = 0;
        this.fhF5 = 0;
        this.fhF6 = 0;
        this.fhF7 = null;
        this.fhF8 = null;
        this.fhF9 = '';
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.FhrunningVo = FhrunningVo;
class FhrunningSearchVo extends searchvo_1.SearchVo {
}
exports.FhrunningSearchVo = FhrunningSearchVo;
//# sourceMappingURL=fhrunning_vo.js.map