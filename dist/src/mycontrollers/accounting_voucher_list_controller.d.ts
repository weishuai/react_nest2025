import { AccountingVoucherListVo } from '../myvo/accounting_voucher_list_vo';
export declare class AccountingVoucherListController {
    private accountingVoucherListService;
    createAccountingVoucherList(accountingVoucherListVo: AccountingVoucherListVo): Promise<import("typeorm").InsertResult>;
    updateaAccountingVoucherList(userToken: string, Id: string, accountingVoucherListVo: AccountingVoucherListVo): Promise<import("typeorm").UpdateResult>;
    removeAccountingVoucherList(Id: string): Promise<import("typeorm").UpdateResult>;
    getAccountingVoucherListById(Id: string): Promise<any>;
    getAccountingVoucherListList(query: any): Promise<any[]>;
    getAccountingVoucherListAll(): Promise<any[]>;
    getAccountingVoucherListAllView(): Promise<any[]>;
}
