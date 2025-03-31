import { LanguageSearchVo, LanguageVo } from '../myvo/LanguageVo';
export declare class LanguageController {
    private languageService;
    createLanguage(LanguageVo: LanguageVo): Promise<import("typeorm").InsertResult>;
    updateaLanguage(userToken: string, Id: string, LanguageVo: LanguageVo): Promise<import("typeorm").UpdateResult>;
    removeLanguage(Id: string): Promise<import("typeorm").UpdateResult>;
    getLanguageById(Id: string): Promise<any>;
    getLanguage(search: LanguageSearchVo): Promise<any[]>;
    getLanguageAll(search: LanguageSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getLanguageAllView(): Promise<{
        fhok: any[];
    }>;
}
