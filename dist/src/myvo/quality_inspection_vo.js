"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QualityInspectionSearchVo = exports.QualityInspectionVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class QualityInspectionVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.fhname = null;
        this.title = null;
        this.team = null;
        this.productTmlp = null;
        this.head = null;
        this.product = null;
        this.label = null;
        this.batch = null;
        this.rootCause = '';
        this.pick = null;
        this.priority = null;
        this.fhtxt = '';
        this.inspectionItems = null;
        this.checkAddress = null;
        this.correctiveAction = '';
        this.preventiveActions = '';
        this.sundry = '';
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.QualityInspectionVo = QualityInspectionVo;
class QualityInspectionSearchVo extends searchvo_1.SearchVo {
}
exports.QualityInspectionSearchVo = QualityInspectionSearchVo;
//# sourceMappingURL=quality_inspection_vo.js.map