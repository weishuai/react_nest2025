import { BankCashVo } from '../myvo/bank_cash_vo';
export declare class BankCashController {
    private bankCashService;
    createBankCash(bankCashVo: BankCashVo): Promise<import("typeorm").InsertResult>;
    updateaBankCash(userToken: string, Id: string, bankCashVo: BankCashVo): Promise<import("typeorm").UpdateResult>;
    removeBankCash(Id: string): Promise<import("typeorm").UpdateResult>;
    getBankCashById(Id: string): Promise<any>;
    getBankCashList(query: any): Promise<any[]>;
    getBankCashAll(): Promise<any[]>;
    getBankCashAllView(): Promise<any[]>;
}
