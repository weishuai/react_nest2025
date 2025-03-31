"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myWorkCenterSearchVo = exports.myWorkCenterVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class myWorkCenterVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.workcenter = null;
        this.code = null;
        this.title = null;
        this.workingHours = 0;
        this.fhreplace = null;
        this.timeEfficiency = null;
        this.capacity = null;
        this.oee = null;
        this.setTime = 0;
        this.cleaningTime = 0;
        this.hourlyCost = 0;
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.myWorkCenterVo = myWorkCenterVo;
class myWorkCenterSearchVo extends searchvo_1.SearchVo {
}
exports.myWorkCenterSearchVo = myWorkCenterSearchVo;
//# sourceMappingURL=mywork_center_vo.js.map