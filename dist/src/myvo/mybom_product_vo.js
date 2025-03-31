"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myBomProductSearchVo = exports.myBomProductVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class myBomProductVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.mid = null;
        this.product = null;
        this.number = 0;
        this.unit = null;
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.myBomProductVo = myBomProductVo;
class myBomProductSearchVo extends searchvo_1.SearchVo {
}
exports.myBomProductSearchVo = myBomProductSearchVo;
//# sourceMappingURL=mybom_product_vo.js.map