import { CurrencySearchVo, CurrencyVo } from '../myvo/CurrencyVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class CurrencyService {
    private currencyRepo;
    findOneCurrency(Id: string): Promise<any>;
    createCurrency(currencyVo: CurrencyVo): Promise<import("typeorm").InsertResult>;
    updateaCurrency(Id: string, user_id: string, currencyVo: CurrencyVo): Promise<import("typeorm").UpdateResult>;
    removeCurrency(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getCurrencyById(id: string): Promise<any>;
    getCurrency(search: CurrencySearchVo): Promise<any[]>;
    getCurrencyAll(search: CurrencySearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getCurrencyAllView(): Promise<{
        fhok: any[];
    }>;
}
