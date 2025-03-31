"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbpackagSearchVo = exports.TbpackagVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class TbpackagVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.mid = null;
        this.project = null;
        this.product = null;
        this.productCode = null;
        this.code = null;
        this.deliveryQuantity = 0;
        this.deliveryDate = null;
        this.factoryOrderNumber = null;
        this.trackingNumber = null;
        this.expressCompany = null;
        this.recipient = null;
        this.shipper = null;
        this.photo = null;
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.TbpackagVo = TbpackagVo;
class TbpackagSearchVo extends searchvo_1.SearchVo {
}
exports.TbpackagSearchVo = TbpackagSearchVo;
//# sourceMappingURL=tbpackag_vo.js.map