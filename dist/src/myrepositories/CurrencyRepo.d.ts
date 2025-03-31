import { CurrencySearchVo, CurrencyVo } from '../myvo/CurrencyVo';
export declare class CurrencyRepo {
    create(accountTagVo: CurrencyVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: CurrencyVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getcurrencysById(id: string): Promise<any>;
    getcurrencyAll(search: CurrencySearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getcurrencyAllView(): Promise<{
        fhok: any[];
    }>;
    getcurrency(search: CurrencySearchVo): Promise<any[]>;
}
