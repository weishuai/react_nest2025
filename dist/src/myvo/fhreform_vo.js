"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhreformSearchVo = exports.FhreformVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class FhreformVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.fhname = null;
        this.fhF1 = null;
        this.fhF2 = null;
        this.fhF3 = null;
        this.fhF4 = null;
        this.fhF5 = '';
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.FhreformVo = FhreformVo;
class FhreformSearchVo extends searchvo_1.SearchVo {
}
exports.FhreformSearchVo = FhreformSearchVo;
//# sourceMappingURL=fhreform_vo.js.map