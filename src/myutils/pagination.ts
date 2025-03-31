import { paginationCalculator } from 'pagination-calculator';
import { transArray } from '../myutils/transformer';
const getCalculator = (totalRecords, pageIndex, pageSize) =>
  paginationCalculator({
    total: totalRecords,
    current: pageIndex,
    pageSize: pageSize,
  });

export { getCalculator };
const skipAndTake = (totalRecords, paginationIn) => {
  let _a;
  if (paginationIn.pageIndex) {
    const calculator = getCalculator(
      totalRecords,
      paginationIn.pageIndex,
      paginationIn.pageSize,
    );
    return {
      skip: calculator.showingStart - 1,
      take: paginationIn.pageSize,
    };
  } else {
    return {
      skip: (_a = paginationIn.recordIndex) !== null && _a !== void 0 ? _a : 0,
      take: paginationIn.pageSize,
    };
  }
};

export { skipAndTake };
class PaginationOut {
  totalRecords: any;
  pageCount: any;
  data: any;
  constructor(totalRecords, pageSize, dataClass, data, groups) {
    const calculator = getCalculator(totalRecords, 1, pageSize);
    this.totalRecords = totalRecords;
    this.pageCount = calculator.pageCount;
    if (dataClass && data) {
      this.transform(dataClass, data, groups);
    }
  }
  transform(dataClass, data, groups) {
    this.data = transArray(dataClass, data, groups);
  }
}

export { PaginationOut };

const getSorting = (...sorts) => {
  const sort = {};
  sorts.forEach((s) => {
    if (s) {
      if (s.startsWith('!')) {
        sort[s.substring(1)] = 'DESC';
      } else {
        sort[s] = 'ASC';
      }
    }
  });
  return sort;
};
export { getSorting };
