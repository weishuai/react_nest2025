import { BankCashSearchVo, BankCashVo } from '../myvo/bank_cash_vo';
export declare class BankCashService {
    private bankCashRepo;
    findOneBankCash(Id: string): Promise<any>;
    createBankCash(bankCashVo: BankCashVo): Promise<import("typeorm").InsertResult>;
    updateaBankCash(Id: string, user_id: string, bankCashVo: BankCashVo): Promise<import("typeorm").UpdateResult>;
    removeBankCash(Ids: string): Promise<import("typeorm").UpdateResult>;
    getBankCashById(id: string): Promise<any>;
    getBankCashList(search: BankCashSearchVo): Promise<any[]>;
    getBankCashAll(): Promise<any[]>;
    getBankCashAllView(): Promise<any[]>;
}
