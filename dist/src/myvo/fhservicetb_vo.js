"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhservicetbSearchVo = exports.FhservicetbVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class FhservicetbVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.fhname = null;
        this.fhF0 = null;
        this.fhF1 = 0;
        this.fhF2 = 0;
        this.fhF3 = null;
        this.fhF4 = null;
        this.fhF5 = 0;
        this.fhF6 = null;
        this.fhF7 = null;
        this.fhF8 = '';
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.FhservicetbVo = FhservicetbVo;
class FhservicetbSearchVo extends searchvo_1.SearchVo {
}
exports.FhservicetbSearchVo = FhservicetbSearchVo;
//# sourceMappingURL=fhservicetb_vo.js.map