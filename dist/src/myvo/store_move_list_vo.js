"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreMoveListSearchVo = exports.StoreMoveListVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class StoreMoveListVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.mid = null;
        this.product = null;
        this.demand = 0;
        this.reserve = 0;
        this.complete = 0;
        this.unit = null;
        this.sellingPrice = 0;
        this.costPprice = 0;
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.StoreMoveListVo = StoreMoveListVo;
class StoreMoveListSearchVo extends searchvo_1.SearchVo {
}
exports.StoreMoveListSearchVo = StoreMoveListSearchVo;
//# sourceMappingURL=store_move_list_vo.js.map