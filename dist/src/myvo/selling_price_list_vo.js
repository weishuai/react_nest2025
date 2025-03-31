"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellingPriceListSearchVo = exports.SellingPriceListVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class SellingPriceListVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.mid = null;
        this.product = null;
        this.variant = null;
        this.miniMumQuantity = 0;
        this.price = 0;
        this.startDate = null;
        this.endDate = null;
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.SellingPriceListVo = SellingPriceListVo;
class SellingPriceListSearchVo extends searchvo_1.SearchVo {
}
exports.SellingPriceListSearchVo = SellingPriceListSearchVo;
//# sourceMappingURL=selling_price_list_vo.js.map