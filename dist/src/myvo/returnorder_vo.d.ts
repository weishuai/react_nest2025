import { SearchVo } from '../myutils/searchvo';
export declare class ReturnorderVo {
    id: string;
    name: string;
    project: any;
    custom: any;
    Invoice: any;
    contractNumber: any;
    contractQuantity: number;
    product: any;
    shipper: any;
    deliveryQuantity: number;
    outageQuantity: number;
    deliveryType: any;
    trackingNumber: any;
    recipient: any;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class ReturnorderSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
