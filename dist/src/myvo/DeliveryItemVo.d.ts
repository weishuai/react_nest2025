import { SearchVo } from '../myutils/searchvo';
export declare class DeliveryItemVo {
    id: string;
    detailsId: string;
    name: string;
    description: string;
    qty: string;
    balanceQty: string;
    unit: string;
    remark: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
    mid: string;
}
export declare class DeliveryItemSearchVo extends SearchVo {
    fundType: string;
    mid: string;
    status: number;
}
