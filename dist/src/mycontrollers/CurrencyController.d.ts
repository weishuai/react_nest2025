import { CurrencySearchVo, CurrencyVo } from '../myvo/CurrencyVo';
export declare class CurrencyController {
    private currencyService;
    createCurrency(CurrencyVo: CurrencyVo): Promise<import("typeorm").InsertResult>;
    updateaCurrency(userToken: string, Id: string, CurrencyVo: CurrencyVo): Promise<import("typeorm").UpdateResult>;
    removeCurrency(Id: string): Promise<import("typeorm").UpdateResult>;
    getCurrencyById(Id: string): Promise<any>;
    getCurrency(search: CurrencySearchVo): Promise<any[]>;
    getCurrencyAll(search: CurrencySearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getCurrencyAllView(): Promise<{
        fhok: any[];
    }>;
}
