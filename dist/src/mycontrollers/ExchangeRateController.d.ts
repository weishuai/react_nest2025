import { ExchangeRateSearchVo, ExchangeRateVo } from '../myvo/ExchangeRateVo';
export declare class ExchangeRateController {
    private exchangeRateService;
    createExchangeRate(ExchangeRateVo: ExchangeRateVo): Promise<import("typeorm").InsertResult>;
    updateaExchangeRate(userToken: string, Id: string, ExchangeRateVo: ExchangeRateVo): Promise<import("typeorm").UpdateResult>;
    removeExchangeRate(Id: string): Promise<import("typeorm").UpdateResult>;
    getExchangeRateById(Id: string): Promise<any>;
    getExchangeRate(search: ExchangeRateSearchVo): Promise<any[]>;
    getExchangeRateAll(search: ExchangeRateSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getExchangeRateAllView(): Promise<{
        fhok: any[];
    }>;
}
