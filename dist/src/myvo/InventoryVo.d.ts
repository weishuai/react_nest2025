import { SearchVo } from '../myutils/searchvo';
export declare class InventoryAddVo {
    projectId: string;
    poDate: Date;
    replacementDate: Date;
    locationItemId: string;
    item: string;
    price: number;
    warranty: string;
    description: string;
    remarks: string;
}
export declare class InventoryUpdateVo extends InventoryAddVo {
    id: string;
    projectId: string;
    poDate: Date;
    replacementDate: Date;
    locationItemId: string;
}
export declare class InventoryGetVo extends InventoryUpdateVo {
    subject: string;
    locationItemName: string;
    locationCategoryName: string;
    condoId: string;
    locationItemId: string;
    locationCategoryId: string;
}
export declare class InventorySearchVo extends SearchVo {
    condoId: string;
    locationCategoryId: string;
    projectId: string;
}
export declare class InventoryReportItemVo {
    id: string;
    poDateD: Date;
    poDate: string;
    replacementDateD: Date;
    replacementDate: string;
    item: string;
    price: number;
    priceInt: number;
    warranty: string;
    description: string;
    remarks: string;
    location: string;
    block: string;
}
