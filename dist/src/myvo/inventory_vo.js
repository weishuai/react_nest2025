"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventorySearchVo = exports.InventoryVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class InventoryVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.title = null;
        this.position = null;
        this.jobDate = null;
        this.warehouse = null;
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.InventoryVo = InventoryVo;
class InventorySearchVo extends searchvo_1.SearchVo {
}
exports.InventorySearchVo = InventorySearchVo;
//# sourceMappingURL=inventory_vo.js.map