import { TranslateSearchVo, TranslateVo } from '../myvo/TranslateVo';
export declare class TranslateController {
    private translateService;
    createTranslate(TranslateVo: TranslateVo): Promise<import("typeorm").InsertResult>;
    updateaTranslate(userToken: string, Id: string, TranslateVo: TranslateVo): Promise<import("typeorm").UpdateResult>;
    removeTranslate(Id: string): Promise<import("typeorm").UpdateResult>;
    getTranslateById(Id: string): Promise<any>;
    getTranslate(search: TranslateSearchVo): Promise<any[]>;
    getTranslateAll(search: TranslateSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTranslateAllView(): Promise<any[]>;
}
