import { TranslateSearchVo, TranslateVo } from '../myvo/TranslateVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class TranslateService {
    private translateRepo;
    findOneTranslate(Id: string): Promise<any>;
    createTranslate(translateVo: TranslateVo): Promise<import("typeorm").InsertResult>;
    updateaTranslate(Id: string, user_id: string, translateVo: TranslateVo): Promise<import("typeorm").UpdateResult>;
    removeTranslate(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getTranslateById(id: string): Promise<any>;
    getTranslate(search: TranslateSearchVo): Promise<any[]>;
    getTranslateAll(search: TranslateSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTranslateAllView(): Promise<any[]>;
}
