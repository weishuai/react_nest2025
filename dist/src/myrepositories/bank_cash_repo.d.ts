import { BankCashSearchVo, BankCashVo } from '../myvo/bank_cash_vo';
export declare class BankCashRepo {
    create(bankCashVo: BankCashVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, bankCashVo: BankCashVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getBankCashsById(id: string): Promise<any>;
    getBankCashAll(): Promise<any[]>;
    getBankCashAllView(): Promise<any[]>;
    getBankCashList(search: BankCashSearchVo): Promise<any[]>;
}
