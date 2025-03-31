import { ExchangeRateSearchVo, ExchangeRateVo } from '../myvo/ExchangeRateVo';
export declare class ExchangeRateRepo {
    create(accountTagVo: ExchangeRateVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: ExchangeRateVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getExchangeRatesById(id: string): Promise<any>;
    getExchangeRateAll(search: ExchangeRateSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getExchangeRateAllView(): Promise<{
        fhok: any[];
    }>;
    getExchangeRate(search: ExchangeRateSearchVo): Promise<any[]>;
}
