import { SearchVo } from '../myutils/searchvo';
export declare class StoreMoveListVo {
    id: string;
    name: string;
    mid: any;
    product: any;
    demand: number;
    reserve: number;
    complete: number;
    unit: any;
    sellingPrice: number;
    costPprice: number;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class StoreMoveListSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
