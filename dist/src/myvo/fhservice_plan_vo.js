"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhservicePlanSearchVo = exports.FhservicePlanVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class FhservicePlanVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.fhname = null;
        this.fhF1 = null;
        this.fhF2 = null;
        this.fhF3 = null;
        this.fhF4 = null;
        this.fhF5 = null;
        this.fhF6 = null;
        this.fhF7 = null;
        this.fhF8 = null;
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
exports.FhservicePlanVo = FhservicePlanVo;
class FhservicePlanSearchVo extends searchvo_1.SearchVo {
}
exports.FhservicePlanSearchVo = FhservicePlanSearchVo;
//# sourceMappingURL=fhservice_plan_vo.js.map