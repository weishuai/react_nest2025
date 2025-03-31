"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoragelocationSearchVo = exports.StoragelocationVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class StoragelocationVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.myname = null;
        this.mid = null;
        this.type = null;
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.StoragelocationVo = StoragelocationVo;
class StoragelocationSearchVo extends searchvo_1.SearchVo {
}
exports.StoragelocationSearchVo = StoragelocationSearchVo;
//# sourceMappingURL=storage_location_vo.js.map