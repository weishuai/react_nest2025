"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhmeasuringSearchVo = exports.FhmeasuringVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class FhmeasuringVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.fhname = null;
        this.fhF1 = null;
        this.fhF2 = 0;
        this.fhF3 = null;
        this.fhF4 = 0;
        this.fhF5 = 0;
        this.fhF6 = 0;
        this.fhF7 = null;
        this.fhF8 = 0;
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
exports.FhmeasuringVo = FhmeasuringVo;
class FhmeasuringSearchVo extends searchvo_1.SearchVo {
}
exports.FhmeasuringSearchVo = FhmeasuringSearchVo;
//# sourceMappingURL=fhmeasuring_vo.js.map