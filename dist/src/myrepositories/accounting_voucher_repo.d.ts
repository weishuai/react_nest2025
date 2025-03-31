import { AccountingVoucherSearchVo, AccountingVoucherVo } from '../myvo/accounting_voucher_vo';
export declare class AccountingVoucherRepo {
    create(accountingVoucherVo: AccountingVoucherVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountingVoucherVo: AccountingVoucherVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getAccountingVouchersById(id: string): Promise<any>;
    getAccountingVoucherAll(): Promise<any[]>;
    getAccountingVoucherAllView(): Promise<any[]>;
    getAccountingVoucherList(search: AccountingVoucherSearchVo): Promise<any[]>;
}
