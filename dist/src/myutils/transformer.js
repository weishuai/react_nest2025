"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transArray = void 0;
const class_transformer_1 = require("class-transformer");
function trans(claz, obj, groups = []) {
    const inst = new claz();
    Object.assign(inst, obj);
    return (0, class_transformer_1.instanceToPlain)(inst, { excludeExtraneousValues: true, groups });
}
function transArray(claz, objArray, groups = []) {
    if (Array.isArray(objArray)) {
        return objArray.map((obj) => trans(claz, obj, groups));
    }
    else {
        throw new Error('"transArray" accepts array only!');
    }
}
exports.transArray = transArray;
//# sourceMappingURL=transformer.js.map