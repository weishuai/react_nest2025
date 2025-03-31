"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockWarehouseOrderpointSearchVo = exports.StockWarehouseOrderpointVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class StockWarehouseOrderpointVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.product = '';
        this.position = '';
        this.inHand = 0;
        this.prediction = 0;
        this.route = '';
        this.min = 0;
        this.max = 0;
        this.order = 0;
        this.unit = '';
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.StockWarehouseOrderpointVo = StockWarehouseOrderpointVo;
class StockWarehouseOrderpointSearchVo extends searchvo_1.SearchVo {
}
exports.StockWarehouseOrderpointSearchVo = StockWarehouseOrderpointSearchVo;
//# sourceMappingURL=stock_warehouse_orderpoint_vo.js.map