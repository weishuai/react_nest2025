"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreMoveSearchVo = exports.StoreMoveVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class StoreMoveVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.partners = null;
        this.deliveryDate = null;
        this.sourceLocation = null;
        this.sourceDocument = null;
        this.type = null;
        this.owner = null;
        this.fhtime = null;
        this.notes = '';
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.StoreMoveVo = StoreMoveVo;
class StoreMoveSearchVo extends searchvo_1.SearchVo {
}
exports.StoreMoveSearchVo = StoreMoveSearchVo;
//# sourceMappingURL=store_move_vo.js.map