"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbaftersaleSearchVo = exports.TbaftersaleVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class TbaftersaleVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.mid = null;
        this.project = null;
        this.fhdate = null;
        this.location = null;
        this.contacts = null;
        this.contactInformation = null;
        this.VisitDescription = null;
        this.problemHandling = null;
        this.remainingProblems = null;
        this.afterSalesType = null;
        this.annex = null;
        this.processedBy = null;
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.TbaftersaleVo = TbaftersaleVo;
class TbaftersaleSearchVo extends searchvo_1.SearchVo {
}
exports.TbaftersaleSearchVo = TbaftersaleSearchVo;
//# sourceMappingURL=tbaftersale_vo.js.map