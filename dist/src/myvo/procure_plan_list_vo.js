"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcurePlanListSearchVo = exports.ProcurePlanListVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class ProcurePlanListVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.mid = null;
        this.product = null;
        this.fhtext = null;
        this.number = 0;
        this.orderedQuantity = 0;
        this.unit = null;
        this.unitPrice = 0;
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.ProcurePlanListVo = ProcurePlanListVo;
class ProcurePlanListSearchVo extends searchvo_1.SearchVo {
}
exports.ProcurePlanListSearchVo = ProcurePlanListSearchVo;
//# sourceMappingURL=procure_plan_list_vo.js.map