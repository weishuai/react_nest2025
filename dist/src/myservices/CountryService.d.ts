import { CountrySearchVo, CountryVo } from '../myvo/CountryVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class CountryService {
    private countryRepo;
    findOnecountry(Id: string): Promise<any>;
    createCountry(countryVo: CountryVo): Promise<import("typeorm").InsertResult>;
    updateaCountry(Id: string, user_id: string, countryVo: CountryVo): Promise<import("typeorm").UpdateResult>;
    removeCountry(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getCountryById(id: string): Promise<any>;
    getCountry(search: CountrySearchVo): Promise<any[]>;
    getCountryAll(search: CountrySearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getCountryAllView(): Promise<{
        fhok: any[];
    }>;
}
