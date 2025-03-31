export declare class LocationCategoryAddVo {
    name: string;
    condoId: string;
}
export declare class LocationCategoryUpdateVo extends LocationCategoryAddVo {
    id: string;
    isInuse: number;
}
export declare class LocationCategoryGetVo extends LocationCategoryUpdateVo {
}
