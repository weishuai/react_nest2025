"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseSearchVo = exports.WarehouseVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class WarehouseVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.myname = null;
        this.fhname = null;
        this.address = null;
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.WarehouseVo = WarehouseVo;
class WarehouseSearchVo extends searchvo_1.SearchVo {
}
exports.WarehouseSearchVo = WarehouseSearchVo;
//# sourceMappingURL=warehouse_vo.js.map