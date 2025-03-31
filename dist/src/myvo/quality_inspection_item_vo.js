"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QualitylnspectionItemSearchVo = exports.QualitylnspectionItemVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class QualitylnspectionItemVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.mid = null;
        this.fhitem = null;
        this.fhtxt = null;
        this.fhnotes = null;
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.QualitylnspectionItemVo = QualitylnspectionItemVo;
class QualitylnspectionItemSearchVo extends searchvo_1.SearchVo {
}
exports.QualitylnspectionItemSearchVo = QualitylnspectionItemSearchVo;
//# sourceMappingURL=quality_inspection_item_vo.js.map