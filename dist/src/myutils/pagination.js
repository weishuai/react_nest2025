"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSorting = exports.PaginationOut = exports.skipAndTake = exports.getCalculator = void 0;
const pagination_calculator_1 = require("pagination-calculator");
const transformer_1 = require("../myutils/transformer");
const getCalculator = (totalRecords, pageIndex, pageSize) => (0, pagination_calculator_1.paginationCalculator)({
    total: totalRecords,
    current: pageIndex,
    pageSize: pageSize,
});
exports.getCalculator = getCalculator;
const skipAndTake = (totalRecords, paginationIn) => {
    let _a;
    if (paginationIn.pageIndex) {
        const calculator = getCalculator(totalRecords, paginationIn.pageIndex, paginationIn.pageSize);
        return {
            skip: calculator.showingStart - 1,
            take: paginationIn.pageSize,
        };
    }
    else {
        return {
            skip: (_a = paginationIn.recordIndex) !== null && _a !== void 0 ? _a : 0,
            take: paginationIn.pageSize,
        };
    }
};
exports.skipAndTake = skipAndTake;
class PaginationOut {
    constructor(totalRecords, pageSize, dataClass, data, groups) {
        const calculator = getCalculator(totalRecords, 1, pageSize);
        this.totalRecords = totalRecords;
        this.pageCount = calculator.pageCount;
        if (dataClass && data) {
            this.transform(dataClass, data, groups);
        }
    }
    transform(dataClass, data, groups) {
        this.data = (0, transformer_1.transArray)(dataClass, data, groups);
    }
}
exports.PaginationOut = PaginationOut;
const getSorting = (...sorts) => {
    const sort = {};
    sorts.forEach((s) => {
        if (s) {
            if (s.startsWith('!')) {
                sort[s.substring(1)] = 'DESC';
            }
            else {
                sort[s] = 'ASC';
            }
        }
    });
    return sort;
};
exports.getSorting = getSorting;
//# sourceMappingURL=pagination.js.map