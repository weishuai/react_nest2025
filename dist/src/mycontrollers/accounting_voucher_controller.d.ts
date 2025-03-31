import { AccountingVoucherVo } from '../myvo/accounting_voucher_vo';
export declare class AccountingVoucherController {
    private accountingVoucherService;
    createAccountingVoucher(accountingVoucherVo: AccountingVoucherVo): Promise<import("typeorm").InsertResult>;
    updateaAccountingVoucher(userToken: string, Id: string, accountingVoucherVo: AccountingVoucherVo): Promise<import("typeorm").UpdateResult>;
    removeAccountingVoucher(Id: string): Promise<import("typeorm").UpdateResult>;
    getAccountingVoucherById(Id: string): Promise<any>;
    getAccountingVoucherList(query: any): Promise<any[]>;
    getAccountingVoucherAll(): Promise<any[]>;
    getAccountingVoucherAllView(): Promise<any[]>;
}
