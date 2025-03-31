import { CountrySearchVo, CountryVo } from '../myvo/CountryVo';
export declare class CountryController {
    private countryService;
    createCountry(CountryVo: CountryVo): Promise<import("typeorm").InsertResult>;
    updateaCountry(userToken: string, Id: string, CountryVo: CountryVo): Promise<import("typeorm").UpdateResult>;
    removeCountry(Id: string): Promise<import("typeorm").UpdateResult>;
    getCountryById(Id: string): Promise<any>;
    getCountry(search: CountrySearchVo): Promise<any[]>;
    getCountryAll(search: CountrySearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getCountryAllView(): Promise<{
        fhok: any[];
    }>;
}
