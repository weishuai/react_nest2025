"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhinspectionSearchVo = exports.FhinspectionVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class FhinspectionVo {
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
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.FhinspectionVo = FhinspectionVo;
class FhinspectionSearchVo extends searchvo_1.SearchVo {
}
exports.FhinspectionSearchVo = FhinspectionSearchVo;
//# sourceMappingURL=fhinspection_vo.js.map