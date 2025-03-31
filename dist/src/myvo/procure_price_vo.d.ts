import { SearchVo } from '../myutils/searchvo';
export declare class ProcurePriceVo {
    id: string;
    name: string;
    supplier: any;
    product: any;
    productCode: any;
    deliveryLeadTime: any;
    product2: any;
    productTemlp: any;
    number: any;
    unitPrice: number;
    ative: any;
    company: any;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class ProcurePriceSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
