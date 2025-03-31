declare const getCalculator: (totalRecords: any, pageIndex: any, pageSize: any) => import("pagination-calculator/dist/paginationCalculator").PageInformation;
export { getCalculator };
declare const skipAndTake: (totalRecords: any, paginationIn: any) => {
    skip: any;
    take: any;
};
export { skipAndTake };
declare class PaginationOut {
    totalRecords: any;
    pageCount: any;
    data: any;
    constructor(totalRecords: any, pageSize: any, dataClass: any, data: any, groups: any);
    transform(dataClass: any, data: any, groups: any): void;
}
export { PaginationOut };
declare const getSorting: (...sorts: any[]) => {};
export { getSorting };
