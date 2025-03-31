import { LanguageSearchVo, LanguageVo } from '../myvo/LanguageVo';
export declare class LanguageRepo {
    create(accountTagVo: LanguageVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: LanguageVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getLanguagesById(id: string): Promise<any>;
    getLanguageAll(search: LanguageSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getLanguageAllView(): Promise<{
        fhok: any[];
    }>;
    getLanguage(search: LanguageSearchVo): Promise<any[]>;
}
