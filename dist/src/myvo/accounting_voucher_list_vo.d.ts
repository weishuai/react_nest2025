import { SearchVo } from '../myutils/searchvo';
export declare class AccountingVoucherListVo {
    id: string;
    name: string;
    mid: any;
    product: any;
    note: any;
    landedCost: any;
    type: any;
    subject: any;
    analysis: any;
    number: number;
    unit: any;
    price: number;
    tax: number;
    subtotal: number;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class AccountingVoucherListSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
