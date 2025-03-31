"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HrContractSearchVo = exports.HrContractVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class HrContractVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.fhname = null;
        this.staff = null;
        this.department = null;
        this.job = null;
        this.company = null;
        this.payStructure = null;
        this.startDate = null;
        this.firstContractDate = null;
        this.endDate = null;
        this.workArrangement = null;
        this.HRSupervisor = null;
        this.wages = 0;
        this.fhtxt = '';
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.HrContractVo = HrContractVo;
class HrContractSearchVo extends searchvo_1.SearchVo {
}
exports.HrContractSearchVo = HrContractSearchVo;
//# sourceMappingURL=hr.contract_vo.js.map