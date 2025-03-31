"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryListSearchVo = exports.InventoryListVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class InventoryListVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.mid = null;
        this.product = null;
        this.unit = null;
        this.position = null;
        this.batch = null;
        this.package = null;
        this.owner = null;
        this.theoretical = 0;
        this.actualQuantity = 0;
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.InventoryListVo = InventoryListVo;
class InventoryListSearchVo extends searchvo_1.SearchVo {
}
exports.InventoryListSearchVo = InventoryListSearchVo;
//# sourceMappingURL=inventory_list_vo.js.map