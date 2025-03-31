import { ExchangeRateSearchVo, ExchangeRateVo } from '../myvo/ExchangeRateVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class ExchangeRateService {
    private exchangeRateRepo;
    findOneExchangeRate(Id: string): Promise<any>;
    createExchangeRate(exchangeRateVo: ExchangeRateVo): Promise<import("typeorm").InsertResult>;
    updateaExchangeRate(Id: string, user_id: string, exchangeRateVo: ExchangeRateVo): Promise<import("typeorm").UpdateResult>;
    removeExchangeRate(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getExchangeRateById(id: string): Promise<any>;
    getExchangeRate(search: ExchangeRateSearchVo): Promise<any[]>;
    getExchangeRateAll(search: ExchangeRateSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getExchangeRateAllView(): Promise<{
        fhok: any[];
    }>;
}
