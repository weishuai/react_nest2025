import { CountrySearchVo, CountryVo } from '../myvo/CountryVo';
export declare class CountryRepo {
    create(accountTagVo: CountryVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: CountryVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getCountryById(id: string): Promise<any>;
    getCountryAll(search: CountrySearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getCountryAllView(): Promise<{
        fhok: any[];
    }>;
    getCountry(search: CountrySearchVo): Promise<any[]>;
}
