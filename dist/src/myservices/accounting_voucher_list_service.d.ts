import { AccountingVoucherListSearchVo, AccountingVoucherListVo } from '../myvo/accounting_voucher_list_vo';
export declare class AccountingVoucherListService {
    private accountingVoucherListRepo;
    findOneAccountingVoucherList(Id: string): Promise<any>;
    createAccountingVoucherList(accountingVoucherListVo: AccountingVoucherListVo): Promise<import("typeorm").InsertResult>;
    updateaAccountingVoucherList(Id: string, user_id: string, accountingVoucherListVo: AccountingVoucherListVo): Promise<import("typeorm").UpdateResult>;
    removeAccountingVoucherList(Ids: string): Promise<import("typeorm").UpdateResult>;
    getAccountingVoucherListById(id: string): Promise<any>;
    getAccountingVoucherListList(search: AccountingVoucherListSearchVo): Promise<any[]>;
    getAccountingVoucherListAll(): Promise<any[]>;
    getAccountingVoucherListAllView(): Promise<any[]>;
}
