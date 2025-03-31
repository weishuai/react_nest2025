import { AccountingVoucherSearchVo, AccountingVoucherVo } from '../myvo/accounting_voucher_vo';
export declare class AccountingVoucherService {
    private accountingVoucherRepo;
    findOneAccountingVoucher(Id: string): Promise<any>;
    createAccountingVoucher(accountingVoucherVo: AccountingVoucherVo): Promise<import("typeorm").InsertResult>;
    updateaAccountingVoucher(Id: string, user_id: string, accountingVoucherVo: AccountingVoucherVo): Promise<import("typeorm").UpdateResult>;
    removeAccountingVoucher(Ids: string): Promise<import("typeorm").UpdateResult>;
    getAccountingVoucherById(id: string): Promise<any>;
    getAccountingVoucherList(search: AccountingVoucherSearchVo): Promise<any[]>;
    getAccountingVoucherAll(): Promise<any[]>;
    getAccountingVoucherAllView(): Promise<any[]>;
}
