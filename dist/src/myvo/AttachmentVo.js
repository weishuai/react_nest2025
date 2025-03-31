"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerTypes = exports.AttachmentSearchVo = exports.AttachmentVo = void 0;
const searchvo_1 = require("../myutils/searchvo");
class AttachmentVo {
}
exports.AttachmentVo = AttachmentVo;
class AttachmentSearchVo extends searchvo_1.SearchVo {
}
exports.AttachmentSearchVo = AttachmentSearchVo;
exports.OwnerTypes = {
    Issue: 0,
    Vendor: 1,
    TrackingLog: 2,
    Quotation: 3,
};
//# sourceMappingURL=AttachmentVo.js.map