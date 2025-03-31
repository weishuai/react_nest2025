"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryReportItemVo = exports.InventorySearchVo = exports.InventoryGetVo = exports.InventoryUpdateVo = exports.InventoryAddVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class InventoryAddVo {
}
exports.InventoryAddVo = InventoryAddVo;
class InventoryUpdateVo extends InventoryAddVo {
}
exports.InventoryUpdateVo = InventoryUpdateVo;
class InventoryGetVo extends InventoryUpdateVo {
}
exports.InventoryGetVo = InventoryGetVo;
class InventorySearchVo extends searchvo_1.SearchVo {
}
exports.InventorySearchVo = InventorySearchVo;
class InventoryReportItemVo {
}
exports.InventoryReportItemVo = InventoryReportItemVo;
//# sourceMappingURL=InventoryVo.js.map