import { SearchVo } from '../myutils/searchvo';
export declare class SellingPriceListVo {
    id: string;
    name: string;
    mid: any;
    product: any;
    variant: any;
    miniMumQuantity: number;
    price: number;
    startDate: any;
    endDate: any;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class SellingPriceListSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
