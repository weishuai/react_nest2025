import { SearchVo } from '../myutils/searchvo';
export declare class BankCashVo {
    id: string;
    name: string;
    report: any;
    fhdate: any;
    lable: any;
    refer: any;
    partners: any;
    amountMoney: number;
    serialNumber: any;
    notes: string;
    type: any;
    accountingVoucher: any;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class BankCashSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
