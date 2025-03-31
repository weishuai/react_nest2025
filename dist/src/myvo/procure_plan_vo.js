"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcurePlanSearchVo = exports.ProcurePlanVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class ProcurePlanVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.fhname = null;
        this.purchaser = null;
        this.applicationType = null;
        this.supplier = null;
        this.deadline = null;
        this.subscriptionDate = null;
        this.deliveryDate = null;
        this.sourceFile = null;
        this.jobType = null;
        this.company = null;
        this.term = null;
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.ProcurePlanVo = ProcurePlanVo;
class ProcurePlanSearchVo extends searchvo_1.SearchVo {
}
exports.ProcurePlanSearchVo = ProcurePlanSearchVo;
//# sourceMappingURL=procure_plan_vo.js.map