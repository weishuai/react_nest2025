import { SearchVo } from '../myutils/searchvo';
export declare class TbpackagVo {
    id: string;
    name: string;
    mid: any;
    project: any;
    product: any;
    productCode: any;
    code: any;
    deliveryQuantity: number;
    deliveryDate: any;
    factoryOrderNumber: any;
    trackingNumber: any;
    expressCompany: any;
    recipient: any;
    shipper: any;
    photo: any;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class TbpackagSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
