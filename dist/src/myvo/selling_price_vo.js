"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellingPriceSearchVo = exports.SellingPriceVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class SellingPriceVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.fhname = null;
        this.company = 0;
        this.mygroup = null;
        this.dscountPolicy = null;
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.SellingPriceVo = SellingPriceVo;
class SellingPriceSearchVo extends searchvo_1.SearchVo {
}
exports.SellingPriceSearchVo = SellingPriceSearchVo;
//# sourceMappingURL=selling_price_vo.js.map