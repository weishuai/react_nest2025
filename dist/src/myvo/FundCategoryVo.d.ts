export declare class FundCategoryAddVo {
    name: string;
    fundType: string;
}
export declare class FundCategoryUpdateVo extends FundCategoryAddVo {
    id: string;
    isInuse: number;
}
export declare class FundCategoryGetVo extends FundCategoryUpdateVo {
}
