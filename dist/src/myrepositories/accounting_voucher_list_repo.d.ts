import { AccountingVoucherListSearchVo, AccountingVoucherListVo } from '../myvo/accounting_voucher_list_vo';
export declare class AccountingVoucherListRepo {
    create(accountingVoucherListVo: AccountingVoucherListVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountingVoucherListVo: AccountingVoucherListVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getAccountingVoucherListsById(id: string): Promise<any>;
    getAccountingVoucherListAll(): Promise<any[]>;
    getAccountingVoucherListAllView(): Promise<any[]>;
    getAccountingVoucherListList(search: AccountingVoucherListSearchVo): Promise<any[]>;
}
