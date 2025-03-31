import { SearchVo } from '../myutils/searchvo';
export declare class ProductItemVo {
    id: string;
    name: string;
    description: string;
    qty: string;
    unit: string;
    unitPrice: string;
    remark: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
    mid: string;
}
export declare class ProductItemSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
