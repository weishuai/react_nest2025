"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockQuantSearchVo = exports.StockQuantVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class StockQuantVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.product = null;
        this.position = null;
        this.batch = null;
        this.package = null;
        this.inHand = 0;
        this.available = 0;
        this.unit = null;
        this.price = 0;
        this.company = null;
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.StockQuantVo = StockQuantVo;
class StockQuantSearchVo extends searchvo_1.SearchVo {
}
exports.StockQuantSearchVo = StockQuantSearchVo;
//# sourceMappingURL=stock_quant_vo.js.map