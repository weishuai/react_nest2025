"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhtestSearchVo = exports.FhtestVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class FhtestVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.fhname = null;
        this.fhF1 = 0;
        this.fhF2 = 0;
        this.fhF3 = null;
        this.fhF4 = null;
        this.fhF5 = 0;
        this.fhF6 = null;
        this.fhF7 = '';
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.FhtestVo = FhtestVo;
class FhtestSearchVo extends searchvo_1.SearchVo {
}
exports.FhtestSearchVo = FhtestSearchVo;
//# sourceMappingURL=fhtest_vo.js.map