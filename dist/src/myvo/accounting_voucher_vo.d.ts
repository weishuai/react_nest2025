import { SearchVo } from '../myutils/searchvo';
export declare class AccountingVoucherVo {
    id: string;
    name: string;
    title: any;
    accountNumber: any;
    type: any;
    billReference: any;
    statementDate: any;
    accountingDate: any;
    paymentReference: string;
    payeeBank: any;
    paymentTerms: any;
    journal: any;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class AccountingVoucherSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
