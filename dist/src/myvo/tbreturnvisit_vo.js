"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbreturnvisitSearchVo = exports.TbreturnvisitVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class TbreturnvisitVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.mid = null;
        this.project = null;
        this.fhdate = null;
        this.location = null;
        this.contacts = null;
        this.contactInformation = null;
        this.rreturnVisitDescription = null;
        this.annex = null;
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.TbreturnvisitVo = TbreturnvisitVo;
class TbreturnvisitSearchVo extends searchvo_1.SearchVo {
}
exports.TbreturnvisitSearchVo = TbreturnvisitSearchVo;
//# sourceMappingURL=tbreturnvisit_vo.js.map