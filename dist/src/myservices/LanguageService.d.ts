import { LanguageSearchVo, LanguageVo } from '../myvo/LanguageVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class LanguageService {
    private languageRepo;
    findOneLanguage(Id: string): Promise<any>;
    createLanguage(languageVo: LanguageVo): Promise<import("typeorm").InsertResult>;
    updateaLanguage(Id: string, user_id: string, languageVo: LanguageVo): Promise<import("typeorm").UpdateResult>;
    removeLanguage(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getLanguageById(id: string): Promise<any>;
    getLanguage(search: LanguageSearchVo): Promise<any[]>;
    getLanguageAll(search: LanguageSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getLanguageAllView(): Promise<{
        fhok: any[];
    }>;
}
