import { SearchVo } from '../myutils/searchvo';
export declare class InventoryListVo {
    id: string;
    name: string;
    mid: any;
    product: any;
    unit: any;
    position: any;
    batch: any;
    package: any;
    owner: any;
    theoretical: number;
    actualQuantity: number;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class InventoryListSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
