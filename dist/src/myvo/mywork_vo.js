"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myWorkSearchVo = exports.myWorkVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class myWorkVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.operationName = null;
        this.duration = null;
        this.workCenter = null;
        this.defaultDuration = 0;
        this.serialNumber = null;
        this.company = null;
        this.bom = null;
        this.worksheet = null;
        this.fhtext = null;
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.myWorkVo = myWorkVo;
class myWorkSearchVo extends searchvo_1.SearchVo {
}
exports.myWorkSearchVo = myWorkSearchVo;
//# sourceMappingURL=mywork_vo.js.map