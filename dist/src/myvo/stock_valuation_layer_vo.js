"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockValuationLayerSearchVo = exports.StockValuationLayerVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class StockValuationLayerVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.fhdate = null;
        this.product = '';
        this.number = 0;
        this.unit = '';
        this.totalValue = 0;
        this.company = '';
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.StockValuationLayerVo = StockValuationLayerVo;
class StockValuationLayerSearchVo extends searchvo_1.SearchVo {
}
exports.StockValuationLayerSearchVo = StockValuationLayerSearchVo;
//# sourceMappingURL=stock_valuation_layer_vo.js.map